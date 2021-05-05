window.Laya=window.Laya||{};

(function (Laya$1) {
    'use strict';

    class WXTool extends Laya$1.Script {
        static addBtn(btn) {
            this._btns.push(btn);
        }
        static removeBtn(btn) {
            this._btns.slice(this._btns.indexOf(btn), 1);
        }
        static hideAllBtn() {
            this._btns.forEach(element => {
                element.style.hidden = true;
            });
        }
        static showAllBtn() {
            this._btns.forEach(element => {
                element.style.hidden = false;
            });
        }
    }
    WXTool._btns = [];

    class SceneMgr extends Laya$1.Script {
    }

    class URI extends Laya.Script {
    }
    URI.prefabUrl = "prefab/";
    URI.spineUrl = "res/spine/";
    URI.soundUrl = "sound/";

    class AppConfig extends Laya$1.Script {
        static getInitLoadingUrls() {
            if (AppConfig.platform == "wx") {
                return [
                    "res/atlas/map.atlas",
                    "res/data.json",
                    URI.spineUrl + "other_taozhuangxitong1.png",
                    URI.spineUrl + "other_wupinghuanrao_kin_little.png",
                    "res/atlas/test.atlas"
                ];
            }
            else {
                return [
                    "res/data.json",
                    URI.spineUrl + "other_taozhuangxitong1.sk",
                    URI.spineUrl + "other_wupinghuanrao_kin_little.sk",
                ];
            }
        }
        static getAsynUrls() {
            return [
                "sound/hecheng.wav",
                "sound/teji.wav",
                "sound/xiahua.wav",
                "sound/xiaochu.wav",
                "sound/yidong.wav"
            ];
        }
        static getMobileHeight() {
            let tt = Laya$1.Laya.Browser.window.screen.height;
            if (AppConfig.platform != "wx") {
                return tt;
            }
            let wxInfo = Laya$1.Browser.window.wx.getSystemInfoSync();
            console.log('wx height:', wxInfo.windowHeight, ', widht:', wxInfo.windowWidth);
            let h = 640 * wxInfo.windowHeight / wxInfo.windowWidth;
            console.log('h:', h);
            if (h > 1300) {
                return h;
            }
            return 1300;
        }
        static getMobileWidth() {
            let tt = Laya$1.Laya.Browser.window.screen.width;
            if (AppConfig.platform != "wx") {
                return tt;
            }
            return 640;
        }
        static hadGuidance() {
            let bo = localStorage.getItem("guide_tt1");
            if (bo == "true") {
                return true;
            }
            return false;
        }
        static setGuidance(value) {
            if (value) {
                localStorage.setItem("guide_tt1", "true");
            }
            else {
                localStorage.setItem("guide_tt1", "false");
            }
        }
        static hadGuidanceHz() {
            let bo = localStorage.getItem("guide_tthz");
            if (bo == "true") {
                return true;
            }
            return false;
        }
        static setGuidanceHz(value) {
            if (value) {
                localStorage.setItem("guide_tthz", "true");
            }
            else {
                localStorage.setItem("guide_tthz", "false");
            }
        }
        static get isNative() {
            return false;
        }
    }
    AppConfig.asynUrlsLoaded = false;
    AppConfig.pools = {};
    AppConfig.platform = "web";
    AppConfig.version = "1.1.4";

    class SceneBase extends Laya$1.Script {
        onAwake() {
            SceneMgr.curSceneScript = this;
            this.createWxOpenDataViewer();
            let arr = Object.getOwnPropertyNames(this.owner);
            let self = this;
            arr.forEach(element => {
                if (element.indexOf("_") == -1) {
                    return;
                }
                let tempPropertyStr = element.toString();
                let tempPropertyList = tempPropertyStr.split("_");
                switch (tempPropertyList[0]) {
                    case "list":
                    case "txt":
                    case "img":
                    case "btn":
                    case "mc":
                        self[tempPropertyStr] = self.owner[tempPropertyStr];
                        break;
                    default:
                        break;
                }
            });
        }
        addPopUp(sign, content, isCenter = true, isShowAlphaSpr = true, isEnableAlphaClose = false) {
            this._popUpSign = sign;
            this._popUpContent = content;
            if (this._popUpSpr == null) {
                this._popUpSpr = new Laya$1.Sprite();
                Laya$1.Laya.stage.addChild(this._popUpSpr);
            }
            else {
                this._popUpSpr.visible = true;
            }
            let h = AppConfig.getMobileHeight();
            if (isCenter) {
                if (content instanceof Laya$1.Sprite) {
                    content.x = (Laya$1.Laya.stage.width - content.width) / 2;
                    content.y = (h - content.height) / 2;
                }
                if (content instanceof Laya$1.Box) {
                    content.centerX = 0;
                    content.centerY = 0;
                }
            }
            if (isShowAlphaSpr) {
                if (this._alphaSpr == null) {
                    this._alphaSpr = new Laya$1.Sprite();
                    this._alphaSpr.width = Laya$1.Laya.stage.width;
                    this._alphaSpr.height = Laya$1.Laya.stage.height;
                    this._alphaSpr.graphics.drawRect(0, 0, Laya$1.Laya.stage.width, h, "#000000");
                    this._alphaSpr.alpha = 0.4;
                    this._popUpSpr.addChild(this._alphaSpr);
                }
                if (isEnableAlphaClose) {
                    this._alphaSpr.on(Laya$1.Laya.Event.CLICK, this, this.hidePopUp);
                }
            }
            else if (this._alphaSpr) {
                this._alphaSpr.visible = false;
            }
            this._popUpSpr.addChild(this._popUpContent);
        }
        hidePopUp() {
            if (this._popUpSpr) {
                this._popUpSpr.visible = false;
            }
            if (this._popUpContent) {
                if (this._popUpContent == this._dataViewer) {
                    this._popUpContent.visible = false;
                }
                else {
                    this._popUpContent.destroy();
                }
            }
            this._popUpSign = null;
        }
        addDialog(content, isCenter = true, isShowAlphaSpr = true, isEnableAlphaClose = false) {
            this._dialogContent = content;
            if (this._dialogSpr == null) {
                this._dialogSpr = new Laya$1.Sprite();
                Laya$1.Laya.stage.addChild(this._dialogSpr);
            }
            else {
                this._dialogSpr.visible = true;
            }
            let h = AppConfig.getMobileHeight();
            if (isCenter) {
                content.x = (Laya$1.Laya.stage.width - content.width) / 2;
                content.y = (h - content.height) / 2;
            }
            if (isShowAlphaSpr) {
                if (this._alphaDialogSpr == null) {
                    this._alphaDialogSpr = new Laya$1.Sprite();
                    this._alphaDialogSpr.width = Laya$1.Laya.stage.width;
                    this._alphaDialogSpr.height = h;
                    this._alphaDialogSpr.graphics.drawRect(0, 0, Laya$1.Laya.stage.width, h, "#000000");
                    this._alphaDialogSpr.alpha = 0.4;
                    this._alphaDialogSpr.mouseEnabled = true;
                    this._alphaDialogSpr.mouseThrough = false;
                    this._dialogSpr.addChild(this._alphaDialogSpr);
                }
                if (isEnableAlphaClose) {
                    this._alphaDialogSpr.on(Laya$1.Laya.Event.CLICK, this, this.hideDialog);
                }
            }
            else if (this._alphaDialogSpr) {
                this._alphaDialogSpr.visible = false;
            }
            this._dialogSpr.addChild(this._dialogContent);
        }
        hideDialog() {
            if (this._dialogSpr) {
                this._dialogSpr.visible = false;
            }
            if (this._dialogContent) {
                if (this._dialogContent == this._dataViewer) {
                    this._dialogContent.visible = false;
                    WXTool.showAllBtn();
                }
                else {
                    this._dialogContent.destroy();
                }
            }
        }
        createWxOpenDataViewer() {
            if (this._dataViewer == null) {
                this._dataViewer = new Laya$1.WXOpenDataViewer();
                this._dataViewer.width = 610;
                this._dataViewer.height = 757;
                this._dataViewer.visible = false;
            }
        }
        showRank() {
            this._dataViewer.visible = true;
            this._dataViewer.postMsg({ cmd: "refreshRankList" });
            this.addDialog(this._dataViewer, true, true, true);
            WXTool.hideAllBtn();
        }
    }

    class LoadingScene extends SceneBase {
        constructor() { super(); }
        onAwake() {
            super.onAwake();
            this.owner["height"] = Laya$1.Laya.stage.height;
        }
        onEnable() {
        }
        onDisable() {
        }
        updatePercent(value) {
            this.txt_progress.text = "正在加载资源 " + value + "%";
        }
    }

    class ModelBase {
        constructor() {
            this.isRecover = false;
            this._____id = ModelBase.modelIdIncrease;
            ModelBase.modelIdIncrease++;
        }
        setData(obj) {
            let struct = this.getStruct();
            if (obj instanceof Array && struct != null) {
                for (let i = 0; i < struct.length; i++) {
                    this[struct[i]] = obj[i];
                }
            }
            else {
                for (let tempPro in obj) {
                    this[tempPro] = obj[tempPro];
                }
            }
        }
        getStruct() {
            return null;
        }
        getSign() {
            if (this._sign == null) {
                this._sign = this["__proto__"].constructor.name;
            }
            return this._sign;
        }
        static create(data) {
            if (AppConfig.pools['ModelBase'] == null) {
                AppConfig.pools['ModelBase'] = { sign: 'ModelBase', pool: ModelBase._pool, createCount: 0, recoverCount: 0 };
            }
            AppConfig.pools['ModelBase'].createCount++;
            let cout;
            if (ModelBase._pool.length > 0) {
                cout = ModelBase._pool.pop();
                cout.isRecover = false;
            }
            else {
                cout = new ModelBase();
            }
            if (data != null)
                cout.setDataByKey(data);
            return cout;
        }
        recover() {
            if (this.isRecover) {
                return;
            }
            if (AppConfig.pools['ModelBase'] == null) {
                AppConfig.pools['ModelBase'] = { sign: 'ModelBase', pool: ModelBase._pool, createCount: 0, recoverCount: 0 };
            }
            AppConfig.pools['ModelBase'].recoverCount++;
            ModelBase._pool.push(this);
            this.isRecover = true;
        }
        setDataByKey(value) {
        }
    }
    ModelBase.modelIdIncrease = 0;
    ModelBase._pool = [];

    class ResMgr {
        constructor() {
            this.spineList = {};
            this.textureList = {};
            this.animationList = {};
            this.modelDelayList = {};
            this.idx = 0;
        }
        static Instance() {
            if (ResMgr.instance == null) {
                ResMgr.instance = new ResMgr();
            }
            return ResMgr.instance;
        }
        releaseSpine(url) {
            if (this.spineList[url]) {
                let spine = this.spineList[url];
                for (let i = 0; i < spine["_loadList"].length; i++) {
                    let texture = spine.getTexture(spine["_loadList"][i]);
                    if (texture) {
                        texture.disposeBitmap();
                        texture.destroy();
                    }
                }
                spine.destroy();
                Laya$1.Laya.loader.clearRes(url);
                this.spineList[url] = null;
            }
        }
        loadSpine(url, callbk) {
            var self = this;
            var num = 0;
            var loadFunc = function (spine) {
                var complete = function () {
                    self.spineList[spine] = factory;
                    if ((url instanceof Array)) {
                        num++;
                        if (num == url.length) {
                            callbk.run();
                        }
                    }
                    else {
                        callbk.run();
                    }
                };
                var factory = new Laya$1.Templet();
                factory.on(Laya$1.Event.COMPLETE, self, complete);
                factory.loadAni(spine);
            };
            if ((url instanceof Array)) {
                for (var i = 0; i < url.length; i++) {
                    loadFunc(url[i]);
                }
            }
            else {
                loadFunc(url);
            }
        }
        loadTexture(url, callbk) {
            var self = this;
            if ((url instanceof Array)) {
                for (var i = 0; i < url.length; i++) {
                    if (i == (url.length - 1)) {
                        Laya$1.Texture2D.load(url[i], callbk);
                    }
                    else {
                        Laya$1.Texture2D.load(url[i], null);
                    }
                }
            }
            else {
                Laya$1.Texture2D.load(url, callbk);
            }
        }
        loadPNG(url, callbk) {
            if (Laya$1.Laya.loader.getRes(url) != null) {
                callbk.run();
                return;
            }
            Laya$1.Laya.loader.load(url, callbk, null, "image");
        }
        getPNG(url) {
            return Laya$1.Laya.loader.getRes(url);
        }
        createSprite(url, sprite) {
            let sp = sprite || new Laya$1.Sprite();
            let tex;
            if (Laya$1.Laya.loader.getRes(url) == null) {
                this.loadPNG(url, Laya$1.Handler.create(this, function () {
                    tex = this.getPNG(url);
                    sp.graphics.drawTexture(tex);
                    if (tex) {
                        sp.size(tex.sourceWidth, tex.sourceHeight);
                    }
                }));
            }
            else {
                tex = this.getPNG(url);
                sp.graphics.drawTexture(tex);
                if (tex) {
                    sp.size(tex.sourceWidth, tex.sourceHeight);
                }
            }
            return sp;
        }
        createImg(url, img) {
            if (!img) {
                img = new Laya$1.Image();
            }
            this.loadPNG(url, Laya$1.Handler.create(this, function () {
                img.skin = url;
            }));
            return img;
        }
        loadModel(url, callbk) {
            if (Laya$1.Laya.loader.getRes(url) && Laya$1.Laya.loader.getRes(url)["_children"] && Laya$1.Laya.loader.getRes(url).getChildAt(0)) {
                callbk.run();
                return;
            }
            Laya$1.Laya.loader.create(url, callbk);
        }
        load(url, callbk) {
            if (Laya$1.Laya.loader.getRes(url) != null) {
                callbk.run();
                return;
            }
            Laya$1.Laya.loader.load(url, callbk);
        }
        loadJson(url, callbk) {
            if (Laya$1.Laya.loader.getRes(url) != null) {
                callbk.run();
                return;
            }
            Laya$1.Laya.loader.load(url, callbk, null, Laya$1.Loader.JSON);
        }
        loadAtlas(url, callbk) {
            if (Laya$1.Laya.loader.getRes(url) != null) {
                callbk.run();
                return;
            }
            Laya$1.Laya.loader.load(url, callbk, null, Laya$1.Laya.Loader.ATLAS);
        }
        loadAnimation(aniUrl, atlasUrl, callbk) {
            if (atlasUrl != "" && atlasUrl != null) {
                if (Laya$1.Laya.loader.getRes(aniUrl) != null && Laya$1.Laya.loader.getRes(atlasUrl) != null) {
                    callbk.run();
                    return;
                }
            }
            else {
                if (Laya$1.Laya.loader.getRes(aniUrl) != null) {
                    callbk.run();
                    return;
                }
            }
            Laya$1.Laya.loader.load(aniUrl, Laya$1.Handler.create(this, function () {
                if (atlasUrl != null && atlasUrl != "") {
                    Laya$1.Laya.loader.load(atlasUrl, Laya$1.Handler.create(this, function () {
                        this.animationList[aniUrl] = atlasUrl;
                        callbk.run();
                    }), null, Laya$1.Loader.ATLAS);
                }
                else {
                    callbk.run();
                }
            }, null, false), null, Laya$1.Loader.JSON);
        }
        getSpine(url) {
            return this.spineList[url];
        }
        createSpine(url, animation, loop = true, callbk = null) {
            var sk;
            if (this.spineList[url]) {
                sk = this.spineList[url].buildArmature(0);
                if (animation != null) {
                    sk.play(animation, loop);
                }
                if (callbk != null) {
                    callbk.runWith(sk);
                }
            }
            else {
                sk = new Laya$1.Skeleton();
                this.loadSpine(url, Laya$1.Handler.create(this, function () {
                    sk.init(this.spineList[url], 0);
                    if (animation != null) {
                        sk.play(animation, loop);
                    }
                    if (callbk != null) {
                        callbk.runWith(sk);
                    }
                }));
            }
            return sk;
        }
        getTexture(url, callbk) {
            let res = Laya$1.Laya.loader.getRes(url);
            if (res) {
                callbk.runWith(res);
            }
            else {
                this.loadTexture(url, callbk);
            }
        }
        tryGetTexture(url) {
            let res = Laya$1.Laya.loader.getRes(url);
            if (res) {
                return res;
            }
            else {
                return null;
            }
        }
        loadList(urls, caller, onProgress, onComplete) {
            if (urls.length == 0) {
                onComplete.call(caller);
                return;
            }
            let item = {
                id: this.idx,
                urls: urls,
                caller: caller,
                index: 0,
                onProgress: onProgress,
                onComplete: onComplete
            };
            this.idx++;
            this.startLoad(item);
        }
        startLoad(item) {
            if (item.urls.length <= item.index) {
                if (item.onComplete != null) {
                    item.onComplete.call(item.caller);
                }
                return;
            }
            let url = item.urls[item.index];
            item.index++;
            if (item.onProgress != null) {
                item.onProgress.call(item.caller, item.index, item.urls.length);
            }
            this.loadOnce(url, this.startLoad, item);
        }
        loadOnce(url, callBack, item) {
            if (url instanceof Object) {
                url = url.url;
            }
            let type = url.substr(url.indexOf('.') + 1).toLowerCase();
            let f = Laya$1.Handler.create(this, function (par_callBk, par_this, par_item, par_url) {
                par_callBk.call(par_this, par_item);
            }, [callBack, this, item, url]);
            switch (type) {
                case "png":
                    if (url.indexOf("texture/") == -1) {
                        this.loadPNG(url, f);
                    }
                    else {
                        this.loadTexture(url, f);
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
                    this.loadJson(url, f);
                    break;
                case "atlas":
                    this.loadAtlas(url, f);
                    break;
                case "ani":
                    this.loadAnimation(url, null, f);
                    break;
                default:
                    this.load(url, f);
                    break;
            }
        }
    }
    ResMgr.instance = null;

    class MapFontInfo extends ModelBase {
        constructor() {
            super(...arguments);
            this._quality = 1;
        }
        static getGroup(font) {
            if (MapFontInfo._groupCache[font] == null) {
                let arr = [];
                for (let i = 0; i < MapFontInfo.DataSource["group"].length; i++) {
                    let tempGroup = MapFontInfo.DataSource["group"][i];
                    if (tempGroup.indexOf(font) != -1) {
                        arr.push(tempGroup);
                    }
                }
                for (let i = 0; i < MapFontInfo.DataSource["bank"].length; i++) {
                    let tempGroup = MapFontInfo.DataSource["bank"][i];
                    if (tempGroup.indexOf(font) != -1) {
                        arr.push(tempGroup);
                    }
                }
                MapFontInfo._groupCache[font] = arr;
            }
            return MapFontInfo._groupCache[font];
        }
        get quality() {
            return this._quality;
        }
        set quality(value) {
            if (value > 4) {
                value = 4;
            }
            this._quality = value;
        }
        static create(data) {
            if (AppConfig.pools['MapFontInfo'] == null) {
                AppConfig.pools['MapFontInfo'] = { sign: 'MapFontInfo', pool: MapFontInfo._pool, createCount: 0, recoverCount: 0 };
            }
            AppConfig.pools['MapFontInfo'].createCount++;
            let cout;
            if (MapFontInfo._pool.length > 0) {
                cout = MapFontInfo._pool.pop();
                cout.isRecover = false;
            }
            else {
                cout = new MapFontInfo();
            }
            if (data != null)
                cout.setDataByKey(data);
            return cout;
        }
        get canHeChengGroup() {
            if (MapFontInfo._heChengCiZuObj[this.text] == null) {
                let cout = [];
                MapFontInfo.DataSource["group"].forEach(element => {
                    if (element.indexOf(this.text) != -1) {
                        cout.push(element);
                    }
                });
                MapFontInfo.DataSource["bank"].forEach(element => {
                    if (element.indexOf(this.text) != -1) {
                        cout.push(element);
                    }
                });
                MapFontInfo._heChengCiZuObj[this.text] = cout;
            }
            return MapFontInfo._heChengCiZuObj[this.text].length > 0;
        }
        get canHeChengGroups() {
            if (this.canHeChengGroup) {
                return MapFontInfo._heChengCiZuObj[this.text];
            }
            return [];
        }
        getStructInfos(fontId = null, isExceptSelf = true) {
            let cout = [];
            if (fontId == this.id && isExceptSelf == false) {
                cout.push(fontId.toString());
            }
            else {
                this.structInfo.split(",").forEach(element => {
                    if (fontId == null) {
                        if (element == this.id.toString()) {
                            return;
                        }
                        cout.push(element);
                    }
                    else {
                        if (isExceptSelf && element == fontId.toString()) {
                            return;
                        }
                        if (element.split("_").indexOf(fontId.toString()) != -1) {
                            cout.push(element);
                        }
                    }
                });
            }
            return cout;
        }
        get canHeChengFont() {
            if (MapFontInfo._heChengHanZiObj[this.text] == null) {
                let cout = [];
                MapFontInfo.DataSource["font"].forEach(element => {
                    let fontInfo = MapFontInfo.create();
                    fontInfo.setDataByValueArr(element);
                    let structInfos = fontInfo.getStructInfos(this.id);
                    if (structInfos.length > 0) {
                        cout.push(fontInfo);
                    }
                });
                MapFontInfo._heChengHanZiObj[this.text] = cout;
            }
            return MapFontInfo._heChengHanZiObj[this.text].length > 0;
        }
        get canHeChengFontInfos() {
            if (this.canHeChengFont) {
                return MapFontInfo._heChengHanZiObj[this.text];
            }
            return [];
        }
        getStuntFontEffect() {
            if (!this.isStuntFont) {
                return null;
            }
            if (this._stuntFontEffect == null) {
                this._stuntFontEffect = ResMgr.Instance().createSpine(URI.spineUrl + "other_wupinghuanrao_kin_little.sk", "animation", true);
                this._stuntFontEffect.x = this._stuntFontEffect.y = 44;
                this._stuntFontEffect.scaleX = this._stuntFontEffect.scaleY = 1.3;
            }
            return this._stuntFontEffect;
        }
        destroyStuntEffect() {
            if (this._stuntFontEffect) {
                this._stuntFontEffect.destroy(true);
                this._stuntFontEffect = null;
            }
        }
        getStruct() {
            return MapFontInfo.DataSource["font_struct"];
        }
        recover() {
            if (this.isRecover) {
                return;
            }
            if (this._stuntFontEffect) {
                this._stuntFontEffect.destroy(true);
            }
            this._stuntFontEffect = null;
            if (AppConfig.pools['MapFontInfo'] == null) {
                AppConfig.pools['MapFontInfo'] = { sign: 'MapFontInfo', pool: MapFontInfo._pool, createCount: 0, recoverCount: 0 };
            }
            AppConfig.pools['MapFontInfo'].recoverCount++;
            MapFontInfo._pool.push(this);
            this.isRecover = true;
        }
        setDataByValueArr(dataArr) {
            let fontStruct = MapFontInfo.DataSource["font_struct"];
            let obj;
            for (let i = 0; i < dataArr.length; i++) {
                if (fontStruct.length > i)
                    this[fontStruct[i]] = dataArr[i];
            }
        }
        setDataByKey(value) {
            let obj;
            if (value["text"] == "*") {
                obj = value;
            }
            else {
                let fontStruct = MapFontInfo.DataSource["font_struct"];
                let fontDatas = MapFontInfo.DataSource["font"];
                for (let i = 0; i < fontDatas.length; i++) {
                    let fontArr = MapFontInfo.DataSource["font"][i];
                    let isMeet = true;
                    for (let tempProperty in value) {
                        if (value[tempProperty] != fontArr[fontStruct.indexOf(tempProperty)]) {
                            isMeet = false;
                            break;
                        }
                    }
                    if (isMeet) {
                        obj = {};
                        for (let j = 0; j < fontStruct.length; j++) {
                            obj[fontStruct[j]] = fontArr[j];
                        }
                        break;
                    }
                }
            }
            if (obj != null) {
                this.setData(obj);
            }
        }
    }
    MapFontInfo._groupCache = {};
    MapFontInfo._pool = [];
    MapFontInfo._heChengCiZuObj = {};
    MapFontInfo._heChengHanZiObj = {};

    class PrefebBase extends Laya$1.Script {
        static setPrefeb(value) {
            PrefebBase._prefeb = value;
        }
        onAwake() {
            for (let i = 0; i < this.owner.numChildren; i++) {
                let element = this.owner.getChildAt(i);
                if (element.name == "" || element.name.indexOf("_") == -1) {
                    continue;
                }
                let tempPropertyList = element.name.split("_");
                switch (tempPropertyList[0]) {
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
        static getPrefeb() {
            return this._prefeb;
        }
        static getSign() {
            return this["__proto__"].constructor.name;
        }
        static create() {
            return Laya$1.Pool.getItemByCreateFun(PrefebBase.getSign(), PrefebBase._prefeb.create, PrefebBase._prefeb);
        }
        recover() {
            Laya$1.Pool.recover(PrefebBase.getSign(), this);
        }
    }

    class ControllerMgr {
        static getInstance(c) {
            let sign = c["name"];
            let item = ControllerMgr._controllerObjs[sign];
            if (item == null) {
                item = new c();
                ControllerMgr._controllerObjs[sign] = item;
            }
            return item;
        }
    }
    ControllerMgr._controllerObjs = {};
    window["ControllerMgr"] = ControllerMgr;

    class ControllerBase {
        getSign() {
            return this["__proto__"].constructor.name;
        }
        show() {
        }
        close() {
        }
        destroy() {
        }
    }
    ControllerBase._controllerObjs = {};

    class TipItem extends PrefebBase {
        constructor() {
            super();
            this.text = "d";
        }
        onAwake() {
            super.onAwake();
            this.txt_text.text = this.text;
            this.img_bg.width = this.txt_text.displayWidth + 36;
            this.owner["width"] = this.img_bg.width;
        }
        onEnable() {
        }
        onDisable() {
        }
    }

    class TipController extends ControllerBase {
        constructor() {
            super(...arguments);
            this._labels = [];
            this._startY = 960;
            this._tipItems = [];
            this._tipItemStartY = 550;
        }
        get tipSpr() {
            return this._tipSpr;
        }
        init() {
            this._tipSpr = new Laya$1.Sprite();
            this._tipSpr.name = "TipSpr";
            Laya$1.Laya.stage.addChild(this._tipSpr);
            Laya$1.Laya.loader.load("prefab/TipItem.json", Laya$1.Laya.Handler.create(this, this.onLoadTipItemComplete));
        }
        onLoadTipItemComplete() {
            this._tipItemPrefab = new Laya$1.Prefab();
            this._tipItemPrefab.json = Laya$1.Laya.loader.getRes("prefab/TipItem.json");
        }
        showLeftBottomTip(text) {
            let label = new Laya$1.Label();
            label.color = "#204800";
            label.text = text;
            label.font = "SimHei";
            label.fontSize = 30;
            label.anchorY = 1;
            label.y = this._startY;
            this._tipSpr.addChild(label);
            this._labels.push(label);
            this.sortLabels();
            Laya$1.Laya.timer.once(1000, this, function () {
                Laya$1.Tween.to(label, { alpha: 0 }, 300);
            });
            Laya$1.Laya.timer.once(1300, this, function () {
                this._labels.splice(this._labels.indexOf(label), 1);
                Laya$1.Laya.timer.clearAll(label);
                label.destroy(true);
            });
        }
        showCenterBottomTip(text) {
            let sysInfo = Laya$1.Browser.window.wx.getSystemInfoSync();
            let width = sysInfo.screenWidth;
            let height = sysInfo.screenHeight;
            let label = new Laya$1.Label();
            label.color = "#204800";
            label.text = text;
            label.font = "SimHei";
            label.fontSize = 35;
            label.anchorY = 1;
            label.y = height / 2 + 150;
            label.x = width / 2 - 80;
            this._tipSpr.addChild(label);
            this._labels.push(label);
            this.sortLabels();
            Laya$1.Laya.timer.once(1000, this, function () {
                Laya$1.Tween.to(label, { alpha: 0 }, 300);
            });
            Laya$1.Laya.timer.once(2300, this, function () {
                this._labels.splice(this._labels.indexOf(label), 1);
                Laya$1.Laya.timer.clearAll(label);
                label.destroy(true);
            });
        }
        sortLabels() {
            for (let i; i < this._labels.length; i++) {
                let label = this._labels[i];
                let targetY = this._startY - 40 * i;
                Laya$1.Tween.to(label, { y: targetY }, 100);
            }
        }
        showTip(txt) {
            if (this._tipItemPrefab != null) {
                let tipItemSpr = Laya$1.Pool.getItemByCreateFun("TipItem", this._tipItemPrefab.create, this._tipItemPrefab);
                let tipItemScript = tipItemSpr.getComponent(TipItem);
                tipItemScript.text = txt;
                this._tipSpr.addChild(tipItemSpr);
                tipItemSpr.x = (Laya$1.Laya.stage.width - tipItemSpr.width) / 2;
                tipItemSpr.y = this._tipItemStartY - 60;
                this._tipItems.push(tipItemSpr);
                this.sortTipItems();
                Laya$1.Laya.timer.once(1000, this, function () {
                    Laya$1.Tween.to(tipItemSpr, { alpha: 0 }, 300);
                });
                Laya$1.Laya.timer.once(1300, this, function () {
                    this._tipItems.splice(this._tipItems.indexOf(tipItemSpr), 1);
                    Laya$1.Laya.timer.clearAll(tipItemSpr);
                    tipItemSpr.destroy(true);
                });
            }
        }
        sortTipItems() {
            for (let i = 0; i < this._tipItems.length; i++) {
                let label = this._tipItems[i];
                let targetY = this._tipItemStartY - 60 * (this._tipItems.length - i);
                Laya$1.Tween.to(label, { y: targetY }, 100);
            }
        }
    }
    window["TipController"] = TipController;

    class MapStarInfo extends ModelBase {
        static create(data) {
            if (AppConfig.pools['MapStarInfo'] == null) {
                AppConfig.pools['MapStarInfo'] = { sign: 'MapStarInfo', pool: MapStarInfo._pool, createCount: 0, recoverCount: 0 };
            }
            AppConfig.pools['MapStarInfo'].createCount++;
            let cout;
            if (MapStarInfo._pool.length > 0) {
                cout = MapStarInfo._pool.pop();
                cout.isRecover = false;
            }
            else {
                cout = new MapStarInfo();
            }
            if (data != null)
                cout.setDataByKey(data);
            return cout;
        }
        getStruct() {
            return MapFontInfo.DataSource["star_struct"];
        }
        recover() {
            if (this.isRecover) {
                return;
            }
            if (AppConfig.pools['MapStarInfo'] == null) {
                AppConfig.pools['MapStarInfo'] = { sign: 'MapStarInfo', pool: MapStarInfo._pool, createCount: 0, recoverCount: 0 };
            }
            AppConfig.pools['MapStarInfo'].recoverCount++;
            MapStarInfo._pool.push(this);
            this.isRecover = true;
        }
        setDataByKey(value) {
            let obj;
            let struct = this.getStruct();
            let datas = MapFontInfo.DataSource["star"];
            for (let i = 0; i < datas.length; i++) {
                let fontArr = datas[i];
                let isMeet = true;
                for (let tempProperty in value) {
                    if (value[tempProperty] != fontArr[struct.indexOf(tempProperty)]) {
                        isMeet = false;
                        break;
                    }
                }
                if (isMeet) {
                    obj = {};
                    for (let j = 0; j < struct.length; j++) {
                        obj[struct[j]] = fontArr[j];
                    }
                    break;
                }
            }
            if (obj != null) {
                this.setData(obj);
            }
        }
    }
    MapStarInfo._pool = [];

    class PlayerInfo extends ModelBase {
        constructor() {
            super(...arguments);
            this.name = "test";
            this.url = "http://cdn.duitang.com/uploads/item/201410/08/20141008150015_dP8yJ.thumb.700_0.jpeg";
            this.wannengUseTimes = 4;
            this.guideUseTimes = 4;
            this.comeBackTimes = 1;
        }
        getStarInfo(score) {
            let starNum;
            if (score < 1200) {
                starNum = 0;
            }
            else if (score < 2000) {
                starNum = 1;
            }
            else if (score < 2500) {
                starNum = 2;
            }
            else if (score < 3000) {
                starNum = 3;
            }
            else if (score < 4000) {
                starNum = 4;
            }
            else if (score < 5000) {
                starNum = 5;
            }
            else if (score < 6000) {
                starNum = 6;
            }
            else if (score < 7000) {
                starNum = 7;
            }
            else if (score < 8000) {
                starNum = 8;
            }
            else if (score < 9000) {
                starNum = 9;
            }
            else {
                starNum = 10;
            }
            if (this._starInfo == null || this._starInfo.star_num != starNum) {
                this._starInfo = MapStarInfo.create();
                if (this._starInfo.star_num != starNum) {
                    this._starInfo.setDataByKey({ star_num: starNum });
                }
            }
            return this._starInfo;
        }
    }

    class PlayerController extends ControllerBase {
        constructor() {
            super(...arguments);
            this.myPlayerInfo = new PlayerInfo();
        }
    }

    class WxMiniUtil {
        static login(completeHandler) {
            let sysInfo = Laya$1.Browser.window.wx.getSystemInfoSync();
            let width = sysInfo.screenWidth;
            let height = sysInfo.screenHeight;
            Laya$1.Browser.window.wx.getSetting({
                success(res) {
                    console.log(res.authSetting);
                    if (res.authSetting["scope.userInfo"]) {
                        console.log("用户已授权");
                        Laya$1.Browser.window.wx.getUserInfo({
                            success(res) {
                                console.log(res);
                                completeHandler.runWith(true);
                            }
                        });
                    }
                    else {
                        console.log("用户未授权");
                        let button = Laya$1.Browser.window.wx.createUserInfoButton({
                            type: 'text',
                            text: '',
                            style: {
                                left: 0,
                                top: 0,
                                width: width,
                                height: height,
                                backgroundColor: '#00000000',
                                color: '#ffffff',
                                fontSize: 20,
                                textAlign: "center",
                                lineHeight: height,
                            }
                        });
                        button.onTap((res) => {
                            if (res.userInfo) {
                                console.log("用户授权:", res);
                                completeHandler.runWith(true);
                                button.destroy();
                            }
                            else {
                                console.log("用户拒绝授权:", res);
                                completeHandler.runWith(false);
                            }
                        });
                    }
                }
            });
        }
        static update(hanlder) {
            const updateManager = Laya$1.Browser.window.wx.getUpdateManager();
            updateManager.onCheckForUpdate(function (res) {
                console.log("新版本信息：" + res.hasUpdate);
            });
            updateManager.onUpdateReady(function () {
                Laya$1.Browser.window.wx.showModal({
                    title: '更新提示',
                    content: '新版本已经准备好，是否重启应用？',
                    success(res) {
                        if (res.confirm) {
                            updateManager.applyUpdate();
                        }
                    }
                });
            });
            updateManager.onUpdateFailed(function () {
                console.log("新版本信息下载失败！！！！！");
            });
        }
        static getIsBangs(completeHandler) {
            Laya$1.Browser.window.wx.getSystemInfo({
                success: function (wxInfo) {
                    WxMiniUtil.wxinfo = wxInfo;
                    console.log('获取系统信息-----success:' + wxInfo);
                },
                fail: function (wxInfo) {
                    console.log('获取系统信息-----fail:' + wxInfo);
                },
                complete: function (wxInfo) {
                    console.log('获取系统信息-----complete:' + "windowHeight：" + wxInfo.windowHeight + " windowWidth:" + wxInfo.windowWidth);
                    let isBang = wxInfo.windowHeight / wxInfo.windowWidth > Laya$1.Laya.stage.designHeight / Laya$1.Laya.stage.designWidth ? "true" : "false";
                    completeHandler.runWith(isBang);
                }
            });
        }
        static shareWebPage(complete) {
            WxMiniUtil.shareWebHandler = complete;
            if (Laya$1.Browser.window.tt) {
                Laya$1.Browser.window.tt.shareAppMessage({
                    title: '趣味汉字',
                    desc: "#趣味汉字 #抖音小游戏",
                    imageUrl: "miniImg/miniShare.png",
                    success() {
                        console.log("分享成功");
                        WxMiniUtil.shareWebHandler.runWith("true");
                    },
                    fail(e) {
                        console.log("分享失败");
                        WxMiniUtil.shareWebHandler.runWith("false");
                    }
                });
            }
            else {
                Laya$1.Browser.window.wx.shareAppMessage({
                    title: '趣味汉字',
                    desc: "趣味汉字等你来战",
                    imageUrl: 'miniImg/miniShare.png'
                });
            }
        }
        static onShareAppMessage() {
            Laya$1.Browser.window.wx.onShareAppMessage(function () {
                return {
                    title: '趣味汉字',
                    biliContent: "#趣味汉字#",
                    imageUrl: 'miniImg/miniShare.png'
                };
            });
        }
        static showBanner() {
            if (!Laya$1.Browser.onTTMiniGame) {
                return;
            }
            WxMiniUtil.bannerVisible = true;
            let sysInfo = Laya$1.Browser.window.wx.getSystemInfoSync();
            let bannerWidth = sysInfo.screenWidth;
            let bannerHeight = sysInfo.screenHeight;
            if (WxMiniUtil.bannerAd) {
                WxMiniUtil.bannerAd.destroy();
                WxMiniUtil.bannerAd = null;
            }
            let adID = Laya$1.Browser.window.tt ? "f7iibhjbf251ui7u79" : "adunit-3bf2554b5207e425";
            WxMiniUtil.bannerAd = Laya$1.Browser.window.tt.createBannerAd({
                adUnitId: adID,
                style: {
                    left: (bannerWidth - bannerWidth * 95 / 100) / 2,
                    top: bannerHeight - 120,
                    width: bannerWidth * 95 / 100
                }
            });
            WxMiniUtil.bannerAd.onLoad(function () {
                if (WxMiniUtil.bannerVisible) {
                    WxMiniUtil.bannerAd.show()
                        .then(() => {
                        console.log("广告显示成功");
                    })
                        .catch(err => {
                        console.log("广告组件出现问题", err);
                    });
                }
            });
            WxMiniUtil.bannerAd.onError(err => {
                console.log(err);
            });
            WxMiniUtil.bannerAd.onResize(res => {
                WxMiniUtil.bannerAd.style.top = bannerHeight - res.height;
                WxMiniUtil.bannerAd.style.left = (bannerWidth - res.width) / 2;
            });
        }
        static hideBanner() {
            if (!Laya$1.Browser.onTTMiniGame) {
                return;
            }
            WxMiniUtil.bannerVisible = false;
            if (WxMiniUtil.bannerAd) {
                WxMiniUtil.bannerAd.destroy();
                WxMiniUtil.bannerAd = null;
            }
        }
        static loadRewardedVideo(completeHandler) {
            WxMiniUtil.loadVideoComplete = completeHandler;
            if (!WxMiniUtil.rewardedvideo) {
                WxMiniUtil.rewardedvideo = Laya$1.Browser.window.tt.createRewardedVideoAd({ adUnitId: 'adunit-a7bced9f18d8a7bb' });
                WxMiniUtil.rewardedvideo.onLoad(() => {
                    console.log('激励视频 广告加载成功');
                    WxMiniUtil.loadVideoComplete.runWith("true");
                });
                WxMiniUtil.rewardedvideo.onError(err => {
                    console.log(err);
                });
            }
            else {
                WxMiniUtil.rewardedvideo.load();
            }
        }
        static showRewardedVideo(completeHandler) {
            if (!Laya$1.Browser.onTTMiniGame) {
                completeHandler.run();
                return;
            }
            WxMiniUtil.showAdVideoHandler = completeHandler;
            if (!WxMiniUtil.rewardedvideo) {
                let adID = "1j4221j5gf9jd1gllf";
                WxMiniUtil.rewardedvideo = Laya$1.Browser.window.tt.createRewardedVideoAd({ adUnitId: adID });
                WxMiniUtil.rewardedvideo.onClose(res => {
                    if (res && res.isEnded || res === undefined) {
                        console.log("激励视频播放完成");
                        WxMiniUtil.showAdVideoHandler.runWith("true");
                    }
                    else {
                    }
                });
                WxMiniUtil.rewardedvideo.onError(err => {
                    console.log(err);
                });
            }
            WxMiniUtil.rewardedvideo.show()
                .catch(err => {
                WxMiniUtil.rewardedvideo.load()
                    .then(() => {
                    WxMiniUtil.rewardedvideo.show();
                });
                console.log("show激励视频" + err);
            });
        }
        static showInterstitialAd(completeHandler = null) {
            if (!Laya$1.Browser.onTTMiniGame) {
                WxMiniUtil.interstitialAdHandler.runWith("false1");
                return;
            }
            WxMiniUtil.interstitialAdHandler = completeHandler;
            if (Laya$1.Browser.window.tt) {
                const isToutiaio = Laya$1.Browser.window.tt.getSystemInfoSync().appName === "Douyin";
                if (!isToutiaio) {
                    WxMiniUtil.interstitialAdHandler.runWith("false2");
                    return;
                }
            }
            let adID = "1b2m7lpbgi51jajhce";
            WxMiniUtil.interstitialAd = Laya$1.Browser.window.tt.createInterstitialAd({ adUnitId: adID });
            WxMiniUtil.interstitialAd.onClose(res => {
                let titlestr = "触发*万能字技能";
                let flag = "true1";
                if (Math.floor(Math.random() * 100) < 50) {
                    titlestr = "触发仙人指路技能";
                    flag = "true2";
                }
                Laya$1.Browser.window.tt.showToast({
                    title: titlestr,
                    duration: 2500,
                    success(res) {
                        console.log(`${res}`);
                    },
                    fail(res) {
                        console.log(`showToast 调用失败`);
                    },
                });
                WxMiniUtil.interstitialAd.destroy();
                if (WxMiniUtil.interstitialAdHandler)
                    WxMiniUtil.interstitialAdHandler.runWith(flag);
            });
            WxMiniUtil.interstitialAd.onError(err => {
                WxMiniUtil.interstitialAdHandler.runWith("false3");
            });
            WxMiniUtil.interstitialAd.load()
                .then(() => WxMiniUtil.interstitialAd.show()).catch(err => {
                WxMiniUtil.interstitialAdHandler.runWith("false4");
            });
        }
        static showGameIconAd() {
            if (!Laya$1.Browser.window.wx)
                return;
            var count = 5;
            if (!WxMiniUtil.cconAdobjArr) {
                WxMiniUtil.cconAdobjArr = [];
                for (let index = 0; index < count; index++) {
                    var obj = {};
                    obj.appNameHidden = false;
                    obj.color = "#ffffff";
                    obj.top = WxMiniUtil.wxinfo.screenHeight / 2 - 15;
                    WxMiniUtil.cconAdobjArr.push(obj);
                }
            }
            if (!WxMiniUtil.iconAd && Laya$1.Browser.window.wx.createGameIcon) {
                WxMiniUtil.iconAd = Laya$1.Browser.window.wx.createGameIcon({
                    adUnitId: 'PBgAAfCNfP3TjmkM',
                    count: 5,
                    style: WxMiniUtil.cconAdobjArr
                });
            }
            if (WxMiniUtil.iconAd) {
                WxMiniUtil.iconAd.load().then(() => {
                    WxMiniUtil.iconAd.show();
                }).catch((err) => {
                    console.error(err);
                    console.log("showGameIconAd Error:" + err);
                });
            }
        }
        static showGamePortal() {
            if (Laya$1.Browser.window.wx.createGamePortal) {
                WxMiniUtil.portalAd = Laya$1.Browser.window.wx.createGamePortal({
                    adUnitId: 'PBgAAet6sZW2CQug'
                });
            }
            if (WxMiniUtil.portalAd) {
                WxMiniUtil.portalAd.load().then(() => {
                    WxMiniUtil.portalAd.show();
                }).catch((err) => {
                    if (err.errCode == 1004) {
                    }
                    console.error(err);
                });
            }
        }
    }
    WxMiniUtil.bannerVisible = false;
    WxMiniUtil.cconAdobjArr = [];
    WxMiniUtil.portalAd = null;

    class StartGame extends PrefebBase {
        constructor() { super(); }
        onAwake() {
            super.onAwake();
            console.log("...屏幕宽度", Laya$1.Laya.Browser.window.screen.width, Laya$1.Laya.stage.width, Laya$1.Laya.stage.height);
            this.owner["height"] = Laya$1.Laya.stage.height;
            console.log("...屏幕长度", Laya$1.Laya.Browser.window.screen.height);
            if (AppConfig.platform == "wx") {
                let scaleX = Laya$1.Laya.Browser.window.screen.width / 640;
                let h = AppConfig.getMobileHeight();
                let scaleY = Laya$1.Laya.Browser.window.screen.height * (h / Laya$1.Laya.stage.height) / h;
                let button = Laya$1.Browser.window.wx["createUserInfoButton"]({
                    type: 'image',
                    image: 'btn_startGame.png',
                    style: {
                        left: this.btn_startGame.x * scaleX,
                        top: this.btn_startGame.y * scaleY,
                        width: this.btn_startGame.width * scaleX,
                        height: this.btn_startGame.height * scaleY,
                        lineHeight: 40,
                        color: '#ffffff',
                        textAlign: 'center',
                        fontSize: 16,
                        borderRadius: 4
                    }
                });
                button.onTap((res) => {
                    console.log(res);
                    ControllerMgr.getInstance(PlayerController).myPlayerInfo.name = res.userInfo.nickName;
                    this.handler.run();
                    button.destroy();
                });
                this.btn_startGame.destroy();
                this.btn_startGame = button;
                WXTool.addBtn(this.btn_startGame);
            }
            else {
                this.btn_startGame.on(Laya$1.Event.CLICK, this, function () {
                    this.handler.run();
                });
            }
            this.btn_showRank.on(Laya$1.Event.CLICK, this, function () {
                if (AppConfig.platform == "wx") {
                    this.onShowRank.run();
                }
                else {
                    ControllerMgr.getInstance(TipController).showTip("尽情期待");
                }
            });
            this.btn_share.on(Laya$1.Event.CLICK, this, function () {
                if (AppConfig.platform == "wx") {
                    Laya$1.Browser.window.wx["shareAppMessage"]({
                        title: '发现有个有趣的游戏',
                        imageUrl: "https://mmocgame.qpic.cn/wechatgame/iaUVuxArE9L9G28F6XrxKAIEtJOs9x1Ycm2MYmC2Uz5T9O4RLq0ejvG3ic2KlUBiaVf/0",
                        imageUrlId: "NelenHPLRXK1-AWENn0aZw"
                    });
                }
                else {
                    ControllerMgr.getInstance(TipController).showTip("尽情期待");
                }
            });
        }
        onEnable() {
        }
        onDisable() {
            if (AppConfig.platform == "wx") {
                WXTool.removeBtn(this.btn_startGame);
                this.btn_startGame.destroy(true);
            }
            else {
                this.btn_startGame.offAll();
            }
            if (AppConfig.platform == "tt") {
                WxMiniUtil.hideBanner();
            }
        }
    }

    class FontGrid extends PrefebBase {
        constructor() {
            super();
            this.font = "";
            this.quality = 1;
            this.colorArr = ["blue", "red", "puple", "yellow"];
            this._effects = [];
        }
        addEffect(effect) {
            if (effect == null)
                return;
            this.owner.addChild(effect);
            this._effects.push(effect);
        }
        clearEffects() {
            this._effects.forEach(element => {
                this.owner.removeChild(element);
            });
            this._effects = [];
        }
        onUpdate() {
            let img_bg = this.owner.getChildByName("img_bg");
            if (this.font != null) {
                this.owner.getChildByName("txt")["text"] = this.font;
                img_bg.visible = true;
                img_bg.skin = "map/img_" + this.getQualitySign() + "GridBg.png";
            }
            else {
                this.owner.getChildByName("txt")["text"] = "";
                img_bg.visible = false;
            }
        }
        getQualitySign() {
            return this.colorArr[this.quality - 1];
        }
        onReset() {
            this.quality = 1;
        }
        onDisable() {
            this.recover();
        }
        playHeChengEffect() {
            let sk = ResMgr.Instance().createSpine(URI.spineUrl + "other_taozhuangxitong1.sk", "animation", false);
            sk.x = sk.y = 44;
            sk.scaleX = sk.scaleY = 1.7;
            this.owner.addChild(sk);
            sk.on(Laya$1.Event.STOPPED, this, function (par_sk) {
                par_sk.destroy();
            }, [sk]);
        }
        reset() {
            this.quality = 1;
            this.clearEffects();
        }
    }

    class GameResult extends PrefebBase {
        constructor() { super(); }
        onAwake() {
            super.onAwake();
            this.owner["height"] = Laya$1.Laya.stage.height;
            this.txt_score.text = this.score.toString();
            this.btn_home.clickHandler = Laya$1.Handler.create(this, function () {
                this.showHomeHandler.run();
            }, null, false);
            this.btn_tryAgain.clickHandler = Laya$1.Handler.create(this, function () {
                this.restartHandler.run();
            }, null, false);
            this.btn_showAd.clickHandler = Laya$1.Handler.create(this, function () {
                let that = this;
                window['King_SDK_Manager'].showRewardedVideoAd(res => {
                    if (res) {
                        console.log('播放成功，下发游戏奖励');
                        that.onShowAdComple();
                    }
                    else {
                        console.log('播放失败');
                    }
                });
            }, null, false);
        }
        onShowAdComple() {
            this.showAdHandler.run();
        }
        onEnable() {
            console.log("游戏结束调用banner");
            if (this.comeBackTime < 1) {
                this.btn_showAd.visible = false;
            }
            window['King_SDK_Manager'].hideAllBanner();
            window['King_SDK_Manager'].showNativeInter();
        }
        onDisable() {
            this.btn_home.offAll();
            this.btn_tryAgain.offAll();
        }
    }

    class SoundTool {
        static playXiaoChuEffect() {
            if (Laya$1.Laya.loader.getRes(URI.soundUrl + "xiaochu.wav") != null)
                Laya$1.Laya.SoundManager.playSound(URI.soundUrl + "xiaochu.wav");
        }
        static playHeChengEffect() {
            if (Laya$1.Laya.loader.getRes(URI.soundUrl + "hecheng.wav") != null)
                Laya$1.Laya.SoundManager.playSound(URI.soundUrl + "hecheng.wav");
        }
        static playTeJiEffect() {
            if (Laya$1.Laya.loader.getRes(URI.soundUrl + "teji.wav") != null)
                Laya$1.Laya.SoundManager.playSound(URI.soundUrl + "teji.wav");
        }
        static playXiaHuaEffect() {
            if (Laya$1.Laya.loader.getRes(URI.soundUrl + "xiahua.wav") != null)
                Laya$1.Laya.SoundManager.playSound(URI.soundUrl + "xiahua.wav");
        }
        static playYiDongEffect() {
            if (Laya$1.Laya.loader.getRes(URI.soundUrl + "yidong.wav") != null)
                Laya$1.Laya.SoundManager.playSound(URI.soundUrl + "yidong.wav");
        }
        static getSoundVolume() {
            return SoundTool._soundVolume;
        }
        static setSoundVolume(value = 0.2) {
            if (Number["isNaN"](value)) {
                value = 0.2;
            }
            SoundTool._soundVolume = value;
            Laya$1.Laya.SoundManager.setSoundVolume(value);
            Laya$1.Laya.LocalStorage.setItem("soundVolume", (value * 100).toString());
        }
        static init() {
            SoundTool.setSoundVolume(parseInt(Laya$1.Laya.LocalStorage.getItem("soundVolume")) / 100);
        }
    }

    class TTMiniUtils {
        static init() {
            TTMiniUtils.gameRecorder = Laya$1.Browser.window.tt.getGameRecorderManager();
            TTMiniUtils.gameRecorder.onStart(() => {
                console.log('录屏开始');
            });
            TTMiniUtils.gameRecorder.onStop((res) => {
                console.log('录屏结束', res.videoPath);
                TTMiniUtils.videoPath = res.videoPath;
            });
            TTMiniUtils.gameRecorder.onInterruptionBegin((res) => {
                console.log('监听录屏中断开始', res.videoPath);
            });
            TTMiniUtils.gameRecorder.onInterruptionEnd((res) => {
                console.log('监听录屏中断结束', res.videoPath);
            });
            TTMiniUtils.gameRecorder.onError((res) => {
                console.log('监听录屏错误', res.videoPath);
            });
        }
        static startGameRecorder() {
            console.log("...点击开始了");
            if (TTMiniUtils.gameRecorder) {
                TTMiniUtils.gameRecorder.start({ duration: 300 });
            }
            else {
                TTMiniUtils.init();
                TTMiniUtils.gameRecorder.start({ duration: 300 });
            }
        }
        static pauseGameRecorder() {
            console.log('录屏pause');
            TTMiniUtils.gameRecorder.pause();
        }
        static resumeGameRecorder() {
            console.log('录屏resume');
            TTMiniUtils.gameRecorder.resume();
        }
        static stopGameRecorder() {
            console.log('停止了录屏');
            if (TTMiniUtils.gameRecorder) {
                console.log('停止了录屏11111');
                TTMiniUtils.gameRecorder.stop();
            }
        }
        static shareGameRecorder(onComplete) {
            if (TTMiniUtils.videoPath == "") {
                console.log('上局游戏暂未录制！');
                onComplete.runWith("false");
                return;
            }
            console.log('分享录制 videoPath：' + TTMiniUtils.videoPath);
            Laya$1.Browser.window.tt.shareAppMessage({
                channel: 'video',
                title: '趣味汉字',
                desc: "#趣味汉字 #抖音小游戏",
                extra: {
                    videoPath: TTMiniUtils.videoPath,
                    videoTopics: ["#趣味汉字", "#抖音小游戏"]
                },
                success: () => {
                    console.log('录屏分享成功');
                    onComplete.runWith("true");
                },
                fail: (e) => {
                    console.log('录屏分享失败:' + e.errMsg);
                    if (e.errMsg.indexOf("too short") >= 0) {
                        onComplete.runWith("short");
                    }
                    else {
                        onComplete.runWith("false");
                    }
                }
            });
        }
    }
    TTMiniUtils.videoPath = "";

    class GameSetting extends PrefebBase {
        constructor() { super(); }
        onAwake() {
            super.onAwake();
            this.btn_home.clickHandler = Laya$1.Handler.create(this, function () {
                this.showHomeHandler.run();
            }, null, false);
            this.btn_tryAgain.clickHandler = Laya$1.Handler.create(this, function () {
                if (AppConfig.platform == "wx") {
                    this.restartHandler.runWith(1);
                    Laya$1.Browser.window.wx["shareAppMessage"]({
                        title: '发现有个有趣的游戏',
                        imageUrl: "https://mmocgame.qpic.cn/wechatgame/iaUVuxArE9L9G28F6XrxKAIEtJOs9x1Ycm2MYmC2Uz5T9O4RLq0ejvG3ic2KlUBiaVf/0",
                        imageUrlId: "NelenHPLRXK1-AWENn0aZw"
                    });
                }
                else {
                    this.restartHandler.run();
                }
            }, null, false);
            this.btn_share.clickHandler = (Laya$1.Handler.create(this, function (e) {
                if (AppConfig.platform == "wx") {
                    Laya$1.Browser.window.wx["shareAppMessage"]({
                        title: '发现有个有趣的游戏',
                        imageUrl: "https://mmocgame.qpic.cn/wechatgame/iaUVuxArE9L9G28F6XrxKAIEtJOs9x1Ycm2MYmC2Uz5T9O4RLq0ejvG3ic2KlUBiaVf/0",
                        imageUrlId: "NelenHPLRXK1-AWENn0aZw"
                    });
                }
                else if (AppConfig.platform == "tt") {
                    TTMiniUtils.stopGameRecorder();
                    TTMiniUtils.shareGameRecorder(Laya$1.Handler.create(this, this.onShareGameRecordComple));
                }
                else {
                    ControllerMgr.getInstance(TipController).showTip("尽情期待");
                }
            }, null, false));
            this.btn_close.clickHandler = (Laya$1.Handler.create(this, function (e) {
                window['King_SDK_Manager'].showNativeBanner();
                this.onCloseHandler.run();
            }, null, false));
            this.btn_music.on(Laya$1.Event.MOUSE_DOWN, this, this.onDragMouseDown);
            this.btn_effect.on(Laya$1.Event.MOUSE_DOWN, this, this.onDragMouseDown);
            this.refresh();
        }
        onDragMouseDown(e) {
            this._dragTarget = e.currentTarget;
            Laya$1.Laya.stage.on(Laya$1.Event.MOUSE_UP, this, this.onStageMouseUp2);
            Laya$1.Laya.stage.on(Laya$1.Event.MOUSE_MOVE, this, this.onStageMouseMove2);
        }
        onStageMouseUp2(e) {
            this._dragTarget = null;
            Laya$1.Laya.stage.off(Laya$1.Event.MOUSE_UP, this, this.onStageMouseUp2);
            Laya$1.Laya.stage.off(Laya$1.Event.MOUSE_MOVE, this, this.onStageMouseMove2);
        }
        onStageMouseMove2(e) {
            let point = new Laya$1.Point(e.stageX, e.stageY);
            let progress;
            if (this._dragTarget == this.btn_effect) {
                progress = this.progress_effect;
            }
            point = this._dragTarget.parent["globalToLocal"](point);
            let x = point.x - progress.x;
            if (x < 0) {
                x = 0;
            }
            else if (x > 346) {
                x = 346;
            }
            progress.width = x;
            let num = x / 346;
            progress.width = num;
            if (progress == this.progress_effect) {
                SoundTool.setSoundVolume(num);
            }
            this.refresh();
        }
        refresh() {
            this.progress_effect.width = 346 * SoundTool.getSoundVolume();
            this.btn_effect.x = this.progress_effect.x + this.progress_effect.width;
        }
        onEnable() {
            console.log("关闭bannner");
            window['King_SDK_Manager'].hideAllBanner();
        }
        onDisable() {
            this.btn_home.offAll();
            this.btn_tryAgain.offAll();
            this.btn_share.offAll();
        }
        onShareGameRecordComple(data) {
            if (data == "short") {
                ControllerMgr.getInstance(TipController).showCenterBottomTip("录屏时长不足3秒,请重新录制");
            }
            console.log("...分享了完成了", data);
            if (AppConfig.platform == "tt") {
                Laya$1.Laya.timer.once(500, this, function () {
                    TTMiniUtils.startGameRecorder();
                });
            }
        }
    }

    class NativeBridge extends Laya$1.Script {
        static showVedioAd(callBk) {
            var os = Laya$1.Browser.window.conchConfig.getOS();
            var bridge;
            var obj = {};
            if (os == "Conch-ios") {
                bridge = Laya$1.Browser.window.PlatformClass.createClass("JSBridge");
            }
            else if (os == "Conch-android") {
                bridge = Laya$1.Browser.window.PlatformClass.createClass("demo.JSBridge");
            }
            if (os == "Conch-ios") {
                bridge.callWithBack(function (value) {
                    callBk();
                }, "showVedioAdCallBk:");
            }
            else if (os == "Conch-android") {
                bridge.callWithBack(function (value) {
                    callBk();
                }, "showVedioAdCallBk");
            }
        }
        static showBannerAd(bo) {
            var os = Laya$1.Browser.window.conchConfig.getOS();
            var bridge;
            var obj = {};
            if (os == "Conch-ios") {
                bridge = Laya$1.Browser.window.PlatformClass.createClass("JSBridge");
            }
            else if (os == "Conch-android") {
                bridge = Laya$1.Browser.window.PlatformClass.createClass("demo.JSBridge");
            }
            if (os == "Conch-ios") {
                bridge.call("setBannerAdVisible:", bo);
            }
            else if (os == "Conch-android") {
                bridge.call("setBannerAdVisible", bo);
            }
        }
    }

    var GameState;
    (function (GameState) {
        GameState[GameState["End"] = 0] = "End";
        GameState[GameState["Pause"] = 1] = "Pause";
        GameState[GameState["Playing"] = 2] = "Playing";
        GameState[GameState["init"] = 3] = "init";
        GameState[GameState["EffectPause"] = 4] = "EffectPause";
    })(GameState || (GameState = {}));
    class MainGameScene extends SceneBase {
        constructor() {
            super();
            this._fonts = [];
            this._sysDropingFontInfos = [];
            this._sysDispelFontInfoStack = [];
            this._startPoint = new Laya$1.Point(2, 0);
            this._maxTickTime = 75;
            this._sysTickTime = 0;
            this._maxSysTickTime = 16;
            this._words = [];
            this._splitFontWords = [];
            this._splitGroupWords = [];
            this._minWordsLength = 5;
            this._isMouseDown = false;
            this._isQuickDrop = false;
            this._score = 0;
            this._debugMode = false;
            this._debugFonts = [
                null, null, null, null, null,
                null, null, null, null, null,
                null, null, null, null, null,
                null, null, null, null, null,
                null, null, null, null, null,
                null, null, null, null, null,
                null, null, null, null, null,
                "氵", null, "穴", "宀", null,
            ];
            this._debugDropFonts = ["工", "工"];
            this._guideDropFonts = [];
            this._cacheProperties = ["heCiSplitTimes", "heCizuRate", "ciZuRate", "_score", "_popularGroup", "_guideRate", "buShouRate"];
            this._stuntFontsCheckArr1 = [];
            this._stuntFontsCheckArr2 = [];
            this._checkIds = [];
            this._guideImgs = {};
            this._guideRate = 0;
            this.heCiSplitTimes = 1;
            this.heCizuRate = 40;
            this.hanZiRate = 60;
            this.ciZuRate = 60;
            this.randRate = 0;
            this.buShouRate = 0;
            this._playerEffectInd = 0;
        }
        onAwake() {
            super.onAwake();
            this.owner["height"] = Laya$1.Laya.stage.height;
            switch (AppConfig.platform) {
                case "wx":
                    break;
                default:
                    break;
            }
            if (!AppConfig.hadGuidanceHz()) {
                this._guideDropFonts = ["讠", "成", "言", "亻", "文", "日", "月"];
                AppConfig.setGuidanceHz(true);
            }
            this.list_grids.renderHandler = Laya$1.Handler.create(this, this.onGridRender, null, false);
            this._myPlayerInfo = ControllerMgr.getInstance(PlayerController).myPlayerInfo;
            this.btn_pauseOrStart.on(Laya$1.Event.CLICK, this, this.onPauseOrStartMouseEvent);
            this.btn_setting.on(Laya$1.Event.CLICK, this, this.onSettingMouseEvent);
            this.btn_point.on(Laya$1.Event.CLICK, this, this.onPointMouseEvent);
            this.btn_wanneng.on(Laya$1.Event.CLICK, this, this.onWannengMouseEvent);
            if (!AppConfig.hadGuidance()) {
                this.btn_point.visible = false;
            }
            if (AppConfig.platform == "tt") {
                Laya$1.Laya.timer.once(500, this, function () {
                    TTMiniUtils.startGameRecorder();
                });
            }
            this.changeGameStatue(GameState.init);
            this.refresh();
        }
        onWannengMouseEvent(e) {
            this.changeGameStatue(GameState.Pause);
            let that = this;
            window['King_SDK_Manager'].showRewardedVideoAd(res => {
                if (res) {
                    console.log('播放成功，下发游戏奖励');
                    that.onWannengComple();
                }
                else {
                    console.log('播放失败');
                }
            });
        }
        onWannengComple() {
            if (this._myPlayerInfo.wannengUseTimes > 0) {
                let callBk = () => {
                    this.changeGameStatue(GameState.Playing);
                    this._nextDropingFontInfo = MapFontInfo.create({ text: "*" });
                    this._myPlayerInfo.wannengUseTimes--;
                    this.refresh();
                };
                if (AppConfig.isNative) {
                    this.changeGameStatue(GameState.Pause);
                    NativeBridge.showVedioAd(callBk);
                }
                else {
                    callBk();
                }
                return;
            }
        }
        onCPComple() {
            let callBk = () => {
                this.changeGameStatue(GameState.Playing);
                let rate = Math.random() * 100;
                if (rate > 70) {
                    this._nextDropingFontInfo = MapFontInfo.create({ text: "*" });
                }
                else {
                    this._myPlayerInfo.guideRemainTimes = 1;
                }
                this.refresh();
            };
            if (AppConfig.isNative) {
                this.changeGameStatue(GameState.Pause);
                NativeBridge.showVedioAd(callBk);
            }
            else {
                callBk();
            }
            return;
        }
        onPointMouseEvent(e) {
            window['King_SDK_Manager'].showRewardedVideoAd(res => {
                if (res) {
                    console.log('播放成功，下发游戏奖励');
                    this.onPointComple();
                }
                else {
                    console.log('播放失败');
                }
            });
        }
        onPointComple() {
            if (this._myPlayerInfo.guideRemainTimes > 0) {
                return;
            }
            if (this._myPlayerInfo.guideUseTimes > 0) {
                let callBk = () => {
                    this.changeGameStatue(GameState.Playing);
                    this._myPlayerInfo.guideRemainTimes = 3;
                    this._myPlayerInfo.guideUseTimes--;
                    this.randRate = -2;
                    this.refresh();
                };
                if (AppConfig.isNative) {
                    this.changeGameStatue(GameState.Pause);
                    NativeBridge.showVedioAd(callBk);
                }
                else {
                    callBk();
                }
                return;
            }
        }
        onSettingMouseEvent(e) {
            this.changeGameStatue(GameState.Pause);
            this.showGameSetting();
            window['King_SDK_Manager'].hideAllBanner();
            window['King_SDK_Manager'].showNativeInter();
        }
        onPauseOrStartMouseEvent(e) {
            if (this._gameState == GameState.Pause) {
                this.changeGameStatue(GameState.Playing);
            }
            else {
                let str = "";
                for (let j = 0; j < this.list_grids.repeatY; j++) {
                    for (let i = 0; i < this.list_grids.repeatX; i++) {
                        if (this._fonts[i][j] == null) {
                            str += "null,";
                        }
                        else {
                            str += "'" + this._fonts[i][j].text + "',";
                        }
                    }
                    str += "\n";
                }
                console.log(str);
                this.changeGameStatue(GameState.Pause);
            }
        }
        showStartGame() {
            let startGameSpr = Laya$1.Pool.getItemByCreateFun("StartGame", this.prefab_startGame.create, this.prefab_startGame);
            let startGameScript = startGameSpr.getComponent(StartGame);
            startGameScript.handler = Laya$1.Handler.create(this, this.changeGameStatue, [GameState.Playing], false);
            startGameScript.onShowRank = Laya$1.Handler.create(this, this.showRank, null, false);
            this.addPopUp("StartGame", startGameSpr, false, false, false);
        }
        showGameResult() {
            let gameResultSpr = Laya$1.Pool.getItemByCreateFun("GameResult", this.prefab_gameResult.create, this.prefab_gameResult);
            let gameResultScript = gameResultSpr.getComponent(GameResult);
            let storageObj = {
                "wxgame": {
                    "score": this._score,
                    "update_time": Date.now()
                },
                "score": this._score
            };
            this._dataViewer.postMsg({
                cmd: "wx.setUserCloudStorage",
                data: storageObj
            });
            gameResultScript.comeBackTime = this._myPlayerInfo.comeBackTimes;
            gameResultScript.score = this._score;
            gameResultScript.showHomeHandler = Laya$1.Handler.create(this, this.changeGameStatue, [GameState.init], false);
            gameResultScript.restartHandler = Laya$1.Handler.create(this, this.restart, null, false);
            gameResultScript.showAdHandler = Laya$1.Handler.create(this, this.onShowAd, null, false);
            this.addPopUp("GameResult", gameResultSpr, false, false, false);
        }
        showGameSetting() {
            let gameSettingSpr = Laya$1.Pool.getItemByCreateFun("GameSetting", this.prefab_gameSetting.create, this.prefab_gameSetting);
            let gameSettingScript = gameSettingSpr.getComponent(GameSetting);
            gameSettingScript.onCloseHandler = Laya$1.Handler.create(this, this.changeGameStatue, [GameState.Playing], false);
            gameSettingScript.showHomeHandler = Laya$1.Handler.create(this, this.changeGameStatue, [GameState.init], false);
            gameSettingScript.restartHandler = Laya$1.Handler.create(this, this.restart, null, false);
            this.addPopUp("gameSetting", gameSettingSpr, false, false, false);
        }
        onShowAd() {
            if (AppConfig.platform == "android") {
                NativeBridge.showVedioAd(() => {
                    this.continueAfterAd();
                });
            }
            else if (AppConfig.platform == "tt") {
                this.continueAfterAd();
            }
            else {
                this.continueAfterAd();
            }
        }
        continueAfterAd() {
            this.hidePopUp();
            SoundTool.playXiaoChuEffect();
            this.playEffectInc();
            let time = 0;
            let score = 0;
            for (let j = this.list_grids.repeatY; j > this.list_grids.repeatY - 6; j--) {
                for (let i = 0; i < this.list_grids.repeatX; i++) {
                    let tempFontScript = this.getFontScript(i, j);
                    if (tempFontScript) {
                        tempFontScript.playHeChengEffect();
                    }
                    let tempFont = this.getFontInfo(i, j);
                    if (tempFont != null) {
                        time++;
                        this.dispelFont(tempFont);
                        if (tempFont.isStuntFont) {
                            this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                        }
                    }
                }
            }
            score += (time * 10);
            this._myPlayerInfo.comeBackTimes--;
            this._score += score;
            Laya$1.Laya.timer.once(1100, this, function () {
                this.setDispelText("*");
                this.renderGridList();
                this.updateScore();
                this.setStar(this._myPlayerInfo.getStarInfo(this._score).star_num);
            });
            Laya$1.Laya.timer.once(1400, this, function () {
                this.endEffectInc();
            });
        }
        restart() {
            localStorage.setItem("StorageVersion", null);
            localStorage.setItem("CacheData_1", null);
            this._gameState = GameState.End;
            this.changeGameStatue(GameState.Playing);
        }
        changeGameStatue(gameState, nextState = -1) {
            switch (gameState) {
                case GameState.End:
                    localStorage.setItem("CacheData_1", null);
                    this.showGameResult();
                    if (AppConfig.isNative) {
                        NativeBridge.showBannerAd(true);
                    }
                    break;
                case GameState.Playing:
                    if (AppConfig.isNative) {
                        NativeBridge.showBannerAd(false);
                    }
                    WxMiniUtil.hideBanner();
                    this.btn_pauseOrStart.skin = "map/btn_pause.png";
                    this.hidePopUp();
                    if (this._gameState != GameState.Pause && this._gameState != GameState.EffectPause) {
                        let bool;
                        try {
                            bool = this.restoreAll();
                        }
                        catch (_a) {
                            localStorage.setItem("CacheData_1", null);
                            bool = false;
                        }
                        if (!bool) {
                            this._score = 0;
                            for (let i = 0; i < this.list_grids.repeatX; i++) {
                                for (let j = 0; j < this.list_grids.repeatY; j++) {
                                    if (this._fonts[i] == null) {
                                        this._fonts[i] = [];
                                    }
                                    if (this._debugMode) {
                                        let txt = this._debugFonts[i + j * 5];
                                        if (txt == null) {
                                            this._fonts[i][j] = null;
                                        }
                                        else {
                                            let tempFontInfo = MapFontInfo.create({ text: txt });
                                            tempFontInfo.x = i;
                                            tempFontInfo.y = j;
                                            this._fonts[i][j] = tempFontInfo;
                                        }
                                    }
                                    else {
                                        this._fonts[i][j] = null;
                                    }
                                }
                            }
                            this._words = [];
                            this._popularGroup = null;
                            this._sysDispelFontInfoStack = [];
                            this._sysDropingFontInfos = [];
                            this._splitFontWords = [];
                            this._splitGroupWords = [];
                            this._dropingFontInfo = null;
                            this._nextDropingFontInfo = null;
                            this.heCiSplitTimes = 0;
                            this.heCizuRate = 10;
                            this.hanZiRate = 10;
                            this.ciZuRate = 10;
                            this._myPlayerInfo.wannengUseTimes = 4;
                            this._myPlayerInfo.guideUseTimes = 4;
                            this._myPlayerInfo.comeBackTimes = 1;
                            this.refresh();
                            this.renderGridList();
                        }
                    }
                    break;
                case GameState.Pause:
                    this.btn_pauseOrStart.skin = "map/btn_start.png";
                    break;
                case GameState.EffectPause:
                    break;
                case GameState.init:
                    this.showStartGame();
                    if (AppConfig.isNative) {
                        NativeBridge.showBannerAd(true);
                    }
                    break;
            }
            this._gameState = gameState;
            if (nextState != -1) {
                this.changeGameStatue(nextState);
            }
        }
        onGridRender(cell, index) {
            let data = cell.dataSource;
            let fontGridScrip = cell.getComponent(FontGrid);
            if (data == null) {
                fontGridScrip.font = null;
                fontGridScrip.clearEffects();
            }
            else {
                fontGridScrip.font = data.text;
                fontGridScrip.addEffect(data.getStuntFontEffect());
                fontGridScrip.quality = data.quality;
            }
        }
        onStarRender(cell, index) {
            let isShine = cell.dataSource;
            if (isShine) {
                cell.skin = "map/img_star.png";
            }
            else {
                cell.skin = "map/img_starBg.png";
            }
        }
        onMouseDown() {
            if (this._gameState == GameState.Playing) {
                this._mouseDownPoint = new Laya$1.Point(Laya$1.Laya.stage.mouseX, Laya$1.Laya.stage.mouseY);
                this._isQuickDrop = false;
            }
        }
        onMouseUp() {
            if (this._gameState == GameState.Playing) {
                if (this._mouseDownPoint == null) {
                    return;
                }
                let absX = Math.abs(Laya$1.Laya.stage.mouseX - this._mouseDownPoint.x);
                let absY = Laya$1.Laya.stage.mouseY - this._mouseDownPoint.y;
                if (absX > 10) {
                    if (absY > absX * 2.5) {
                        this._isQuickDrop = true;
                        SoundTool.playXiaHuaEffect();
                    }
                    else {
                        this.moveDropingFont(Laya$1.Laya.stage.mouseX < this._mouseDownPoint.x);
                        SoundTool.playYiDongEffect();
                    }
                }
                else if (absY > 25) {
                    this._isQuickDrop = true;
                    SoundTool.playXiaHuaEffect();
                }
                this._mouseDownPoint = null;
            }
        }
        onEnable() {
        }
        onDisable() {
            if (this._gameState == GameState.Playing)
                this.changeGameStatue(GameState.Pause);
        }
        getGuideSpeedRate() {
            let sppedrate = 100;
            if (!AppConfig.hadGuidance()) {
                if (this._score < 1500) {
                    sppedrate = 120;
                }
            }
            return sppedrate;
        }
        onUpdate() {
            if (this._gameState == GameState.Playing) {
                let isEditList = false;
                this.updatePopularGroup();
                if (this._sysDropingFontInfos.length > 0) {
                    if (this._sysTickTime > 0) {
                        this._sysTickTime--;
                    }
                    else {
                        this._sysTickTime = this._maxSysTickTime;
                        let sysDelArr = [];
                        if (this._sysDropingFontInfos.length == this._sysDispelFontInfoStack.length) {
                            this._sysDropingFontInfos = [];
                            if (!this.invokeStuntFont()) {
                                this.dispelCiZu(this._sysDispelFontInfoStack);
                                this._sysDispelFontInfoStack.forEach(element => {
                                    if (this.getFontInfo(element.x, element.y) != element) {
                                        return;
                                    }
                                    this.dispel(element.x, element.y);
                                });
                                this.checkSysDropFonts();
                                this._sysDispelFontInfoStack = [];
                            }
                        }
                        else {
                            isEditList = true;
                            this._sysDropingFontInfos.forEach(element => {
                                if (this._sysDispelFontInfoStack.indexOf(element) != -1) {
                                    return;
                                }
                                if (this._fonts[element.x][element.y + 1] == null && element.y + 1 < this.list_grids.repeatY) {
                                    this.changeDropFontTo(element.x, element.y + 1, element);
                                }
                                else {
                                    this._sysDispelFontInfoStack.push(element);
                                    isEditList = true;
                                }
                            });
                        }
                    }
                }
                else {
                    if (this._score > 1200 && this.btn_point.visible == false) {
                        this.btn_point.visible = true;
                    }
                    if (this._tickTime > 0) {
                        if (this._isQuickDrop && this._tickTime > 1)
                            this._tickTime = 1;
                        this._tickTime--;
                    }
                    else {
                        this._tickTime = (100 - this._myPlayerInfo.getStarInfo(this._score).speed_rate) * this._maxTickTime / 100 * this.getGuideSpeedRate() / 100;
                        if (this._score > 1000) {
                            AppConfig.setGuidance(true);
                        }
                        if (this._dropingFontInfo == null) {
                            this._isQuickDrop = false;
                            if (this._fonts[this._startPoint.x][this._startPoint.y] != null) {
                                this.changeGameStatue(GameState.End);
                                return;
                            }
                            else {
                                if (this._nextDropingFontInfo != null && this._nextDropingFontInfo.text == "*") {
                                    this._dropingFontInfo = MapFontInfo.create({ text: "*" });
                                    this._dropingFontInfo.isStuntFont = false;
                                    this._nextDropingFontInfo = null;
                                }
                                else {
                                    this.randomNextFont();
                                    this._dropingFontInfo = MapFontInfo.create({ id: this._nextDropingFontInfo.id });
                                    this._dropingFontInfo.isStuntFont = this._nextDropingFontInfo.isStuntFont;
                                }
                                this.guideToGrid();
                                this.setDispelText(this._dropingFontInfo.text);
                                this.updateNextDropingFont();
                                this._dropingFontInfo.x = this._startPoint.x;
                                this._dropingFontInfo.y = this._startPoint.y;
                                this._fonts[this._dropingFontInfo.x][this._dropingFontInfo.y] = this._dropingFontInfo;
                                isEditList = true;
                                this.cacheAll();
                            }
                        }
                        else {
                            if (this._isQuickDrop)
                                this._tickTime = 1;
                            if (this._dropingFontInfo != null) {
                                if (this._fonts[this._dropingFontInfo.x][this._dropingFontInfo.y + 1] == null && this._dropingFontInfo.y + 1 < this.list_grids.repeatY) {
                                    this.changeDropFontTo(this._dropingFontInfo.x, this._dropingFontInfo.y + 1, this._dropingFontInfo);
                                }
                                else {
                                    this._mouseDownPoint = null;
                                    this.destroyGuideImgs();
                                    let isDispel = false;
                                    let cout;
                                    cout = this.dispelCiZu([this._dropingFontInfo]);
                                    if (cout == true) {
                                        isDispel = true;
                                    }
                                    cout = this.dispel(this._dropingFontInfo.x, this._dropingFontInfo.y);
                                    if (cout == true) {
                                        isDispel = true;
                                    }
                                    this._dropingFontInfo = null;
                                }
                                isEditList = true;
                            }
                        }
                    }
                }
                if (isEditList) {
                    this.renderGridList();
                }
            }
        }
        getAllFonts() {
            let cout = [];
            for (let i = 0; i < this._fonts.length; i++) {
                for (let j = this._fonts[0].length - 1; j >= 0; j--) {
                    if (this._fonts[i][j] != null) {
                        cout.push(this._fonts[i][j]);
                    }
                }
            }
            return cout;
        }
        cacheAll() {
            let obj = {};
            this._cacheProperties.forEach(element => {
                obj[element] = this[element];
            });
            obj.guideRemainTimes = this._myPlayerInfo.guideRemainTimes;
            obj.guideUseTimes = this._myPlayerInfo.guideUseTimes;
            obj.wannengUseTimes = this._myPlayerInfo.wannengUseTimes;
            obj.comeBackTimes = this._myPlayerInfo.comeBackTimes;
            obj._wordTexts = [];
            this._words.forEach(element => {
                obj._wordTexts.push({ text: element.text, isStuntFont: element.isStuntFont });
            });
            obj._splitFontWordTexts = [];
            this._splitFontWords.forEach(element => {
                obj._splitFontWordTexts.push({ text: element.text, isStuntFont: element.isStuntFont });
            });
            obj._splitGroupWordTexts = [];
            this._splitGroupWords.forEach(element => {
                obj._splitGroupWordTexts.push({ text: element.text, isStuntFont: element.isStuntFont });
            });
            if (this._dropingFontInfo != null)
                obj._dropingFontInfoText = { text: this._dropingFontInfo.text, isStuntFont: this._dropingFontInfo.isStuntFont };
            if (this._nextDropingFontInfo != null)
                obj._nextDropingFontInfoText = { text: this._nextDropingFontInfo.text, isStuntFont: this._nextDropingFontInfo.isStuntFont };
            obj._sysDispelFontInfoStackPoses = [];
            this._sysDispelFontInfoStack.forEach(element => {
                obj._sysDispelFontInfoStackPoses.push(new Laya$1.Point(element.x, element.y));
            });
            obj._sysDropingFontInfosPoses = [];
            this._sysDropingFontInfos.forEach(element => {
                obj._sysDropingFontInfosPoses.push(new Laya$1.Point(element.x, element.y));
            });
            obj._fontTexts = [];
            for (let i = 0; i < this._fonts.length; i++) {
                obj._fontTexts[i] = [];
                for (let j = 0; j < this._fonts[i].length; j++) {
                    if (this._fonts[i][j] == null) {
                        obj._fontTexts[i][j] = null;
                    }
                    else {
                        obj._fontTexts[i][j] = { text: this._fonts[i][j].text, isStuntFont: this._fonts[i][j].isStuntFont };
                    }
                }
            }
            localStorage.setItem("StorageVersion", AppConfig.version);
            localStorage.setItem("CacheData_1", JSON.stringify(obj));
        }
        restoreAll() {
            if (this._debugMode) {
                return false;
            }
            let storageVersion = localStorage.getItem("StorageVersion");
            if (storageVersion == AppConfig.version) {
                let dataStr = localStorage.getItem("CacheData_1");
                if (dataStr == null) {
                    return false;
                }
                try {
                    let restoreObj = JSON.parse(dataStr);
                    let tempFontInfo;
                    this._fonts = [];
                    for (let i = 0; i < this.list_grids.repeatX; i++) {
                        this._fonts[i] = [];
                        for (let j = 0; j < this.list_grids.repeatY; j++) {
                            if (restoreObj._fontTexts[i] == null || restoreObj._fontTexts[i][j] == null) {
                                this._fonts[i][j] = null;
                            }
                            else {
                                tempFontInfo = this._fonts[i][j] = MapFontInfo.create({ text: restoreObj._fontTexts[i][j].text });
                                tempFontInfo.isStuntFont = restoreObj._fontTexts[i][j].isStuntFont;
                                tempFontInfo.x = i;
                                tempFontInfo.y = j;
                            }
                        }
                    }
                    this._cacheProperties.forEach(element => {
                        this[element] = restoreObj[element];
                    });
                    this._words = [];
                    restoreObj._wordTexts.forEach(element => {
                        tempFontInfo = MapFontInfo.create({ text: element.text });
                        if (tempFontInfo.text == null)
                            return;
                        tempFontInfo.isStuntFont = element.isStuntFont;
                        this._words.push(tempFontInfo);
                    });
                    this._splitFontWords = [];
                    restoreObj._splitFontWordTexts.forEach(element => {
                        tempFontInfo = MapFontInfo.create({ text: element.text });
                        if (tempFontInfo.text == null)
                            return;
                        tempFontInfo.isStuntFont = element.isStuntFont;
                        this._splitFontWords.push(tempFontInfo);
                    });
                    this._myPlayerInfo.wannengUseTimes = restoreObj.wannengUseTimes;
                    this._myPlayerInfo.guideRemainTimes = restoreObj.guideRemainTimes;
                    this._myPlayerInfo.guideUseTimes = restoreObj.guideUseTimes;
                    this._myPlayerInfo.comeBackTimes = restoreObj.comeBackTimes;
                    this._splitGroupWords = [];
                    restoreObj._splitGroupWordTexts.forEach(element => {
                        tempFontInfo = MapFontInfo.create({ text: element.text });
                        if (tempFontInfo.text == null)
                            return;
                        tempFontInfo.isStuntFont = element.isStuntFont;
                        this._splitGroupWords.push(tempFontInfo);
                    });
                    if (restoreObj._dropingFontInfoText != null) {
                        this._dropingFontInfo = MapFontInfo.create({ text: restoreObj._dropingFontInfoText.text });
                        if (this._dropingFontInfo.text == null) {
                            return false;
                        }
                        this._dropingFontInfo.isStuntFont = restoreObj._dropingFontInfoText.isStuntFont;
                        this.setDispelText(this._dropingFontInfo.text);
                        this._dropingFontInfo.x = this._startPoint.x;
                        this._dropingFontInfo.y = this._startPoint.y;
                    }
                    else {
                        this.randomNextFont();
                        this._dropingFontInfo = this._nextDropingFontInfo;
                        this._nextDropingFontInfo = null;
                    }
                    if (restoreObj._nextDropingFontInfoText != null)
                        this._nextDropingFontInfo = MapFontInfo.create({ text: restoreObj._nextDropingFontInfoText.text });
                    if (this._nextDropingFontInfo == null || this._nextDropingFontInfo.text == null) {
                        this.randomNextFont();
                    }
                    else {
                        this._nextDropingFontInfo.isStuntFont = restoreObj._nextDropingFontInfoText.isStuntFont;
                    }
                    this._sysDispelFontInfoStack = [];
                    restoreObj._sysDispelFontInfoStackPoses.forEach(element => {
                        tempFontInfo = this.getFontInfo(element.x, element.y);
                        if (tempFontInfo != null) {
                            this._sysDispelFontInfoStack.push(tempFontInfo);
                        }
                    });
                    this._sysDropingFontInfos = [];
                    restoreObj._sysDropingFontInfosPoses.forEach(element => {
                        tempFontInfo = this.getFontInfo(element.x, element.y);
                        if (tempFontInfo != null) {
                            this._sysDropingFontInfos.push(tempFontInfo);
                        }
                    });
                    this._tickTime = (100 - this._myPlayerInfo.getStarInfo(this._score).speed_rate) * this._maxTickTime / 100;
                    this.renderGridList();
                    this.refresh();
                    return true;
                }
                catch (error) {
                    localStorage.setItem("CacheData_1", null);
                    return false;
                }
            }
            return false;
        }
        moveDropingFont(left) {
            if (this._dropingFontInfo == null) {
                return;
            }
            let minTickTime = 0.3 * (100 - this._myPlayerInfo.getStarInfo(this._score).speed_rate) * this._maxTickTime / 100;
            if (left) {
                if (this._dropingFontInfo.x > 0 && this._fonts[this._dropingFontInfo.x - 1][this._dropingFontInfo.y] == null) {
                    this.changeDropFontTo(this._dropingFontInfo.x - 1, this._dropingFontInfo.y);
                    this._tickTime = this._tickTime > minTickTime ? this._tickTime : minTickTime;
                }
            }
            else {
                if (this._dropingFontInfo.x < this.list_grids.repeatX - 1 && this._fonts[this._dropingFontInfo.x + 1][this._dropingFontInfo.y] == null) {
                    this.changeDropFontTo(this._dropingFontInfo.x + 1, this._dropingFontInfo.y);
                    this._tickTime = this._tickTime > minTickTime ? this._tickTime : minTickTime;
                }
            }
            this.renderGridList();
        }
        checkSysDropFonts() {
            for (let i = 0; i < this.list_grids.repeatX; i++) {
                let isAdd = false;
                for (let j = this.list_grids.repeatY - 1; j >= 0; j--) {
                    if (this._fonts[i][j] != null && (isAdd || (j + 1 < this.list_grids.repeatY && this._fonts[i][j + 1] == null))) {
                        isAdd = true;
                        if (this._sysDropingFontInfos.indexOf(this._fonts[i][j]) == -1)
                            this._sysDropingFontInfos.push(this._fonts[i][j]);
                    }
                }
            }
        }
        changeDropFontTo(x, y, fontInfo = null) {
            if (y < 0 || x < 0) {
                return;
            }
            if (x >= this.list_grids.repeatX || y >= this.list_grids.repeatY) {
                return;
            }
            if (fontInfo == null) {
                fontInfo = this._dropingFontInfo;
            }
            this._fonts[fontInfo.x][fontInfo.y] = null;
            fontInfo.x = x;
            fontInfo.y = y;
            this._fonts[fontInfo.x][fontInfo.y] = fontInfo;
        }
        renderGridList() {
            let arr = [];
            for (let j = 0; j < this.list_grids.repeatY; j++) {
                for (let i = 0; i < this.list_grids.repeatX; i++) {
                    arr.push(this._fonts[i][j]);
                }
            }
            this.list_grids.dataSource = arr;
        }
        dispelFont(x, y = 0) {
            let dispelFontInfo;
            let indX;
            let indY;
            if (x instanceof MapFontInfo) {
                dispelFontInfo = x;
                this._fonts[x.x][x.y] = null;
                indX = x.x;
                indY = x.y;
            }
            else {
                dispelFontInfo = this.getFontInfo(x, y);
                if (dispelFontInfo != null)
                    this._fonts[x][y] = null;
                indX = x;
                indY = y;
            }
            if (dispelFontInfo != null) {
                let sysInd = this._sysDropingFontInfos.indexOf(dispelFontInfo);
                if (sysInd != -1) {
                    this._sysDropingFontInfos.splice(sysInd, 1);
                }
                sysInd = this._sysDispelFontInfoStack.indexOf(dispelFontInfo);
                if (sysInd != -1) {
                    this._sysDispelFontInfoStack.splice(sysInd, 1);
                }
                dispelFontInfo.destroyStuntEffect();
            }
        }
        invokeStuntFont() {
            let points1 = [];
            let points2 = [];
            let score = 0;
            let tempFontInfo;
            let effectObj = {};
            let pushArrFun = function (x, y, arr) {
                if (effectObj[x + "_" + y] == null) {
                    arr.push(new Laya$1.Point(x, y));
                    effectObj[x + "_" + y] = true;
                }
            };
            this._stuntFontsCheckArr1.forEach(element => {
                if (element.fontInfo != this.getFontInfo(element.fontInfo.x, element.fontInfo.y)) {
                    return;
                }
                pushArrFun(element.fontInfo.x - 1, element.fontInfo.y, points1);
                pushArrFun(element.fontInfo.x + 1, element.fontInfo.y, points1);
                pushArrFun(element.fontInfo.x, element.fontInfo.y - 1, points1);
                pushArrFun(element.fontInfo.x, element.fontInfo.y + 1, points1);
                for (let i = 0; i < this._fonts.length; i++) {
                    for (let j = 0; j < this._fonts[i].length; j++) {
                        tempFontInfo = this._fonts[i][j];
                        if (tempFontInfo != null) {
                            if (tempFontInfo.getStructInfos(element.id, false).length > 0) {
                                score += 10;
                                pushArrFun(tempFontInfo.x, tempFontInfo.y, points2);
                            }
                        }
                    }
                }
            });
            this._stuntFontsCheckArr2.forEach(element => {
                for (let i = 0; i < this._fonts.length; i++) {
                    for (let j = 0; j < this._fonts[i].length; j++) {
                        tempFontInfo = this._fonts[i][j];
                        if (tempFontInfo != null) {
                            if (tempFontInfo.getStructInfos(element.id, false).length > 0) {
                                score += 10;
                                pushArrFun(tempFontInfo.x, tempFontInfo.y, points2);
                            }
                        }
                    }
                }
            });
            let timeToUpdate;
            if (points1.length > 0) {
                this.playEffectInc();
                timeToUpdate = 700;
                points1.forEach(element2 => {
                    tempFontInfo = this.getFontInfo(element2.x, element2.y);
                    if (tempFontInfo != null) {
                        score += 10;
                        this.dispelFont(tempFontInfo);
                    }
                    let tempFontScript = this.getFontScript(element2.x, element2.y);
                    if (tempFontScript != null)
                        tempFontScript.playHeChengEffect();
                });
                Laya$1.Laya.timer.once(500, this, function () {
                    points1.forEach(element3 => {
                        let tempFontScript = this.getFontScript(element3.x, element3.y);
                        if (tempFontScript != null) {
                            tempFontScript.font = null;
                            tempFontScript.clearEffects();
                            tempFontScript.onUpdate();
                        }
                    });
                });
                Laya$1.Laya.timer.once(700, this, function () {
                    this.renderGridList();
                    this.updateScore();
                    this.setStar(this._myPlayerInfo.getStarInfo(this._score).star_num);
                });
                Laya$1.Laya.timer.once(850, this, function () {
                    this.endEffectInc();
                });
            }
            if (points2.length > 0) {
                this.playEffectInc();
                timeToUpdate = 1000;
                Laya$1.Laya.timer.once(300, this, function () {
                    points2.forEach(element2 => {
                        tempFontInfo = this.getFontInfo(element2.x, element2.y);
                        if (tempFontInfo != null) {
                            this.dispelFont(tempFontInfo);
                        }
                        let tempFontScript = this.getFontScript(element2.x, element2.y);
                        if (tempFontScript != null)
                            tempFontScript.playHeChengEffect();
                    });
                });
                Laya$1.Laya.timer.once(800, this, function () {
                    points2.forEach(element3 => {
                        let tempFontScript = this.getFontScript(element3.x, element3.y);
                        if (tempFontScript != null) {
                            tempFontScript.font = null;
                            tempFontScript.clearEffects();
                            tempFontScript.onUpdate();
                        }
                    });
                });
                Laya$1.Laya.timer.once(1150, this, function () {
                    this.endEffectInc();
                });
            }
            this._score += score;
            if (timeToUpdate > 0) {
                Laya$1.Laya.timer.once(timeToUpdate, this, function () {
                    this.renderGridList();
                    this.updateScore();
                    this.setStar(this._myPlayerInfo.getStarInfo(this._score).star_num);
                });
            }
            this._stuntFontsCheckArr1 = [];
            this._stuntFontsCheckArr2 = [];
            return points1.length > 0 || points2.length > 0;
        }
        dispelCiZu(changeFontInfos) {
            let checkFontTxts = [];
            for (let j = 0; j < this.list_grids.repeatY; j++) {
                for (let i = 0; i < this.list_grids.repeatX; i++) {
                    let tempFontInfo = this.getFontInfo(i, j);
                    if (tempFontInfo != null) {
                        let txt = tempFontInfo.text;
                        if (checkFontTxts.indexOf(txt) == -1) {
                            checkFontTxts.push(txt);
                        }
                    }
                }
            }
            let checkArr = [];
            checkFontTxts.forEach(element1 => {
                let tempArr = MapFontInfo.getGroup(element1);
                tempArr.forEach(element2 => {
                    if (checkArr.indexOf(element2) != -1) {
                        return;
                    }
                    let chars = element2.split("");
                    let isFix = true;
                    for (let i = 0; i < chars.length; i++) {
                        if (checkFontTxts.indexOf(chars[i]) == -1) {
                            isFix = false;
                            break;
                        }
                    }
                    if (isFix) {
                        if (element2 == this._popularGroup) {
                            checkArr.unshift(element2);
                        }
                        else {
                            checkArr.push(element2);
                        }
                    }
                });
            });
            let isDispel = false;
            changeFontInfos.forEach(element => {
                if (this.getFontInfo(element.x, element.y) != element) {
                    return;
                }
                let cout = this.dispelCiZuItem(element.x, element.y, checkArr);
                if (cout == true) {
                    isDispel = true;
                }
            });
            return isDispel;
        }
        dispelCiZuItem(x, y, checkArr) {
            let root = this.getFontInfo(x, y);
            if (root == null) {
                return;
            }
            for (let i = 0; i < checkArr.length; i++) {
                let group = checkArr[i];
                if (group.indexOf(root.text) == -1) {
                    continue;
                }
                this._checkChars = group.split("");
                let aStarInfo = this.dispelCiZuItemSure(x, y, null);
                if (aStarInfo != null) {
                    SoundTool.playXiaoChuEffect();
                    this.playEffectInc();
                    if (group == this._popularGroup) {
                        this._popularGroup = null;
                    }
                    let score = 40;
                    let points = aStarInfo.getSureList();
                    let time = 0;
                    let ciZuObj = {};
                    points.forEach(element => {
                        ciZuObj[element.x + "_" + element.y] = true;
                        let tempFontScript = this.getFontScript(element.x, element.y);
                        tempFontScript.playHeChengEffect();
                        let tempFont = this.getFontInfo(element.x, element.y);
                        if (tempFont != null) {
                            this.dispelFont(tempFont);
                            if (tempFont.isStuntFont) {
                                this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                            }
                            time++;
                        }
                    });
                    points.forEach(element => {
                        let tempFont = this.getFontInfo(element.x - 1, element.y);
                        if (tempFont != null) {
                            this.dispelFont(tempFont);
                            if (tempFont.isStuntFont) {
                                this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                            }
                            time++;
                        }
                        tempFont = this.getFontInfo(element.x + 1, element.y);
                        if (tempFont != null) {
                            this.dispelFont(tempFont);
                            if (tempFont.isStuntFont) {
                                this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                            }
                            time++;
                        }
                        tempFont = this.getFontInfo(element.x, element.y - 1);
                        if (tempFont != null) {
                            this.dispelFont(tempFont);
                            if (tempFont.isStuntFont) {
                                this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                            }
                            time++;
                        }
                        tempFont = this.getFontInfo(element.x, element.y + 1);
                        if (tempFont != null) {
                            this.dispelFont(tempFont);
                            if (tempFont.isStuntFont) {
                                this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                            }
                            time++;
                        }
                    });
                    score += (time * 10);
                    this._score += score;
                    Laya$1.Laya.timer.once(500, this, function () {
                        points.forEach(element => {
                            let tempFontScript = this.getFontScript(element.x, element.y);
                            tempFontScript.font = null;
                            tempFontScript.clearEffects();
                            tempFontScript.onUpdate();
                        });
                    });
                    Laya$1.Laya.timer.once(300, this, function () {
                        points.forEach(element => {
                            let tempFontScript;
                            let tempX = element.x - 1;
                            let tempY = element.y;
                            if (ciZuObj[tempX + "_" + tempY] != true) {
                                tempFontScript = this.getFontScript(tempX, tempY);
                                if (tempFontScript != null) {
                                    tempFontScript.playHeChengEffect();
                                }
                            }
                            tempX = element.x + 1;
                            tempY = element.y;
                            if (ciZuObj[tempX + "_" + tempY] != true) {
                                tempFontScript = this.getFontScript(tempX, tempY);
                                if (tempFontScript != null) {
                                    tempFontScript.playHeChengEffect();
                                }
                            }
                            tempX = element.x;
                            tempY = element.y - 1;
                            if (ciZuObj[tempX + "_" + tempY] != true) {
                                tempFontScript = this.getFontScript(tempX, tempY);
                                if (tempFontScript != null) {
                                    tempFontScript.playHeChengEffect();
                                }
                            }
                            tempX = element.x;
                            tempY = element.y + 1;
                            if (ciZuObj[tempX + "_" + tempY] != true) {
                                tempFontScript = this.getFontScript(tempX, tempY);
                                if (tempFontScript != null) {
                                    tempFontScript.playHeChengEffect();
                                }
                            }
                        });
                    });
                    Laya$1.Laya.timer.once(1200, this, function () {
                        this.setDispelText(group);
                        this.renderGridList();
                        this.updateScore();
                        this.setStar(this._myPlayerInfo.getStarInfo(this._score).star_num);
                    });
                    Laya$1.Laya.timer.once(2400, this, function () {
                        this.endEffectInc();
                    });
                    return true;
                }
            }
            return false;
        }
        dispelCiZuItemSure(x, y, parentAStarInfo) {
            let currentFontInfo = this.getFontInfo(x, y);
            if (currentFontInfo == null) {
                return null;
            }
            let chars = parentAStarInfo == null ? this._checkChars.concat() : parentAStarInfo.chars.concat();
            if (chars.indexOf(currentFontInfo.text) == -1) {
                return null;
            }
            let aStarInfo = new SearchInfo();
            aStarInfo.currentPoint.x = x;
            aStarInfo.currentPoint.y = y;
            aStarInfo.setOpenList(parentAStarInfo == null ? [] : parentAStarInfo.getOpenList().concat());
            aStarInfo.setSureList(parentAStarInfo == null ? [] : parentAStarInfo.getSureList().concat());
            aStarInfo.open(x, y, false);
            aStarInfo.sure(x, y);
            aStarInfo.chars = chars;
            aStarInfo.chars.splice(aStarInfo.chars.indexOf(currentFontInfo.text), 1);
            if (aStarInfo.chars.length == 0) {
                return aStarInfo;
            }
            if (!aStarInfo.isOpen(x - 1, y) && !aStarInfo.isSure(x - 1, y)) {
                aStarInfo.open(x - 1, y);
            }
            if (!aStarInfo.isOpen(x + 1, y) && !aStarInfo.isSure(x + 1, y)) {
                aStarInfo.open(x + 1, y);
            }
            if (!aStarInfo.isOpen(x, y - 1) && !aStarInfo.isSure(x, y - 1)) {
                aStarInfo.open(x, y - 1);
            }
            if (!aStarInfo.isOpen(x, y + 1) && !aStarInfo.isSure(x, y + 1)) {
                aStarInfo.open(x, y + 1);
            }
            let openList = aStarInfo.getOpenList();
            for (let i = 0; i < openList.length; i++) {
                let element = openList[i];
                let cout = this.dispelCiZuItemSure(element.x, element.y, aStarInfo);
                if (cout != null) {
                    return cout;
                }
            }
            return null;
        }
        dispelStar(x, y) {
            SoundTool.playXiaoChuEffect();
            this.playEffectInc();
            let score = 40;
            let points = [{ x, y }];
            let time = 0;
            let cout = points.concat();
            points.forEach(element => {
                let tempFont = this.getFontInfo(element.x - 1, element.y);
                let tempFontGrid = this.getFontScript(element.x - 1, element.y);
                if (tempFont != null) {
                    this.dispelFont(tempFont);
                    if (tempFontGrid) {
                        tempFontGrid.playHeChengEffect();
                    }
                    if (tempFont.isStuntFont) {
                        this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                    }
                    time++;
                }
                tempFont = this.getFontInfo(element.x + 1, element.y);
                tempFontGrid = this.getFontScript(element.x + 1, element.y);
                if (tempFont != null) {
                    this.dispelFont(tempFont);
                    if (tempFontGrid) {
                        tempFontGrid.playHeChengEffect();
                    }
                    if (tempFont.isStuntFont) {
                        this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                    }
                    time++;
                }
                tempFont = this.getFontInfo(element.x, element.y - 1);
                tempFontGrid = this.getFontScript(element.x, element.y - 1);
                if (tempFont != null) {
                    this.dispelFont(tempFont);
                    if (tempFontGrid) {
                        tempFontGrid.playHeChengEffect();
                    }
                    if (tempFont.isStuntFont) {
                        this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                    }
                    time++;
                }
                tempFont = this.getFontInfo(element.x, element.y + 1);
                tempFontGrid = this.getFontScript(element.x, element.y + 1);
                if (tempFont != null) {
                    this.dispelFont(tempFont);
                    if (tempFontGrid) {
                        tempFontGrid.playHeChengEffect();
                    }
                    if (tempFont.isStuntFont) {
                        this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                    }
                    time++;
                }
                tempFont = this.getFontInfo(element.x - 2, element.y);
                tempFontGrid = this.getFontScript(element.x - 2, element.y);
                if (tempFont != null) {
                    this.dispelFont(tempFont);
                    if (tempFontGrid) {
                        tempFontGrid.playHeChengEffect();
                    }
                    if (tempFont.isStuntFont) {
                        this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                    }
                    time++;
                }
                tempFont = this.getFontInfo(element.x + 2, element.y);
                tempFontGrid = this.getFontScript(element.x + 2, element.y);
                if (tempFont != null) {
                    this.dispelFont(tempFont);
                    if (tempFontGrid) {
                        tempFontGrid.playHeChengEffect();
                    }
                    if (tempFont.isStuntFont) {
                        this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                    }
                    time++;
                }
                tempFont = this.getFontInfo(element.x, element.y - 2);
                tempFontGrid = this.getFontScript(element.x, element.y - 2);
                if (tempFont != null) {
                    this.dispelFont(tempFont);
                    if (tempFontGrid) {
                        tempFontGrid.playHeChengEffect();
                    }
                    if (tempFont.isStuntFont) {
                        this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                    }
                    time++;
                }
                tempFont = this.getFontInfo(element.x, element.y + 2);
                tempFontGrid = this.getFontScript(element.x, element.y + 2);
                if (tempFont != null) {
                    this.dispelFont(tempFont);
                    if (tempFontGrid) {
                        tempFontGrid.playHeChengEffect();
                    }
                    if (tempFont.isStuntFont) {
                        this._stuntFontsCheckArr2.push({ fontInfo: tempFont, id: tempFont.id });
                    }
                    time++;
                }
            });
            score += (time * 10);
            this._score += score;
            Laya$1.Laya.timer.once(500, this, function () {
                points.forEach(element => {
                    let tempFontScript = this.getFontScript(element.x, element.y);
                    tempFontScript.font = null;
                    tempFontScript.clearEffects();
                    tempFontScript.onUpdate();
                });
            });
            Laya$1.Laya.timer.once(200, this, function () {
                points.forEach(element => {
                    let tempFont = this.getFontInfo(element.x, element.y);
                    let tempFontGrid = this.getFontScript(element.x, element.y);
                    if (tempFont)
                        this.dispelFont(tempFont);
                    if (tempFontGrid) {
                        tempFontGrid.playHeChengEffect();
                    }
                });
            });
            Laya$1.Laya.timer.once(1100, this, function () {
                this.setDispelText("*");
                this.renderGridList();
                this.updateScore();
                this.setStar(this._myPlayerInfo.getStarInfo(this._score).star_num);
            });
            Laya$1.Laya.timer.once(1400, this, function () {
                this.endEffectInc();
            });
        }
        dispel(x, y) {
            let targetFontInfo = this.getFontInfo(x, y);
            if (targetFontInfo == null)
                return false;
            if (targetFontInfo.text == "*") {
                this.dispelStar(x, y);
                return false;
            }
            let canHeChengFontInfos = targetFontInfo.canHeChengFontInfos;
            if (canHeChengFontInfos.length == 0)
                return false;
            let popularGroup = this._popularGroup;
            if (popularGroup != null) {
                canHeChengFontInfos.sort(function (a, b) {
                    if (popularGroup.indexOf(a.text) != -1) {
                        return -1;
                    }
                    else if (popularGroup.indexOf(b.text) != -1) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
            }
            let hasHeCheng = false;
            for (let i = 0; i < canHeChengFontInfos.length; i++) {
                if (hasHeCheng) {
                    break;
                }
                let tempFontInfo = canHeChengFontInfos[i];
                let structInfoList = tempFontInfo.structInfo.split(",");
                for (let j = 0; j < structInfoList.length; j++) {
                    let structList = structInfoList[j].split("_");
                    if (structList.length > 1 && structList.indexOf(targetFontInfo.id.toString()) != -1) {
                        let cout = this.dispelItem(targetFontInfo.x, targetFontInfo.y, structList, tempFontInfo.id);
                        if (cout) {
                            hasHeCheng = true;
                            break;
                        }
                    }
                }
            }
            return hasHeCheng;
        }
        dispelItem(x, y, checkArr, fontId) {
            let root = this.getFontInfo(x, y);
            if (root == null) {
                return;
            }
            this._checkIds = checkArr;
            let searchInfo = this.dispelItemSure(x, y, null);
            if (searchInfo != null) {
                SoundTool.playHeChengEffect();
                this.playEffectInc();
                let maxQuality = 0;
                let points = searchInfo.getSureList();
                points.forEach(element => {
                    let tempFontGrid = this.getFontScript(element.x, element.y);
                    let tempFontInfo = this.getFontInfo(element.x, element.y);
                    if (maxQuality < tempFontInfo.quality) {
                        maxQuality = tempFontInfo.quality;
                    }
                    if (tempFontGrid != null) {
                        tempFontGrid.playHeChengEffect();
                    }
                });
                let coutFontInfo = MapFontInfo.create({ id: fontId });
                this.setDispelText(coutFontInfo.text);
                coutFontInfo.x = x;
                coutFontInfo.y = y;
                coutFontInfo.quality = maxQuality + 1;
                let targetCell = this.getFontCell(x, y);
                let targetPoint = new Laya$1.Point(targetCell.x, targetCell.y);
                Laya$1.Laya.timer.once(1410, this, function (par_points) {
                    par_points.forEach(element => {
                        let tempFontInfo = this.getFontInfo(element.x, element.y);
                        if (tempFontInfo == null)
                            return;
                        if (element.x != x || element.y != y) {
                            let moveStartCell = this.getFontCell(element.x, element.y);
                            let moveStartFontGridScript = this.getFontScript(element.x, element.y);
                            moveStartFontGridScript.font = null;
                            moveStartFontGridScript.clearEffects();
                            let moveCell = Laya$1.Pool.getItemByCreateFun("FontGrid", this.prefab_fontGrid.create, this.prefab_fontGrid);
                            moveCell["x"] = moveStartCell["x"];
                            moveCell["y"] = moveStartCell["y"];
                            let moveFontGridScript = moveCell.getComponent(FontGrid);
                            moveFontGridScript.font = tempFontInfo.text;
                            moveFontGridScript.addEffect(tempFontInfo.getStuntFontEffect());
                            moveFontGridScript.onUpdate();
                            this.list_grids.addChild(moveCell);
                            Laya$1.Tween.to(moveCell, { x: targetPoint.x, y: targetPoint.y }, 100, null, Laya$1.Handler.create(this, function (targetMc) {
                                targetMc.destroy(true);
                            }, [moveCell]));
                        }
                        this.dispelFont(tempFontInfo);
                        if (tempFontInfo && tempFontInfo.isStuntFont) {
                            this._stuntFontsCheckArr1.push({ fontInfo: coutFontInfo, id: tempFontInfo.id });
                        }
                    });
                }, [points]);
                let score = 30;
                let time = points.length;
                score += 10 * time;
                this._score += score;
                ControllerMgr.getInstance(TipController).showLeftBottomTip("+" + score);
                Laya$1.Laya.timer.once(1500, this, function () {
                    this._fonts[x][y] = coutFontInfo;
                    let targetFontScript = this.getFontScript(x, y);
                    targetFontScript.font = coutFontInfo.text;
                    targetFontScript.addEffect(coutFontInfo.getStuntFontEffect());
                    this.updateScore();
                    this.setStar(this._myPlayerInfo.getStarInfo(this._score).star_num);
                });
                Laya$1.Laya.timer.once(2000, this, function () {
                    this.endEffectInc();
                });
                this._sysDropingFontInfos.push(coutFontInfo);
                return true;
            }
            return false;
        }
        dispelItemSure(x, y, parentAStarInfo) {
            let currentFontInfo = this.getFontInfo(x, y);
            if (currentFontInfo == null) {
                return null;
            }
            let chars = parentAStarInfo == null ? this._checkIds.concat() : parentAStarInfo.chars.concat();
            if (chars.indexOf(currentFontInfo.id.toString()) == -1) {
                return null;
            }
            let aStarInfo = new SearchInfo();
            aStarInfo.currentPoint.x = x;
            aStarInfo.currentPoint.y = y;
            aStarInfo.setOpenList(parentAStarInfo == null ? [] : parentAStarInfo.getOpenList().concat());
            aStarInfo.setSureList(parentAStarInfo == null ? [] : parentAStarInfo.getSureList().concat());
            aStarInfo.open(x, y, false);
            aStarInfo.sure(x, y);
            aStarInfo.chars = chars;
            aStarInfo.chars.splice(aStarInfo.chars.indexOf(currentFontInfo.id.toString()), 1);
            if (aStarInfo.chars.length == 0) {
                return aStarInfo;
            }
            if (!aStarInfo.isOpen(x - 1, y) && !aStarInfo.isSure(x - 1, y)) {
                aStarInfo.open(x - 1, y);
            }
            if (!aStarInfo.isOpen(x + 1, y) && !aStarInfo.isSure(x + 1, y)) {
                aStarInfo.open(x + 1, y);
            }
            if (!aStarInfo.isOpen(x, y - 1) && !aStarInfo.isSure(x, y - 1)) {
                aStarInfo.open(x, y - 1);
            }
            if (!aStarInfo.isOpen(x, y + 1) && !aStarInfo.isSure(x, y + 1)) {
                aStarInfo.open(x, y + 1);
            }
            let openList = aStarInfo.getOpenList();
            for (let i = 0; i < openList.length; i++) {
                let element = openList[i];
                let cout = this.dispelItemSure(element.x, element.y, aStarInfo);
                if (cout != null) {
                    return cout;
                }
            }
            return null;
        }
        destroyGuideImgs() {
            for (let tempProperty in this._guideImgs) {
                let tempImg = this._guideImgs[tempProperty];
                Laya$1.Laya.timer.clearAll(tempImg);
                Laya$1.Tween.clearAll(tempImg);
                tempImg.destroy(true);
            }
            this._guideImgs = {};
        }
        setNextGuideRate() {
            if (!AppConfig.hadGuidance()) {
                if (this._score < 300) {
                    this._guideRate = 100;
                }
                else if (this._score < 500) {
                    this._guideRate = 40;
                }
                else if (this._score < 800) {
                    this._guideRate = 15;
                }
                else {
                    this._guideRate = Math.min(this._guideRate + 1, 8);
                }
                return;
            }
            this._guideRate = Math.min(this._guideRate + 1, 8);
        }
        guideToGrid() {
            for (let tempProperty in this._guideImgs) {
                let tempImg = this._guideImgs[tempProperty];
                Laya$1.Laya.timer.clearAll(tempImg);
                Laya$1.Tween.clearAll(tempImg);
                tempImg.destroy(true);
            }
            if (this._dropingFontInfo.text == "*")
                return;
            this._guideImgs = {};
            let rate = Math.random() * 100;
            if (this._myPlayerInfo.guideRemainTimes > 0) {
                rate = 0;
            }
            if (rate > this._guideRate) {
                this.setNextGuideRate();
                return;
            }
            let dropingFontCanHeChengFontInfos = this._dropingFontInfo.canHeChengFontInfos;
            let dropingFontCanHeChengGroups = this._dropingFontInfo.canHeChengGroups;
            let topFontInfos = this.getTopFontInfos();
            let points = [];
            topFontInfos.forEach(tempFontInfo => {
                if (tempFontInfo.id == null) {
                    return;
                }
                dropingFontCanHeChengGroups.forEach(tempGroup => {
                    if (tempGroup.length != 2) {
                        return;
                    }
                    let groupArr = tempGroup.split("");
                    groupArr.splice(groupArr.indexOf(this._dropingFontInfo.text), 1);
                    if (groupArr.indexOf(tempFontInfo.text) != -1) {
                        points.push(new Laya$1.Point(tempFontInfo.x, tempFontInfo.y));
                        return;
                    }
                });
                dropingFontCanHeChengFontInfos.forEach(tempMergeFontInfo => {
                    let structInfos = tempMergeFontInfo.getStructInfos(tempFontInfo.id);
                    for (let i = 0; i < structInfos.length; i++) {
                        let tempStruckInfo = structInfos[i];
                        let tempStruckArr = tempStruckInfo.split("_");
                        if (tempStruckArr.length != 2) {
                            continue;
                        }
                        tempStruckArr.splice(tempStruckArr.indexOf(tempFontInfo.id.toString()), 1);
                        if (tempStruckArr.indexOf(this._dropingFontInfo.id.toString()) != -1) {
                            points.push(new Laya$1.Point(tempFontInfo.x, tempFontInfo.y));
                            return;
                        }
                    }
                });
            });
            if (points.length > 0) {
                this._guideRate = 1;
                this.setNextGuideRate();
                if (this._myPlayerInfo.guideRemainTimes > 0) {
                    this._myPlayerInfo.guideRemainTimes--;
                }
                points.forEach(element => {
                    if (this._guideImgs[element.x + "-" + element.y] != null) {
                        return;
                    }
                    let tempGrid = this.getFontCell(element.x, element.y);
                    let tempImg = new Laya$1.Image("map/tz_jiantou.png");
                    tempImg.scaleX = tempImg.scaleY = 0.7;
                    tempImg.rotation = 90;
                    tempImg.x = 75;
                    tempImg.y = -75;
                    tempGrid.addChild(tempImg);
                    this._guideImgs[element.x + "-" + element.y] = tempImg;
                    Laya$1.Laya.timer.loop(1000, tempImg, function (par_img) {
                        let targetY = par_img.y == -75 ? -85 : -75;
                        Laya$1.Tween.to(par_img, { y: targetY }, 750);
                    }, [tempImg]);
                });
            }
        }
        getFontInfo(x, y) {
            if (this._fonts[x] == null) {
                return null;
            }
            return this._fonts[x][y];
        }
        getFontCell(x, y) {
            if (y < 0 || y >= this.list_grids.repeatY || x < 0 || x >= this.list_grids.repeatX) {
                return null;
            }
            return this.list_grids.getCell(y * this.list_grids.repeatX + x);
        }
        getFontScript(x, y) {
            let fontCell = this.getFontCell(x, y);
            if (fontCell == null)
                return null;
            return fontCell.getComponent(FontGrid);
        }
        refresh() {
            this.setStar(this._myPlayerInfo.getStarInfo(this._score).star_num);
            this.updateNextDropingFont();
            this.updateScore();
            this.updatePopularGroup();
            if (this._myPlayerInfo.wannengUseTimes > 0) {
                this.btn_wanneng.mouseEnabled = true;
                this.btn_wanneng.gray = false;
            }
            else {
                this.btn_wanneng.mouseEnabled = false;
                this.btn_wanneng.gray = true;
            }
            if (this._myPlayerInfo.guideUseTimes > 0) {
                this.btn_point.mouseEnabled = true;
                this.btn_point.gray = false;
            }
            else {
                this.btn_point.mouseEnabled = false;
                this.btn_point.gray = true;
            }
        }
        updateScore() {
            this.txt_score.text = this._score.toString();
        }
        updatePopularGroup() {
            if (this._popularGroup == null) {
                let bank = MapFontInfo.DataSource["bank"];
                this._popularGroup = bank[Math.floor(Math.random() * bank.length)];
                this.heCiSplitTimes = 0;
            }
            if (this._popularGroup != null) {
                this.txt_popularGroup.text = this._popularGroup;
                this.img_popularGroupBg.height = this.txt_popularGroup.displayHeight + 16;
            }
        }
        updateNextDropingFont() {
            if (this._nextDropingFontInfo == null) {
                this.txt_nextFont.text = "";
            }
            else {
                this.txt_nextFont.text = this._nextDropingFontInfo.text;
            }
        }
        setDispelText(text) {
            Laya$1.Tween.clearAll(this.mc_dispelText);
            this.mc_dispelText.scaleX = this.mc_dispelText.scaleY = 0.4;
            this.txt_dispelText.text = text;
            switch (text.length) {
                case 1:
                    this.txt_dispelText.fontSize = 180;
                    this.txt_dispelText.size(180, 180);
                    break;
                case 2:
                    this.txt_dispelText.fontSize = 90;
                    this.txt_dispelText.size(180, 90);
                    break;
                case 3:
                    this.txt_dispelText.fontSize = 40;
                    this.txt_dispelText.size(120, 40);
                    break;
                case 4:
                    this.txt_dispelText.fontSize = 30;
                    this.txt_dispelText.size(120, 30);
                    break;
            }
            Laya$1.Tween.to(this.mc_dispelText, { scaleX: 1, scaleY: 1 }, 300);
        }
        setStar(star) {
            let list = [];
            while (star > 0 || list.length < 5) {
                if (star > 0)
                    list.push(true);
                else
                    list.push(false);
                star--;
            }
        }
        reduceNanDu(kunNan) {
            if (!AppConfig.hadGuidance()) {
                if (this._score < 300) {
                    kunNan = Math.floor(kunNan * 250 / 100);
                }
                else if (this._score < 500) {
                    kunNan = Math.floor(kunNan * 160 / 100);
                }
                else if (this._score < 700) {
                    kunNan = Math.floor(kunNan * 130 / 100);
                }
            }
            return kunNan;
        }
        randomNextFont() {
            let fontGridNum = this.getFontGridNum();
            if (this._debugMode) {
                let txt = this._debugDropFonts.shift();
                this._nextDropingFontInfo = MapFontInfo.create({ text: txt });
                if (this._nextDropingFontInfo.text != null) {
                    return;
                }
            }
            if (Math.random() * 100 > this.buShouRate) {
                this.buShouRate = Math.min(this.buShouRate + 0.3, 3);
            }
            else {
                if (this._score > 1500) {
                    this.buShouRate = 0;
                    let txt = this.getRandomElement(MapFontInfo.DataSource["stunt_font"]);
                    this._nextDropingFontInfo = MapFontInfo.create({ text: txt });
                    if (this._nextDropingFontInfo.text != null) {
                        this._nextDropingFontInfo.isStuntFont = true;
                        return;
                    }
                }
            }
            if (this._myPlayerInfo.guideRemainTimes === undefined) {
                this._myPlayerInfo.guideRemainTimes = 0;
            }
            if (this._guideDropFonts.length > 0) {
                let txt = this._guideDropFonts.shift();
                this._nextDropingFontInfo = MapFontInfo.create({ text: txt });
                if (this._nextDropingFontInfo.text != null) {
                    return;
                }
            }
            if (!(this._myPlayerInfo.guideRemainTimes > 0) && this._splitFontWords.length > 0) {
                this._nextDropingFontInfo = this.getRandomElement(this._splitFontWords);
                this._splitFontWords.splice(this._splitFontWords.indexOf(this._nextDropingFontInfo), 1);
                if (this._nextDropingFontInfo != null) {
                    return;
                }
            }
            if (!(this._myPlayerInfo.guideRemainTimes > 0) && this._splitGroupWords.length > 0) {
                this._nextDropingFontInfo = this.getRandomElement(this._splitGroupWords);
                this._splitGroupWords.splice(this._splitGroupWords.indexOf(this._nextDropingFontInfo), 1);
                if (this._nextDropingFontInfo != null) {
                    return;
                }
            }
            let kunNan = this.getNanDuXiShu(fontGridNum) * this._myPlayerInfo.getStarInfo(this._score).split_rate;
            let result = Math.min(100, Math.floor(this.heCizuRate * kunNan / 10000));
            if (!(this._myPlayerInfo.guideRemainTimes > 0) && this.getRandomResult(result)) {
                if (this._words.length == 0) {
                    this.heCiSplitTimes++;
                    this._words = this.splitGroupToFontInfos(this._popularGroup, null, this.heCiSplitTimes > 2 ? "special" : "commen");
                }
                this._nextDropingFontInfo = this.getRandomElement(this._words);
                this._words.splice(this._words.indexOf(this._nextDropingFontInfo), 1);
                if (this._nextDropingFontInfo != null) {
                    if (fontGridNum < 10) {
                        this.hanZiRate += 16;
                    }
                    else if (fontGridNum < 22) {
                        this.hanZiRate += 10;
                        this.ciZuRate += 2;
                    }
                    else if (fontGridNum < 28) {
                        this.hanZiRate += 5;
                        this.ciZuRate += 5;
                    }
                    else {
                        this.hanZiRate += 5;
                        this.ciZuRate += 7;
                    }
                    this.heCizuRate = 10;
                    return;
                }
            }
            this.heCizuRate += 10;
            let topFontInfos = this.getTopFontInfos();
            if (this._myPlayerInfo.guideRemainTimes > 0) {
                this.hanZiRate = 10000;
                this.ciZuRate = 10000;
            }
            if (topFontInfos.length > 0) {
                let topFontInfo = this.getRandomElement(topFontInfos);
                for (let index = 0; index < 5; index++) {
                    if (topFontInfo.canHeChengFont) {
                        break;
                    }
                    topFontInfo = this.getRandomElement(topFontInfos);
                }
                if (topFontInfo.canHeChengFont && this.getRandomResult(this.reduceNanDu(this.hanZiRate * kunNan / 10000))) {
                    let fontInfos = topFontInfo.canHeChengFontInfos;
                    let splitFontInfo = this.getRandomElement(fontInfos);
                    this._splitFontWords = this.splitFontToFontInfos(splitFontInfo, topFontInfo.id);
                    this._nextDropingFontInfo = this.getRandomElement(this._splitFontWords);
                    this._splitFontWords.splice(this._splitFontWords.indexOf(this._nextDropingFontInfo), 1);
                    if (this._nextDropingFontInfo != null) {
                        if (this._myPlayerInfo.guideRemainTimes > 0) {
                            this._dropingFontInfo = MapFontInfo.create({ id: this._nextDropingFontInfo.id });
                            this._dropingFontInfo.isStuntFont = this._nextDropingFontInfo.isStuntFont;
                        }
                        if (fontGridNum < 10) {
                            this.hanZiRate = 20;
                        }
                        else if (fontGridNum < 22) {
                            this.hanZiRate = 16;
                            this.ciZuRate += 2;
                        }
                        else if (fontGridNum < 28) {
                            this.hanZiRate = 10;
                            this.ciZuRate += 3;
                        }
                        else {
                            this.hanZiRate = 5;
                            this.ciZuRate += 6;
                        }
                        return;
                    }
                }
                for (let index = 0; index < 5; index++) {
                    if (topFontInfo.canHeChengGroup) {
                        break;
                    }
                    topFontInfo = this.getRandomElement(topFontInfos);
                }
                if (topFontInfo.canHeChengGroup && this.getRandomResult(this.reduceNanDu(this.ciZuRate * kunNan / 10000))) {
                    let groups = topFontInfo.canHeChengGroups;
                    let splitGroup = this.getRandomElement(groups);
                    this._splitGroupWords = this.splitGroupToFontInfos(splitGroup, topFontInfo.text, "sp");
                    this._nextDropingFontInfo = this.getRandomElement(this._splitGroupWords);
                    this._splitGroupWords.splice(this._splitGroupWords.indexOf(this._nextDropingFontInfo), 1);
                    if (this._nextDropingFontInfo != null) {
                        if (this._myPlayerInfo.guideRemainTimes > 0) {
                            this._dropingFontInfo = MapFontInfo.create({ id: this._nextDropingFontInfo.id });
                            this._dropingFontInfo.isStuntFont = this._nextDropingFontInfo.isStuntFont;
                        }
                        if (fontGridNum < 10) {
                            this.hanZiRate += 15;
                            this.ciZuRate = 1;
                        }
                        else if (fontGridNum < 22) {
                            this.hanZiRate += 11;
                            this.ciZuRate = 4;
                        }
                        else if (fontGridNum < 28) {
                            this.hanZiRate += 6;
                            this.ciZuRate = 8;
                        }
                        else if (fontGridNum < 35) {
                            this.hanZiRate += 3;
                            this.ciZuRate = 11;
                        }
                        else {
                            this.hanZiRate += 3;
                            this.ciZuRate = 13;
                        }
                        return;
                    }
                }
            }
            if (fontGridNum < 10) {
                this.hanZiRate += 14;
            }
            else if (fontGridNum < 22) {
                this.hanZiRate += 10;
                this.ciZuRate += 1;
            }
            else if (fontGridNum < 30) {
                this.hanZiRate += 5;
                this.ciZuRate += 6;
            }
            else {
                this.hanZiRate += 4;
                this.ciZuRate += 7;
            }
            let fontDataArr = this.getRandHzBySocore(MapFontInfo.DataSource["font"]);
            let mapFontInfo = MapFontInfo.create();
            mapFontInfo.setDataByValueArr(fontDataArr);
            this._nextDropingFontInfo = mapFontInfo;
        }
        getRandHzBySocore(arr) {
            if (arr.length == 0)
                return null;
            let randNum = 100;
            if (this._score > 3000 && this._score <= 20000) {
                randNum += (this._score - 2000) / 15;
            }
            else if (this._score > 20000) {
                randNum += (this._score - 2000) / 10;
            }
            if (randNum > arr.length) {
                randNum = arr.length - 1 - 200;
            }
            randNum = Math.floor(Math.random() * randNum) + 200;
            if (randNum > arr.length) {
                randNum = arr.length - 1;
            }
            return arr[randNum];
        }
        getTopFontInfos() {
            let cout = [];
            let font = null;
            for (let i = 0; i < this.list_grids.repeatX; i++) {
                font = null;
                for (let j = 0; j < this.list_grids.repeatY; j++) {
                    if (this._fonts[i][j] != null) {
                        font = this._fonts[i][j];
                        break;
                    }
                }
                if (font != null) {
                    cout.push(font);
                }
            }
            return cout;
        }
        splitGroupToFontInfos(str, removeFontText = null, splitType = "commen") {
            let cout = [];
            str.split('').forEach(element => {
                if (element == removeFontText) {
                    return;
                }
                let fontInfo = MapFontInfo.create({ text: element });
                if (fontInfo.id == null) {
                    console.log("lack font:" + element);
                    return;
                }
                if (splitType == "commen") {
                    cout = cout.concat(this.splitFontToFontInfos(fontInfo, null, splitType));
                }
                else {
                    cout.push(fontInfo);
                }
            });
            return cout;
        }
        splitFontToFontInfos(fontTxt, removeFontId = null, splitType = "commen") {
            let fontInfo;
            if (fontTxt instanceof MapFontInfo) {
                fontInfo = fontTxt;
            }
            else {
                fontInfo = MapFontInfo.create({ text: fontTxt });
            }
            if (splitType != "commen") {
                return [fontInfo];
            }
            let cout = [];
            let structInfos = fontInfo.structInfo.split(",");
            let structInfo = structInfos[Math.floor(Math.random() * structInfos.length)];
            if (structInfo == fontInfo.id.toString()) {
                cout.push(fontInfo);
            }
            else {
                structInfo.split("_").forEach(element2 => {
                    if (element2 == "" || (removeFontId != null && element2 == removeFontId.toString())) {
                        return;
                    }
                    let splitFontInfo = MapFontInfo.create({ id: element2 });
                    if (splitFontInfo.id == null) {
                        console.log("lack font id:" + element2);
                        return;
                    }
                    cout.push(splitFontInfo);
                });
            }
            return cout;
        }
        getRandomResult(val) {
            if (Math.floor(Math.random() * 100) < val) {
                return true;
            }
            return false;
        }
        getNanDuXiShu(fontGridNum) {
            return MapFontInfo.DataSource["degree_difficulty"][fontGridNum];
        }
        getFontGridNum() {
            let fontGridNum = 0;
            for (let i = 0; i < this.list_grids.repeatX; i++) {
                for (let j = 0; j < this.list_grids.repeatY; j++) {
                    if (this._fonts[i][j] != null) {
                        fontGridNum += this.list_grids.repeatY - j;
                        break;
                    }
                }
            }
            return fontGridNum;
        }
        getRandomElement(arr) {
            if (arr.length == 0)
                return null;
            return arr[Math.floor(Math.random() * arr.length)];
        }
        playEffectInc() {
            this._playerEffectInd++;
            this.changeGameStatue(GameState.EffectPause);
        }
        endEffectInc() {
            this._playerEffectInd--;
            if (this._playerEffectInd < 0) {
                this._playerEffectInd = 0;
            }
            if (this._playerEffectInd == 0 && this._gameState == GameState.EffectPause) {
                this.changeGameStatue(GameState.Playing);
                this.checkSysDropFonts();
                this._sysDispelFontInfoStack = [];
                if (this._sysDropingFontInfos.length == 0) {
                    this.invokeStuntFont();
                }
            }
        }
    }
    class SearchInfo {
        constructor() {
            this.currentPoint = new Laya$1.Point();
            this._openList = [];
            this._openObj = {};
            this._sureList = [];
            this._sureObj = {};
        }
        setOpenList(points) {
            points.forEach(element => {
                this.open(element.x, element.y);
            });
        }
        getOpenList() {
            return this._openList;
        }
        setSureList(points) {
            points.forEach(element => {
                this.sure(element.x, element.y);
            });
        }
        getSureList() {
            return this._sureList;
        }
        open(x, y, isOpen = true) {
            let key = x.toString() + "_" + y.toString();
            if (isOpen) {
                let point = new Laya$1.Point(x, y);
                this._openList.push(point);
                this._openObj[key] = point;
            }
            else {
                if (this._openObj[key] != null) {
                    this._openList.splice(this._openList.indexOf(this._openObj[key]), 1);
                    delete this._openObj[key];
                }
            }
        }
        isOpen(x, y) {
            let key = x.toString() + "_" + y.toString();
            return this._openObj[key] != null;
        }
        sure(x, y) {
            let key = x.toString() + "_" + y.toString();
            let point = new Laya$1.Point(x, y);
            this._sureList.push(point);
            this._sureObj[key] = point;
        }
        isSure(x, y) {
            let key = x.toString() + "_" + y.toString();
            return this._sureObj[key] != null;
        }
    }

    class ButtonRunTime extends Laya$1.Button {
        constructor() {
            super();
            this.scaleNum = 0.8;
            this.oldScaleX = 1;
            this.oldScaleY = 1;
            this.on(Laya$1.Event.MOUSE_DOWN, this, this.btnDown);
        }
        btnUp() {
            Laya$1.Tween.to(this, { scaleX: this.oldScaleX, scaleY: this.oldScaleY }, 100, null, Laya$1.Handler.create(this, this.upComplete));
        }
        upComplete() {
            this.isOnTween = false;
        }
        btnDown() {
            if (!this.isOnTween) {
                this.oldScaleX = this.scaleX;
                this.oldScaleY = this.scaleY;
                this.isOnTween = true;
                Laya$1.Tween.to(this, { scaleX: this.oldScaleX * this.scaleNum, scaleY: this.oldScaleY * this.scaleNum }, 100, null, Laya$1.Handler.create(this, this.downComplete));
            }
        }
        downComplete() {
            this.btnUp();
        }
    }

    var REG = Laya$1.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var loading;
        (function (loading) {
            class LoadingUI extends Laya$1.Scene {
                constructor() {
                    super();
                    this.referenceClass = [Laya$1.Image, Laya$1.Label];
                }
            }
            loading.LoadingUI = LoadingUI;
        })(loading = ui.loading || (ui.loading = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var main;
        (function (main) {
            class MainGameUI extends Laya$1.Scene {
                constructor() {
                    super();
                    this.referenceClass = [Laya$1.Image, Laya$1.Box, Laya$1.Text, Laya$1.Sprite, Laya$1.Button,
                        Laya$1.Label, Laya$1.List];
                }
            }
            main.MainGameUI = MainGameUI;
        })(main = ui.main || (ui.main = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var test;
        (function (test) {
            class TestSceneUI extends Laya$1.Scene {
                constructor() {
                    super();
                    this.referenceClass = [Laya$1.Label, Laya$1.Sprite];
                }
                createChildren() {
                    super.createChildren();
                    this.loadScene("test/TestScene");
                }
            }
            test.TestSceneUI = TestSceneUI;
            REG("ui.test.TestSceneUI", TestSceneUI);
        })(test = ui.test || (ui.test = {}));
    })(ui || (ui = {}));

    class GameControl extends Laya.Script {
        constructor() {
            super();
            this.createBoxInterval = 1000;
            this._time = 0;
            this._started = false;
        }
        onEnable() {
            this._time = Date.now();
            this._gameBox = this.owner.getChildByName("gameBox");
        }
        onUpdate() {
            let now = Date.now();
            if (now - this._time > this.createBoxInterval && this._started) {
                this._time = now;
                this.createBox();
            }
        }
        createBox() {
            let box = Laya.Pool.getItemByCreateFun("dropBox", this.dropBox.create, this.dropBox);
            box.pos(Math.random() * (Laya.stage.width - 100), -100);
            this._gameBox.addChild(box);
        }
        onStageClick(e) {
            e.stopPropagation();
            let flyer = Laya.Pool.getItemByCreateFun("bullet", this.bullet.create, this.bullet);
            flyer.pos(Laya.stage.mouseX, Laya.stage.mouseY);
            this._gameBox.addChild(flyer);
        }
        startGame() {
            if (!this._started) {
                this._started = true;
                this.enabled = true;
            }
        }
        stopGame() {
            this._started = false;
            this.enabled = false;
            this.createBoxInterval = 1000;
            this._gameBox.removeChildren();
        }
    }

    class GameUI extends ui.test.TestSceneUI {
        constructor() {
            super();
            GameUI.instance = this;
            Laya.MouseManager.multiTouchEnabled = false;
        }
        onEnable() {
            this._control = this.getComponent(GameControl);
            this.tipLbll.on(Laya.Event.CLICK, this, this.onTipClick);
        }
        onTipClick(e) {
            this.tipLbll.visible = false;
            this._score = 0;
            this.scoreLbl.text = "";
            this._control.startGame();
        }
        addScore(value = 1) {
            this._score += value;
            this.scoreLbl.changeText("分数：" + this._score);
            if (this._control.createBoxInterval > 600 && this._score % 20 == 0)
                this._control.createBoxInterval -= 20;
        }
        stopGame() {
            this.tipLbll.visible = true;
            this.tipLbll.text = "游戏结束了，点击屏幕重新开始";
            this._control.stopGame();
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya$1.ClassUtils.regClass;
            reg("ui", ui);
            reg("script/scene/LoadingScene.ts", LoadingScene);
            reg("script/scene/MainGameScene.ts", MainGameScene);
            reg("script/tool/ButtonRunTime.ts", ButtonRunTime);
            reg("script/prefeb/FontGrid.ts", FontGrid);
            reg("script/GameUI.ts", GameUI);
            reg("script/GameControl.ts", GameControl);
            reg("script/prefeb/GameResult.ts", GameResult);
            reg("script/prefeb/GameSetting.ts", GameSetting);
            reg("script/prefeb/StartGame.ts", StartGame);
            reg("script/prefeb/TipItem.ts", TipItem);
            reg("Laya.Text", Laya$1.Text);
            reg("Laya.BoxCollider", Laya$1.BoxCollider);
            reg("Laya.RigidBody", Laya$1.RigidBody);
        }
    }
    GameConfig.width = 640;
    GameConfig.height = 1136;
    GameConfig.scaleMode = "showall";
    GameConfig.screenMode = "vertical";
    GameConfig.alignV = "middle";
    GameConfig.alignH = "center";
    GameConfig.startScene = "loading/Loading.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            let h = AppConfig.getMobileHeight();
            let w = AppConfig.getMobileWidth();
            if (window["Laya3D"])
                window["Laya3D"].init(w, h);
            else
                Laya$1.Laya.init(w, h, Laya$1.WebGL);
            Laya$1.Laya["DebugPanel"] && Laya$1.Laya["DebugPanel"].enable();
            if (AppConfig.platform == "wx") {
                Laya$1.Laya.stage.scaleMode = "fixheight";
                Laya$1.Laya.URL.basePath = "https://raw.githubusercontent.com/wupei1987/font-game-wx-asset/master/";
                window["Laya"]["MiniAdpter"].nativefiles = [
                    "btn_startGame.png",
                    "fileconfig.json",
                    "version.json",
                    "loading/Loading.json",
                    "res/atlas/loading.atlas",
                    "res/atlas/loading.png",
                    "main/MainGame.json",
                    "res/atlas/map.atlas",
                    "res/atlas/map.png",
                    "res/data.json",
                    "res/spine/other_taozhuangxitong1.sk",
                    "res/spine/other_taozhuangxitong1.png",
                    "res/spine/other_wupinghuanrao_kin_little.sk",
                    "res/spine/other_wupinghuanrao_kin_little.png"
                ];
                Laya$1.ResourceVersion.enable("version.json", Laya$1.Handler.create(this, this.onVersionLoaded), Laya$1.ResourceVersion.FILENAME_VERSION);
            }
            else {
                Laya$1.Laya.stage.scaleMode = GameConfig.scaleMode;
            }
            Laya$1.Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya$1.Laya.stage.screenMode = GameConfig.screenMode;
            Laya$1.Laya.stage.alignV = GameConfig.alignV;
            Laya$1.Laya.stage.alignH = GameConfig.alignH;
            Laya$1.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya$1.Utils.getQueryString("debug") == "true")
                Laya$1.Laya.enableDebugPanel();
            if (GameConfig.physicsDebug)
                Laya$1.PhysicsDebugDraw.enable();
            if (GameConfig.stat)
                Laya$1.Stat.show();
            Laya$1.Laya.alertGlobalError(true);
            Laya$1.ResourceVersion.enable("version.json", Laya$1.Handler.create(this, this.onVersionLoaded), Laya$1.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya$1.AtlasInfoManager.enable("fileconfig.json", Laya$1.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            Laya$1.Scene.open(GameConfig.startScene, true, null, Laya$1.Laya.Handler.create(this, this.onLoadingLoad));
        }
        updateLoadingProgress(percent) {
            percent = Math.floor(percent);
            if (SceneMgr.curSceneScript != null && SceneMgr.curSceneScript instanceof LoadingScene) {
                SceneMgr.curSceneScript.updatePercent(percent);
            }
        }
        onLoadingLoad() {
            if (Laya$1.Laya.Browser.window.loadingView) {
                Laya$1.Laya.Browser.window.loadingView.hideLoadingView();
            }
            this.updateLoadingProgress(0);
            ResMgr.Instance().loadList(AppConfig.getInitLoadingUrls(), this, function (index, total) {
                this.updateLoadingProgress(index / total * 90);
            }, function () {
                this.loadStartScene();
            });
        }
        loadStartScene() {
            let data = Laya$1.Laya.loader.getRes("res/data.json");
            MapFontInfo.DataSource = data;
            Laya$1.Scene.open("main/MainGame.scene", true, null, Laya$1.Laya.Handler.create(this, this.onGameStart), Laya$1.Laya.Handler.create(this, this.onGameLoadProgress, [], false));
            if (Laya$1.Laya.Browser.onMiniGame) {
                window["Laya"]["MiniAdpter"].sendAtlasToOpenDataContext("res/atlas/test.atlas");
            }
            ResMgr.Instance().loadList(AppConfig.getAsynUrls(), this, function (index, total) {
            }, function () {
                AppConfig.asynUrlsLoaded = true;
            });
        }
        onGameLoadProgress(value) {
            if (Laya$1.Laya.Browser.window.loadingView) {
                Laya$1.Laya.Browser.window.loadingView.loading(value * 100);
            }
            this.updateLoadingProgress(90 + value * 10);
        }
        onGameStart() {
            ControllerMgr.getInstance(TipController).init();
            SoundTool.init();
            window['King_SDK_Manager'].init();
            window['King_SDK_Manager'].showNativeBanner();
        }
    }
    new Main();

}(Laya));
