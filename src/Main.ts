import { Laya } from "Laya";
import { URL } from "laya/net/URL";
import { Utils } from "laya/utils/Utils";
import { Stat } from "laya/utils/Stat";
import { Handler } from "laya/utils/Handler";
import { ResourceVersion } from "laya/net/ResourceVersion";
import { AtlasInfoManager } from "laya/net/AtlasInfoManager";
import { Scene } from "laya/display/Scene";
import GameConfig from "./GameConfig";
import { WebGL } from "laya/webgl/WebGL";
import { Physics } from "laya/physics/Physics";
import { PhysicsDebugDraw } from "laya/physics/PhysicsDebugDraw";
import AppConfig from "./AppConfig";
import SceneMgr from "./script/scene/SceneMgr";
import LoadingScene from "./script/scene/LoadingScene";
import { ResMgr } from "./ResMgr";
import MapFontInfo from "./script/model/MapFontInfo";
import ControllerMgr from "./script/controller/ControllerMgr";
import TipController from "./script/controller/TipController";
import SoundTool from "./script/tool/SoundTool";

class Main {
	constructor() {
		let h = AppConfig.getMobileHeight();
		let w = AppConfig.getMobileWidth();
		//根据IDE设置初始化引擎		GameConfig.width
		if (window["Laya3D"]) window["Laya3D"].init(w, h);
		else Laya.init(w, h, WebGL);
		//Physics.enable();
		Laya["DebugPanel"] && Laya["DebugPanel"].enable();

		if(AppConfig.platform == "wx")
		{
			
			Laya.stage.scaleMode = "fixheight";
			Laya.URL.basePath = "https://raw.githubusercontent.com/wupei1987/font-game-wx-asset/master/";
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
			// wx["setPreferredFramesPerSecond"](30);
			];
			//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
			ResourceVersion.enable("version.json", Handler.create(this, this.onVersionLoaded), ResourceVersion.FILENAME_VERSION);
		}
		else 
		{
			Laya.stage.scaleMode = GameConfig.scaleMode;
		}

		Laya.stage.scaleMode = GameConfig.scaleMode;
		Laya.stage.screenMode = GameConfig.screenMode;
		Laya.stage.alignV = GameConfig.alignV;
		Laya.stage.alignH = GameConfig.alignH;
		//兼容微信不支持加载scene后缀场景
		URL.exportSceneToJson = GameConfig.exportSceneToJson;
		
		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
		if (GameConfig.debug || Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
		if (GameConfig.physicsDebug) PhysicsDebugDraw.enable();
		if (GameConfig.stat) Stat.show();
		Laya.alertGlobalError(true);
		
		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
		ResourceVersion.enable("version.json", Handler.create(this, this.onVersionLoaded), ResourceVersion.FILENAME_VERSION);
	}

	onVersionLoaded(): void {
		//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
		AtlasInfoManager.enable("fileconfig.json", Handler.create(this, this.onConfigLoaded));
	}

	onConfigLoaded(): void {
		Scene.open(GameConfig.startScene,true,null,Laya.Handler.create(this,this.onLoadingLoad))
	}

	/**
	 * 更新进度条
	 * @param percent 百分比 0-100
	 */
	private updateLoadingProgress(percent : number)  :void{
		percent = Math.floor(percent);
		if(SceneMgr.curSceneScript != null && SceneMgr.curSceneScript instanceof LoadingScene)
		{
			SceneMgr.curSceneScript.updatePercent(percent)
		}
	}

	
	private onLoadingLoad() : void{
		if(Laya.Browser.window.loadingView){
			Laya.Browser.window.loadingView.hideLoadingView();
		}
		this.updateLoadingProgress(0);
		ResMgr.Instance().loadList(AppConfig.getInitLoadingUrls(),this,function(index : number, total : number) : void{
			this.updateLoadingProgress(index / total * 90);
		},function() : void{
			this.loadStartScene();
		})
		// Laya.loader.load(AppConfig.getInitLoadingUrls(),Laya.Handler.create(this,this.loadStartScene),Laya.Handler.create(this,function(progress : number) : void{
		// 	this.updateLoadingProgress(progress * 90);
		// }));
	}

	loadStartScene() : void{
		let data = Laya.loader.getRes("res/data.json");
		MapFontInfo.DataSource = data;
		Scene.open("main/MainGame.scene",true,null,Laya.Handler.create(this,this.onGameStart),Laya.Handler.create(this,this.onGameLoadProgress,[],false));
		if(Laya.Browser.onMiniGame)
		{
			window["Laya"]["MiniAdpter"].sendAtlasToOpenDataContext("res/atlas/test.atlas")
		}
		ResMgr.Instance().loadList(AppConfig.getAsynUrls(),this,function(index : number, total : number) : void{
		},function() : void{
			AppConfig.asynUrlsLoaded = true;
		})
	}

	private onGameLoadProgress(value : number) : void{
		if(Laya.Browser.window.loadingView){
			Laya.Browser.window.loadingView.loading(value * 100);
		}
		this.updateLoadingProgress(90 + value * 10);
	}

	private onGameStart() : void{
		ControllerMgr.getInstance(TipController).init();
		SoundTool.init();
		window['King_SDK_Manager'].init();
		window['King_SDK_Manager'].showNativeBanner();
		// SoundTool.playBgMusic();
	}
}
//激活启动类
new Main();
