import { Laya } from "Laya";
import { Skeleton } from "laya/ani/bone/Skeleton";
import { Templet } from "laya/ani/bone/Templet";
import { Sprite } from "laya/display/Sprite";
import { Event } from "laya/events/Event";
import { Loader } from "laya/net/Loader";
import { Texture } from "laya/resource/Texture";
import { Texture2D } from "laya/resource/Texture2D";
import { Image } from "laya/ui/Image";
import { Handler } from "laya/utils/Handler";

interface loadItem{
    urls : string[],
    caller : any,
    index : number,
    onProgress : (index : number, total : number) => void,
    onComplete : () => void
}

export class ResMgr {
    private static instance = null;
    private spineList       : Object = {};
    private textureList     : Object = {};
    private animationList   : Object = {};
    private modelDelayList  : Object = {};

    public static Instance() : ResMgr {
        if (ResMgr.instance == null) {
            ResMgr.instance = new ResMgr();
        }

        return ResMgr.instance;
    }

    constructor() {
        
    }

    public releaseSpine(url : string) : void
    {
        if (this.spineList[url])
        {
            let spine : Templet = this.spineList[url];
            // spine.releaseResource(true);

            for (let i = 0; i < spine["_loadList"].length; i++) 
            {
                let texture : Texture = spine.getTexture(spine["_loadList"][i]);

                if (texture)
                {
                    texture.disposeBitmap();
                    texture.destroy();
                }
            }

            spine.destroy();

           Laya.loader.clearRes(url);

            this.spineList[url] = null;
        }
    }

    public loadSpine(url : any, callbk : Handler) : any {
        var self = this;
        var num  = 0;

        var loadFunc = function(spine) {
            var complete = function() {
                self.spineList[spine] = factory;

                if ((url instanceof Array)) {
                    num ++;

                    if (num == url.length) {
                        callbk.run();
                    }
                }
                else {
                    callbk.run();
                }
            }

            var factory = new Templet();
            factory.on(Event.COMPLETE, self, complete);
            // factory.on(Event.ERROR, this, this.onError);
            factory.loadAni(spine);
        }

        if ((url instanceof Array)) {
            for (var i = 0; i < url.length; i++) {
                loadFunc(url[i]);
            }
        }
        else {
            loadFunc(url);
        }
    }

    public loadTexture(url : any, callbk : Handler) : any {
        var self = this;

        if ((url instanceof Array)) {
            for (var i = 0; i < url.length; i++) {
                if (i == (url.length - 1))
                {
                    Texture2D.load(url[i], callbk);
                }
                else
                {
                    Texture2D.load(url[i], null);
                }
            }
        }
        else {
            Texture2D.load(url, callbk);
        }

        // if (callbk != null) {
        //     callbk.run();
        // }
    }

    public loadPNG(url : any, callbk : any) : void {
        if(Laya.loader.getRes(url) != null)
        {
            // if(Laya.loader.getRes(url).released == true)
            // {
            //     let texture : Texture =Laya.loader.getRes(url);
            //     texture.bitmap.on(Event.RECOVERED,this,function() : void{
            //          callbk.run();
            //     });
            //     texture.active();
            //     // texture.load(url);
            //     // callbk.run();
                
            // }
            // else 
            // {
                callbk.run();
            // }
            
            return;
        }
        
       Laya.loader.load(url, callbk, null, "image");
    }

    public getPNG(url : string) : Texture {
        return Laya.loader.getRes(url) as Texture;
    }

    /**
     * 根据图片地址创建sprite
     * @param url 图片地址
     * @param sprite 默认为空 如果不为空 直接在此sprite上绘制 
     */
    public createSprite(url : string, sprite?: Sprite) : Sprite{
        let sp : Sprite = sprite || new Sprite();
        let tex: Texture;
        if(Laya.loader.getRes(url) == null)
        {
            this.loadPNG(url,Handler.create(this,function() : void{
                tex = this.getPNG(url);
                sp.graphics.drawTexture(tex);
                if (tex)
                {
                    sp.size(tex.sourceWidth, tex.sourceHeight);
                }
            }));
        }
        else 
        {
            tex = this.getPNG(url);
            sp.graphics.drawTexture(tex);
            if (tex)
            {
                sp.size(tex.sourceWidth, tex.sourceHeight);
            }
        }
        return sp;
    }

    public createImg(url: string, img?: Image): Image
    {
        if (!img)
        {
            img = new Image();
        }
        this.loadPNG(url, Handler.create(this, function()
        {
            img.skin = url;
        }));
        return img;
    }

    public loadModel(url : any, callbk : any) : any {
        if(Laya.loader.getRes(url) &&Laya.loader.getRes(url)["_children"] &&Laya.loader.getRes(url).getChildAt(0))
        {
            callbk.run();
            return;
        }
        
       Laya.loader.create(url, callbk);
    }

