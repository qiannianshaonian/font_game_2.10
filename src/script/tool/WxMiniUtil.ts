import { Laya } from "Laya";
import { Browser } from "laya/utils/Browser";
import { Handler } from "laya/utils/Handler";

/**
 * 微信和头条
 */
export class WxMiniUtil {
    public static wxinfo: any;

    public static login(completeHandler: Handler) {

        let sysInfo = Browser.window.wx.getSystemInfoSync();
        //获取微信界面大小
        let width = sysInfo.screenWidth;
        let height = sysInfo.screenHeight;
        Browser.window.wx.getSetting({
            success(res) {
                console.log(res.authSetting);
                if (res.authSetting["scope.userInfo"]) {
                    console.log("用户已授权");
                    Browser.window.wx.getUserInfo({
                        success(res) {
                            console.log(res);
                            // GameData.wxUserInfo = res.userInfo;
                            //此时可进行登录操作
                            completeHandler.runWith(true);
                        }
                    });
                } else {
                    console.log("用户未授权");
                    let button = Browser.window.wx.createUserInfoButton({
                        type: 'text',
                        text: '',
                        style: {
                            left: 0,
                            top: 0,
                            width: width,
                            height: height,
                            backgroundColor: '#00000000',//最后两位为透明度
                            color: '#ffffff',
                            fontSize: 20,
                            textAlign: "center",
                            lineHeight: height,
                        }
                    });
                    button.onTap((res) => {
                        if (res.userInfo) {
                            console.log("用户授权:", res);
                            // GameData.wxUserInfo.userInfo = res.userInfo;
                            //此时可进行登录操作
                            completeHandler.runWith(true);
                            button.destroy();
                        } else {
                            console.log("用户拒绝授权:", res);
                            completeHandler.runWith(false);
                        }
                    });
                }
            }
        })
    }

