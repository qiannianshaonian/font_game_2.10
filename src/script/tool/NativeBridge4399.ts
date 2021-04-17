import { Script } from "laya/components/Script";
import { Browser } from "laya/utils/Browser";

export default class NativeBridge4399 extends Script {
    public static showBannerAd(bo : boolean) : void{
        var os = Browser.window.conchConfig.getOS();
        var bridge;
        var obj = {};
        if (os == "Conch-ios") {
            bridge = Browser.window.PlatformClass.createClass("JSBridge");//创建脚步代理
        }
        else if (os == "Conch-android") {
            //需要完整的类路径，注意与iOS的不同
            bridge = Browser.window.PlatformClass.createClass("demo.JSBridge");//创建脚步代理
        } 
        if (os == "Conch-ios") {
            //iOS注意函数签名，注意与Android的不同
            bridge.call("setBannerAdVisible:",bo)
        }
        else if (os == "Conch-android") {
            bridge.call("setBannerAdVisible",bo);
        }

    }
}