require("@qgame/adapter");
if(!window.navigator)
	window.navigator = {};
window.navigator.userAgent = 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 VVGame NetType/WIFI Language/zh_CN';
require("./libs/min/laya.vvmini.min.js");
if (window.requirePlugin) {
	requirePlugin("laya-library/laya.core.min.js");
	requirePlugin("laya-library/laya.ani.min.js");
	requirePlugin("laya-library/laya.d3.min.js");
	requirePlugin("laya-library/laya.html.min.js");
	requirePlugin("laya-library/laya.particle.min.js");
	requirePlugin("laya-library/laya.ui.min.js");
	requirePlugin("laya-library/laya.device.min.js");
	requirePlugin("laya-library/laya.physics.min.js");
	requirePlugin("laya-library/laya.tiledmap.min.js");

} else {
	require("laya-library/laya.core.min.js");
	require("laya-library/laya.ani.min.js");
	require("laya-library/laya.d3.min.js");
	require("laya-library/laya.html.min.js");
	require("laya-library/laya.particle.min.js");
	require("laya-library/laya.ui.min.js");
	require("laya-library/laya.device.min.js");
	require("laya-library/laya.physics.min.js");
	require("laya-library/laya.tiledmap.min.js");

}
require("./index.js");