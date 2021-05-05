import MapFontInfo from "../model/MapFontInfo";
import StartGame from "../prefeb/StartGame";
import SceneBase from "./SceneBase";
import FontGrid from "../prefeb/FontGrid";
import PlayerInfo from "../model/PlayerInfo";
import PlayerController from "../controller/PlayerController";
import GameResult from "../prefeb/GameResult";
import AppConfig from "../../AppConfig";
import TipController from "../controller/TipController";
import ControllerMgr from "../controller/ControllerMgr";
import SoundTool from "../tool/SoundTool";
import GameSetting from "../prefeb/GameSetting";
import NativeBridgeAndroid from "../tool/NativeBridgeAndroid";
import { Prefab } from "laya/components/Prefab";
import { List } from "laya/ui/List";
import { Image } from "laya/ui/Image";
import { Button } from "laya/ui/Button";
import { Sprite } from "laya/display/Sprite";
import { Point } from "laya/maths/Point";
import { Laya } from "Laya";
import { Handler } from "laya/utils/Handler";
import { Event } from "laya/events/Event";
import { Pool } from "laya/utils/Pool";
import { Tween } from "laya/utils/Tween";
import { Text } from "laya/display/Text";
import { Box } from "laya/ui/Box";
import { WxMiniUtil } from "../tool/WxMiniUtil";
import{ TTMiniUtils } from "../tool/TTMiniUtil";

enum GameState {
    End = 0,
    Pause = 1,
    Playing = 2,
    init = 3,
    EffectPause = 4 //释放特效导致的暂停
}

export default class MainGameScene extends SceneBase {
    /** @prop {name:prefab_startGame,tips:"开始游戏prefab",type:Prefab}*/
    prefab_startGame: Prefab;
    /** @prop {name:prefab_gameResult,tips:"游戏结果prefab",type:Prefab}*/
    prefab_gameResult: Prefab;
    /** @prop {name:prefab_gameSetting,tips:"游戏设置",type:Prefab}*/
    prefab_gameSetting: Prefab;
    /** @prop {name:prefab_fontGrid,tips:"格子prefab",type:Prefab}*/
    prefab_fontGrid: Prefab;
    private _fonts = [];
    private list_grids: List;
    private txt_nextFont: Text;
    private txt_score: Text;
    private txt_popularGroup: Text;
    private img_popularGroupBg: Image;
    private btn_point: Button;
    private btn_wanneng: Button;
    private mc_dispelText: Sprite;
    private txt_dispelText: Text;
    private txt_currentPinYin: Text;
    private btn_pauseOrStart: Button;
    private btn_setting: Button;
    private _gameState: number;
    private _dropingFontInfo: MapFontInfo;
    private _nextDropingFontInfo: MapFontInfo;
    private _sysDropingFontInfos: MapFontInfo[] = []; //消除产生的新字，自动下落
    private _sysDispelFontInfoStack: MapFontInfo[] = []; //消除产生的新字，在自动下落完毕后，存储，用于所有字下落完毕统一执行消除操作
    private _startPoint = new Point(2, 0);
    private _tickTime: number;
    private _maxTickTime = 75;
    private _sysTickTime = 0;
    private _maxSysTickTime = 16;
    private _popularGroup: string;
    private _words: MapFontInfo[] = []; //左边字符列表，欢迎字符列表
    private _splitFontWords: MapFontInfo[] = [];//分字字符列表
    private _splitGroupWords: MapFontInfo[] = [];//分词字符列表
    private _minWordsLength = 5;
    private _isMouseDown: boolean = false;
    private _isQuickDrop: boolean = false;
    private _myPlayerInfo: PlayerInfo;
    private _score: number = 0; //当前局分数
    private _debugMode = false; //调试
    private _debugFonts = [
        null, null, null, null, null,
        null, null, null, null, null,
        null, null, null, null, null,
        null, null, null, null, null,
        null, null, null, null, null,
        null, null, null, null, null,
        null, null, null, null, null,
        "氵", null, "穴", "宀", null,
    ]
    private _debugDropFonts = ["工","工"];
    private _guideDropFonts = [];
    constructor() { super(); }

    onAwake(): void {
        super.onAwake();
        this.owner["height"] = Laya.stage.height;
        switch (AppConfig.platform)  {
            case "wx":
                break;
            default:
                // this.txt_score.y = 80;
                break;
        }
        if (!AppConfig.hadGuidanceHz())  {
            this._guideDropFonts = [ "讠", "成", "言", "亻","文", "日", "月"];
            AppConfig.setGuidanceHz(true);
        }
        this.list_grids.renderHandler = Handler.create(this, this.onGridRender, null, false);

        this._myPlayerInfo = ControllerMgr.getInstance(PlayerController).myPlayerInfo;

        this.btn_pauseOrStart.on(Event.CLICK,this,this.onPauseOrStartMouseEvent);
        this.btn_setting.on(Event.CLICK,this,this.onSettingMouseEvent);
        this.btn_point.on(Event.CLICK,this,this.onPointMouseEvent);
        this.btn_wanneng.on(Event.CLICK,this,this.onWannengMouseEvent);
        if (!AppConfig.hadGuidance()){
            this.btn_point.visible = false;  
        }
        if (AppConfig.platform=="tt"){
            Laya.timer.once(500, this, function (): void {
                TTMiniUtils.startGameRecorder();
            });
        }
        
        this.changeGameStatue(GameState.init);
        this.refresh();
    }

    private onWannengMouseEvent(e: Event): void  {
        this.changeGameStatue(GameState.Pause);
        let that = this;
        window['King_SDK_Manager'].showRewardedVideoAd(res=>{
            if(res){
                console.log('播放成功，下发游戏奖励');
                that.onWannengComple();
            }else{
                console.log('播放失败');
            }}
            );
    }

    private onWannengComple(): void {
            if (this._myPlayerInfo.wannengUseTimes > 0)  {
                let callBk = ()=>{
                    this.changeGameStatue(GameState.Playing);
                    this._nextDropingFontInfo = MapFontInfo.create({ text: "*" });
                    this._myPlayerInfo.wannengUseTimes --;
                    // this.randRate=-2;
                    this.refresh();
                }
                if(AppConfig.isNative)
                {
                    this.changeGameStatue(GameState.Pause);
                    NativeBridgeAndroid.showVedioAd(callBk);
                }
                else 
                {
                    callBk();
                }
                return;
            }
    }

    private onCPComple(): void {
        let callBk = ()=>{
            this.changeGameStatue(GameState.Playing);
            let rate = Math.random() * 100;
            if (rate>70){ 
                // this.randRate= -5;
                this._nextDropingFontInfo = MapFontInfo.create({ text: "*" });
            }else  {
                // this.randRate= -5;
                this._myPlayerInfo.guideRemainTimes = 1;
            }
            this.refresh();
        }
            if(AppConfig.isNative)
            {
                this.changeGameStatue(GameState.Pause);
                NativeBridgeAndroid.showVedioAd(callBk);
            }
            else 
            {
                callBk();
            }
            return;
    }

    private onPointMouseEvent(e: Event): void  {
        window['King_SDK_Manager'].showRewardedVideoAd(res => {
            if(res){
                console.log('播放成功，下发游戏奖励');
                this.onPointComple();
            }else{
                console.log('播放失败');
            }});
    }

    private onPointComple(): void {
        if(this._myPlayerInfo.guideRemainTimes > 0)
        {
            return;
        }
        if (this._myPlayerInfo.guideUseTimes > 0)  {
            let callBk = ()=>{
                this.changeGameStatue(GameState.Playing);
                this._myPlayerInfo.guideRemainTimes = 3;
                this._myPlayerInfo.guideUseTimes --;
                this.randRate=-2;
                this.refresh();
            }
            if(AppConfig.isNative)
            {
                this.changeGameStatue(GameState.Pause);
                NativeBridgeAndroid.showVedioAd(callBk);
            }
            else 
            {
                callBk();
            }
            return;
        }
    }

    private onSettingMouseEvent(e: Event): void {
            this.changeGameStatue(GameState.Pause);
            this.showGameSetting();
            window['King_SDK_Manager'].hideAllBanner();
            window['King_SDK_Manager'].showNativeInter();
    }

    private onPauseOrStartMouseEvent(e: Event): void {
            if (this._gameState == GameState.Pause)  {
                this.changeGameStatue(GameState.Playing);
            }
            else {
                //打印当前所有格子信息
                let str = "";
                for (let j: number = 0; j < this.list_grids.repeatY; j++)  {
                    for (let i = 0; i < this.list_grids.repeatX; i++)  {
                        if (this._fonts[i][j] == null)  {
                            str += "null,"
                        }
                        else {
                            str += "'" + this._fonts[i][j].text + "',";
                        }
                    }
                    str += "\n";
                }
                console.log(str);
                this.changeGameStatue(GameState.Pause);
            }
    }

    private showStartGame(): void {
        let startGameSpr = Pool.getItemByCreateFun("StartGame", this.prefab_startGame.create, this.prefab_startGame);
        let startGameScript = startGameSpr.getComponent(StartGame) as StartGame
        startGameScript.handler = Handler.create(this, this.changeGameStatue, [GameState.Playing], false);
        startGameScript.onShowRank = Handler.create(this, this.showRank, null, false);
        this.addPopUp("StartGame", startGameSpr, false, false, false);
    }

    private showGameResult(): void {
        let gameResultSpr = Pool.getItemByCreateFun("GameResult", this.prefab_gameResult.create, this.prefab_gameResult) as Sprite;
        let gameResultScript = gameResultSpr.getComponent(GameResult) as GameResult;
        let storageObj = {
            "wxgame": {
                "score": this._score,
                "update_time": Date.now()
            },
            "score": this._score
        }
        this._dataViewer.postMsg({
            cmd: "wx.setUserCloudStorage",
            data: storageObj
        });
        gameResultScript.comeBackTime = this._myPlayerInfo.comeBackTimes;
        gameResultScript.score = this._score;
        gameResultScript.showHomeHandler = Handler.create(this, this.changeGameStatue, [GameState.init], false);
        gameResultScript.restartHandler = Handler.create(this, this.restart, null, false);
        gameResultScript.showAdHandler = Handler.create(this,this.onShowAd,null,false);
        this.addPopUp("GameResult", gameResultSpr, false, false, false);
    }

