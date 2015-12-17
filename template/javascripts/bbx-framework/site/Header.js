"use strict";

var Header = (function() {
	var active = false, _detached = false;;
	var element, infoBarContainer, infoBar, infoBarCloseButton, nav, navMenu, logoLink, logoExtraText,
		links = [], subMenus = [], menuItems = [], mobileButton, mobileButtonVisible = false;
	var elementHeight = 0, infoBarHeight = 0, navHeight = 0, linksLength = 0, subMenusLength = 0, menuItemsLength;
	var pendingHeaderToReinit;
	var easer = new Easer();

	var onScrollStyle, onScrollClassesToRemove, onScrollClassesToAdd, onScrollBgRgb;
	var detachThreshold = 100;
	var linkBasePadding = 48;
	var logoBaseMargin = 35;

	var i;

	var onScroll = function(e) {
		var dx = (e) ? e.deltaY : 0;

		easer.updateTarget(dx);
	}

	var onRender = function() {
		if (!active) return;

		var scr = easer.easeVal();

		if (infoBarHeight > 0 && nav) {
			nav.ext.transform({y: -Math.clamp(scr, 0, infoBarHeight)});
			scr -= infoBarHeight;
			// if (scr < 0) return;
		}

		var paddingVal = Math.clamp(48 - (scr/detachThreshold) * 24, 24, 48);
		var heightVal = Math.clamp(120 - (scr/detachThreshold) * 48, 72, 120);
		var logoLinkMarginVal = Math.clamp(35 - (scr/detachThreshold) * 23, 12, 35);
		var bgAlpha = Math.clamp(scr/detachThreshold, 0, 1);

		if (bgAlpha >= 0.2) {
			element.ext.addClass('detached');
			_detached = true;
		} else {
			element.ext.removeClass('detached');
			_detached = false;
		}

		if (linksLength > 0) {
			for (i = 0; i < linksLength; i++) {
				links[i].ext.css('padding', paddingVal + 'px 24px');
			}
		}
		if (navMenu) {
			// navMenu.ext.transform({y: paddingVal});
			// navMenu.ext.css('margin-top', paddingVal + 'px');
		}

		if (nav) {
			nav.ext.css('height', heightVal + 'px');
			nav.ext.css('min-height', heightVal + 'px');
			if (onScrollBgRgb) {
				nav.ext.css('background-color', 'rgba(' + onScrollBgRgb + ',' + bgAlpha + ')');
			}
		}
		if (logoLink) {
			logoLink.ext.css('margin-top', logoLinkMarginVal + 'px');
		}
		if (mobileButtonVisible) {
			mobileButton.ext.css('margin-top', logoLinkMarginVal + 'px');
		}
		if (subMenusLength > 0) {
			for (i = 0; i < subMenusLength; i++) {
				subMenus[i].ext.css('top', heightVal + 'px');
			}
		}
		if (logoExtraText) {
			logoExtraText.ext.css('margin-top', paddingVal + 'px');
		}

	}

	var onResize = function() {
		if (element) elementHeight =	element.ext.height();
		if (infoBar) infoBarHeight =	infoBar.ext.height();
		if (nav) navHeight =			nav.ext.height();

		if (infoBarHeight > 0) {
			detachThreshold -= infoBarHeight;
		}
		mobileButtonVisible = mobileButton && window.innerWidth <= 1024;
	}

	var setOnScrollStyle = function(_style) {
		if (_style) {
			onScrolLStyle = _style;
		} else {
			onScrollStyle =		element.ext.attr('data-on-scroll-style') || 'none';
		}
		switch (onScrollStyle) {
		 case 'light':
			onScrollBgRgb = '255, 255, 255';
			element.ext.removeClass('on-detached-dark');
			element.ext.addClass('on-detached-light');
			break;
		 case 'dark':
			element.ext.removeClass('on-detached-light');
			element.ext.addClass('on-detached-dark');
			onScrollBgRgb = '0, 0, 0';
			break;
		 default:
			element.ext.removeClass('on-detached-light');
			element.ext.removeClass('on-detached-dark');
			onScrollBgRgb = null;
			break;
		}
	}

	var init = function() {
		active = true;

		element =				EXT.select('#header');
		nav =					element.ext.select('nav');
		navMenu =				element.ext.select('.prime-nav');
		infoBarContainer =		element.ext.select('.bbx-info-bar-container');
		infoBar =				element.ext.select('.bbx-top-info-bar');
		infoBarCloseButton =	infoBarContainer ? infoBarContainer.ext.select('.close-button') : null;
		links =					element.ext.selectAll('ul.prime-nav > li > a') || [];
		linksLength =			links.length;
		logoLink =				element.ext.select('.bbx-logo');
		logoExtraText =			element.ext.select('.bbx-logo-extra-text');
		subMenus =				element.ext.selectAll('ul.prime-nav > li > .sub-menu') || [];
		subMenusLength =		subMenus.length;
		menuItems =				element.ext.selectAll('.prime-nav li') || [];
		menuItemsLength =		menuItems.length;
		mobileButton =			EXT.select('#bbx-mobile-menu-button');

		setOnScrollStyle();
		onResize();
	}

	var reinit = function(_ele) {
		if (!_ele) return;
		// active = false;

		// if (_ele.ext.attr('data-class')) {
		// 	element.className = _ele.ext.attr('data-class');
		// } else {
			element.className = _ele.className;
		// }
		// element.ext.attr('data-on-scroll-class', _ele.ext.attr('data-on-scroll-class') || '');
		element.ext.attr('data-on-scroll-style', _ele.ext.attr('data-on-scroll-style') || '');
		nav.ext.attr('style', '');

		var _infoBarContainer = _ele.ext.select('.bbx-info-bar-container');
		if (_infoBarContainer && infoBarContainer) {
			infoBarContainer.innerHTML = _infoBarContainer.innerHTML;
			infoBar = infoBarContainer.ext.select('.bbx-top-info-bar');
			infoBarHeight = infoBar ? infoBar.ext.height() : 0;
		}

		if (menuItemsLength > 0) {
			var _menuItems = _ele.ext.selectAll('.prime-nav li') || [];
			for (var i = 0; i < menuItemsLength; i++) {
				if (_menuItems[i]) {
					menuItems[i].className = _menuItems[i].className;
				}
			}
		}
		
		setOnScrollStyle();

		// active = true;
		// init();
	}

	var onRoute = function(e) {
		if (!element) return;

		active = false;

		// if (!_detached) {
		// 	switch (onScrollStyle) {
		// 	 case 'light':
		// 		nav.ext.css('background-color', '#fff');
		// 		break;
		// 	 case 'dark':
		// 		nav.ext.css('background-color', '#000');
		// 		break;
		// 	}
		// }


		// element.className = 'bbx-nav bbx-nav-dark-text bbx-nav-white-background bbx-nav-dark-sub-menu';
		// element.ext.attr('data-on-scroll-style', 'light');
		// if (_detached) element.className += ' detached';

		// if (!alwaysDetached) element.ext.attr('style', '');

		// _detached = false;

		// updateTargetOnInit = e.eventType === 'popstate';
	}

	var onPageLoaded = function() {
		if (pendingHeaderToReinit) reinit(pendingHeaderToReinit);

		pendingHeaderToReinit = null;

		active = true;
		// initPageLoaded = true;

		// if (!initialized) init();
	}

	NativeScroll.on(onScroll, true);
	FrameImpulse.on(onRender, true);
	Application.on(MSG.RESIZE, onResize);
	Application.on(MSG.ROUTE, onRoute);
	Application.on(MSG.PAGE_LOADED, onPageLoaded);

	var h = {}

	h.init = function() {
		init();
	}

	h.addClass = function(c) {
		if (element) element.ext.addClass(c);
	}

	h.removeClass = function(c) {
		if (element) element.ext.removeClass(c);
	}

	h.element = function() {
		return element;
	}

	h.blur = function() {
		if (element) element.ext.css("webkitFilter", "blur(7px)");
	}

	h.unblur = function() {
		if (element) element.ext.css("webkitFilter", "");
	}

	h.reinit = function(_ele) {
		reinit(_ele);
	}

	h.toReinit = function(_ele) {
		if (!_ele) return;

		pendingHeaderToReinit = _ele;
	}

	return h;
})();
