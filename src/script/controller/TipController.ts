import ControllerBase from "./ControllerBase";
import TipItem from "../prefeb/TipItem";
import { Sprite } from "laya/display/Sprite";
import { Laya } from "Laya";
import { Prefab } from "laya/components/Prefab";
import { Tween } from "laya/utils/Tween";
import { Label } from "laya/ui/Label";
import { Pool } from "laya/utils/Pool";
import { Browser } from "laya/utils/Browser";

export default class TipController extends ControllerBase {
    private _tipSpr : Sprite;
    public get tipSpr() : Sprite
    {
        return this._tipSpr;
    }
    public init() : void
    {
        this._tipSpr = new Sprite();
        this._tipSpr.name = "TipSpr";
        Laya.stage.addChild(this._tipSpr);
        Laya.loader.load("prefab/TipItem.json",Laya.Handler.create(this,this.onLoadTipItemComplete));
    }

    private _tipItemPrefab : Prefab;
    private onLoadTipItemComplete() : void{
        this._tipItemPrefab = new Prefab();
        this._tipItemPrefab.json = Laya.loader.getRes("prefab/TipItem.json");
    }

    private _labels : Label[] = [];
    private _startY = 960;
    public showLeftBottomTip(text : string) : void{
        let label = new Label();
        label.color = "#204800"; 
        label.text = text;
        label.font = "SimHei";
        label.fontSize = 30;
        label.anchorY = 1;
        label.y = this._startY;
        this._tipSpr.addChild(label);
        this._labels.push(label);
        this.sortLabels();
        Laya.timer.once(1000,this,function() : void{
            Tween.to(label,{alpha : 0},300)
        });
        Laya.timer.once(1300,this, function() : void{
            this._labels.splice(this._labels.indexOf(label),1)
            Laya.timer.clearAll(label);
            label.destroy(true);
        })
    }

    public showCenterBottomTip(text : string) : void{
        let sysInfo = Browser.window.wx.getSystemInfoSync();
        //获取微信界面大小
        let width = sysInfo.screenWidth;
        let height = sysInfo.screenHeight;
        let label = new Label();
        label.color = "#204800"; 
        label.text = text;
        label.font = "SimHei";
        label.fontSize = 35;
        label.anchorY = 1;
        label.y = height/2+150;
        label.x = width/2-80
        this._tipSpr.addChild(label);
        this._labels.push(label);
        this.sortLabels();
        Laya.timer.once(1000,this,function() : void{
            Tween.to(label,{alpha : 0},300)
        });
        Laya.timer.once(2300,this, function() : void{
            this._labels.splice(this._labels.indexOf(label),1)
            Laya.timer.clearAll(label);
            label.destroy(true);
        })
    }

    private sortLabels() : void{
        for(let i : number; i < this._labels.length; i++)
        {
            let label = this._labels[i];
            let targetY = this._startY - 40 * i;
            Tween.to(label,{y : targetY},100);
        }
    }

    private _tipItems = [];
    private _tipItemStartY  = 550;
    public showTip(txt : string) : void{
        if(this._tipItemPrefab != null)
        {
            let tipItemSpr = Pool.getItemByCreateFun("TipItem",this._tipItemPrefab.create,this._tipItemPrefab);
            let tipItemScript = tipItemSpr.getComponent(TipItem) as TipItem;
            tipItemScript.text = txt;
            this._tipSpr.addChild(tipItemSpr);
            tipItemSpr.x = (Laya.stage.width - tipItemSpr.width) / 2;
            tipItemSpr.y = this._tipItemStartY - 60;
            this._tipItems.push(tipItemSpr);
            this.sortTipItems();
            Laya.timer.once(1000,this,function() : void{
                Tween.to(tipItemSpr,{alpha : 0},300)
            });
            Laya.timer.once(1300,this, function() : void{
                this._tipItems.splice(this._tipItems.indexOf(tipItemSpr),1)
                Laya.timer.clearAll(tipItemSpr);
                tipItemSpr.destroy(true);
            })
        }
    }

    private sortTipItems() : void{
        for(let i : number = 0; i < this._tipItems.length; i++)
        {
            let label = this._tipItems[i];
            let targetY = this._tipItemStartY - 60 * (this._tipItems.length - i);
            Tween.to(label,{y : targetY},100);
        }
    }
}

window["TipController"] = TipController