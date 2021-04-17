/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

//-----libs-begin-----

//-----libs-end-------
loadLib("laya.js");
loadLib("king_SDK/sdkManager.js");
loadLib("js/bundle.js");
window['King_SDK_Manager'].init();
window['King_SDK_Manager'].showNativeBanner();