"use strict";

var BbxCounter = function(element) {

	var _active = false, _disable = false;

	var valueContainer = element.ext.select('.bbx-counter-value');
	if (!valueContainer) return;

	var speed = element.ext.attr('data-speed') || 1000;
	var value = parseInt(valueContainer.innerHTML) || 0;

	var startTime, time, height;
	var height = element.ext.height();

	valueContainer.innerHTML = '0';

	var onResize = function() {
		if (_disable) return;

		height = element.ext.height();
	}

	var onScroll = function(e) {
		if (_disable) return;

		if (window.innerHeight - (element.ext.rect().top + height) >= 0 && !_active) {
			NativeScroll.off(onScroll);

			startTime = new Date().getTime(); 
			_active = true;
		}
	}

	var onRender = function(a) {
		if (!_active || _disable) return;

		time = new Date().getTime() - startTime;
		time = time / speed;

		if (time < 1) {
			// time = time * time;
			// time = time * time * (3 - 2 * time);
			// time = 1 - (1 - time) * (1 - time);
			// time = time * (2 - time);
			time = 1+(--time)*time*time*time*time;

			valueContainer.innerHTML = Math.round(time * value);
		} else {
			_active = false;
			_disable = true;
			FrameImpulse.off(onRender);

			valueContainer.innerHTML = Math.round(value);
		}
	}

	Application.on(MSG.RESIZE, onResize);
	NativeScroll.on(onScroll);
	FrameImpulse.on(onRender);

	onResize();
	onScroll();

	return element;
}
;
