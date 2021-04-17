import { Laya } from "Laya";
import URI from "../../URI";

export default class SoundTool{
    // public static playBgMusic() : void{
    //     if(Laya.loader.getRes(URI.soundUrl + "bg_music.wav") != null)
    //         Laya.SoundManager.playMusic(URI.soundUrl + "bg_music.wav");
    // }

    public static playXiaoChuEffect() : void{
        if(Laya.loader.getRes(URI.soundUrl + "xiaochu.wav") != null)
            Laya.SoundManager.playSound(URI.soundUrl + "xiaochu.wav");
    }

    public static playHeChengEffect() : void{
        if(Laya.loader.getRes(URI.soundUrl + "hecheng.wav") != null)
            Laya.SoundManager.playSound(URI.soundUrl + "hecheng.wav");
    }

    public static playTeJiEffect() : void{
        if(Laya.loader.getRes(URI.soundUrl + "teji.wav") != null)
            Laya.SoundManager.playSound(URI.soundUrl + "teji.wav");
    }

    public static playXiaHuaEffect() : void{
        if(Laya.loader.getRes(URI.soundUrl + "xiahua.wav") != null)
            Laya.SoundManager.playSound(URI.soundUrl + "xiahua.wav");
    }

    public static playYiDongEffect() : void{
        if(Laya.loader.getRes(URI.soundUrl + "yidong.wav") != null)
            Laya.SoundManager.playSound(URI.soundUrl + "yidong.wav");
    }

    private static _soundVolume : number;
    public static getSoundVolume() : number{
        return SoundTool._soundVolume;
    }
    public static setSoundVolume(value : number = 0.2) : void{
        if(Number["isNaN"](value))
        {
            value = 0.2;
        }
        SoundTool._soundVolume = value;
        Laya.SoundManager.setSoundVolume(value);
        Laya.LocalStorage.setItem("soundVolume",(value * 100).toString());
    }

    // private static _musicVolume : number;
    // public static getMusicVolume() : number{
    //     return SoundTool._musicVolume;
    // }
    // public static setMusicVolume(value : number = 0.2) : void{
    //     if(Number["isNaN"](value))
    //     {
    //         value = 0.2;
    //     }
    //     SoundTool._musicVolume = value;
    //     Laya.SoundManager.setMusicVolume(value);
    //     Laya.LocalStorage.setItem("musicVolume",(value * 100).toString());
    // }

    public static init() : void
    {
        SoundTool.setSoundVolume(parseInt(Laya.LocalStorage.getItem("soundVolume"))/100);
        // SoundTool.setMusicVolume(parseInt(Laya.LocalStorage.getItem("musicVolume"))/100);
    }
}