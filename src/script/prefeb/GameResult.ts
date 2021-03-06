import PrefebBase from "./PrefebBase";
import AppConfig from "../../AppConfig";
import { Handler } from "laya/utils/Handler";
import { Image } from "laya/ui/Image";
import { Laya } from "Laya";
import { Text } from "laya/display/Text";
import { Button } from "laya/ui/Button";

export default class GameResult extends PrefebBase {
    public showHomeHandler : Handler;
    public restartHandler : Handler;
    public showAdHandler : Handler;
    public score : number;
    public comeBackTime :number;
    public txt_score : Text;
    public img_rankBg : Image;
    public txt_showRank : Text;
    public btn_home : Button;
    public btn_tryAgain : Button;
    public btn_showAd : Button;
    constructor() { super(); }

    onAwake() : void{
        super.onAwake();
        this.owner["height"] = Laya.stage.height;
        this.txt_score.text = this.score.toString();
        this.btn_home.clickHandler = Handler.create(this,function() : void{
            this.showHomeHandler.run();
        },null,false);
        this.btn_tryAgain.clickHandler = Handler.create(this,function() : void{
            
            // if(AppConfig.platform == "wx")
            // {
            //     this.restartHandler.runWith(1);
            //     Browser.window.wx["shareAppMessage"]({
            //         title : '我在这个游戏里面得了' + this.score +"分",
            //         imageUrl : "https://mmocgame.qpic.cn/wechatgame/iaUVuxArE9L9G28F6XrxKAIEtJOs9x1Ycm2MYmC2Uz5T9O4RLq0ejvG3ic2KlUBiaVf/0",
            //         imageUrlId : "NelenHPLRXK1-AWENn0aZw"
            //     })
            // }
            // else 
            // {
                this.restartHandler.run();
            // }
        },null,false);
        this.btn_showAd.clickHandler = Handler.create(this,function() : void{
            // if(AppConfig.platform == "wx")
            // {
            //     this.showAdHandler.runWith(1);
            //     Browser.window.wx["shareAppMessage"]({
            //         title : '我在这个游戏里面得了' + this.score +"分",
            //         imageUrl : "https://mmocgame.qpic.cn/wechatgame/iaUVuxArE9L9G28F6XrxKAIEtJOs9x1Ycm2MYmC2Uz5T9O4RLq0ejvG3ic2KlUBiaVf/0",
            //         imageUrlId : "NelenHPLRXK1-AWENn0aZw"
            //     })
            // }
            // else 
            // {
                // this.showAdHandler.run();
            // }
            let that =this;
            window['King_SDK_Manager'].showRewardedVideoAd(res =>{
                if(res){
                    console.log('播放成功，下发游戏奖励');
                    that.onShowAdComple();
                }else{
                    console.log('播放失败');
                }});
        },null,false);
    }

    private onShowAdComple(): void {
        this.showAdHandler.run();
    }
    
    onEnable(): void {
        console.log("游戏结束调用banner");
        if (this.comeBackTime <1 ) {
            this.btn_showAd.visible=false
        }
        window['King_SDK_Manager'].hideAllBanner();
        window['King_SDK_Manager'].showNativeInter();
    }

    onDisable(): void {
        this.btn_home.offAll();
        this.btn_tryAgain.offAll();
    }
}