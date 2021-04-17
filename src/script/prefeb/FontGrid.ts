import PrefebBase from "./PrefebBase"
import { ResMgr } from "../../ResMgr";
import URI from "../../URI";
import { Skeleton } from "laya/ani/bone/Skeleton";
import { Event } from "laya/events/Event";
import { Image } from "laya/ui/Image";

export default class FontGrid extends PrefebBase {
    /** @prop {name:font, tips:"显示文字", type:String, default:""}*/
    public font: string = "";
    /** @prop {name:numType, tips:"质量 蓝1，红2，紫3，金4", type:Number, default:1}*/
    public quality: number = 1;

    private colorArr = ["blue","red","puple","yellow"];

    private _effects : Skeleton[] = [];

    public addEffect(effect : Skeleton) : void{
        if(effect == null)return;
        this.owner.addChild(effect);
        this._effects.push(effect);
    }
    
    public clearEffects() : void{
        this._effects.forEach(element => {
            this.owner.removeChild(element);
        });
        this._effects = [];
    }
    constructor() { super(); }
    
    onUpdate(): void {
        let img_bg = this.owner.getChildByName("img_bg") as Image;
        if(this.font != null)
        {
            this.owner.getChildByName("txt")["text"] = this.font;
            img_bg.visible = true;
            img_bg.skin = "map/img_"+this.getQualitySign()+"GridBg.png";
            
        }
        else 
        {
            this.owner.getChildByName("txt")["text"] = "";
            img_bg.visible = false;
        }
        
    }

    public getQualitySign() : string{
        
        return this.colorArr[this.quality - 1];
    }

    public onReset() : void{
        this.quality = 1;
    }

    onDisable(): void {
        this.recover();
    }

    public playHeChengEffect() : void{
        let sk = ResMgr.Instance().createSpine(URI.spineUrl + "other_taozhuangxitong1.sk","animation",false);
        sk.x = sk.y = 44;
        sk.scaleX = sk.scaleY = 1.7;
        this.owner.addChild(sk);
        sk.on(Event.STOPPED, this, function (par_sk) {
            par_sk.destroy();
        },[sk]);
    }

    public reset() : void{
        this.quality = 1;
        this.clearEffects();
    }
}