    private showGameSetting(): void {
        let gameSettingSpr = Pool.getItemByCreateFun("GameSetting", this.prefab_gameSetting.create, this.prefab_gameSetting) as Sprite;
        let gameSettingScript = gameSettingSpr.getComponent(GameSetting) as GameSetting;
        gameSettingScript.onCloseHandler = Handler.create(this, this.changeGameStatue, [GameState.Playing], false);
        gameSettingScript.showHomeHandler = Handler.create(this, this.changeGameStatue, [GameState.init], false);
        gameSettingScript.restartHandler = Handler.create(this, this.restart, null, false);
        this.addPopUp("gameSetting", gameSettingSpr, false, false, false);
    }

    private onShowAd(){
        if(AppConfig.platform == "android")
        {
            NativeBridgeAndroid.showVedioAd(()=>{
               this.continueAfterAd();
            })
        }else if (AppConfig.platform == "tt"){
            this.continueAfterAd();
        }
        else 
        {
            this.continueAfterAd();
        }
    }

    private continueAfterAd()
    {
        this.hidePopUp();
        SoundTool.playXiaoChuEffect();
        this.playEffectInc();
        let time = 0;
        let score = 0;
        for (let j: number = this.list_grids.repeatY; j  > this.list_grids.repeatY - 6; j--)  {
            for (let i = 0; i < this.list_grids.repeatX; i++)  {
                let tempFontScript = this.getFontScript(i, j);
                if(tempFontScript)
                {
                    tempFontScript.playHeChengEffect();
                }
                let tempFont = this.getFontInfo(i, j);
                if (tempFont != null)  {
                    // console.log("point : ("+tempFont.x+","+tempFont.y+","+tempFont.text+")");
                    time ++;
                    this.dispelFont(tempFont);
                    if (tempFont.isStuntFont)  {
                        this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                    }
                }
            }
        }
        score += (time * 10);
        this._myPlayerInfo.comeBackTimes--;
        this._score += score;
        Laya.timer.once(1100, this, function (): void {
            this.setDispelText("*");
            this.renderGridList();
            this.updateScore();
            this.setStar(this._myPlayerInfo.getStarInfo(this._score).star_num);
        });
        Laya.timer.once(1400, this, function (): void {
            this.endEffectInc();
        });
    }

    private restart(): void {
        localStorage.setItem("StorageVersion", null);
        localStorage.setItem("CacheData_1", null);
        this._gameState = GameState.End;
        this.changeGameStatue(GameState.Playing);
    }

    /**
     * 
     * @param gameState 变更状态
     * @param nextState 下一个状态
     */
    private changeGameStatue(gameState: number, nextState: number = -1): void {
        switch (gameState)  {
            case GameState.End:
                localStorage.setItem("CacheData_1", null);
                this.showGameResult();
                if (AppConfig.isNative) {
                    NativeBridgeAndroid.showBannerAd(true);
                }
                break;
            case GameState.Playing:
                if (AppConfig.isNative)  {
                    NativeBridgeAndroid.showBannerAd(false);
                }
                WxMiniUtil.hideBanner();
                this.btn_pauseOrStart.skin = "map/btn_pause.png";
                this.hidePopUp();

                if (this._gameState != GameState.Pause && this._gameState != GameState.EffectPause)  {
                    let bool;
                    try {
                        bool = this.restoreAll();
                    }
                    catch{
                        localStorage.setItem("CacheData_1", null);
                        bool = false;
                    }
                    if (!bool)  {
                        this._score = 0;
                        for (let i: number = 0; i < this.list_grids.repeatX; i++)  {
                            for (let j: number = 0; j < this.list_grids.repeatY; j++)  {
                                if (this._fonts[i] == null)  {
                                    this._fonts[i] = [];
                                }
                                if (this._debugMode)  {
                                    let txt = this._debugFonts[i + j * 5];
                                    if (txt == null)  {
                                        this._fonts[i][j] = null;
                                    }
                                    else {
                                        let tempFontInfo = MapFontInfo.create({ text: txt });
                                        tempFontInfo.x = i;
                                        tempFontInfo.y = j;
                                        this._fonts[i][j] = tempFontInfo;
                                    }
                                }
                                else {
                                    this._fonts[i][j] = null;
                                }
                            }
                        }
                        this._words = [];
                        this._popularGroup = null;
                        this._sysDispelFontInfoStack = [];
                        this._sysDropingFontInfos = [];
                        this._splitFontWords = [];
                        this._splitGroupWords = [];
                        this._dropingFontInfo = null;
                        this._nextDropingFontInfo = null;
                        this.heCiSplitTimes = 0; //合成当前左边词组失败次数
                        this.heCizuRate = 10; //出现左边那个词组的概率
                        this.hanZiRate = 10; // 出现能跟五列最外边汉字合成汉字的概率
                        this.ciZuRate = 10; // 出现能跟五列最外边汉字合成词组的概率
                        this._myPlayerInfo.wannengUseTimes = 4;
                        this._myPlayerInfo.guideUseTimes = 4;
                        this._myPlayerInfo.comeBackTimes =1;
                        this.refresh();
                        this.renderGridList();
                    }
                }
                break;
            case GameState.Pause:
                this.btn_pauseOrStart.skin = "map/btn_start.png";
                break;
            case GameState.EffectPause:
                break;
            case GameState.init:
                this.showStartGame();
                if (AppConfig.isNative)  {
                    NativeBridgeAndroid.showBannerAd(true);
                }
                break;
        }
        this._gameState = gameState;
        if (nextState != -1)  {
            this.changeGameStatue(nextState);
        }
    }

    private onGridRender(cell: Box, index: number): void {
        let data = cell.dataSource as MapFontInfo;
        let fontGridScrip = cell.getComponent(FontGrid) as FontGrid;
        if (data == null)  {
            fontGridScrip.font = null;
            fontGridScrip.clearEffects();
        }
        else {
            fontGridScrip.font = data.text;
            fontGridScrip.addEffect(data.getStuntFontEffect());
            fontGridScrip.quality = data.quality;
        }
    }

    private onStarRender(cell: Image, index: number): void {
        let isShine = cell.dataSource; // 是否点亮
        if (isShine)  {
            cell.skin = "map/img_star.png";
        }
        else {
            cell.skin = "map/img_starBg.png";
        }
    }

    private _mouseDownPoint: Point;
    onMouseDown(): void {
        if (this._gameState == GameState.Playing)  {
            this._mouseDownPoint = new Point(Laya.stage.mouseX, Laya.stage.mouseY);
            this._isQuickDrop = false;
        }
    }

    onMouseUp(): void {
        if (this._gameState == GameState.Playing)  {
            if (this._mouseDownPoint == null)  {
                return;
            }
            let absX = Math.abs(Laya.stage.mouseX - this._mouseDownPoint.x);
            let absY = Laya.stage.mouseY - this._mouseDownPoint.y;
            if (absX > 10)  {
                if (absY > absX * 2.5)  {
                    //竖着移动
                    this._isQuickDrop = true;
                    SoundTool.playXiaHuaEffect();
                }
                else {
                    this.moveDropingFont(Laya.stage.mouseX < this._mouseDownPoint.x)
                    SoundTool.playYiDongEffect();
                }
            }
            else if (absY > 25)  {
                this._isQuickDrop = true;
                SoundTool.playXiaHuaEffect();
            }
            this._mouseDownPoint = null;
        }
    }

    onEnable(): void {
    }

    onDisable(): void {
        if (this._gameState == GameState.Playing)
            this.changeGameStatue(GameState.Pause);
    }
    private getGuideSpeedRate(): number {
        let sppedrate = 100;
        if (!AppConfig.hadGuidance()) {
            if (this._score < 1500) {
                sppedrate = 120
            }
        }
        return sppedrate;
    }
    onUpdate(): void {
        if (this._gameState == GameState.Playing)  {
            //判断当前字符是否不足
            let isEditList: boolean = false;
            this.updatePopularGroup();
            //消除产生的漂浮字移动及消除
            if (this._sysDropingFontInfos.length > 0)  {
                if (this._sysTickTime > 0)  {
                    this._sysTickTime--;
                }
                else {
                    this._sysTickTime = this._maxSysTickTime;
                    let sysDelArr = [];
                    if (this._sysDropingFontInfos.length == this._sysDispelFontInfoStack.length)  {
                        this._sysDropingFontInfos = [];
                        if (!this.invokeStuntFont())  {
                            this.dispelCiZu(this._sysDispelFontInfoStack);
                            this._sysDispelFontInfoStack.forEach(element => {
                                if (this.getFontInfo(element.x, element.y) != element)  {
                                    return;
                                }
                                this.dispel(element.x, element.y);
                            });
                            this.checkSysDropFonts();
                            this._sysDispelFontInfoStack = [];
                        }
                    }
                    else {
                        isEditList = true;
                        this._sysDropingFontInfos.forEach(element => {
                            if (this._sysDispelFontInfoStack.indexOf(element) != -1)  {
                                return;
                            }
                            if (this._fonts[element.x][element.y + 1] == null && element.y + 1 < this.list_grids.repeatY)  {
                                //继续下落
                                this.changeDropFontTo(element.x, element.y + 1, element);
                            }
                            else {
                                //无法下落，执行消除动作
                                this._sysDispelFontInfoStack.push(element);
                                isEditList = true;
                            }
                        })
                    }
                }
            }
            else {
                //方块状态检测
                if (this._score>1200 && this.btn_point.visible==false){
                    this.btn_point.visible=true;
                }
                if (this._tickTime > 0)  {
                    if (this._isQuickDrop && this._tickTime > 1) this._tickTime = 1;
                    this._tickTime--;
                }
                else  {
                    this._tickTime = (100 - this._myPlayerInfo.getStarInfo(this._score).speed_rate) * this._maxTickTime / 100 * this.getGuideSpeedRate() / 100;
                    if (this._score > 1000) {
                        AppConfig.setGuidance(true);
                    }
                    //判断是否有掉落中的字，没有的话，生成字
                    if (this._dropingFontInfo == null)  {
                        this._isQuickDrop = false;
                        if (this._fonts[this._startPoint.x][this._startPoint.y] != null)  {
                            //游戏结束
                            this.changeGameStatue(GameState.End);
                            return;
                        }
                        else {
                            if(this._nextDropingFontInfo !=null && this._nextDropingFontInfo.text == "*")
                            {
                                this._dropingFontInfo = MapFontInfo.create({ text: "*" });
                                this._dropingFontInfo.isStuntFont = false;
                                this._nextDropingFontInfo =null;
                            }
                            else 
                            {
                                this.randomNextFont();
                                this._dropingFontInfo = MapFontInfo.create({ id: this._nextDropingFontInfo.id });
                                this._dropingFontInfo.isStuntFont = this._nextDropingFontInfo.isStuntFont;
                            }
                            this.guideToGrid();
                            this.setDispelText(this._dropingFontInfo.text);
                            this.updateNextDropingFont();
                            this._dropingFontInfo.x = this._startPoint.x;
                            this._dropingFontInfo.y = this._startPoint.y;
                            this._fonts[this._dropingFontInfo.x][this._dropingFontInfo.y] = this._dropingFontInfo;
                            isEditList = true;
                            this.cacheAll();
                        }
                    }
                    else {
                        if (this._isQuickDrop) this._tickTime = 1;
                        if (this._dropingFontInfo != null)  {
                            if (this._fonts[this._dropingFontInfo.x][this._dropingFontInfo.y + 1] == null && this._dropingFontInfo.y + 1 < this.list_grids.repeatY)  {
                                //继续下落
                                this.changeDropFontTo(this._dropingFontInfo.x, this._dropingFontInfo.y + 1, this._dropingFontInfo);
                            }
                            else {
                                //无法下落，执行消除动作
                                this._mouseDownPoint = null;
                                this.destroyGuideImgs();
                                let isDispel = false;
                                let cout;
                                cout = this.dispelCiZu([this._dropingFontInfo]);
                                if (cout == true)  {
                                    isDispel = true;
                                }
                                cout = this.dispel(this._dropingFontInfo.x, this._dropingFontInfo.y);
                                if (cout == true)  {
                                    isDispel = true;
                                }
                                this._dropingFontInfo = null;
                            }
                            isEditList = true;
                        }
                    }
                }
            }
            if (isEditList)  {
                this.renderGridList();
            }
        }
    }

