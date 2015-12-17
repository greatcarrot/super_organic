"use strict";

var BbxLoader = (function() {

	var initialized = false;

	var element, filler, icon, progress = 0;

	var init = function(andLoad) {
		element = EXT.select('#bbx-loader');
		if (!element) return;

		initialized = true;

		filler =	element.ext.select('.bbx-loader-filler');
		icon =		element.ext.select('.bbx-loader-icon');

		progress = 0.4;
		if (andLoad === true) setProgress();
	}

	var setProgress = function() {
		if (!initialized) return;

		if (progress < 1) progress = Math.min( progress + Math.random() * 0.1, 1 );

		if (progress === 1) {
			filler.ext.css('bottom', '100%');
		} else {
			filler.ext.transition({
				bottom: progress * 100 + '%'
			}, 100, 'linear', 0, setProgress);
		}
	}

	var bl = {}

	bl.init = init;

	bl.load = function() {
		if (!initialized) init();

		progress = 0;
		filler.ext.css('bottom', '0');

		setProgress();
	}

	return bl;
})();
