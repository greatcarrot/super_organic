"use strict";

var NativeScroll = (function(document) {

	var ns = {};

	var si;

	var animating = false;

	var numListeners, listeners = [],
		numViewportListeners, viewportListeners = [],
		numInViewportListeners, inViewportListenrs = [],
		preventGlobalListeners = [], initialized = false;

	var event = {
		y: 0,
		x: 0,
		deltaX: 0,
		deltaY: 0,
		originalEvent: null
	};

	var scrollXY = [0, 0];

/**
 * @param f callback
 * @param noGlobal boolean whether the listener should be removed when offAll is called
 */
	ns.on = function(f, noGlobal) {
		if(!initialized) initListeners(); 
		listeners.push(f);
		numListeners = listeners.length;
		if(noGlobal) preventGlobalListeners.push(f);
	}

	ns.off = function(f) {
		var i = listeners.indexOf(f);
		if (i < 0) return;
		listeners.splice(i, 1);
		numListeners = listeners.length;
		if(numListeners <= 0) destroyListeners();
	}

	ns.offAll = function() {
		listeners = [];
		if (preventGlobalListeners.length > 0) {
			for (var i = 0; i < preventGlobalListeners.length; i++) {
				listeners.push(preventGlobalListeners[i]);
			}
		}
		numListeners = listeners.length;
		viewportListeners = [];
		numViewportListeners = 0;
	}

	ns.trigger = function(e, excludecb) {
		if (!e) {
			onScroll('bbxTriggeredEvent');
			return;
		}

		event.x += e.x;
		event.y += e.y;
		event.deltaY = e.y;
		event.deltaX = e.x;
		event.originalEvent = e;

		for (var i = 0; i < numListeners; i++) {
			if (listeners[i] !== excludecb) listeners[i](event);
		}
	}

	ns.getScrollTop = function() {
		var s = getScrollXY();
		return s[1];
	}

	ns.setScrollTop = function(t) {
		window.scrollTo(0, t);
	}

	ns.onViewport = function(e, f) {
		if(!initialized) initListeners();
		viewportListeners.push({e:e,f:f});
		numViewportListeners = viewportListeners.length;
	}

	ns.offViewport = function(e, f) {
		viewportListeners.splice(viewportListeners.indexOf({e:e,f:f}), 1);
		numViewPortListeners = viewportListeners.length;
	}

	var notify = function(e) {
		event.x += event.deltaX;
		event.y += event.deltaY;
		event.originalEvent = e;

		for (var i = 0; i < numListeners; i++) {
			listeners[i](event);
		}
		for (i = 0; i < numViewportListeners; i++) {
			if (viewportListeners[i].e.ext.rect().top <= window.innerHeight) {
				viewportListeners[i].f();
				viewportListeners.splice(i, 1);
				numViewportListeners = viewportListeners.length;
			}
		}
	}

	var onScroll = function(e) {
		var _scrollXY = getScrollXY();
		var deltaY = _scrollXY[1] - scrollXY[1];
		var deltaX = _scrollXY[0] - scrollXY[0];

		event.deltaY = deltaY;
		event.deltaX = deltaX;
		event.x = _scrollXY[0];
		event.y = _scrollXY[1];

		scrollXY[1] = _scrollXY[1];

		notify(e);
	}

	var getScrollXY = function() {
		var scrOfX = 0, scrOfY = 0;
		if( typeof( window.pageYOffset ) == 'number' ) {
			//Netscape compliant
			scrOfY = window.pageYOffset;
			scrOfX = window.pageXOffset;
		} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
			//DOM compliant
			scrOfY = document.body.scrollTop;
			scrOfX = document.body.scrollLeft;
		} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
			//IE6 standards compliant mode
			scrOfY = document.documentElement.scrollTop;
			scrOfX = document.documentElement.scrollLeft;
		}
		if (scrOfY < 0) scrOfY = 0;
		return [ scrOfX, scrOfY ];
	}

	var onAnimateScroll = function() {
		if (!animating) return;
	}

	// var onRender = function() {
	// 	onScroll();
	// }

	var initListeners = function() {
		// if (Simplrz.touch) {
		// 	FrameImpulse.on(onScroll);
		// } else {
			document.addEventListener("scroll", onScroll);
		// }

		// si = setInterval(onScroll, 10);
		initialized = true;
	}

	var destroyListeners = function() {
		// console.log('Header.destroyListeners called');
		// if (Simplrz.touch) {
			// FrameImpulse.off(onScroll);
		// } else {
			document.removeEventListener("scroll", onScroll);
		// }

		// clearInterval(si);
		initialized = false;
	}

	return ns;
})(document);