    /**
     * 获取所有非空顶字符
     */
    private getAllFonts(): MapFontInfo[] {
        let cout = []
        for (let i = 0; i < this._fonts.length; i++)  {
            for (let j = this._fonts[0].length - 1; j >= 0; j--)  {
                if (this._fonts[i][j] != null)  {
                    cout.push(this._fonts[i][j]);
                }
            }
        }
        return cout;
    }

    private _cacheProperties = ["heCiSplitTimes", "heCizuRate", "ciZuRate", "_score", "_popularGroup", "_guideRate", "buShouRate"];
    private cacheAll(): void {
        let obj: any = {};
        this._cacheProperties.forEach(element => {
            obj[element] = this[element];
        })
        obj.guideRemainTimes = this._myPlayerInfo.guideRemainTimes;
        obj.guideUseTimes = this._myPlayerInfo.guideUseTimes;
        obj.wannengUseTimes = this._myPlayerInfo.wannengUseTimes;
        obj.comeBackTimes = this._myPlayerInfo.comeBackTimes;

        obj._wordTexts = [];
        this._words.forEach(element => {
            obj._wordTexts.push({ text: element.text, isStuntFont: element.isStuntFont });
        });
        obj._splitFontWordTexts = [];
        this._splitFontWords.forEach(element => {
            obj._splitFontWordTexts.push({ text: element.text, isStuntFont: element.isStuntFont });
        });
        obj._splitGroupWordTexts = [];
        this._splitGroupWords.forEach(element => {
            obj._splitGroupWordTexts.push({ text: element.text, isStuntFont: element.isStuntFont });
        });
        if (this._dropingFontInfo != null)
            obj._dropingFontInfoText = { text: this._dropingFontInfo.text, isStuntFont: this._dropingFontInfo.isStuntFont };
        if (this._nextDropingFontInfo != null)
            obj._nextDropingFontInfoText = { text: this._nextDropingFontInfo.text, isStuntFont: this._nextDropingFontInfo.isStuntFont };
        obj._sysDispelFontInfoStackPoses = [];
        this._sysDispelFontInfoStack.forEach(element => {
            obj._sysDispelFontInfoStackPoses.push(new Point(element.x, element.y));
        });
        obj._sysDropingFontInfosPoses = [];
        this._sysDropingFontInfos.forEach(element => {
            obj._sysDropingFontInfosPoses.push(new Point(element.x, element.y));
        });
        obj._fontTexts = [];
        for (let i: number = 0; i < this._fonts.length; i++)  {
            obj._fontTexts[i] = []
            for (let j: number = 0; j < this._fonts[i].length; j++)  {
                if (this._fonts[i][j] == null)  {
                    obj._fontTexts[i][j] = null;
                }
                else {
                    obj._fontTexts[i][j] = { text: this._fonts[i][j].text, isStuntFont: this._fonts[i][j].isStuntFont };
                }
            }
        }
        localStorage.setItem("StorageVersion", AppConfig.version);
        localStorage.setItem("CacheData_1", JSON.stringify(obj));
    }

    private restoreAll(): boolean {
        if (this._debugMode)  {
            return false;
        }
        let storageVersion = localStorage.getItem("StorageVersion");
        if (storageVersion == AppConfig.version)  {
            let dataStr = localStorage.getItem("CacheData_1");
            if (dataStr == null)  {
                return false;
            }
            try {
                let restoreObj = JSON.parse(dataStr);
                let tempFontInfo: MapFontInfo;
                this._fonts = [];
                for (let i: number = 0; i < this.list_grids.repeatX; i++)  {
                    this._fonts[i] = []
                    for (let j: number = 0; j < this.list_grids.repeatY; j++)  {
                        if (restoreObj._fontTexts[i] == null || restoreObj._fontTexts[i][j] == null)  {
                            this._fonts[i][j] = null;
                        }
                        else {
                            tempFontInfo = this._fonts[i][j] = MapFontInfo.create({ text: restoreObj._fontTexts[i][j].text });
                            tempFontInfo.isStuntFont = restoreObj._fontTexts[i][j].isStuntFont;
                            tempFontInfo.x = i;
                            tempFontInfo.y = j;
                        }
                    }
                }
                this._cacheProperties.forEach(element => {
                    this[element] = restoreObj[element];
                })
                this._words = []
                restoreObj._wordTexts.forEach(element => {
                    tempFontInfo = MapFontInfo.create({ text: element.text });
                    if (tempFontInfo.text == null) return;
                    tempFontInfo.isStuntFont = element.isStuntFont;
                    this._words.push(tempFontInfo);
                });
                this._splitFontWords = [];
                restoreObj._splitFontWordTexts.forEach(element => {
                    tempFontInfo = MapFontInfo.create({ text: element.text });
                    if (tempFontInfo.text == null) return;
                    tempFontInfo.isStuntFont = element.isStuntFont;
                    this._splitFontWords.push(tempFontInfo);
                });
                this._myPlayerInfo.wannengUseTimes = restoreObj.wannengUseTimes;
                this._myPlayerInfo.guideRemainTimes = restoreObj.guideRemainTimes;
                this._myPlayerInfo.guideUseTimes = restoreObj.guideUseTimes;
                this._myPlayerInfo.comeBackTimes = restoreObj.comeBackTimes;
                this._splitGroupWords = [];
                restoreObj._splitGroupWordTexts.forEach(element => {
                    tempFontInfo = MapFontInfo.create({ text: element.text });
                    if (tempFontInfo.text == null) return;
                    tempFontInfo.isStuntFont = element.isStuntFont;
                    this._splitGroupWords.push(tempFontInfo);
                });
                if (restoreObj._dropingFontInfoText != null)  {
                    this._dropingFontInfo = MapFontInfo.create({ text: restoreObj._dropingFontInfoText.text });
                    if (this._dropingFontInfo.text == null)  {
                        return false;
                    }
                    this._dropingFontInfo.isStuntFont = restoreObj._dropingFontInfoText.isStuntFont;
                    this.setDispelText(this._dropingFontInfo.text);
                    this._dropingFontInfo.x = this._startPoint.x;
                    this._dropingFontInfo.y = this._startPoint.y;
                }
                else {
                    this.randomNextFont();
                    this._dropingFontInfo = this._nextDropingFontInfo;
                    this._nextDropingFontInfo = null;
                }
                if (restoreObj._nextDropingFontInfoText != null)
                    this._nextDropingFontInfo = MapFontInfo.create({ text: restoreObj._nextDropingFontInfoText.text });
                if (this._nextDropingFontInfo == null || this._nextDropingFontInfo.text == null)  {
                    this.randomNextFont();
                }
                else {
                    this._nextDropingFontInfo.isStuntFont = restoreObj._nextDropingFontInfoText.isStuntFont;
                }
                this._sysDispelFontInfoStack = [];
                restoreObj._sysDispelFontInfoStackPoses.forEach(element => {
                    tempFontInfo = this.getFontInfo(element.x, element.y);
                    if (tempFontInfo != null)  {
                        this._sysDispelFontInfoStack.push(tempFontInfo);
                    }
                });
                this._sysDropingFontInfos = [];
                restoreObj._sysDropingFontInfosPoses.forEach(element => {
                    tempFontInfo = this.getFontInfo(element.x, element.y);
                    if (tempFontInfo != null)  {
                        this._sysDropingFontInfos.push(tempFontInfo);
                    }
                });
                this._tickTime = (100 - this._myPlayerInfo.getStarInfo(this._score).speed_rate) * this._maxTickTime / 100;
                this.renderGridList();
                this.refresh();
                return true;
            } catch (error) {
                localStorage.setItem("CacheData_1", null);
                return false;
            }
        }
        return false;
    }

