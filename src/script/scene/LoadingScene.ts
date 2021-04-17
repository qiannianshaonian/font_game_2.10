import { Laya } from "Laya";
import { Text } from "laya/display/Text";
import SceneBase from "./SceneBase";

export default class LoadingScene  extends SceneBase {
    private txt_progress : Text;
    constructor() { super(); }
    onAwake() : void{
        super.onAwake();
        this.owner["height"] = Laya.stage.height;
    }
    
    onEnable(): void {
    }

    onDisable(): void {
    }

    /**
     * 更新进度条百分比
     * @param value 百分比 0-100
     */
    public updatePercent(value : number) : void{
        this.txt_progress.text = "正在加载资源 " + value + "%";
    }
}