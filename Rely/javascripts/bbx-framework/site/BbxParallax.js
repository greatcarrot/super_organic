"use strict";

var BbxParallax = function(element) {

	var active = false, initialized = false, preventParallax = false;
	var mediaContainer = element.ext.select('.parallax-media');
	if (!mediaContainer) return;

	var img = mediaContainer.ext.select('img');
	var bgImageParallax =	mediaContainer.ext.attr('data-bg-image-parallax') === 'yes';
	var disableParallax =	element.ext.attr('data-disable-parallax') === 'yes';
	var videoInitialized =	false;
	var parallaxDeviation =	parseFloat(element.ext.attr('data-deviation')) || 1.4;

	var videoContainer =	element.ext.select('.bbx-self-hosted-video-container');
	var video =				element.ext.select('video');
	var videoAspect = video && video.ext.attr('data-aspect-ratio') ? vide.ext.attr('data-aspect-ratio') : 16/9;

	var ext = element.ext;
	var easer = new Easer(1);
	var width, height, mediaHeight, parallaxScrollLimit, availableScrollHeight;
	var offset;
	var dy;

	var onResize = function() {
		width = element.ext.width();
		height = element.ext.height();

		if (disableParallax) {
			if (video) {
				var aspect = width/height;
				if (aspect < videoAspect) {
					videoContainer.ext.css('width', height*videoAspect + 'px');
					videoContainer.ext.css('height', height + 'px');
					videoContainer.ext.css('top', 0);
					videoContainer.ext.css('left', 0-(height*videoAspect-height)/2 + 'px');

				} else {
					videoContainer.ext.css('width', width + 'px');
					videoContainer.ext.css('height', width/videoAspect + 'px');
					videoContainer.ext.css('top', 0-(width/videoAspect-height)/2 + 'px');
					videoContainer.ext.css('left', 0);
				}
			}
			return;
		}

		if (bgImageParallax) {
			mediaHeight = height * parallaxDeviation;
		} else if (video) {
			mediaHeight = video.ext.height();
		} else if (img) {
			mediaHeight = img.ext.height();
		} else {
			mediaHeight = mediaContainer.ext.height();
		}
		if (mediaHeight > 0) {
			mediaContainer.ext.css('height', mediaHeight + 'px');
		}

		availableScrollHeight =	height + window.innerHeight;
		parallaxScrollLimit =	mediaHeight - height;
		preventParallax =		mediaHeight <= height;

		easer.setLimits(0, parallaxScrollLimit);

		if ( !preventParallax && (ext.rect().top + NativeScroll.getScrollTop() - Main.getWpadminbarHeight()) === 0 ) {
			mediaContainer.ext.css('bottom', -parallaxScrollLimit * .95 + 'px');
		}

		initialized = true;
	}

	var onScroll = function(e) {
		if (preventParallax || disableParallax) return;

		var t = ext.rect().top;
		dy = e.deltaY;

		if (e.originalEvent === 'bbxTriggeredEvent' && e.deltaY != 0) {

			// return;
			dy = Math.abs(window.innerHeight - t);
		}

		if (t <= window.innerHeight && ext.rect().bottom >= 0 && initialized) {
			active = true;
			easer.updateTarget( (dy / availableScrollHeight) * parallaxScrollLimit );
		} else if (active) {
			active = false;
		}

	}

	var onRender = function() {
		if (!active || preventParallax || disableParallax) return;

		offset = easer.easeVal();
		mediaContainer.ext.transform({y: offset});
	}

	var onPageLoaded = function() {
		easer.reset();
	}

	if (!disableParallax) {
		NativeScroll.on(onScroll);
		FrameImpulse.on(onRender);
	}

	Application.on(MSG.PAGE_LOADED, onPageLoaded);
	Application.on(MSG.RESIZE, onResize);

	if (video && videoContainer && !Simplrz.touch) {
		videoContainer.ext.css('position', 'absolute');
		video.ext.css('display', 'block');
	} else if (img && img.height === 0) {
		img.ext.on('load', onResize);
	} else {
		onResize();
	}

	element.bbxDestroy = function() {
		// if (__videoJs) __videoJs.dispose();
	}

	return element;
}
;