    private moveDropingFont(left: boolean): void {
        if (this._dropingFontInfo == null)  {
            return;
        }
        let minTickTime = 0.3 * (100 - this._myPlayerInfo.getStarInfo(this._score).speed_rate) * this._maxTickTime / 100
        if (left)  {
            if (this._dropingFontInfo.x > 0 && this._fonts[this._dropingFontInfo.x - 1][this._dropingFontInfo.y] == null)  {
                this.changeDropFontTo(this._dropingFontInfo.x - 1, this._dropingFontInfo.y);
                this._tickTime = this._tickTime > minTickTime ? this._tickTime : minTickTime;
            }
        }
        else {
            if (this._dropingFontInfo.x < this.list_grids.repeatX - 1 && this._fonts[this._dropingFontInfo.x + 1][this._dropingFontInfo.y] == null)  {
                this.changeDropFontTo(this._dropingFontInfo.x + 1, this._dropingFontInfo.y);
                this._tickTime = this._tickTime > minTickTime ? this._tickTime : minTickTime;
            }
        }
        this.renderGridList();
    }

    //检查消除产生的漂浮字加入列表
    private checkSysDropFonts(): void {
        for (let i: number = 0; i < this.list_grids.repeatX; i++)  {
            let isAdd = false;
            for (let j: number = this.list_grids.repeatY - 1; j >= 0; j--)  {
                if (this._fonts[i][j] != null && (isAdd || (j + 1 < this.list_grids.repeatY && this._fonts[i][j + 1] == null)))  {
                    isAdd = true;
                    if (this._sysDropingFontInfos.indexOf(this._fonts[i][j]) == -1)
                        this._sysDropingFontInfos.push(this._fonts[i][j]);
                }
            }
        }
    }

    //移动正在操作的字
    private changeDropFontTo(x: number, y: number, fontInfo: MapFontInfo = null): void {
        if (y < 0 || x < 0)  {
            return;
        }
        if (x >= this.list_grids.repeatX || y >= this.list_grids.repeatY)  {
            return;
        }

        if (fontInfo == null)  {
            fontInfo = this._dropingFontInfo;
        }
        this._fonts[fontInfo.x][fontInfo.y] = null;
        fontInfo.x = x;
        fontInfo.y = y;
        this._fonts[fontInfo.x][fontInfo.y] = fontInfo;
    }

    //更新文字列表
    private renderGridList(): void {
        let arr = [];
        for (let j: number = 0; j < this.list_grids.repeatY; j++)  {
            for (let i: number = 0; i < this.list_grids.repeatX; i++)  {
                arr.push(this._fonts[i][j]);
            }
        }
        this.list_grids.dataSource = arr;
    }

    private _stuntFontsCheckArr1: any[] = []; //合成消除确认队列
    private _stuntFontsCheckArr2: any[] = []; //组词消除确认队列
    /**
     * 消除汉子
     * @param x x坐标或者mapfontinfo
     * @param y y坐标
     * @param stuntCheck 是否执行技能 默认true
     * @param isHeChengHanZi  是否是合成汉子时候的消除 默认true
     */
    private dispelFont(x: number | MapFontInfo, y: number = 0): void {
        let dispelFontInfo: MapFontInfo;
        let indX: number;
        let indY: number;
        if (x instanceof MapFontInfo)  {
            dispelFontInfo = x;
            this._fonts[x.x][x.y] = null;
            indX = x.x;
            indY = x.y;
        }
        else {
            dispelFontInfo = this.getFontInfo(x, y);
            if (dispelFontInfo != null)
                this._fonts[x][y] = null;
            indX = x;
            indY = y;
        }
        if (dispelFontInfo != null)  {
            let sysInd = this._sysDropingFontInfos.indexOf(dispelFontInfo)
            if (sysInd != -1)  {
                this._sysDropingFontInfos.splice(sysInd, 1);
            }
            sysInd = this._sysDispelFontInfoStack.indexOf(dispelFontInfo)
            if (sysInd != -1)  {
                this._sysDispelFontInfoStack.splice(sysInd, 1);
            }
            dispelFontInfo.destroyStuntEffect();
        }

    }

    /**
     * 触发技能汉子效果
     */
    private invokeStuntFont(): boolean {
        let points1 = [];
        let points2 = [];
        let score: number = 0;
        let tempFontInfo: MapFontInfo;
        let effectObj = {};
        let pushArrFun = function (x: number, y: number, arr: Point[]): void {
            if (effectObj[x + "_" + y] == null)  {
                arr.push(new Point(x, y));
                effectObj[x + "_" + y] = true;
            }
        }
        this._stuntFontsCheckArr1.forEach(element => {
            //消除技能格子四周
            if (element.fontInfo != this.getFontInfo(element.fontInfo.x, element.fontInfo.y))  {
                //技能汉字已经被消除不触发技能
                return;
            }
            pushArrFun(element.fontInfo.x - 1, element.fontInfo.y, points1);
            pushArrFun(element.fontInfo.x + 1, element.fontInfo.y, points1);
            pushArrFun(element.fontInfo.x, element.fontInfo.y - 1, points1);
            pushArrFun(element.fontInfo.x, element.fontInfo.y + 1, points1);

            //消除包含当前字的所有汉子格子

            for (let i: number = 0; i < this._fonts.length; i++)  {
                for (let j = 0; j < this._fonts[i].length; j++)  {
                    tempFontInfo = this._fonts[i][j] as MapFontInfo;
                    if (tempFontInfo != null)  {
                        if (tempFontInfo.getStructInfos(element.id, false).length > 0)  {
                            score += 10;
                            pushArrFun(tempFontInfo.x, tempFontInfo.y, points2);
                        }
                    }
                }
            }
        });
        this._stuntFontsCheckArr2.forEach(element => {
            //消除包含当前字的所有汉子格子
            for (let i: number = 0; i < this._fonts.length; i++)  {
                for (let j = 0; j < this._fonts[i].length; j++)  {
                    tempFontInfo = this._fonts[i][j] as MapFontInfo;
                    if (tempFontInfo != null)  {
                        if (tempFontInfo.getStructInfos(element.id, false).length > 0)  {
                            score += 10;
                            pushArrFun(tempFontInfo.x, tempFontInfo.y, points2);
                        }
                    }
                }
            }
        });
        let timeToUpdate: number;
        if (points1.length > 0)  {
            this.playEffectInc();
            timeToUpdate = 700;
            points1.forEach(element2 => {
                tempFontInfo = this.getFontInfo(element2.x, element2.y);
                if (tempFontInfo != null)  {
                    score += 10;
                    this.dispelFont(tempFontInfo);
                }
                let tempFontScript = this.getFontScript(element2.x, element2.y);
                if (tempFontScript != null)
                    tempFontScript.playHeChengEffect();
            });


            Laya.timer.once(500, this, function (): void {
                points1.forEach(element3 => {
                    let tempFontScript = this.getFontScript(element3.x, element3.y);
                    if (tempFontScript != null)  {
                        tempFontScript.font = null;
                        tempFontScript.clearEffects();
                        tempFontScript.onUpdate();
                    }
                })
            });

            Laya.timer.once(700, this, function (): void {
                this.renderGridList();
                this.updateScore();
                this.setStar(this._myPlayerInfo.getStarInfo(this._score).star_num);
            });
            Laya.timer.once(850, this, function (): void {
                this.endEffectInc();
            });
        }
        if (points2.length > 0)  {
            this.playEffectInc();
            timeToUpdate = 1000;
            Laya.timer.once(300, this, function (): void {
                points2.forEach(element2 => {
                    tempFontInfo = this.getFontInfo(element2.x, element2.y);
                    if (tempFontInfo != null)  {
                        this.dispelFont(tempFontInfo);
                    }
                    let tempFontScript = this.getFontScript(element2.x, element2.y);
                    if (tempFontScript != null)
                        tempFontScript.playHeChengEffect();
                });
            });
            Laya.timer.once(800, this, function (): void {
                points2.forEach(element3 => {
                    let tempFontScript = this.getFontScript(element3.x, element3.y);
                    if (tempFontScript != null)  {
                        tempFontScript.font = null;
                        tempFontScript.clearEffects();
                        tempFontScript.onUpdate();
                    }
                })
            });
            Laya.timer.once(1150, this, function (): void {
                this.endEffectInc();
            });

        }
        this._score += score;
        if (timeToUpdate > 0)  {
            Laya.timer.once(timeToUpdate, this, function (): void {
                this.renderGridList();
                this.updateScore();
                this.setStar(this._myPlayerInfo.getStarInfo(this._score).star_num);
            });

        }
        this._stuntFontsCheckArr1 = [];
        this._stuntFontsCheckArr2 = [];
        return points1.length > 0 || points2.length > 0
    }

    /**
     * 消除词组
     * @param changeFontInfos 有变更的汉子列表
     */
    private dispelCiZu(changeFontInfos: MapFontInfo[]): boolean {
        let checkFontTxts = [];//当前所有汉子列表
        for (let j: number = 0; j < this.list_grids.repeatY; j++)  {
            for (let i: number = 0; i < this.list_grids.repeatX; i++)  {
                let tempFontInfo = this.getFontInfo(i, j);
                if (tempFontInfo != null)  {
                    let txt = tempFontInfo.text;
                    if (checkFontTxts.indexOf(txt) == -1)  {
                        checkFontTxts.push(txt);
                    }
                }
            }
        }
        let checkArr = [];//查找所有屏幕上所有字的词典，找出可能的组合列表
        checkFontTxts.forEach(element1 => {
            let tempArr = MapFontInfo.getGroup(element1);
            tempArr.forEach(element2 => {
                if (checkArr.indexOf(element2) != -1)  {
                    return;
                }
                let chars = element2.split("");
                let isFix: boolean = true;
                for (let i: number = 0; i < chars.length; i++)  {
                    if (checkFontTxts.indexOf(chars[i]) == -1)  {
                        isFix = false;
                        break;
                    }
                }
                if (isFix)  {
                    if (element2 == this._popularGroup)  {
                        checkArr.unshift(element2);
                    }
                    else {
                        checkArr.push(element2);
                    }
                }
            });
        });

        //遍历变更列表，寻找可消除的词组并执行消除
        let isDispel: boolean = false;
        changeFontInfos.forEach(element => {
            if (this.getFontInfo(element.x, element.y) != element)  {
                return;
            }
            let cout = this.dispelCiZuItem(element.x, element.y, checkArr);
            if (cout == true)  {
                isDispel = true;
            }
        })
        return isDispel;
    }

