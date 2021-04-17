import { Sprite } from "laya/display/Sprite";
import { Event } from "laya/events/Event";
import { Box } from "laya/ui/Box";
import { Handler } from "laya/utils/Handler";
import { SceneUtils } from "laya/utils/SceneUtils";

/**
* 源代码拓展
*/
export default class CodeExpand{
	public static init() : void{
		// Sprite拓展
		var spriteProto: Sprite = Sprite.prototype;
		// 添加点击缩放的监听
		spriteProto["zoomOn"] = function(handler: Handler, scale: number = 1.1) {
			var self = this as Sprite;
			if (!self["initSX"])
			{
				self["initSX"] = self.scaleX;
				self["initSY"] = self.scaleY;
			}
			if (scale > 0 && scale != 1)
			{
				var centerX = (self as Box).centerX; 
				var centerY = (self as Box).centerY; 
				self.pivotX = self.width / 2;
				self.pivotY = self.height / 2;
				self.pos(centerX, centerY);
			}
			if (self.hasListener("press"))
			{
				self.off(Event.MOUSE_DOWN, self, self["mouseDown"]);
				self.off(Event.MOUSE_UP, self, self["mouseUp"]);
				self.off(Event.MOUSE_MOVE, self, self["mouseMove"]);
				self.off(Event.MOUSE_OUT, self, self["mouseOut"]);
				self.off(Event.MOUSE_OVER, self, self["mouseOver"]);
				self.off("press", self, self["press"]);
			}
			self["mouseDown"] = function(event: Event)
			{
				if (self["isDown"]) return;
				self.scale(self["initSX"] * scale, self["initSY"] * scale);
				self["isDown"] = true;
				handler && handler.runWith(event);
				setTimeout(function() {
					if (self["isDown"])
					{
						self.event("press");
					}
				}, 200);

				// if (game.AppConfig.soundEffect)
				// {
				// 	SoundManager.playSound(game.URI.audioUrl + "UI/button.wav", 1);
				// }
			};

			self["mouseUp"] = function(event: Event)
			{
				if (!self["isDown"]) return;
				self.scale(self["initSX"], self["initSY"]);
				handler && handler.runWith(event);
				self["isDown"] = false;
			}

			self["mouseMove"] = function(event: Event)
			{
				if (self["isDown"]) {
					handler && handler.runWith(event);
				}
			}	

			self["mouseOver"] = function(event: Event)
			{
				handler && handler.runWith(event);
			}

			self["mouseOut"] = function(event: Event)
			{
				if (self["isDown"]) {
					self.scale(self["initSX"], self["initSY"]);
					handler && handler.runWith(event);
				}
				self["isDown"] = false;
			}

			self["press"] = function(event: Event)
			{
				var event = new Event();
				event.type = "press";
				event.currentTarget = self;
				handler && handler.runWith(event);
			}

			self.on("press", this, self["press"]);
			self.on(Event.MOUSE_DOWN, this, self["mouseDown"]);
			self.on(Event.MOUSE_UP, this, self["mouseUp"]);
			self.on(Event.MOUSE_MOVE, this, self["mouseMove"]);
			self.on(Event.MOUSE_OVER, this, self["mouseOver"]);
			self.on(Event.MOUSE_OUT, this, self["mouseOut"]);
			// if (self["top"])
			// {
			// 	self.y = self["top"] + self.pivotY;
			// 	self["top"] = NaN;
			// }
			// if (self["bottom"])
			// {
			// 	self.y = (self.parent as Sprite).height - self["bottom"] - self.height + self.pivotY;
			// 	self["bottom"] = NaN;
			// }
			// if (self["left"])
			// {
			// 	self.x = self["left"] + self.pivotX;
			// 	self["left"] = NaN;
			// }
			// if (self["right"])
			// {
			// 	self.x = (self.parent as Sprite).width - self["right"] - self.width + self.pivotX;
			// 	self["right"] = NaN;
			// }
		}


		spriteProto["getLeft"] = function(): number
		{
			var self: Sprite = this as Sprite;
			if (self["anchorX"])
			{
				self.pivotX = self.width * self["anchorX"];
			}
			return self.x - self.pivotX * self.scaleX;
		}

		spriteProto["getRight"] = function(): number
		{
			var self: Box = this as Box;
			return self.left + self.width * self.scaleX;
		}

		spriteProto["getTop"] = function(): number
		{
			var self: Sprite = this as Sprite;
			if (self["anchorY"])
			{
				self.pivotY = self.height * self["anchorY"];
			}
			return self.y - self.pivotY * self.scaleY;
		}

		spriteProto["getBottom"] = function(): number
		{
			var self: Box = this as Box;
			return self.top + self.height * self.scaleY;
		}

		spriteProto["getCenterX"] = function(): number
		{
			var self: Box = this as Box;
			return self.left + self.width / 2 * self.scaleX;
		}

		spriteProto["getCenterY"] = function(): number
		{
			var self: Box = this as Box;
			return self.top + self.height / 2 * self.scaleY;
		}

		spriteProto["clone"] = function(): Sprite
		{
			if (!this["uiData"]) return null;
			var self: Sprite = this as Sprite;
			let clone: Sprite = SceneUtils.createComp(self["uiData"]);
			// if (self["uiData"])
			// {
			// 	for (var key in self["uiData"]["props"]) {
			// 		if (self["uiData"]["props"].hasOwnProperty(key)) {
			// 			var element = self[key];
			// 			clone["key"] = element;
			// 		}
			// 	}
			// 	self.children([]).forEach(child => {
			// 		var index = self.getChildIndex(child)
			// 		clone.removeChildAt(index);
			// 		clone.addChildAt((child as Sprite).clone(), index);
			// 	});
			// }
			clone.visible = self.visible;
			return clone;
		}

		// String拓展
		var stringProto: String = String.prototype;
		// 字符串格式化(只做了简单的%d,%s匹配，未做参数个数和类型判断，之后优化完善)
		String["format"] = function(...args) {
			var str: string = args[0];
			args = args.slice(1, args.length);
			var match = function(mString: string, mArgs: Array<any>) {
				var index: number = 0;
				var result: Array<any> = mString.match(new RegExp("%[d,s]+"));
				if (!result) {
					return mString;
				} else {
					mString = mString.replace(result[0], mArgs[0]);
					mArgs = mArgs.slice(1, mArgs.length);
					return match(mString, mArgs)
				}
			}
			return match(str, args)
		}

		String["isEmojiCharacter"] = function(...args) {
			var substring: string = args[0];
			for ( var i = 0; i < substring.length; i++) {  
				var hs = substring.charCodeAt(i);  
				if (0xd800 <= hs && hs <= 0xdbff) {  
					if (substring.length > 1) {  
						var ls = substring.charCodeAt(i + 1);  
						var uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;  
						if (0x1d000 <= uc && uc <= 0x1f77f) {  
							return true;  
						}  
					}  
				} else if (substring.length > 1) {  
					var ls = substring.charCodeAt(i + 1);  
					if (ls == 0x20e3) {  
						return true;  
					}  
				} else {  
					if (0x2100 <= hs && hs <= 0x27ff) {  
						return true;  
					} else if (0x2B05 <= hs && hs <= 0x2b07) {  
						return true;  
					} else if (0x2934 <= hs && hs <= 0x2935) {  
						return true;  
					} else if (0x3297 <= hs && hs <= 0x3299) {  
						return true;  
					} else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030  
							|| hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b  
							|| hs == 0x2b50) {  
						return true;  
					}  
				} 
			} 
		}

