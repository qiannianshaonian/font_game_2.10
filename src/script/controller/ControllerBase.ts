export default class ControllerBase{
    private static _controllerObjs = {};
    public getSign() : string
    {
        return this["__proto__"].constructor.name
    }

    // public static getInstance<T>(c : new() => T) : T
    // {
    //     let sign = c["name"];
    //     let item = ControllerBase._controllerObjs[sign];
    //     if(item == null)
    //     {
    //         item = new c();
    //         ControllerBase._controllerObjs[sign] = item;
    //     }
    //     return item;
    // }

    public show() : void{

    }

    public close() : void{

    }

    public destroy() : void{
        
    }
}