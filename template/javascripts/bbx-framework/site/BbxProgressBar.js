"use strict";

var BbxProgressBar = function(element) {

	var _active = false, _disable = false;

	var value =		element.ext.attr('data-value') || 0;
	var speed =		element.ext.attr('data-speed') || 700;
	var ease =		element.ext.attr('data-ease');

	if (!ease) {
		ease = Util.cssEase.smoothstep;
	} else if (Util.cssEase[ease]) {
		ease = Util.cssEase[ease];
	}

	var handle =	element.ext.select('.bbx-bar-fill');

	var height = element.ext.height();
	var startTime, time;

	if (!handle) return;

	handle.ext.css('width', '0');

	var onScroll = function(e) {
		if (_disable) return;

		if (window.innerHeight - (element.ext.rect().top + height) >= 0 && !_active) {
			handle.ext.transition({width: value + '%'}, speed, ease, 0, onAnimationEnd);
			_disable = true;			
		}
	}

	var onAnimationEnd = function() {
		NativeScroll.off(onScroll);
	}

	NativeScroll.on(onScroll);

	onScroll();
}
;
