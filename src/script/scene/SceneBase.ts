import WXTool from "../tool/WXTool";
import SceneMgr from "./SceneMgr";
import AppConfig from "../../AppConfig";
import { Script } from "laya/components/Script";
import { Sprite } from "laya/display/Sprite";
import { Box } from "laya/ui/Box";
import { Laya } from "Laya";
import { WXOpenDataViewer } from "laya/ui/WXOpenDataViewer";

export default class SceneBase extends Script {
    protected _popUpSpr : Sprite;
    private _alphaSpr : Sprite;
    private _popUpSign : string;
    private _popUpContent : Sprite;

    protected _dialogSpr : Sprite;
    private _alphaDialogSpr : Sprite;
    private _dialogContent : Sprite;

    onAwake() : void{
        SceneMgr.curSceneScript = this;
        this.createWxOpenDataViewer();
        let arr = Object.getOwnPropertyNames(this.owner);
        let self = this;
        arr.forEach(element => {
            if(element.indexOf("_") == -1)
            {
                return;
            }
            let tempPropertyStr = element.toString();
            let tempPropertyList = tempPropertyStr.split("_");
            switch(tempPropertyList[0])
            {
                case "list":
                case "txt":
                case "img":
                case "btn":
                case "mc":
                    self[tempPropertyStr] = self.owner[tempPropertyStr];
                    break;
                default:
                    break;
            }
        });
    }
    
    protected addPopUp(sign : string, content : Sprite | Box, isCenter : boolean = true, isShowAlphaSpr : boolean = true, isEnableAlphaClose : boolean = false) : void
    {
        this._popUpSign = sign;
        this._popUpContent = content;
        if(this._popUpSpr == null)
        {
            this._popUpSpr = new Sprite();
            Laya.stage.addChild(this._popUpSpr);
        }
        else 
        {
            this._popUpSpr.visible = true;
        }
        let h = AppConfig.getMobileHeight();
        if(isCenter)
        {
            if(content instanceof Sprite)
            {
                content.x = (Laya.stage.width - content.width) / 2;
                content.y = (h - content.height) / 2;
            }

            if(content instanceof Box)
            {
                content.centerX = 0;
                content.centerY = 0;
            }
        }
        if(isShowAlphaSpr)
        {
            if(this._alphaSpr == null)
            {
                this._alphaSpr = new Sprite();
                this._alphaSpr.width = Laya.stage.width;
                this._alphaSpr.height = Laya.stage.height;
                this._alphaSpr.graphics.drawRect(0,0,Laya.stage.width,h,"#000000");
                this._alphaSpr.alpha = 0.4;
                this._popUpSpr.addChild(this._alphaSpr);
            }
            
            if(isEnableAlphaClose)
            {
                this._alphaSpr.on(Laya.Event.CLICK,this, this.hidePopUp);
            }
        }
        else if(this._alphaSpr)
        {
            this._alphaSpr.visible = false;
        }
        this._popUpSpr.addChild(this._popUpContent);
        
    }

    public hidePopUp() : void
    {
        if(this._popUpSpr)
        {
            this._popUpSpr.visible = false;
        }
        if(this._popUpContent)
        {
            if(this._popUpContent == this._dataViewer)
            {
                this._popUpContent.visible = false;
            }
            else 
            {
                this._popUpContent.destroy();
            }
        }
        this._popUpSign = null;
    }

    protected addDialog(content : Sprite, isCenter : boolean = true, isShowAlphaSpr : boolean = true, isEnableAlphaClose : boolean = false) : void
    {
        this._dialogContent = content;
        if(this._dialogSpr == null)
        {
            this._dialogSpr = new Sprite();
            Laya.stage.addChild(this._dialogSpr);
        }
        else 
        {
            this._dialogSpr.visible = true;
        }
        let h = AppConfig.getMobileHeight();
        if(isCenter)
        {
            content.x = (Laya.stage.width - content.width) / 2;
            content.y = (h - content.height) / 2;
        }
        if(isShowAlphaSpr)
        {
            if(this._alphaDialogSpr == null)
            {
                this._alphaDialogSpr = new Sprite();
                this._alphaDialogSpr.width = Laya.stage.width;
                this._alphaDialogSpr.height = h;
                this._alphaDialogSpr.graphics.drawRect(0,0,Laya.stage.width,h,"#000000");
                this._alphaDialogSpr.alpha = 0.4;
                this._alphaDialogSpr.mouseEnabled = true;
                this._alphaDialogSpr.mouseThrough = false;
                this._dialogSpr.addChild(this._alphaDialogSpr);
            }
            
            if(isEnableAlphaClose)
            {
                this._alphaDialogSpr.on(Laya.Event.CLICK,this, this.hideDialog);
            }
        }
        else if(this._alphaDialogSpr){
            this._alphaDialogSpr.visible = false;
        }
        this._dialogSpr.addChild(this._dialogContent);
        
    }

    public hideDialog() : void
    {
        if(this._dialogSpr)
        {
            this._dialogSpr.visible = false;
        }
        if(this._dialogContent)
        {
            if(this._dialogContent == this._dataViewer)
            {
                this._dialogContent.visible = false;
                WXTool.showAllBtn();
            }
            else 
            {
                this._dialogContent.destroy();
            }
        }
    }

    protected _dataViewer : WXOpenDataViewer;
    private createWxOpenDataViewer() : void{
        if(this._dataViewer == null)
        {
            this._dataViewer = new WXOpenDataViewer();
            this._dataViewer.width = 610;
            this._dataViewer.height = 757;
            this._dataViewer.visible = false;
        }
    }
    public showRank() : void{
        this._dataViewer.visible = true;
        this._dataViewer.postMsg({cmd : "refreshRankList"});
        this.addDialog(this._dataViewer,true,true,true);
        WXTool.hideAllBtn();
    }
}