    private _checkChars: string[];
    private dispelCiZuItem(x: number, y: number, checkArr: string[]): boolean {
        let root = this.getFontInfo(x, y);
        if (root == null)  {
            return;
        }
        for (let i: number = 0; i < checkArr.length; i++)  {
            let group = checkArr[i];
            if (group.indexOf(root.text) == -1)  {
                continue;
            }
            this._checkChars = group.split("");
            let aStarInfo = this.dispelCiZuItemSure(x, y, null);
            if (aStarInfo != null)  {
                //消除词组
                SoundTool.playXiaoChuEffect();
                this.playEffectInc();
                if (group == this._popularGroup)  {
                    this._popularGroup = null;
                }
                // console.log("消除词组：=============================")
                // console.log("词组：" + group)
                let score = 40;
                let points = aStarInfo.getSureList();
                let time = 0;
                let ciZuObj = {};
                points.forEach(element => {
                    ciZuObj[element.x + "_" + element.y] = true;
                    let tempFontScript = this.getFontScript(element.x, element.y);
                    tempFontScript.playHeChengEffect();
                    let tempFont = this.getFontInfo(element.x, element.y);
                    if (tempFont != null)  {
                        // console.log("point : ("+tempFont.x+","+tempFont.y+","+tempFont.text+")");
                        this.dispelFont(tempFont);
                        if (tempFont.isStuntFont)  {
                            this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                        }
                        time++;
                    }
                });
                points.forEach(element => {
                    let tempFont = this.getFontInfo(element.x - 1, element.y);
                    if (tempFont != null)  {
                        this.dispelFont(tempFont);
                        if (tempFont.isStuntFont)  {
                            this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                        }
                        time++;
                    }
                    tempFont = this.getFontInfo(element.x + 1, element.y);
                    if (tempFont != null)  {
                        this.dispelFont(tempFont);
                        if (tempFont.isStuntFont)  {
                            this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                        }
                        time++;
                    }
                    tempFont = this.getFontInfo(element.x, element.y - 1);
                    if (tempFont != null)  {
                        this.dispelFont(tempFont);
                        if (tempFont.isStuntFont)  {
                            this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                        }
                        time++;
                    }
                    tempFont = this.getFontInfo(element.x, element.y + 1);
                    if (tempFont != null)  {
                        this.dispelFont(tempFont);
                        if (tempFont.isStuntFont)  {
                            this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                        }
                        time++;
                    }
                });
                score += (time * 10);
                this._score += score;
                Laya.timer.once(500, this, function (): void {
                    points.forEach(element => {
                        let tempFontScript = this.getFontScript(element.x, element.y);
                        tempFontScript.font = null;
                        tempFontScript.clearEffects();
                        tempFontScript.onUpdate();
                    })
                });
                Laya.timer.once(300, this, function (): void {
                    points.forEach(element => {
                        let tempFontScript;
                        let tempX = element.x - 1;
                        let tempY = element.y;
                        if (ciZuObj[tempX + "_" + tempY] != true)  {
                            tempFontScript = this.getFontScript(tempX, tempY);
                            if (tempFontScript != null)  {
                                tempFontScript.playHeChengEffect();
                            }
                        }
                        tempX = element.x + 1;
                        tempY = element.y;
                        if (ciZuObj[tempX + "_" + tempY] != true)  {
                            tempFontScript = this.getFontScript(tempX, tempY);
                            if (tempFontScript != null)  {
                                tempFontScript.playHeChengEffect();
                            }
                        }
                        tempX = element.x;
                        tempY = element.y - 1;
                        if (ciZuObj[tempX + "_" + tempY] != true)  {
                            tempFontScript = this.getFontScript(tempX, tempY);
                            if (tempFontScript != null)  {
                                tempFontScript.playHeChengEffect();
                            }
                        }
                        tempX = element.x;
                        tempY = element.y + 1;
                        if (ciZuObj[tempX + "_" + tempY] != true)  {
                            tempFontScript = this.getFontScript(tempX, tempY);
                            if (tempFontScript != null)  {
                                tempFontScript.playHeChengEffect();
                            }
                        }

                    })
                });
                Laya.timer.once(1200, this, function (): void {
                    this.setDispelText(group);
                    this.renderGridList();
                    this.updateScore();
                    this.setStar(this._myPlayerInfo.getStarInfo(this._score).star_num);
                });
                Laya.timer.once(2400, this, function (): void {
                    this.endEffectInc();
                });


                return true;
            }
        }
        return false;
    }

    private dispelCiZuItemSure(x: number, y: number, parentAStarInfo: SearchInfo): SearchInfo {

        let currentFontInfo = this.getFontInfo(x, y);
        if (currentFontInfo == null)  {
            return null;
        }
        let chars = parentAStarInfo == null ? this._checkChars.concat() : parentAStarInfo.chars.concat();
        if (chars.indexOf(currentFontInfo.text) == -1)  {
            return null;
        }
        let aStarInfo = new SearchInfo();
        aStarInfo.currentPoint.x = x;
        aStarInfo.currentPoint.y = y;
        aStarInfo.setOpenList(parentAStarInfo == null ? [] : parentAStarInfo.getOpenList().concat())
        aStarInfo.setSureList(parentAStarInfo == null ? [] : parentAStarInfo.getSureList().concat());
        aStarInfo.open(x, y, false);
        aStarInfo.sure(x, y);
        aStarInfo.chars = chars;
        aStarInfo.chars.splice(aStarInfo.chars.indexOf(currentFontInfo.text), 1);
        if (aStarInfo.chars.length == 0)  {
            return aStarInfo;
        }
        if (!aStarInfo.isOpen(x - 1, y) && !aStarInfo.isSure(x - 1, y))  {
            aStarInfo.open(x - 1, y);
        }
        if (!aStarInfo.isOpen(x + 1, y) && !aStarInfo.isSure(x + 1, y))  {
            aStarInfo.open(x + 1, y);
        }
        if (!aStarInfo.isOpen(x, y - 1) && !aStarInfo.isSure(x, y - 1))  {
            aStarInfo.open(x, y - 1);
        }
        if (!aStarInfo.isOpen(x, y + 1) && !aStarInfo.isSure(x, y + 1))  {
            aStarInfo.open(x, y + 1);
        }
        let openList = aStarInfo.getOpenList();
        for (let i: number = 0; i < openList.length; i++)  {
            let element = openList[i];
            let cout = this.dispelCiZuItemSure(element.x, element.y, aStarInfo);
            if (cout != null)  {
                return cout;
            }
        }
        return null;
    }

    private dispelStar(x,y)
    {
        //消除*
        SoundTool.playXiaoChuEffect();
        this.playEffectInc();

        let score = 40;
        let points = [{x,y}];
        let time = 0;
        let cout = points.concat();
        points.forEach(element => {
            let tempFont = this.getFontInfo(element.x - 1, element.y);
            let tempFontGrid = this.getFontScript(element.x -1, element.y);
            if (tempFont != null)  {
                this.dispelFont(tempFont);
                if(tempFontGrid)
                {
                    tempFontGrid.playHeChengEffect();
                }
                if (tempFont.isStuntFont)  {
                    this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                }
                time++;
            }
            tempFont = this.getFontInfo(element.x + 1, element.y);
            tempFontGrid = this.getFontScript(element.x +1, element.y);
            if (tempFont != null)  {
                this.dispelFont(tempFont);
                if(tempFontGrid)
                {
                    tempFontGrid.playHeChengEffect();
                }
                if (tempFont.isStuntFont)  {
                    this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                }
                time++;
            }
            tempFont = this.getFontInfo(element.x, element.y - 1);
            tempFontGrid = this.getFontScript(element.x, element.y - 1);
            if (tempFont != null)  {
                this.dispelFont(tempFont);
                if(tempFontGrid)
                {
                    tempFontGrid.playHeChengEffect();
                }
                if (tempFont.isStuntFont)  {
                    this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                }
                time++;
            }
            tempFont = this.getFontInfo(element.x, element.y + 1);
            tempFontGrid = this.getFontScript(element.x, element.y + 1);
            if (tempFont != null)  {
                this.dispelFont(tempFont);
                if(tempFontGrid)
                {
                    tempFontGrid.playHeChengEffect();
                }
                if (tempFont.isStuntFont)  {
                    this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                }
                time++;
            }

            tempFont = this.getFontInfo(element.x - 2, element.y);
            tempFontGrid = this.getFontScript(element.x - 2, element.y);
            if (tempFont != null)  {
                this.dispelFont(tempFont);
                if(tempFontGrid)
                {
                    tempFontGrid.playHeChengEffect();
                }
                if (tempFont.isStuntFont)  {
                    this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                }
                time++;
            }

            tempFont = this.getFontInfo(element.x + 2, element.y);
            tempFontGrid = this.getFontScript(element.x +2, element.y);
            if (tempFont != null)  {
                this.dispelFont(tempFont);
                if(tempFontGrid)
                {
                    tempFontGrid.playHeChengEffect();
                }
                if (tempFont.isStuntFont)  {
                    this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                }
                time++;
            }
            tempFont = this.getFontInfo(element.x, element.y - 2);
            tempFontGrid = this.getFontScript(element.x, element.y - 2);
            if (tempFont != null)  {
                this.dispelFont(tempFont);
                if(tempFontGrid)
                {
                    tempFontGrid.playHeChengEffect();
                }
                if (tempFont.isStuntFont)  {
                    this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                }
                time++;
            }
            tempFont = this.getFontInfo(element.x, element.y + 2);
            tempFontGrid = this.getFontScript(element.x, element.y + 2);
            if (tempFont != null)  {
                this.dispelFont(tempFont);
                if(tempFontGrid)
                {
                    tempFontGrid.playHeChengEffect();
                }
                if (tempFont.isStuntFont)  {
                    this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                }
                time++;
            }

        });
        score += (time * 10);
        this._score += score;
        Laya.timer.once(500, this, function (): void {
            points.forEach(element => {
                let tempFontScript = this.getFontScript(element.x, element.y);
                tempFontScript.font = null;
                tempFontScript.clearEffects();
                tempFontScript.onUpdate();
            })
        });
        Laya.timer.once(200, this, function (): void {
            points.forEach(element => {
                let tempFont = this.getFontInfo(element.x, element.y);
                let tempFontGrid = this.getFontScript(element.x, element.y);
                if(tempFont)
                    this.dispelFont(tempFont);
                if(tempFontGrid)
                {
                    tempFontGrid.playHeChengEffect();
                }

            })
        });
        Laya.timer.once(1100, this, function (): void {
            this.setDispelText("*");
            this.renderGridList();
            this.updateScore();
            this.setStar(this._myPlayerInfo.getStarInfo(this._score).star_num);
        });
        Laya.timer.once(1400, this, function (): void {
            this.endEffectInc();
        });
    }

