"use strict";

var BbxHelloSlider = function(element) {

	var active = false, sliderCreated = false, activeIndex = 0;

	var height;
	var heightToExclude = 0;
	var swiperContainer, sliderContents, slidesText = [];
	var sliderContentsHeight = 0;
	var controlNavButtons;
	var swiper;

	// Config
	var effect = 'fade', loop = true, speed, autoplay, simulateTouch, fullScreen, excludeHeightOf, adjustHeightWith;

	var onResize = function() {
		if (!active) return;

		height = fullScreen ? window.innerHeight - 96 : element.ext.height();
		if (excludeHeightOf) heightToExclude = excludeHeightOf.ext.height();

		setSlidesContents();

		if (fullScreen) element.ext.css('height', height + 'px');
	}

	var _onControlNavClick = function(e) {
		if (e) {
			e.preventDefault();
			e.stopPropagation();
		}
		if (!sliderCreated) return;

		var _i = controlNavButtons.indexOf(this);
		swiper.slideTo(_i + 1);
		// swiper.slideTo(0);
	}

	var __onInit = function(_s) {
		sliderCreated = true;
	}

	var __onSlideChangeStart = function(_s) {
		if (!sliderCreated) return;

		var _ai = _s.slides.eq(_s.activeIndex).attr('data-swiper-slide-index');
		if (controlNavButtons.length > 0) {
			controlNavButtons[activeIndex].ext.removeClass('current-bullet');
			controlNavButtons[_ai].ext.addClass('current-bullet');
		}
		hideSlideContent(slidesText[activeIndex]);
		activeIndex = _ai;

		if (slidesText[activeIndex]) {
			switch (slidesText[activeIndex].bbxColorStyle) {
			 case 'light':
				if (fullScreen) {
					Header.removeClass('bbx-nav-dark-text');
					Header.addClass('bbx-nav-light-text');
				}
				element.ext.removeClass('bbx-light-background');
				element.ext.addClass('bbx-dark-background');
				break;
			 case 'dark':
				if (fullScreen) {
					Header.removeClass('bbx-nav-light-text');
					Header.addClass('bbx-nav-dark-text');
				}
				element.ext.removeClass('bbx-dark-background');
				element.ext.addClass('bbx-light-background');
				break;
			}
		}
	}

	var __onSlideChnageEnd = function(_s) {
		if (!sliderCreated) return;

		showSlideContent(slidesText[activeIndex]);
	}

	var init = function() {
		swiperContainer = element.ext.select('.swiper-container');
		if (!swiperContainer) return;
		active = true;

		sliderContents = element.ext.select('.slide-content');
		slidesText = element.ext.selectAll('.slide-content-item') || [];
		controlNavButtons = element.ext.selectAll('.swiper-control-nav > *') || [];

		for (var i = 0; i < controlNavButtons.length; i++) {
			controlNavButtons[i].ext.on('click', _onControlNavClick);
		}

		// Settings
		effect =			element.ext.attr('data-effect') || 'fade';
		loop =				element.ext.attr('data-loop') !== 'no';
		autoplay =			element.ext.attr('data-autoplay');
		speed = 			element.ext.attr('data-speed') || 700;
		fullScreen =		element.ext.attr('data-full-screen') === 'yes';
		simulateTouch =		element.ext.attr('data-simulate-touch') === 'yes';
		excludeHeightOf =	element.ext.attr('data-exclude-height');
		if (excludeHeightOf) excludeHeightOf = element.ext.select(excludeHeightOf);
		adjustHeightWith =	parseInt(element.ext.attr('data-adjust-height')) || 0;
		
		// calculateHeight =	element.ext.attr('data-calculate-height') === 'yes';

	    swiper = new Swiper(swiperContainer, {
			nextButton: element.ext.select('.swiper-direction-nav .arrow-nav-next'),
			prevButton: element.ext.select('.swiper-direction-nav .arrow-nav-prev'),

			// swipeHandler: element,
			loop: loop,
			effect: effect,
			simulateTouch: simulateTouch,
			loopedSlides: 0,
			autoplay: autoplay,
			speed: speed,

			coverflow: {
			  rotate: 30,
			  stretch: 0,
			  depth: 100,
			  modifier: 1,
			  slideShadows : true
			},

			onInit: __onInit,
			onSlideChangeStart: __onSlideChangeStart,
			onSlideChangeEnd: __onSlideChnageEnd
	    });

		onResize();
	}

	var setSlidesContents = function() {
		if (!sliderContents) return;

		for (var i = 0; i < slidesText.length; i++) {
			if (slidesText[i].ext === undefined) {
				EXT.extend(slidesText[i]);
			}
			slidesText[i].bbxAppearEffect =		slidesText[i].ext.attr('data-appear-effect') || 'fade';
			slidesText[i].bbxSlideAppearSpeed =	slidesText[i].ext.attr('data-appear-speed') || '400';
			slidesText[i].bbxSlideHideSpeed =	slidesText[i].ext.attr('data-hide-speed') || '100';
			slidesText[i].bbxSlideAppearDelay =	slidesText[i].ext.attr('data-appear-delay') || '0';
			slidesText[i].bbxColorStyle =		slidesText[i].ext.attr('data-color-style') || 'none';

			var _contentHeight = slidesText[i].ext.height();
			if (_contentHeight === 0) {
				slidesText[i].ext.css('opacity', 0);
				slidesText[i].ext.css('display', 'block');
				_contentHeight = slidesText[i].ext.height();
				slidesText[i].ext.css('opacity', '');
				slidesText[i].ext.css('display', 'none');
			} else {
				sliderContentsHeight = _contentHeight;
			}
			slidesText[i].ext.css('top', ( (height - heightToExclude) - _contentHeight)/2 + adjustHeightWith  + 'px' );
		}

		if (sliderContentsHeight > height - 96) {
			sliderContents.ext.css('opacity', .1)
		} else {
			sliderContents.ext.css('opacity', '')
		}
	}

	var showSlideContent = function(contentElement) {
		if (!sliderContents) return;

		contentElement.ext.css('opacity', '0');
		contentElement.ext.css('display', 'block');
		contentElement.ext.css('z-index', '');

		var initTransform, animTransition = {opacity: 1};
		
		switch (contentElement.bbxAppearEffect) {
		 case 'fade':
			break;
		 case 'top':
			initTransform = {y: -24};
			animTransition.transform = {y: 0};
			break;
		 case 'right':
			initTransform = {x: 24};
			animTransition.transform = {x: 0};
			break;
		 case 'bottom':
			initTransform = {y: 24};
			animTransition.transform = {y: 0};
			break;
		 case 'left':
			initTransform = {x: -24};
			animTransition.transform = {x: 0};
			break;
		}
		if (initTransform) contentElement.ext.transform(initTransform);
		if (animTransition) contentElement.ext.transition(animTransition, contentElement.bbxSlideAppearSpeed, 'cubic-bezier(0.23, 1, 0.32, 1)', contentElement.bbxSlideAppearDelay);
	}

	var hideSlideContent = function(contentElement) {
		if (!sliderContents) return;

		contentElement.ext.transition({
			opacity: 0
		}, contentElement.bbxSlideHideSpeed, 'linear', 0, function() {
			this.ext.css('z-index', -1);
		});
	}

	Application.on(MSG.RESIZE, onResize);

	init();

	element.bbxDestroy = function() {
		if (swiper) swiper.destroy();
	}

	return element;
}
;
