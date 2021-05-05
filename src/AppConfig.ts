import { Laya } from "Laya";
import { Script } from "laya/components/Script";
import { Browser } from "laya/utils/Browser";
import URI from "./URI";

export default class AppConfig extends Script {

    public static getInitLoadingUrls() : string[]
    {
        if(AppConfig.platform == "wx")
        {
            return [
                "res/atlas/map.atlas",
                "res/data.json",
                // URI.spineUrl + "other_taozhuangxitong1.sk",
                URI.spineUrl + "other_taozhuangxitong1.png",
                // URI.spineUrl + "other_wupinghuanrao_kin_little.sk",
                URI.spineUrl + "other_wupinghuanrao_kin_little.png",
                "res/atlas/test.atlas"
            ]
        }
        else 
        {
            return [
                "res/data.json",
                URI.spineUrl + "other_taozhuangxitong1.sk",
                URI.spineUrl + "other_wupinghuanrao_kin_little.sk",
            ]
        }
    }

    public static getAsynUrls() : string[]
    {
        return [
            // "sound/bg_music.wav",
            "sound/hecheng.wav",
            "sound/teji.wav",
            "sound/xiahua.wav",
            "sound/xiaochu.wav",
            "sound/yidong.wav"
        ]
    }

    public static asynUrlsLoaded : boolean = false;

    public static getMobileHeight(): number {
        let tt = Laya.Browser.window.screen.height;
        if (AppConfig.platform != "wx") {
            return tt;
        }
        let wxInfo = Browser.window.wx.getSystemInfoSync();
        console.log('wx height:', wxInfo.windowHeight, ', widht:', wxInfo.windowWidth);
        let h: number = 640 * wxInfo.windowHeight / wxInfo.windowWidth;
        console.log('h:', h);
        if (h > 1300) {
            return h;
        }

        return 1300;

    }

    public static getMobileWidth(): number {
        let tt = Laya.Browser.window.screen.width;
        if (AppConfig.platform != "wx") {
            return tt;
        }
        return 640;
    }

    //是否已经新手引导过
    public static hadGuidance() : boolean
    {
        let bo = localStorage.getItem("guide_tt1");
        if(bo == "true")
        {
            return true;
        }
        return false;
    }

    public static setGuidance(value : boolean) : void{
        if(value)
        {
            localStorage.setItem("guide_tt1","true");
        }
        else 
        {
            localStorage.setItem("guide_tt1","false");
        }
    }

    public static hadGuidanceHz() : boolean
    {
        let bo = localStorage.getItem("guide_tthz");
        if(bo == "true")
        {
            return true;
        }
        return false;
    }

    public static setGuidanceHz(value : boolean) : void{
        if(value)
        {
            localStorage.setItem("guide_tthz","true");
        }
        else 
        {
            localStorage.setItem("guide_tthz","false");
        }
    }


    public static pools = {};

    public static platform : "android"|"android4399"|"ios"|"wx"|'web'|'tt' = "web"; //android native
    // public static platform = "android4399"; //android native4399
    // public static platform = "ios"; //ios native
    public static version = "1.1.4";

    public static get isNative(){
        // return this.platform != "wx" && this.platform != "web";
        return false;
    }
}