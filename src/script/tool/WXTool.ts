import { Script } from "laya/components/Script";

export default class WXTool extends Script {
    private static _btns : any[] = [];
    public static addBtn(btn : any) : void{
        this._btns.push(btn);
    }

    public static removeBtn(btn : any) : void{
        this._btns.slice(this._btns.indexOf(btn),1);
    }

    public static hideAllBtn () : void{
        this._btns.forEach(element => {
            element.style.hidden = true;
        })
    }

    public static showAllBtn () : void{
        this._btns.forEach(element => {
            element.style.hidden = false;
        })
    }
}