		// Array拓展
		var arrayProto: any = Array.prototype;
		// array字段排序 1：arr.sortOn([["key1", "up"], ["key2", "down"]]) 2：arr.sortOn("up")
		// 复合排序 fieldList包含多个列表，每个列表包含2个值，第一个表示要排序的key,第二个表示要排序的类型（升降序
		// 值排序 只传一个字符串表示对值列表进行排序
		arrayProto["sortOn"] = function(fieldList: any): void {
			let index: number = 0;
			var compare = function(a: Object, b: Object): number {
				var result: number = 0;
				var key: string = fieldList[index][0];
				var sortType: string = fieldList[index][1] || "up";
				var valueA = a[key];
				var valueB = b[key];
				if (typeof(valueA) == "boolean")
				{
					valueA = valueA ? 1 : 0;
					valueB = valueB ? 1 : 0;
				}
				if (valueA > valueB) {
					result = sortType == "up" ? 1 : -1;
				}
				else if (valueA < valueB) {
					result = sortType == "up" ? -1 : 1;
				} else {
					index++;
					if (fieldList[index])
					{
						return compare(a, b);
					}
					else
					{
						result = 1;
					}
				}
				index = 0;
				return result;
			};
			if (typeof(fieldList) == "string") {
				(this as Array<any>).sort(function(a: any, b: any): number {
					var result: number = 0;
					if (a > b) {
						result = fieldList == "up" ? 1 : -1;
					}
					else if (a < b) {
						result = fieldList == "up" ? -1 : 1;
					}
					return result;
				})
			} else {
				(this as Array<any>).sort(compare);
			}
		}

		arrayProto["getIndex"] = function(value : any): number {
			var i = -1;

			for (i = 0; i < this.length; i++)
			{
				if (this[i] == value)
				{
					return i;
				}
			}

			return i;
		}

		if (!Int32Array["prototype"]["fill"])
		{
			Int32Array["prototype"]["fill"] = function(value) {
				var i = 0;

				while(typeof this[i] != "undefined")
				{
					this[i] = value;
					i++;
				}

				return this;
			}
		}

		if (!Number["isFinite"])
		{
			Number["isFinite"] = function(value) {
				return (typeof value == "number") && (value != NaN);
			}
		}
	}
}
