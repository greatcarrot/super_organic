"use strict";

var Main = (function() {

	var initialized = false;
	var main = Events({}, true);
	var section, wpadminbar, mask;
	var prevRoute, prevScrollTop, scrollTopToSet;
	var startHideTime, startShowTime, time;
	var valAtTime;

	var transitionHideSpeed = 100, transitionShowSpeed = 200, speed;
	var components = [], componentsLength;
	var pendingSectionContent, pendingBodyClass;

	var animating =			false;
	var contentLoaded =		true;
	var contentLoading =	false;

	var i;

	var initializeComponents = function(ele) {
		var ext = ele ? ele.ext : EXT;

		// console.log('Main::initializeComponents called');

		var _videos = ext.selectAll('.bbx-video') || [];
		for (i = 0; i < _videos.length; i++) {
			components.push(BbxVideo(_videos[i]));
		}

		var _sliders = ext.selectAll('.bbx-slider') || [];
		for (i = 0; i < _sliders.length; i++) {
			components.push(BbxHelloSlider(_sliders[i]));
		}

		var _tabs = ext.selectAll('.bbx-tabs') || [];
		for (i = 0; i < _tabs.length; i++) {
			components.push(BbxTab(_tabs[i]));
		}

		var _accordions = ext.selectAll('.bbx-accordion') || [];
		for (i = 0; i < _accordions.length; i++) {
			components.push(BbxAccordion(_accordions[i]));
		}

		var _maps = ext.selectAll('.bbx-map') || [];
		for (i = 0; i < _maps.length; i++) {
			components.push(BbxMap(_maps[i]));
		}

		var _twitterWidgets = ext.selectAll('.bbx-twitter-widget') || [];
		for (i = 0; i < _twitterWidgets.length; i++) {
			components.push(BbxTwitterWidget(_twitterWidgets[i]));
		}

		var _progressBars = ext.selectAll('.bbx-progress-bar') || [];
		for (i = 0; i < _progressBars.length; i++) {
			components.push(BbxProgressBar(_progressBars[i]));
		}

		var _counters = ext.selectAll('.bbx-counter') || [];
		for (i = 0; i < _counters.length; i++) {
			components.push(BbxCounter(_counters[i]));
		}

		var _paralaxElements = ext.selectAll('.bbx-parallax') || [];
		for (i = 0; i < _paralaxElements.length; i++) {
			components.push(BbxParallax(_paralaxElements[i]));
		}

		var _inputContainers = ext.selectAll('.bbx-fancy-input') || [];
		for (i = 0; i < _inputContainers.length; i++) {
			components.push(BbxFancyInput(_inputContainers[i]));
		}

		var _progressButtons = ext.selectAll('.bbx-progress-button') || [];
		for (i = 0; i < _progressButtons.length; i++) {
			components.push(BbxProgressButton(_progressButtons[i]));
		}

		var _forms = ext.selectAll('.bbx-form') || [];
		for (i = 0; i < _forms.length; i++) {
			components.push(BbxForm(_forms[i]));
		}

		var _fullscreenPopups = ext.selectAll('.bbx-fullscreen-popup') || [];
		for (i = 0; i < _fullscreenPopups.length; i++) {
			components.push(BbxFullscreenPopup(_fullscreenPopups[i]));
		}

		var _animBoxes = ext.selectAll('.bbx-animation-on-appear') || [];
		for (i = 0; i < _animBoxes.length; i++) {
			components.push(BbxAnimationBox(_animBoxes[i]));
		}

		componentsLength = components.length;
	}

	var destroyComponents = function(type) {

		Application.offAll(MSG.RESIZE);
		FrameImpulse.offAll();
		NativeScroll.offAll();

		for (i = 0; i < componentsLength; i++) {
			if (components[i] && typeof components[i].bbxDestroy === 'function') components[i].bbxDestroy();
		}

		components = [];
		componentsLength = 0;
	}

	var onRoute = function(e) {
		// console.log('Main.onRoute called');
		contentLoading = true;
		contentLoaded = false;
		_showMask();

		scrollTopToSet = e.eventType === 'popstate' ? prevScrollTop : false;
		// if (e.eventType === 'popstate') {
		// 	scrollTopToSet = prevScrollTop;
		// } else {
		// 	scrollTopToSet = false;
		// }

		Util.delay(destroyComponents, bbxPageLoadShowSpeed);

		document.body.className = document.body.className + ' bbx-page-loading';
		try {
			window.stop();
		} catch(e) {
		    document.execCommand('Stop');
		}
		Loader.loadText(e.route, __reloadContent);

		prevRoute = e.prevRoute;
		prevScrollTop = NativeScroll.getScrollTop();
	}

	var __reloadContent = function(text) {
		contentLoaded = true;

		if (!text) return;

		// section.ext.css('display', '');
		// for (var i = 0; i < footersLength; i++) {
		// 	footers[i].ext.css('display', '');
		// }

		// Loader.__helperContainer.innerHTML = null;

		var helperDiv = document.createElement('div');
		EXT.extend(helperDiv);

		var elementBody =	text.match(/<\s*body.*>[\s\S]*<\s*\/body\s*>/ig).join("");
		var docTitle =		text.match(/<title>(.*)<\/title>/);

		// console.log('ready');
		if (elementBody) {
			// if (scrollTopToSet) {
			// 	
			// } else {
			// 		window.scrollTo(0, 0);	
			// 	// if (window.location.hash && window.location.hash.length > 1) {
			// 	// 	
			// 	// } else {
			// 	// 	window.scrollTo(0, 0);
			// 	// }
			// }

			if (docTitle) document.getElementsByTagName('title')[0].innerHTML = docTitle[1];

			elementBody  = elementBody.replace(/<\s*body/gi,"<div");
			elementBody  = elementBody.replace(/<\/body/gi,"<\/div");

			// Loader.__helperContainer.innerHTML = elementBody;
			helperDiv.innerHTML = elementBody;

			var _main =			helperDiv.ext.select('#main');
			var _header =		helperDiv.ext.select('header');
			var _wpadminbar =	helperDiv.ext.select('#wpadminbar');

			Header.toReinit(_header);
			// Header.reinit(_header);
			if (wpadminbar && _wpadminbar) wpadminbar.innerHTML = _wpadminbar.innerHTML;


			// console.log('Main::__reloadContent content laoded.');
			// console.log('Main::__reloadContent animating value is: ' + animating);
			if (!animating) {
				// console.log('Main::__reloadContent MSG.PAGE_LOADED will be triggered.');

				document.body.className = helperDiv.firstChild.className + ' bbx-page-loading';
				section.innerHTML = _main.innerHTML;
				initializeComponents(section);
				Application.trigger(MSG.HIJACK_LINKS);

				Application.trigger(MSG.PAGE_LOADED);
			} else {
				pendingSectionContent = _main.innerHTML;
				pendingBodyClass = helperDiv.firstChild.className + ' bbx-page-loading';
			}
		}
	}


	var onPageLoaded = function() {
		if (contentLoading) {
			if (scrollTopToSet) {
				
			} else {
				window.scrollTo(0, 0);
				// if (window.location.hash && window.location.hash.length > 1) {
				// 	
				// } else {
				// 	window.scrollTo(0, 0);
				// }
			}
		}
		contentLoading = false;

		_hideMask();

		document.body.ext.removeClass('bbx-page-loading');

		NativeScroll.trigger();
	}

	var _hideMask = function() {
		if (mask) {
			mask.ext.transition({
				opacity: 0
			}, bbxPageLoadHideSpeed, 'linear', 0, __onMaskHidden);
		}
	}

	var _showMask = function(withZIndex) {
		// BbxLoader.load();
		if (mask) {
			animating = true;
			mask.ext.css('z-index', withZIndex || 6);
			mask.ext.transition({
				opacity: 1
			}, bbxPageLoadShowSpeed, 'linear', 0, __onMaskVisible);
		}
	}

	var __onMaskHidden = function() {
		if (mask) mask.ext.css('z-index', '-1');
	}

	var __onMaskVisible = function() {
		// console.log('Main::__onMaskVisible called.');
		// console.log('Main::__reloadContent contentLoading value is: ' + contentLoading);
		// console.log('Main::__reloadContent contentLoaded value is: ' + contentLoaded);
		animating = false;
		if (contentLoading && contentLoaded) {
			// console.log('Main::__onMaskVisible MSG.PAGE_LOADED will be triggered.');

			if (pendingSectionContent) {
				section.innerHTML = pendingSectionContent;
				initializeComponents(section);
				Application.trigger(MSG.HIJACK_LINKS);

				pendingSectionContent = '';
			}
			if (pendingBodyClass) {
				document.body.className = pendingBodyClass;
				pendingBodyClass = '';
			}
			Application.trigger(MSG.PAGE_LOADED);
		}
	}

	Application.on(MSG.ROUTE, onRoute);
	Application.on(MSG.PAGE_LOADED, onPageLoaded);

	main.init = function() {
		initialized = true;

		section =		EXT.select('#main');
		mask =			EXT.select('#bbx-loading-mask');
		// content =		section.ext.select('#main-content-wrap');
		// contentMask =	EXT.select('#bbx-conent-loading-mask');

		initializeComponents();

		Application.trigger(MSG.PAGE_LOADED);
	}

	main.addComponents = function(_element) {
		initializeComponents(_element);
	}

	main.destroyComponents = function(type) {
		destroyComponents(type);
	}

	main.getElement = function() {
		return section;
	}

	main.getHeight = function() {
		return section.ext.height();
	}

	main.getWpadminbar = function() {
		return wpadminbar;
	}

	main.getWpadminbarHeight = function() {
		return wpadminbar ? wpadminbar.ext.height() : 0;
	}

	main.element = function() {
		return section;
	}

	main.blur = function() {
		if (section) section.ext.css("webkitFilter", "blur(7px)");
	}

	main.unblur = function() {
		if (section) section.ext.css("webkitFilter", "");
	}

	return main;

})(window);
