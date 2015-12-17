"use strict";

var BbxProgressButton = function(element) {

	var _active = false;

	var progressBar =		element.ext.select('.bbx-fancy-button-progress');
	var progressHandle =	element.ext.select('.progress-indicator');
	if (!progressBar || !progressHandle) return;
	var icon =				element.ext.select('i');

	var halt = element.ext.attr('data-halt');
	if (halt) halt = parseFloat(halt);
	var _halt = halt;
	var shouldHalt = false;

	var timeout;
	var progress = 0;

	// Config
	// var timeout = 2000;

	var onClick = function(e) {
		if (e) e.preventDefault();
		if (_active) return;
		_active = true;

		element.ext.addClass('active');

		progress = 0;
		progressHandle.ext.css('width', '0');
		progressBar.ext.css('opacity', '1');

		setProgress();
	}

	var onEnd = function() {
		_active = false;

		element.ext.removeClass('active');

		progressBar.ext.css('opacity', '0');
		progressHandle.ext.css('width', '0');
		if (timeout) clearTimeout(timeout);
	}

	var setProgress = function() {
		if (shouldHalt) {
			shouldHalt = false;
			return;
		}
		if (halt && progress >= halt) {
			halt = null;
			if (timeout) {
				clearTimeout(timeout);
				// console.log('BbxProgressButton::setProgess timeout cleared');

			}
			shouldHalt = true;
			// console.log(progress);
			return false;
		}
		if (progress < 1) progress = Math.min( progress + Math.random() * 0.1, 1 );

		if (progress === 1) {
			progressHandle.ext.css('width', '100%');
			timeout = setTimeout(onEnd, 100);
			// Util.delay(onEnd, 100);
			// onEnd();
		} else {
			progressHandle.ext.transition({
				width: progress * 100 + '%'
			}, 100, 'linear', 0, setProgress);
		}
	}

	element.bbxProgressButton = {}

	element.bbxProgressButton.setProgress = function(p) {
		if (timeout) clearTimeout(timeout);
		progress = p ? p : 0;
		setProgress();
	}

	element.bbxProgressButton.icon = function(v) {
		if (icon) icon.className = v;
	}

	element.addEventListener('click', onClick);

}
;
