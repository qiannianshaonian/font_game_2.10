import { Browser } from "laya/utils/Browser";
import { Handler } from "laya/utils/Handler";
// import { GameEvent } from "../event/GameEvent";
// import { PromptMgr } from "../manager/PromptMgr";

export class TTMiniUtils {

    static videoPath:string = "";
    static gameRecorder:any;

    public static init(){
        TTMiniUtils.gameRecorder = Browser.window.tt.getGameRecorderManager();
        //录屏开始
        TTMiniUtils.gameRecorder.onStart(() => {
            console.log('录屏开始');
        });
        //录屏结束，获取 videoPath
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
        // GameEvent.Instance.on(GameEventEnum.OPEN_EFFECT_OPEN_END,null,TTMiniUtils.startGameRecorder);
        // GameEvent.Instance.on(GameOverEnum.RESTART,null,TTMiniUtils.startGameRecorder);
        // GameEvent.Instance.on(GameOverEnum.REVIVE,null,TTMiniUtils.startGameRecorder);
    }

    public static startGameRecorder(){
        console.log("...点击开始了");
        if (TTMiniUtils.gameRecorder){
            TTMiniUtils.gameRecorder.start({ duration: 300 });
        }else{
            TTMiniUtils.init();
            TTMiniUtils.gameRecorder.start({ duration: 300 });
        }
    }

    public static pauseGameRecorder(){
        console.log('录屏pause');
        TTMiniUtils.gameRecorder.pause();
    }
    public static resumeGameRecorder(){
        console.log('录屏resume');
        TTMiniUtils.gameRecorder.resume();
    }
    public static stopGameRecorder(){
        console.log('停止了录屏');

        if(TTMiniUtils.gameRecorder){
            console.log('停止了录屏11111');

            TTMiniUtils.gameRecorder.stop();
        }
    }

	public static shareGameRecorder(onComplete:Handler) {
        if(TTMiniUtils.videoPath == ""){
            console.log('上局游戏暂未录制！');
            onComplete.runWith("false");
            // PromptMgr.Prompt("录屏时长不足5秒,请重新录制");
            return;
        }
		//获取分享导语
        console.log('分享录制 videoPath：'+TTMiniUtils.videoPath);
        Browser.window.tt.shareAppMessage({
            channel: 'video',  //指定为视频分享
            title: '趣味汉字',
            desc:"#趣味汉字 #抖音小游戏",
            extra: {
                videoPath: TTMiniUtils.videoPath, // 设置视频路径
                videoTopics: ["#趣味汉字","#抖音小游戏"]
            },
            success: () => {
                    //分享回调
                console.log('录屏分享成功');
                onComplete.runWith("true");
            },
            fail: (e) => {
                console.log('录屏分享失败:'+e.errMsg);
                if(e.errMsg.indexOf("too short")>=0){
                    // PromptMgr.Prompt("分享失败，录屏时间过短！");
                    onComplete.runWith("short");
                }
                else{
                    onComplete.runWith("false");
                }
            }
        });
	}
}