    /**
     * 消字
     * @param x 
     * @param y 
     */
    private dispel(x: number, y: number): boolean {
        let targetFontInfo = this.getFontInfo(x, y);
        if (targetFontInfo == null) return false;
        if(targetFontInfo.text =="*")
        {
            this.dispelStar(x,y);
            return false;
        }
        let canHeChengFontInfos = targetFontInfo.canHeChengFontInfos;
        if (canHeChengFontInfos.length == 0) return false;
        let popularGroup = this._popularGroup;
        if (popularGroup != null)  {
            canHeChengFontInfos.sort(function (a: MapFontInfo, b: MapFontInfo): number {
                if (popularGroup.indexOf(a.text) != -1)  {
                    return -1;
                }
                else if (popularGroup.indexOf(b.text) != -1)  {
                    return 1;
                }
                else {
                    return 0;
                }
            })
        }

        //遍历变更列表，寻找可消除的词组并执行消除
        let hasHeCheng = false;
        for (let i: number = 0; i < canHeChengFontInfos.length; i++)  {
            if (hasHeCheng)  {
                break;
            }
            let tempFontInfo = canHeChengFontInfos[i];
            let structInfoList = tempFontInfo.structInfo.split(",");
            for (let j: number = 0; j < structInfoList.length; j++)  {
                let structList = structInfoList[j].split("_");
                if (structList.length > 1 && structList.indexOf(targetFontInfo.id.toString()) != -1)  {
                    let cout = this.dispelItem(targetFontInfo.x, targetFontInfo.y, structList, tempFontInfo.id);
                    if (cout)  {
                        hasHeCheng = true;
                        break;
                    }
                }
            }
        }
        return hasHeCheng
    }

    private _checkIds: string[] = [];
    private dispelItem(x: number, y: number, checkArr: string[], fontId: number): boolean {
        let root = this.getFontInfo(x, y);
        if (root == null)  {
            return;
        }
        this._checkIds = checkArr;
        let searchInfo = this.dispelItemSure(x, y, null);
        if (searchInfo != null)  {
            //消除并合成汉子
            SoundTool.playHeChengEffect();
            this.playEffectInc();
            let maxQuality = 0;
            let points = searchInfo.getSureList();
            points.forEach(element => {
                let tempFontGrid = this.getFontScript(element.x, element.y);
                let tempFontInfo = this.getFontInfo(element.x, element.y);
                if (maxQuality < tempFontInfo.quality)  {
                    maxQuality = tempFontInfo.quality;
                }
                if (tempFontGrid != null)  {
                    tempFontGrid.playHeChengEffect();
                    // console.log("消除格子: ("+element.x+","+element.y+")");
                }
            });
            let coutFontInfo = MapFontInfo.create({ id: fontId });
            this.setDispelText(coutFontInfo.text);
            coutFontInfo.x = x;
            coutFontInfo.y = y;
            coutFontInfo.quality = maxQuality + 1;
            let targetCell = this.getFontCell(x, y);
            let targetPoint = new Point(targetCell.x, targetCell.y);
            Laya.timer.once(1410, this, function (par_points): void {
                par_points.forEach(element => {
                    let tempFontInfo = this.getFontInfo(element.x, element.y);
                    if (tempFontInfo == null) return;
                    if (element.x != x || element.y != y)  {
                        let moveStartCell = this.getFontCell(element.x, element.y);
                        let moveStartFontGridScript = this.getFontScript(element.x, element.y);
                        moveStartFontGridScript.font = null;
                        moveStartFontGridScript.clearEffects();
                        let moveCell = Pool.getItemByCreateFun("FontGrid", this.prefab_fontGrid.create, this.prefab_fontGrid);
                        moveCell["x"] = moveStartCell["x"];
                        moveCell["y"] = moveStartCell["y"];
                        let moveFontGridScript = (moveCell.getComponent(FontGrid) as FontGrid);
                        moveFontGridScript.font = tempFontInfo.text;
                        moveFontGridScript.addEffect(tempFontInfo.getStuntFontEffect());
                        moveFontGridScript.onUpdate();
                        this.list_grids.addChild(moveCell);
                        Tween.to(moveCell, { x: targetPoint.x, y: targetPoint.y }, 100, null, Handler.create(this, function (targetMc): void {
                            targetMc.destroy(true);
                        }, [moveCell]));
                    }
                    this.dispelFont(tempFontInfo);
                    if (tempFontInfo && tempFontInfo.isStuntFont)  {
                        this._stuntFontsCheckArr1.push({ fontInfo: coutFontInfo, id: tempFontInfo.id });
                    }
                })
            }, [points]);
            let score = 30;
            let time = points.length;
            score += 10 * time;
            this._score += score;
            ControllerMgr.getInstance(TipController).showLeftBottomTip("+" + score);
            Laya.timer.once(1500, this, function (): void {
                this._fonts[x][y] = coutFontInfo;
                let targetFontScript = this.getFontScript(x, y);
                targetFontScript.font = coutFontInfo.text;
                targetFontScript.addEffect(coutFontInfo.getStuntFontEffect());
                this.updateScore();
                this.setStar(this._myPlayerInfo.getStarInfo(this._score).star_num);
            })
            Laya.timer.once(2000, this, function (): void {
                this.endEffectInc();
            })
            // console.log("合成汉子：=============================");
            // console.log("("+coutFontInfo.x+","+coutFontInfo.y+","+coutFontInfo.text+")");
            this._sysDropingFontInfos.push(coutFontInfo);
            // console.log("======================================")
            return true;
        }
        return false;
    }

    private dispelItemSure(x: number, y: number, parentAStarInfo: SearchInfo): SearchInfo  {
        let currentFontInfo = this.getFontInfo(x, y);
        if (currentFontInfo == null)  {
            return null;
        }
        let chars = parentAStarInfo == null ? this._checkIds.concat() : parentAStarInfo.chars.concat();
        if (chars.indexOf(currentFontInfo.id.toString()) == -1)  {
            return null;
        }
        let aStarInfo = new SearchInfo();
        aStarInfo.currentPoint.x = x;
        aStarInfo.currentPoint.y = y;
        aStarInfo.setOpenList(parentAStarInfo == null ? [] : parentAStarInfo.getOpenList().concat())
        aStarInfo.setSureList(parentAStarInfo == null ? [] : parentAStarInfo.getSureList().concat());
        aStarInfo.open(x, y, false);
        aStarInfo.sure(x, y);
        aStarInfo.chars = chars;
        aStarInfo.chars.splice(aStarInfo.chars.indexOf(currentFontInfo.id.toString()), 1);
        if (aStarInfo.chars.length == 0)  {
            return aStarInfo;
        }
        if (!aStarInfo.isOpen(x - 1, y) && !aStarInfo.isSure(x - 1, y))  {
            aStarInfo.open(x - 1, y);
        }
        if (!aStarInfo.isOpen(x + 1, y) && !aStarInfo.isSure(x + 1, y))  {
            aStarInfo.open(x + 1, y);
        }
        if (!aStarInfo.isOpen(x, y - 1) && !aStarInfo.isSure(x, y - 1))  {
            aStarInfo.open(x, y - 1);
        }
        if (!aStarInfo.isOpen(x, y + 1) && !aStarInfo.isSure(x, y + 1))  {
            aStarInfo.open(x, y + 1);
        }
        let openList = aStarInfo.getOpenList();
        for (let i: number = 0; i < openList.length; i++)  {
            let element = openList[i];
            let cout = this.dispelItemSure(element.x, element.y, aStarInfo);
            if (cout != null)  {
                return cout;
            }
        }
        return null;
    }

    private _guideImgs = {};
    private _guideRate: number = 0;
    private destroyGuideImgs(): void {
        for (let tempProperty in this._guideImgs)  {
            let tempImg = this._guideImgs[tempProperty];
            Laya.timer.clearAll(tempImg);
            Tween.clearAll(tempImg);
            tempImg.destroy(true);
        }
        this._guideImgs = {};
    }