    public load(url : string, callbk : Handler) : void{
        if(Laya.loader.getRes(url) != null)
        {
            callbk.run();
            return;
        }
       Laya.loader.load(url,callbk);
    }

    public loadJson(url : any, callbk : Handler) : void{
        if(Laya.loader.getRes(url) != null)
        {
            callbk.run();
            return;
        }
       Laya.loader.load(url, callbk,null,Loader.JSON);
    }

    public loadAtlas(url : any, callbk : Handler) : void
    {
        if(Laya.loader.getRes(url) != null)
        {
            callbk.run();
            return;
        }
       Laya.loader.load(url,callbk,null,Laya.Loader.ATLAS);
    }

    public loadAnimation(aniUrl: string, atlasUrl: string, callbk: Handler): void
    {
        if (atlasUrl != "" && atlasUrl != null)
        {
            if(Laya.loader.getRes(aniUrl) != null &&Laya.loader.getRes(atlasUrl) != null)
            {
                callbk.run();
                return;
            }
        }
        else
        {
            if(Laya.loader.getRes(aniUrl) != null)
            {
                callbk.run();
                return;
            }
        }
       Laya.loader.load(aniUrl, Handler.create(this, function()
        {
            if (atlasUrl != null && atlasUrl != "")
            {
               Laya.loader.load(atlasUrl, Handler.create(this, function()
                {
                    this.animationList[aniUrl] = atlasUrl;
                    callbk.run();
                }), null,Loader.ATLAS)
            }
            else
            {
                callbk.run();
            }
        }, null, false), null,Loader.JSON);
    }

    
    public getSpine(url : string) : Templet {
        return this.spineList[url];
    }

    public createSpine(url : string, animation?: string, loop : boolean = true, callbk : Handler = null) : Skeleton {
        var sk: Skeleton;
        if (this.spineList[url])
        {
            sk = this.spineList[url].buildArmature(0);
            if (animation != null)
            {
                sk.play(animation, loop);
            }

            if (callbk != null)
            {
                callbk.runWith(sk);
            }
        }
        else
        {
            sk = new Skeleton();
            this.loadSpine(url, Handler.create(this, function()
            {
                sk.init(this.spineList[url], 0);
                if (animation != null)
                {
                    sk.play(animation, loop);
                }

                if (callbk != null)
                {
                    callbk.runWith(sk);
                }
            }))
        }
        return sk
    }

    // public createAnimation(url: string, animation?: string): Animation
    // {
    //     var ani: Animation = new Animation();
    //     ani.source = url;
    //     if (animation)
    //     {
    //         ani.play(null, true, animation);
    //     }
    //     return ani;
    // }


    public getTexture(url : string, callbk : Handler) : void {
        let res =Laya.loader.getRes(url);

        if (res) {
            callbk.runWith(res);
        }
        else {
            this.loadTexture(url, callbk);
        }
    }

    public tryGetTexture(url : string) : Texture2D {
        let res =Laya.loader.getRes(url);

        if (res) {
            return res;
        }
        else {
            return null;
        }
    }

    private idx : number = 0;
    public loadList(urls : string[],caller : any, onProgress : (index : number, total : number) => void, onComplete : () => void) : ResMgr
    {
        if(urls.length == 0)
        {
            onComplete.call(caller);
            return;
        }
        let item  = {
            id : this.idx,
            urls : urls,
            caller : caller,
            index : 0,
            onProgress:onProgress,
            onComplete : onComplete
        }
        this.idx ++;
        this.startLoad(item);
    }

    private startLoad (item : loadItem) : void
    {
        if(item.urls.length <= item.index)
        {
            if(item.onComplete != null)
            {
                item.onComplete.call(item.caller);
            }
            return;
        }
        let url = item.urls[item.index];
        
        item.index++;
        if(item.onProgress != null)
        {
            item.onProgress.call(item.caller,item.index,item.urls.length);
        }
        this.loadOnce(url, this.startLoad, item);
    }

    private loadOnce(url : any, callBack : (item : loadItem) => void,item : loadItem) : void
    {
        if(url instanceof Object)
        {
            url = url.url;
        }
        let type : string = url.substr(url.indexOf('.') + 1).toLowerCase();
        let f  = Handler.create(this,function(par_callBk,par_this,par_item,par_url) : void{
            par_callBk.call(par_this,par_item);
        },[callBack,this,item,url]);
        switch(type)
        {
            case "png":
                if(url.indexOf("texture/") == -1)
                {
                        this.loadPNG(url,f);
                }
                else 
                {
                    this.loadTexture(url,f);
                }
                break;
            case "sk":
                this.loadSpine(url, f);
                break;
            case "lh":
                this.loadModel(url, f);
                break;
            case "json":
            case "lang":
                this.loadJson(url,f);
                break;
            case "atlas":
                this.loadAtlas(url,f);
                break;
            case "ani":
                this.loadAnimation(url, null, f);
                break;
            default:
                this.load(url,f);
                break;
        }
    }
}