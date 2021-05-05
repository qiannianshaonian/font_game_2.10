import PrefebBase from "./PrefebBase";
import AppConfig from "../../AppConfig";
import ControllerMgr from "../controller/ControllerMgr";
import TipController from "../controller/TipController";
import WXTool from "../tool/WXTool";
import GameConfig from "../../GameConfig";
import PlayerController from "../controller/PlayerController";
import { Handler } from "laya/utils/Handler";
import { Button } from "laya/ui/Button";
import { WXOpenDataViewer } from "laya/ui/WXOpenDataViewer";
import { Laya } from "Laya";
import { Event } from "laya/events/Event";
import { Browser } from "laya/utils/Browser";
import { WxMiniUtil } from "../tool/WxMiniUtil";

export default class StartGame extends PrefebBase {
    public handler: Handler;
    public onShowRank : Handler;
    private btn_startGame : Button;
    private btn_showRank : Button;
    private btn_share : Button;

    private _rankView : WXOpenDataViewer;
    private _wxStartButton
    // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0
    
    constructor() { super(); }

    onAwake() : void{
        super.onAwake();
        console.log("...屏幕宽度", Laya.Browser.window.screen.width,Laya.stage.width,Laya.stage.height)
        this.owner["height"] = Laya.stage.height;
        console.log("...屏幕长度", Laya.Browser.window.screen.height)
        if(AppConfig.platform == "wx")
        {
            let scaleX = Laya.Browser.window.screen.width/ 640;
            let h = AppConfig.getMobileHeight() ;
            let scaleY = Laya.Browser.window.screen.height* (h / Laya.stage.height) / h;
            // let scaleY = MiniAdpter.window.screen.availHeight* (1136 / stage.height) / 1136;
            let button = Browser.window.wx["createUserInfoButton"]({
                type: 'image',
                image: 'btn_startGame.png',
                style: {
                left: this.btn_startGame.x * scaleX,
                top: this.btn_startGame.y * scaleY,
                width: this.btn_startGame.width * scaleX,
                height: this.btn_startGame.height * scaleY,
                lineHeight: 40,
                color: '#ffffff',
                textAlign: 'center',
                fontSize: 16,
                borderRadius: 4
                }
            })
            button.onTap((res) => {
                console.log(res)
                ControllerMgr.getInstance(PlayerController).myPlayerInfo.name = res.userInfo.nickName;
                this.handler.run();
                button.destroy();
            })
            this.btn_startGame.destroy();
            this.btn_startGame = button;
            WXTool.addBtn(this.btn_startGame);
        }
        else 
        {
            // this.btn_startGame.zoomOn(Handler.create(this,function(e : Event) : void{
            //     if(e.type == Event.MOUSE_UP)
            //         this.handler.run();
            // },null,false)); 

            this.btn_startGame.on(Event.CLICK,this,function(){
                this.handler.run();
            })
        }
        // this.btn_showRank.zoomOn(Handler.create(this,function(e) : void{
        //     if(e.type != Event.MOUSE_UP)return;
        //     if(AppConfig.platform == "wx")
        //     {
        //         this.onShowRank.run();
        //     }
        //     else 
        //     {
        //         ControllerMgr.getInstance(TipController).showTip("尽情期待");
        //     }
        this.btn_showRank.on(Event.CLICK,this,function(){
            if(AppConfig.platform == "wx")
            {
                this.onShowRank.run();
            }
            else 
            {
                ControllerMgr.getInstance(TipController).showTip("尽情期待");
            }
        })
            
        // },null,false));
        // this.btn_share.zoomOn(Handler.create(this,function(e : Event) : void{
        //     if(e.type != Event.MOUSE_UP)return;
            // if(AppConfig.platform == "wx")
            // {
            //     wx["shareAppMessage"]({
            //         title : '发现有个有趣的游戏',
            //         imageUrl : "https://mmocgame.qpic.cn/wechatgame/iaUVuxArE9L9G28F6XrxKAIEtJOs9x1Ycm2MYmC2Uz5T9O4RLq0ejvG3ic2KlUBiaVf/0",
            //         imageUrlId : "NelenHPLRXK1-AWENn0aZw"
            //     })
            // }
            // else 
            // {
            //     ControllerMgr.getInstance(TipController).showTip("尽情期待");
            // }
        // },null,false));
        this.btn_share.on(Event.CLICK,this,function(){
            if(AppConfig.platform == "wx")
            {
                Browser.window.wx["shareAppMessage"]({
                    title : '发现有个有趣的游戏',
                    imageUrl : "https://mmocgame.qpic.cn/wechatgame/iaUVuxArE9L9G28F6XrxKAIEtJOs9x1Ycm2MYmC2Uz5T9O4RLq0ejvG3ic2KlUBiaVf/0",
                    imageUrlId : "NelenHPLRXK1-AWENn0aZw"
                })
            }
            else 
            {
                ControllerMgr.getInstance(TipController).showTip("尽情期待");
            }
        })
    }
    
    onEnable(): void {
    }

    onDisable(): void {
        
        if(AppConfig.platform == "wx")
        {
            WXTool.removeBtn(this.btn_startGame);
            this.btn_startGame.destroy(true);
        }
        else 
        {
            this.btn_startGame.offAll();
        }
        if (AppConfig.platform=="tt"){
            WxMiniUtil.hideBanner();
        }
    }

}