    private setNextGuideRate(): void {
        if (!AppConfig.hadGuidance()) {
            if (this._score < 300) {
                this._guideRate = 100;
            } else if (this._score < 500) {
                this._guideRate = 40;
            } else if (this._score < 800) {
                this._guideRate = 15;
            }else {
                this._guideRate = Math.min(this._guideRate + 1, 8);
            }
            return
        }
        this._guideRate = Math.min(this._guideRate + 1, 8);
    }
    /**
       * 循环所有顶格，显示跟当前飘落的汉子有关联的格子，即可组成词语或者和合成汉子的格子
       */
    private guideToGrid(): void {
        for (let tempProperty in this._guideImgs)  {
            let tempImg = this._guideImgs[tempProperty];
            Laya.timer.clearAll(tempImg);
            Tween.clearAll(tempImg);
            tempImg.destroy(true);
        }
        if(this._dropingFontInfo.text =="*")return;
        this._guideImgs = {};
        let rate = Math.random() * 100;
        if(this._myPlayerInfo.guideRemainTimes > 0)
        {
            rate = 0;
        }
        if (rate > this._guideRate)  {
            this.setNextGuideRate();
            return;
        }
        let dropingFontCanHeChengFontInfos = this._dropingFontInfo.canHeChengFontInfos;
        let dropingFontCanHeChengGroups = this._dropingFontInfo.canHeChengGroups;
        let topFontInfos = this.getTopFontInfos();
        let points = [];
        topFontInfos.forEach(tempFontInfo => {
            if(tempFontInfo.id == null)
            {
                return;
            }
            dropingFontCanHeChengGroups.forEach(tempGroup => {
                if (tempGroup.length != 2)  {
                    return;
                }
                
                let groupArr = tempGroup.split("");
                groupArr.splice(groupArr.indexOf(this._dropingFontInfo.text), 1);
                if (groupArr.indexOf(tempFontInfo.text) != -1)  {
                    //可合成词组
                    points.push(new Point(tempFontInfo.x, tempFontInfo.y));
                    return;
                }
            });
            dropingFontCanHeChengFontInfos.forEach(tempMergeFontInfo => {
                let structInfos = tempMergeFontInfo.getStructInfos(tempFontInfo.id);
                for (let i = 0; i < structInfos.length; i++)  {
                    let tempStruckInfo = structInfos[i];
                    let tempStruckArr = tempStruckInfo.split("_");
                    if (tempStruckArr.length != 2)  {
                        continue;
                    }
                    tempStruckArr.splice(tempStruckArr.indexOf(tempFontInfo.id.toString()), 1);
                    if (tempStruckArr.indexOf(this._dropingFontInfo.id.toString()) != -1)  {
                        //可合成汉子
                        points.push(new Point(tempFontInfo.x, tempFontInfo.y));
                        return;
                    }
                }
            })
        });
        if (points.length > 0)  {
            this._guideRate = 1;
            this.setNextGuideRate()
            if(this._myPlayerInfo.guideRemainTimes > 0)
            {
                this._myPlayerInfo.guideRemainTimes --;
            }
            points.forEach(element => {
                if (this._guideImgs[element.x + "-" + element.y] != null)  {
                    return;
                }
                let tempGrid = this.getFontCell(element.x, element.y);
                let tempImg = new Image("map/tz_jiantou.png");
                tempImg.scaleX = tempImg.scaleY = 0.7;
                tempImg.rotation = 90;
                tempImg.x = 75;
                tempImg.y = -75;
                tempGrid.addChild(tempImg);
                this._guideImgs[element.x + "-" + element.y] = tempImg;
                Laya.timer.loop(1000, tempImg, function (par_img: Image): void {
                    let targetY = par_img.y == -75 ? -85 : -75;
                    Tween.to(par_img, { y: targetY }, 750);
                }, [tempImg])
            })
        }
    }

    private getFontInfo(x: number, y: number): MapFontInfo  {
        if (this._fonts[x] == null)  {
            return null;
        }
        return this._fonts[x][y];
    }

    private getFontCell(x: number, y: number): Box  {
        if (y < 0 || y >= this.list_grids.repeatY || x < 0 || x >= this.list_grids.repeatX)  {
            return null;
        }
        return this.list_grids.getCell(y * this.list_grids.repeatX + x)
    }

    private getFontScript(x: number, y: number): FontGrid  {
        let fontCell = this.getFontCell(x, y);
        if (fontCell == null) return null;
        return fontCell.getComponent(FontGrid) as FontGrid;
    }

    //信息更新
    public refresh(): void {
        this.setStar(this._myPlayerInfo.getStarInfo(this._score).star_num);
        this.updateNextDropingFont();
        this.updateScore();
        this.updatePopularGroup();
        if (this._myPlayerInfo.wannengUseTimes > 0)  {
            this.btn_wanneng.mouseEnabled = true;
            this.btn_wanneng.gray = false;
        }
        else {
            this.btn_wanneng.mouseEnabled = false;
            this.btn_wanneng.gray = true;
        }
        if (this._myPlayerInfo.guideUseTimes > 0)  {
            this.btn_point.mouseEnabled = true;
            this.btn_point.gray = false;
        }
        else {
            this.btn_point.mouseEnabled = false;
            this.btn_point.gray = true;
        }
    }

    private updateScore(): void {
        this.txt_score.text = this._score.toString();
    }

    private updatePopularGroup(): void {
        if (this._popularGroup == null)  {
            let bank = MapFontInfo.DataSource["bank"];
            this._popularGroup = bank[Math.floor(Math.random() * bank.length)];
            this.heCiSplitTimes = 0;
        }
        if (this._popularGroup != null)  {
            this.txt_popularGroup.text = this._popularGroup;
            this.img_popularGroupBg.height = this.txt_popularGroup.displayHeight + 16;
        }
    }

    private updateNextDropingFont(): void {
        if (this._nextDropingFontInfo == null)  {
            this.txt_nextFont.text = "";
        }
        else {
            this.txt_nextFont.text = this._nextDropingFontInfo.text;
        }
    }

    private setDispelText(text: string): void {
        Tween.clearAll(this.mc_dispelText);
        this.mc_dispelText.scaleX = this.mc_dispelText.scaleY = 0.4;
        this.txt_dispelText.text = text;
        switch (text.length)  {
            case 1:
                this.txt_dispelText.fontSize = 180;
                this.txt_dispelText.size(180, 180);
                break;
            case 2:
                this.txt_dispelText.fontSize = 90;
                this.txt_dispelText.size(180, 90);
                break;
            case 3:
                this.txt_dispelText.fontSize = 40;
                this.txt_dispelText.size(120, 40);
                break;
            case 4:
                this.txt_dispelText.fontSize = 30;
                this.txt_dispelText.size(120, 30);
                break;
        }
        Tween.to(this.mc_dispelText, { scaleX: 1, scaleY: 1 }, 300)
    }

    private setStar(star: number): void {
        let list = [];
        while (star > 0 || list.length < 5)  {

            if (star > 0)
                list.push(true)
            else
                list.push(false)
            star--;
        }
    }

    //新手前5000分降低难度
    private reduceNanDu(kunNan: number): number {
        if (!AppConfig.hadGuidance()) {
            if (this._score < 300) {
                kunNan = Math.floor(kunNan * 250 / 100)
            } else if (this._score < 500) {
                kunNan = Math.floor(kunNan * 160 / 100)
            } else if (this._score < 700) {
                kunNan = Math.floor(kunNan * 130 / 100)
            }
        }
        return kunNan
    }
    //生成字
    private heCiSplitTimes: number = 1; //合成当前左边词组失败次数
    private heCizuRate: number = 40; //出现左边那个词组的概率
    private hanZiRate: number = 60; // 出现能跟五列最外边汉字合成汉字的概率
    private ciZuRate: number = 60; // 出现能跟五列最外边汉字合成词组的概率
    private randRate: number = 0; // 出现能跟五列最外边汉字合成词组的概率
    private buShouRate: number = 0; //出现特殊部首的概率
    randomNextFont(): void {
        let fontGridNum =this.getFontGridNum()
        // if (this._score > 600){
        //     this.randRate=  Math.min(this.randRate+1,10)
        //     if (fontGridNum>20 && this.randRate> 0 && this.getRandomResult(this.randRate)){
        //         this.changeGameStatue(GameState.Pause);
        //         Laya.timer.once(2500, this, function (): void {
        //             this.onCPComple();
        //         });
        //     }
        // }

        if (this._debugMode)  {
            let txt = this._debugDropFonts.shift();
            this._nextDropingFontInfo = MapFontInfo.create({ text: txt });
            if (this._nextDropingFontInfo.text != null)  {
                return;
            }
        }
        if (Math.random() * 100 > this.buShouRate)  {
            this.buShouRate = Math.min(this.buShouRate + 0.3, 3);
        }
        else {
            if (this._score > 1500)  {
                this.buShouRate = 0;
                let txt = this.getRandomElement(MapFontInfo.DataSource["stunt_font"]) as string;
                this._nextDropingFontInfo = MapFontInfo.create({ text: txt });
                if (this._nextDropingFontInfo.text != null)  {
                    this._nextDropingFontInfo.isStuntFont = true;
                    return;
                }
            }
        }
        if (this._myPlayerInfo.guideRemainTimes === undefined){
            this._myPlayerInfo.guideRemainTimes=0
        }
        if (this._guideDropFonts.length > 0)  {
            let txt = this._guideDropFonts.shift();
            this._nextDropingFontInfo = MapFontInfo.create({ text: txt });
            if (this._nextDropingFontInfo.text != null)  {
                return;
            }
        }
        if ( !(this._myPlayerInfo.guideRemainTimes>0)  && this._splitFontWords.length > 0)  {
            this._nextDropingFontInfo = this.getRandomElement(this._splitFontWords);
            this._splitFontWords.splice(this._splitFontWords.indexOf(this._nextDropingFontInfo), 1);
            if (this._nextDropingFontInfo != null)  {
                return;
            }
        }
        if (!(this._myPlayerInfo.guideRemainTimes>0)  && this._splitGroupWords.length > 0)  {
            this._nextDropingFontInfo = this.getRandomElement(this._splitGroupWords);
            this._splitGroupWords.splice(this._splitGroupWords.indexOf(this._nextDropingFontInfo), 1);
            if (this._nextDropingFontInfo != null)  {
                return;
            }
        }
        //根据当前格子数以及当前星级 获得一个困难系数 比如是50
        
        let kunNan: number = this.getNanDuXiShu(fontGridNum) * this._myPlayerInfo.getStarInfo(this._score).split_rate;
        let result = Math.min(100, Math.floor(this.heCizuRate * kunNan / 10000));
        if (!(this._myPlayerInfo.guideRemainTimes>0) && this.getRandomResult(result)) { //随机到出左边词组相关联汉字
            // console.log("随机出一个左边汉字。。。")
            if (this._words.length == 0)  {
                this.heCiSplitTimes++;
                this._words = this.splitGroupToFontInfos(this._popularGroup, null, this.heCiSplitTimes > 2 ? "special" : "commen");
            }
            this._nextDropingFontInfo = this.getRandomElement(this._words);
            this._words.splice(this._words.indexOf(this._nextDropingFontInfo), 1);
            if (this._nextDropingFontInfo != null)  {
                if (fontGridNum <10){
                    this.hanZiRate += 16; 
                }else if (fontGridNum <22){
                    this.hanZiRate += 10; 
                    this.ciZuRate += 2 ;
                }else if (fontGridNum <28){
                    this.hanZiRate += 5; 
                    this.ciZuRate += 5 ;
                }
                else{
                    this.hanZiRate += 5; 
                    this.ciZuRate += 7;
                }
                this.heCizuRate = 10;
                return;
            }
        }
        this.heCizuRate += 10;
        let topFontInfos = this.getTopFontInfos();
        if (this._myPlayerInfo.guideRemainTimes>0){
            this.hanZiRate = 10000;
            this.ciZuRate = 10000;
        }
        if (topFontInfos.length > 0)  {
            let topFontInfo = this.getRandomElement(topFontInfos) as MapFontInfo;
            for (let index = 0; index < 5; index++) {
                if (topFontInfo.canHeChengFont){
                    break;
                }    
                topFontInfo = this.getRandomElement(topFontInfos) as MapFontInfo;            
            }
            if (topFontInfo.canHeChengFont && this.getRandomResult(this.reduceNanDu(this.hanZiRate * kunNan / 10000)))  {
                //随机到要进行可汉字拆分
                // console.log("随机出一个合成汉字。。。....")
                let fontInfos = topFontInfo.canHeChengFontInfos;
                let splitFontInfo = this.getRandomElement(fontInfos) as MapFontInfo;
                this._splitFontWords = this.splitFontToFontInfos(splitFontInfo, topFontInfo.id);
                this._nextDropingFontInfo = this.getRandomElement(this._splitFontWords);
                this._splitFontWords.splice(this._splitFontWords.indexOf(this._nextDropingFontInfo), 1);
                if (this._nextDropingFontInfo != null)  {
                    if (this._myPlayerInfo.guideRemainTimes>0){
                        this._dropingFontInfo = MapFontInfo.create({ id: this._nextDropingFontInfo.id });
                        this._dropingFontInfo.isStuntFont = this._nextDropingFontInfo.isStuntFont;
                    }
                    if (fontGridNum < 10){
                        this.hanZiRate = 20; 
                    }else if(fontGridNum <22){
                        this.hanZiRate = 16; 
                        this.ciZuRate += 2 ;
                    }else if(fontGridNum <28){
                        this.hanZiRate = 10; 
                        this.ciZuRate += 3 ;
                    }
                    else{
                        this.hanZiRate = 5; 
                        this.ciZuRate += 6;
                    }
                    return;
                }
            }
            for (let index = 0; index < 5; index++) {
                if (topFontInfo.canHeChengGroup){
                    break;
                } 
                topFontInfo = this.getRandomElement(topFontInfos) as MapFontInfo;               
            }
            if (topFontInfo.canHeChengGroup && this.getRandomResult(this.reduceNanDu(this.ciZuRate * kunNan / 10000)))  {
                //随机到要进行拆分词组
                // console.log("随机出一个合成词组。。。。")
                let groups = topFontInfo.canHeChengGroups;
                let splitGroup = this.getRandomElement(groups) as string;
                this._splitGroupWords = this.splitGroupToFontInfos(splitGroup, topFontInfo.text, "sp");
                this._nextDropingFontInfo = this.getRandomElement(this._splitGroupWords);
                this._splitGroupWords.splice(this._splitGroupWords.indexOf(this._nextDropingFontInfo), 1);
                if (this._nextDropingFontInfo != null)  {
                    if (this._myPlayerInfo.guideRemainTimes>0){
                        this._dropingFontInfo = MapFontInfo.create({ id: this._nextDropingFontInfo.id });
                        this._dropingFontInfo.isStuntFont = this._nextDropingFontInfo.isStuntFont;
                    }
                    if (fontGridNum <10){
                        this.hanZiRate +=15; 
                        this.ciZuRate = 1 ;
                    }else if(fontGridNum <22){
                        this.hanZiRate +=11; 
                        this.ciZuRate = 4 ;
                    }else if(fontGridNum <28){
                        this.hanZiRate +=6; 
                        this.ciZuRate = 8 ;
                    }
                    else if(fontGridNum <35){
                        this.hanZiRate +=3; 
                        this.ciZuRate = 11;
                    }
                    else{
                        this.hanZiRate +=3; 
                        this.ciZuRate = 13;
                    }
                    return;
                }
            }
        }
        if (fontGridNum <10){
            this.hanZiRate += 14; 
        }else if(fontGridNum <22){
            this.hanZiRate += 10; 
            this.ciZuRate += 1 ;
        }else if(fontGridNum < 30){
            this.hanZiRate += 5; 
            this.ciZuRate += 6;
        }
        else{
            this.hanZiRate += 4; 
            this.ciZuRate += 7;
        }
        //随机从汉字库抽一个汉字
        // console.log("随机出一个汉字 汉字  词组  左边概率。。。。", this.hanZiRate,this.ciZuRate,this.heCizuRate)
        let fontDataArr = this.getRandHzBySocore(MapFontInfo.DataSource["font"]);
        let mapFontInfo = MapFontInfo.create();
        mapFontInfo.setDataByValueArr(fontDataArr);
        this._nextDropingFontInfo = mapFontInfo;
    }

