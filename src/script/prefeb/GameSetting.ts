import PrefebBase from "./PrefebBase";
import AppConfig from "../../AppConfig";
import ControllerMgr from "../controller/ControllerMgr";
import TipController from "../controller/TipController";
import SoundTool from "../tool/SoundTool";
import { Browser } from "laya/utils/Browser";
import { Handler } from "laya/utils/Handler";
import { Button } from "laya/ui/Button";
import { Event } from "laya/events/Event";
import { Laya } from "Laya";
import { Point } from "laya/maths/Point";
import { Image } from "laya/ui/Image";
import { WxMiniUtil } from "../tool/WxMiniUtil";
import{ TTMiniUtils } from "../tool/TTMiniUtil";

export default class GameSetting extends PrefebBase {
    public showHomeHandler : Handler;
    public restartHandler : Handler;
    public onCloseHandler : Handler;

    // public progress_music : Image;
    public progress_effect : Image;
    public btn_home : Button;
    public btn_tryAgain : Button;
    public btn_share : Button;
    public btn_close : Button;
    public btn_music : Button;
    public btn_effect : Button;
    constructor() { super(); }

    onAwake() : void{
        super.onAwake();
        this.btn_home.clickHandler = Handler.create(this,function() : void{
            this.showHomeHandler.run();
        },null,false);
        this.btn_tryAgain.clickHandler = Handler.create(this,function() : void{
            if(AppConfig.platform == "wx")
            {
                this.restartHandler.runWith(1);
                Browser.window.wx["shareAppMessage"]({
                    title : '发现有个有趣的游戏',
                    imageUrl : "https://mmocgame.qpic.cn/wechatgame/iaUVuxArE9L9G28F6XrxKAIEtJOs9x1Ycm2MYmC2Uz5T9O4RLq0ejvG3ic2KlUBiaVf/0",
                    imageUrlId : "NelenHPLRXK1-AWENn0aZw"
                })
            }
            else 
            {
                this.restartHandler.run();
            }
        },null,false);
        this.btn_share.clickHandler = (Handler.create(this,function(e : Event) : void{
            // if(e.type != Event.MOUSE_UP)return;
            if(AppConfig.platform == "wx")
            {
                Browser.window.wx["shareAppMessage"]({
                    title : '发现有个有趣的游戏',
                    imageUrl : "https://mmocgame.qpic.cn/wechatgame/iaUVuxArE9L9G28F6XrxKAIEtJOs9x1Ycm2MYmC2Uz5T9O4RLq0ejvG3ic2KlUBiaVf/0",
                    imageUrlId : "NelenHPLRXK1-AWENn0aZw"
                })
            }else if (AppConfig.platform == "tt"){
                // this.btn_vedio.visible=false;
                // this.btn_vedio.disabled=true;
                TTMiniUtils.stopGameRecorder();
                // this.btn_vedio1.visible=false;
                // this.btn_vedio1.disabled=true;
                TTMiniUtils.shareGameRecorder(Handler.create(this,this.onShareGameRecordComple));
            }
            else 
            {
                ControllerMgr.getInstance(TipController).showTip("尽情期待");
            }
        },null,false));
        this.btn_close.clickHandler = (Handler.create(this,function(e : Event) : void{
            // if(e.type != Event.MOUSE_UP)return;
                this.onCloseHandler.run();
        },null,false));
        this.btn_music.on(Event.MOUSE_DOWN,this,this.onDragMouseDown);
        this.btn_effect.on(Event.MOUSE_DOWN,this,this.onDragMouseDown);

        this.refresh();
    }

    private _dragTarget : Button
    onDragMouseDown(e : Event) : void{
        this._dragTarget = e.currentTarget as Button;
        Laya.stage.on(Event.MOUSE_UP,this,this.onStageMouseUp2);
        Laya.stage.on(Event.MOUSE_MOVE,this,this.onStageMouseMove2);
    }

    onStageMouseUp2(e : Event) : void{
        this._dragTarget = null;
        Laya.stage.off(Event.MOUSE_UP,this,this.onStageMouseUp2);
        Laya.stage.off(Event.MOUSE_MOVE,this,this.onStageMouseMove2);
    }

    onStageMouseMove2(e : Event) : void{
        let point = new Point(e.stageX,e.stageY);
        let progress : Image;
        if(this._dragTarget == this.btn_effect)
        {
            progress = this.progress_effect;
        }
        // else 
        // {
        //     progress = this.progress_music;
        // }
        point = this._dragTarget.parent["globalToLocal"](point);
        let x = point.x - progress.x;
        if(x < 0)
        {
            x = 0;
        }
        else if(x > 346)
        {
            x = 346;
        }
        progress.width = x;
        let num = x / 346;
        progress.width = num;
        if(progress == this.progress_effect)
        {
            SoundTool.setSoundVolume(num);
        }
        // else 
        // {
        //     SoundTool.setMusicVolume(num);
        // }
        this.refresh();
    }

    public refresh() : void{
        this.progress_effect.width = 346 * SoundTool.getSoundVolume();
        this.btn_effect.x = this.progress_effect.x + this.progress_effect.width;

        // this.progress_music.width = 346 * SoundTool.getMusicVolume();
        // this.btn_music.x = this.progress_music.x + this.progress_music.width;
    }
    
    onEnable(): void {
        WxMiniUtil.showBanner();
    }

    onDisable(): void {
        this.btn_home.offAll();
        this.btn_tryAgain.offAll();
        this.btn_share.offAll();
        WxMiniUtil.hideBanner();
    }

    onShareGameRecordComple(data :any) :void{
        if (data != "true"){
            ControllerMgr.getInstance(TipController).showCenterBottomTip("录屏时长不足3秒,请重新录制");
        }
        console.log("...分享了完成了",data);
        if (AppConfig.platform=="tt"){
            Laya.timer.once(500, this, function (): void {
                TTMiniUtils.startGameRecorder();
            });
        }
    }
}