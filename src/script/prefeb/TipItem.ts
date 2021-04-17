import { Text } from "laya/display/Text";
import { Image } from "laya/ui/Image";
import PrefebBase from "./PrefebBase";

export default class TipItem extends PrefebBase {
    /** @prop {name:text, tips:"字符串类型示例", type:String, default:"d"}*/
    public text: string = "d";

    protected txt_text : Text;
    protected img_bg : Image;
    
    constructor() { super(); }

    onAwake() : void{
        super.onAwake();
        this.txt_text.text = this.text;
        this.img_bg.width = this.txt_text.displayWidth + 36;
        this.owner["width"] = this.img_bg.width; 
    }
    
    onEnable(): void {
    }

    onDisable(): void {
    }
}