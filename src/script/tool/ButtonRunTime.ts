import { Event } from "laya/events/Event";
import { Button } from "laya/ui/Button";
import { Handler } from "laya/utils/Handler";
import { Tween } from "laya/utils/Tween";


/**
 * @author jiaxing
 */
export default class ButtonRunTime extends Button {
	private scaleNum: number = 0.8;

	private isOnTween: Boolean;

	private oldScaleX:number = 1;

	private oldScaleY:number = 1;

	constructor() {
		super();

		this.on(Event.MOUSE_DOWN, this, this.btnDown);
	}

	private btnUp() {
		Tween.to(this, { scaleX: this.oldScaleX, scaleY: this.oldScaleY }, 100, null, Handler.create(this, this.upComplete));
	}

	private upComplete() {
		this.isOnTween = false;
	}

	private btnDown() {
		if (!this.isOnTween) {
			this.oldScaleX = this.scaleX;
			this.oldScaleY = this.scaleY;

			this.isOnTween = true;
			Tween.to(this, { scaleX: this.oldScaleX * this.scaleNum, scaleY: this.oldScaleY * this.scaleNum }, 100, null, Handler.create(this, this.downComplete));
		}
	}

	private downComplete() {
		// this.isOnTween = false;
		this.btnUp();
	}
}
