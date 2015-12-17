"use strict";

var BbxAnimationBox = function(element) {

	var _active = false, _disable = false;;
	var height;

	var onResize = function() {
		height = element.ext.height();
	}

	var onScroll = function(e) {
		if (_disable) return;

		if (window.innerHeight - (element.ext.rect().top + 72) >= 0 && !_active) {
			element.ext.addClass('active');

			NativeScroll.off(onScroll);

			_disable = true;
			_active = false;
		}
	}

	Application.on(MSG.RESIZE, onResize);
	Application.on(MSG.PAGE_LOADED, onScroll);
	NativeScroll.on(onScroll);

	onResize();
	onScroll();
}
;
