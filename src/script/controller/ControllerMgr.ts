import ControllerBase from "./ControllerBase";

export default class ControllerMgr {
    private static _controllerObjs = {};
    public static getInstance<T extends ControllerBase>(c : new() => T) : T
    {
        let sign = c["name"];
        let item = ControllerMgr._controllerObjs[sign];
        if(item == null)
        {
            item = new c();
            ControllerMgr._controllerObjs[sign] = item;
        }
        return item;
    }
}

window["ControllerMgr"] = ControllerMgr;