    private getRandHzBySocore(arr): any {
        if (arr.length == 0) return null;
        let randNum = 100;
        if (this._score > 3000 && this._score <= 20000) {
            randNum += (this._score - 2000) / 15;
        } else if (this._score > 20000) {
            randNum += (this._score - 2000) / 10;
        }
        if (randNum > arr.length) { randNum = arr.length - 1-200; }
        randNum = Math.floor(Math.random() * randNum) + 200;
        if (randNum > arr.length) { randNum = arr.length - 1; }
       
        return arr[randNum];
    }

    private getTopFontInfos(): MapFontInfo[]  {
        let cout = [];
        let font = null;
        for (let i: number = 0; i < this.list_grids.repeatX; i++)  {
            font = null;
            for (let j: number = 0; j < this.list_grids.repeatY; j++)  {
                if (this._fonts[i][j] != null)  {
                    font = this._fonts[i][j];
                    break;
                }
            }
            if (font != null)  {
                cout.push(font);
            }
        }
        return cout;
    }


    /**
     * 
     * @param str 需要拆分的字符串
     * @param splitType 拆分方式 commen随机拆分 spcial不拆分
     */
    private splitGroupToFontInfos(str: string, removeFontText: string = null, splitType: string = "commen"): MapFontInfo[] {
        let cout = []
        str.split('').forEach(element => {
            if (element == removeFontText)  {
                return;
            }
            let fontInfo = MapFontInfo.create({ text: element });
            if (fontInfo.id == null)  {
                console.log("lack font:" + element);
                return;
            }
            if (splitType == "commen")  {
                cout = cout.concat(this.splitFontToFontInfos(fontInfo, null, splitType));
            }
            else {
                cout.push(fontInfo);
            }
        })
        return cout;
    }

    private splitFontToFontInfos(fontTxt: string | MapFontInfo, removeFontId: number = null, splitType: string = "commen"): MapFontInfo[]  {
        let fontInfo: MapFontInfo;
        if (fontTxt instanceof MapFontInfo)  {
            fontInfo = fontTxt;
        }
        else {
            fontInfo = MapFontInfo.create({ text: fontTxt });
        }
        if (splitType != "commen")  {
            return [fontInfo];
        }
        let cout = [];
        let structInfos = fontInfo.structInfo.split(",");
        let structInfo = structInfos[Math.floor(Math.random() * structInfos.length)];
        if (structInfo == fontInfo.id.toString())  {
            cout.push(fontInfo);
        }
        else {
            structInfo.split("_").forEach(element2 => {
                if (element2 == "" || (removeFontId != null && element2 == removeFontId.toString()))  {
                    return;
                }
                let splitFontInfo = MapFontInfo.create({ id: element2 });
                if (splitFontInfo.id == null)  {
                    console.log("lack font id:" + element2);
                    return;
                }
                cout.push(splitFontInfo);
            });
        }
        return cout;
    }


    getRandomResult(val: number): boolean {
        if (Math.floor(Math.random() * 100) < val) {
            return true;
        }
        return false;
    }

    /**
     * 获取难度系数
     */
    private getNanDuXiShu(fontGridNum:number): number {
        return MapFontInfo.DataSource["degree_difficulty"][fontGridNum];
    }

    private getFontGridNum():number{
        let fontGridNum: number = 0;
        for (let i = 0; i < this.list_grids.repeatX; i++)  {
            for (let j = 0; j < this.list_grids.repeatY; j++)  {
                if (this._fonts[i][j] != null)  {
                    fontGridNum += this.list_grids.repeatY - j;
                    break;
                }
            }
        }
        return fontGridNum
    }

    private getRandomElement(arr): any {
        if (arr.length == 0) return null;
        return arr[Math.floor(Math.random() * arr.length)];
    }

    private _playerEffectInd: number = 0;
    private playEffectInc(): void {
        this._playerEffectInd++;
        this.changeGameStatue(GameState.EffectPause);
    }

    private endEffectInc(): void {
        this._playerEffectInd--;
        if (this._playerEffectInd < 0)  {
            this._playerEffectInd = 0;
        }
        if (this._playerEffectInd == 0 && this._gameState == GameState.EffectPause)  {
            this.changeGameStatue(GameState.Playing);
            this.checkSysDropFonts();
            this._sysDispelFontInfoStack = [];
            if (this._sysDropingFontInfos.length == 0)  {
                this.invokeStuntFont();
            }
        }
    }
}

class SearchInfo {
    public currentPoint = new Point();
    public chars: string[];
    private _openList: Point[] = [];
    private _openObj = {};
    private _sureList: Point[] = [];
    private _sureObj = {};

    public setOpenList(points: Point[]): void {
        points.forEach(element => {
            this.open(element.x, element.y);
        })
    }
    public getOpenList(): Point[]  {
        return this._openList;
    }
    public setSureList(points: Point[]): void {
        points.forEach(element => {
            this.sure(element.x, element.y);
        })
    }
    public getSureList(): Point[] {
        return this._sureList;
    }
    public open(x: number, y: number, isOpen: boolean = true): void {
        let key = x.toString() + "_" + y.toString();
        if (isOpen)  {
            let point = new Point(x, y);
            this._openList.push(point);
            this._openObj[key] = point;
        }
        else {
            if (this._openObj[key] != null)  {
                this._openList.splice(this._openList.indexOf(this._openObj[key]), 1);
                delete this._openObj[key];
            }
        }
    }

    public isOpen(x: number, y: number): boolean  {
        let key = x.toString() + "_" + y.toString();
        return this._openObj[key] != null;
    }

    public sure(x: number, y: number): void {
        let key = x.toString() + "_" + y.toString();
        let point = new Point(x, y);
        this._sureList.push(point);
        this._sureObj[key] = point;
    }

    public isSure(x: number, y: number): boolean {
        let key = x.toString() + "_" + y.toString();
        return this._sureObj[key] != null;
    }
}