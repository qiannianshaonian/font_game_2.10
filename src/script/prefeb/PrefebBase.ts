import { Prefab } from "laya/components/Prefab";
import { Script } from "laya/components/Script";
import { Pool } from "laya/utils/Pool";

export default class PrefebBase extends Script {
    private static _prefeb : Prefab;
    public static setPrefeb(value : Prefab){
        PrefebBase._prefeb = value;
    }

    onAwake() : void{
        for(let i : number = 0; i < this.owner.numChildren; i++)
        {
            let element = this.owner.getChildAt(i);
            if(element.name == "" || element.name.indexOf("_") == -1)
            {
                continue;
            }
            let tempPropertyList = element.name.split("_");
            switch(tempPropertyList[0])
            {
                case "list":
                case "txt":
                case "img":
                case "btn":
                case "progress":
                    this[element.name] = element;
                    break;
                default:
                    break;
            }
        }
    }

    public static getPrefeb() : Prefab
    {
        return this._prefeb;
    }

    public static getSign() : string{
        return this["__proto__"].constructor.name
    }

    public static create() : Script{
        return Pool.getItemByCreateFun(PrefebBase.getSign(),PrefebBase._prefeb.create,PrefebBase._prefeb);
    }

    public recover() : void{
        Pool.recover(PrefebBase.getSign(),this);
    }
}
    