    public static update(hanlder: Handler): void {
        const updateManager = Browser.window.wx.getUpdateManager()

        updateManager.onCheckForUpdate(function (res) {
            // 请求完新版本信息的回调
            console.log("新版本信息：" + res.hasUpdate)
        })

        updateManager.onUpdateReady(function () {
            Browser.window.wx.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success(res: any) {
                    if (res.confirm) {
                        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                        updateManager.applyUpdate()
                    }
                }
            })
        })

        updateManager.onUpdateFailed(function () {
            // 新版本下载失败
            console.log("新版本信息下载失败！！！！！")
        })
    }

    static getIsBangs(completeHandler: Handler) {
        Browser.window.wx.getSystemInfo({
            success: function (wxInfo): void {
                WxMiniUtil.wxinfo = wxInfo;
                console.log('获取系统信息-----success:' + wxInfo);
            },
            fail: function (wxInfo): void {
                console.log('获取系统信息-----fail:' + wxInfo);
            },
            complete: function (wxInfo): void {
                console.log('获取系统信息-----complete:' + "windowHeight：" + wxInfo.windowHeight + " windowWidth:" + wxInfo.windowWidth);
                let isBang: string = wxInfo.windowHeight / wxInfo.windowWidth > Laya.stage.designHeight / Laya.stage.designWidth ? "true" : "false";
                completeHandler.runWith(isBang);
            }
        })
    }

    //分享
    private static shareWebHandler: Handler;
    static shareWebPage(complete: Handler) {
        WxMiniUtil.shareWebHandler = complete;
        if (Browser.window.tt) {
            Browser.window.tt.shareAppMessage({
                title: '夏日跳水大作战',
                desc: "#夏日跳水大作战 #抖音小游戏",
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
            Browser.window.wx.shareAppMessage({
                title: '夏日跳水大作战',
                desc: "夏日跳水大作战，搞笑动作等你来开发！",
                imageUrl: 'miniImg/miniShare.png'
            });
        }
    }

    static onShareAppMessage() {
        Browser.window.wx.onShareAppMessage(function () {
            return {
                title: '夏日跳水大作战，搞笑动作等你来开发！',
                biliContent: "#夏日跳水大作战#",
                imageUrl: 'miniImg/miniShare.png'
            }
        })
    }


    //-----------------------广告-----------------------------

    private static bannerAd: any;
    private static bannerVisible:boolean = false;
    public static showBanner() {
        if (!Browser.onTTMiniGame) {
            return;
        }
        WxMiniUtil.bannerVisible = true;
        let sysInfo = Browser.window.wx.getSystemInfoSync();
        let bannerWidth: number = sysInfo.screenWidth ;
        let bannerHeight: number = sysInfo.screenHeight;
        //抖音不支持Banner
        if (WxMiniUtil.bannerAd) {
            WxMiniUtil.bannerAd.destroy();
            WxMiniUtil.bannerAd = null;
        }
        let adID: string = Browser.window.tt ? "f7iibhjbf251ui7u79" : "adunit-3bf2554b5207e425";
        WxMiniUtil.bannerAd = Browser.window.tt.createBannerAd({
            adUnitId: adID,
            style: {
                left: (bannerWidth-bannerWidth*95/100)/2,
                top: bannerHeight - 120,
                width: bannerWidth*95/100
            }
        });
           
        WxMiniUtil.bannerAd.onLoad(function () {
            if(WxMiniUtil.bannerVisible){
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
            // PromptMgr.Prompt("当前暂无可显示广告，请稍后再试！");
        });

        WxMiniUtil.bannerAd.onResize(res => {
            WxMiniUtil.bannerAd.style.top = bannerHeight - res.height;
            WxMiniUtil.bannerAd.style.left = (bannerWidth - res.width) / 2;
        })
    }

    public static hideBanner() {
        if (!Browser.onTTMiniGame) {
            return;
        }
        WxMiniUtil.bannerVisible = false;
        if (WxMiniUtil.bannerAd) {
            WxMiniUtil.bannerAd.destroy();
            WxMiniUtil.bannerAd = null;
        }
    }

    private static rewardedvideo: any;
    private static loadVideoComplete: Handler;
    //加载激励视频（弃用）
    static loadRewardedVideo(completeHandler: Handler) {
        WxMiniUtil.loadVideoComplete = completeHandler;
        if (!WxMiniUtil.rewardedvideo) {
            WxMiniUtil.rewardedvideo = Browser.window.wx.createRewardedVideoAd({ adUnitId: 'adunit-a7bced9f18d8a7bb' });
            WxMiniUtil.rewardedvideo.onLoad(() => {
                console.log('激励视频 广告加载成功');
                WxMiniUtil.loadVideoComplete.runWith("true");
            })
            WxMiniUtil.rewardedvideo.onError(err => {
                console.log(err);
                // PromptMgr.Prompt("当前暂无广告，请稍后再试！");
            })
        }
        else {
            WxMiniUtil.rewardedvideo.load();
        }

    }

    private static showAdVideoHandler: Handler;
    //激励视频
    static showRewardedVideo(completeHandler: Handler) {
        if (!Browser.onTTMiniGame){
            completeHandler.run();
            return;
        }
        WxMiniUtil.showAdVideoHandler = completeHandler;
        if (!WxMiniUtil.rewardedvideo) {
            let adID: string = Browser.window.tt ? "1j4221j5gf9jd1gllf" : "adunit-a30e0ad0d9697dfd";
            WxMiniUtil.rewardedvideo = Browser.window.wx.createRewardedVideoAd({ adUnitId: adID });
            WxMiniUtil.rewardedvideo.onClose(res => {
                if (res && res.isEnded || res === undefined) {
                    // 正常播放结束，可以下发游戏奖励
                    console.log("激励视频播放完成");
                    WxMiniUtil.showAdVideoHandler.runWith("true");
                }
                else {
                    // WxMiniUtil.showAdVideoHandler.runWith("false");
                    // 播放中途退出，不下发游戏奖励
                }
                // WxMiniAudioMgr.playSound("sounds/bg.mp3", true);
            })
            WxMiniUtil.rewardedvideo.onError(err => {
                console.log(err)
                // PromptMgr.Prompt("当前暂无广告，请稍后再试！");
            })
        }
        WxMiniUtil.rewardedvideo.show()
            .catch(err => {
                WxMiniUtil.rewardedvideo.load()
                    .then(() => {
                        WxMiniUtil.rewardedvideo.show();
                        // WxMiniAudioMgr.stopAll();
                    });
                console.log("show激励视频" + err)
            })
    }

    //插屏视频广告
    private static interstitialAd: any;
    private static interstitialAdHandler: Handler;
    static showInterstitialAd(completeHandler: Handler = null) {
        if (!Browser.onTTMiniGame) {           
                WxMiniUtil.interstitialAdHandler.runWith("false");
                return;
        }
        WxMiniUtil.interstitialAdHandler = completeHandler;
        if(Browser.window.tt){
            const isToutiaio = Browser.window.tt.getSystemInfoSync().appName === "Douyin";
            console.log("app name",Browser.window.tt.getSystemInfoSync().appName)
            if(!isToutiaio){
                WxMiniUtil.interstitialAdHandler.runWith("false");
                return;
            } 
        }
        if (!WxMiniUtil.interstitialAd) {
            let adID: string = Browser.window.tt ? "1b2m7lpbgi51jajhce" : "adunit-a30e0ad0d9697dfd";
            WxMiniUtil.interstitialAd = Browser.window.wx.createInterstitialAd({ adUnitId: adID });
            WxMiniUtil.interstitialAd.onClose(res => {
                console.log("插屏播放完成");
                if (WxMiniUtil.interstitialAdHandler)
                    WxMiniUtil.interstitialAdHandler.runWith("true");
            })
            WxMiniUtil.interstitialAd.onError(err => {
                console.log(err)
                WxMiniUtil.interstitialAdHandler.runWith("false");
                //  PromptMgr.Prompt("当前暂无可显示广告，请稍后再试！");
            })
        }
        WxMiniUtil.interstitialAd.show()
            .catch(err => {
                console.log("show插屏广告" + err);
                WxMiniUtil.interstitialAdHandler.runWith("false");
                // PromptMgr.Prompt("当前暂无广告，请稍后再试！");
            })
    }

    //显示推广游戏ICON广告
    private static iconAd;
    private static cconAdobjArr: Array<any> = [];
    static showGameIconAd() {
        if (!Browser.window.wx) return;
        var count: number = 5;
        if (!WxMiniUtil.cconAdobjArr) {
            WxMiniUtil.cconAdobjArr = [];
            for (let index = 0; index < count; index++) {
                var obj: any = {};
                obj.appNameHidden = false;
                obj.color = "#ffffff";
                // obj.size = 30;
                // obj.left =  index * 30;
                obj.top = WxMiniUtil.wxinfo.screenHeight / 2 - 15;
                WxMiniUtil.cconAdobjArr.push(obj);
            }
        }
        // 创建推荐位实例，提前初始化
        if (!WxMiniUtil.iconAd && Browser.window.wx.createGameIcon) {
            WxMiniUtil.iconAd = Browser.window.wx.createGameIcon({
                adUnitId: 'PBgAAfCNfP3TjmkM',
                count: 5,
                style: WxMiniUtil.cconAdobjArr
            })
        }
        // 在合适的场景显示推荐位
        // err.errCode返回1004时表示当前没有适合推荐的内容，建议游戏做兼容，在返回该错误码时展示其他内容
        if (WxMiniUtil.iconAd) {
            WxMiniUtil.iconAd.load().then(() => {
                WxMiniUtil.iconAd.show()
            }).catch((err) => {
                console.error(err)
                console.log("showGameIconAd Error:" + err);
            })
        }
    }

    private static portalAd = null
    static showGamePortal() {
        // 创建推荐位实例，提前初始化
        if (Browser.window.wx.createGamePortal) {
            WxMiniUtil.portalAd = Browser.window.wx.createGamePortal({
                adUnitId: 'PBgAAet6sZW2CQug'
            })
        }

        // 在适合的场景显示推荐位
        // err.errCode返回1004时表示当前没有适合推荐的内容，建议游戏做兼容，在返回该错误码时展示其他内容
        if (WxMiniUtil.portalAd) {
            WxMiniUtil.portalAd.load().then(() => {
                WxMiniUtil.portalAd.show()
            }).catch((err) => {
                if (err.errCode == 1004) {
                    // PromptMgr.Prompt("暂时无推荐，请稍后再试!");
                }
                console.error(err)
            })
        }
    }
}