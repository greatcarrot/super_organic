"use strict";

var BbxVideo = function(element) {

	var loaded = false;

	var video;
	var videoUrl =			element.ext.attr('data-video-url');
	var videoMimeType =		element.ext.attr('data-video-mimetype');
	var poster =			element.ext.select('.poster');
	var videoContainer =	element.ext.select('.the-video');
	var button =			element.ext.select('.bbx-play-video');
	var progressBar =		element.ext.select('.bbx-video-progress');
	var progressHandle;
	var autoplay =			element.ext.attr('data-autoplay') === 'yes';
	var loop =				element.ext.attr('data-loop') === 'yes';
	var enableControls =	element.ext.attr('data-controls') !== 'no';
	var pendingPlay =		false;

	if (progressBar) progressHandle = progressBar.ext.select('.progress-indicator');
	 
	var __videoJs;

	var duration = 0;

	var onClick = function(e) {
		if (e.preventDefault());

		if (loaded) {
			play();
			return;
		}
		pendingPlay = true;
			// console.log(__videoJs);
		// }
	}

	var play = function() {
		if (!__videoJs) return;


		__videoJs.play();
	}

	var showVideo = function() {
		if (button) button.ext.css('display', 'none');
		if (poster) poster.ext.css('opacity', '0');

		video.ext.css('display', 'block');
	}

	var hideVideo = function() {
	}

	// Events
	var onPlay = function() {
		if (button && button.bbxProgressButton) button.bbxProgressButton.setProgress(1);
		if (progressHandle) progressHandle.ext.css('width', '0');
		if (progressBar) progressBar.ext.css('opacity', '1');

		Util.delay(showVideo, 500);
	}

	var onEnd = function() {
		if (loop) {
			play();
			return;
		}

		if (progressBar) progressBar.ext.css('opacity', '0');
		if (progressHandle) progressHandle.ext.css('width', '0');

		if (button) button.ext.css('display', 'block');
		if (button && button.bbxProgressButton) button.bbxProgressButton.icon('fa fa-repeat');
		if (poster) poster.ext.css('opacity', '1');

		video.ext.css('display', 'none');
	}

	var onTimeUpdate = function() {
		if (progressHandle) progressHandle.ext.css('width', 100/(__videoJs.duration()/__videoJs.currentTime()) + '%');
	}

	var _initEvents = function() {
		if (!__videoJs) return;

		__videoJs.on('play', onPlay);
		__videoJs.on('ended', onEnd);
		__videoJs.on('timeupdate', onTimeUpdate);
	}

	if (button) {
		button.addEventListener('click', onClick);
	}

	if (videoContainer) {
		video = document.createElement('video');
		EXT.extend(video);
		video.src = videoUrl;
		video.preload = false;
		video.loop = false;
		video.controls = enableControls;
		video.className = 'video-js vjs-default-skin';

		videoContainer.appendChild(video);

		videojs(video, {
			// loop: false
		}).ready(function() {
			loaded = true;
			video.ext.addClass('initialized');
			__videoJs = this;

			duration = __videoJs.duration();

			_initEvents();
			if (pendingPlay || autoplay) __videoJs.play();
			pendingPlay = false;
		});
	}

	element.bbxDestroy = function() {
		if (__videoJs) __videoJs.dispose();
	}

	return element;
}
;
