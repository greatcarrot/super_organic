"use strict";

var BbxFullscreenPopup = function(element) {

	var popupSelector =	element.ext.attr('data-popup-target-content');
	if (!popupSelector) return;
	var popup =			EXT.select(popupSelector);
	if (!popup) return;
	var mask = popup.ext.select('.bbx-popup-mask');
	var popupContent = popup.ext.select('.bbx-popup-content');
	var input = popup.ext.select('input');

	var speed =		element.ext.attr('data-speed') || BBX_CONFIG.popupShowHideSpeed;
	var hidden =	true;
	var animating = false;
	var startTime, time, startOpacity, endOpacity, valAtTime;

	var onClick = function(e) {
		if (e) e.preventDefault();

		if (hidden) show();
		else hide();
	}

	var run = function() {
		time = new Date().getTime() - startTime;
		time = time / speed;
		if (time < 1) {
			requestAnimationFrame(run);
		} else {
			startOpacity === 0 ? cbOnShow() : cbOnHide();
		}
		time = time * time * time;

		valAtTime = (startOpacity) + (endOpacity - startOpacity) * time;

		popup.ext.css('opacity', valAtTime);
	}


	var show = function() {
		if (!hidden || animating) return;
		animating = true;

		popup.ext.css('opacity', '0');
		popup.ext.css('display', 'block');

		onResize(true);

		document.body.style.overflow = 'hidden';

		Util.delay(_blurElements, speed*.8)
		
		startTime = new Date().getTime(); 
		startOpacity = 0;
		endOpacity = 1;

		run();
	}

	var hide = function() {
		if (hidden || animating) return;
		animating = true;

		document.body.style.overflow = '';

		startTime = new Date().getTime(); 
		startOpacity = 1;
		endOpacity = 0;

		run();

		Main.unblur();
		Header.unblur();
	}

	var cbOnShow = function() {
		// console.log('BbxFullscreenPopup::cbOnShow called');
		if (input) input.focus();

		hidden = false;
		animating = false;

		Application.trigger(MSG.FREEZE_SITE, 1);
	}

	var cbOnHide = function() {
		hidden = true;
		animating = false;

		popup.ext.css('display', '');

		Application.trigger(MSG.FREEZE_SITE, 0);
	}

	var _blurElements = function() {
		Main.blur();
		Header.blur();
	}

	var onResize = function(force) {
		if ( !popupContent || (hidden && force !== true) ) return;

		var heightDiff = window.innerHeight - popupContent.ext.height();
		if (heightDiff > 0) {
			popupContent.ext.css('margin-top', heightDiff/2 + 'px');
		}
	}

	Application.on(MSG.RESIZE, onResize);
	Application.on(MSG.ROUTE, hide);

	element.addEventListener('click', onClick);
	if (mask) {
		mask.addEventListener('click', hide);
	}

	document.addEventListener('keydown', function(e) {
		if (e.keyCode == 27) hide();
	});

	return element;
}
;
