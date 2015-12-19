"use strict";

var BbxMobileMenu = function() {
	var wrapElement =	EXT.select('#bbx-contents-wrap');
	var nav =			EXT.select('#bbx-mobile-menu');
	var button =		EXT.select('#bbx-mobile-menu-button');

	if (!nav || !button) return;

	var expandLinks =	nav.ext.selectAll('.dropdown-link') || [];
	var subMenus =		[];
	var _transition =	nav.ext.attr('data-drop-down-transition') || 'cubic-bezier(0.55,0,0.95,0.18)';
	var _speed =		nav.ext.attr('data-drop-down-speed') || 300;

	var width;
	var open = false, animating = false;
	var _scrollTopHelper;

	nav.ext.css('display', 'block');
	width = nav.ext.width();
	nav.ext.css('display', 'none');

	var onRoute = function(e) {
		if (open) onButtonClick();
	}

	var onOpenStart = function() {
		nav.ext.css('display', 'block');
	}

	var onOpenEnd = function() {
		animating = false;

		document.body.ext.addClass('bbx-mobile-menu-opened');
	}

	var onCloseEnd = function() {
		animating = false;

		nav.ext.css('display', 'none');
		document.body.ext.removeClass('bbx-mobile-menu-opened');
	}

	var onButtonClick = function(e) {
		if (e && e.preventDefault) e.preventDefault();
		if (animating) return;
		animating = true;

		if (open) {
			open = false;
			wrapElement.ext.transition({
				transform: {
					x: 0
				}
			}, 200, 'linear', 0, onCloseEnd);
			Header.element().ext.transition({
				transform: {
					x: 0
				}
			}, 200, 'linear', 0, onCloseEnd);
		} else {
			open = true;
			onOpenStart();
			wrapElement.ext.transition({
				transform: {
					x: width
				}
			}, 200, 'linear', 0, onOpenEnd);
			Header.element().ext.transition({
				transform: {
					x: width
				}
			}, 200, 'linear', 0, onOpenEnd);
		}
	}

	var onExpandLink = function(e) {
		if (e) e.preventDefault();

		if (!this._expanded) {
			expandSubMenu(this);
		} else {
			contractSubMenu(this);
		}
	}

	var expandSubMenu = function(link) {
		link._expanded = true;
		link.ext.removeClass('fa-caret-down');
		link.ext.addClass('fa-caret-up');

		var subMenu = subMenus[link._index];

		if (subMenu) {
			if (link._subMenuOriginHeight === 0) {
				subMenu.ext.css('height', '');
				link._subMenuOriginHeight = subMenu.ext.height();
				subMenu.ext.css('height', '0');
			}

			subMenu.ext.transition({
				height: link._subMenuOriginHeight + 'px'
			}, _speed, _transition, 0, function() {
				subMenu.ext.css('height', '');
			});
		}

	}

	var contractSubMenu = function(link) {
		link._expanded = false;
		link.ext.removeClass('fa-caret-up');
		link.ext.addClass('fa-caret-down');

		var subMenu = subMenus[link._index];
		var currHeight = subMenu.ext.height();
		link._subMenuOriginHeight = currHeight;
		subMenu.ext.css('height', currHeight + 'px');
		if (subMenu) {
			subMenu.ext.transition({
				height: 0
			}, _speed, _transition, 0);

		}

	}

	for (var i = 0; i < expandLinks.length; i++) {
		var parent =	EXT.extend(expandLinks[i].parentNode);
		var subMenu =	parent.ext.select('.sub-menu');

		subMenus.push(subMenu);

		subMenu.ext.css('display', 'block');
		// expandLinks[i]._expanded = false;
		expandLinks[i]._index = i;
		expandLinks[i]._subMenuOriginHeight = subMenu.ext.height();
		subMenu.parentNode.ext.css('overflow', 'hidden');
		if (!subMenu.parentNode.ext.hasClass('current-menu-ancestor')) {
			expandLinks[i]._expanded = false;
			subMenu.ext.css('height', '0');
		} else {
			expandLinks[i]._expanded = true;
		}


		expandLinks[i].addEventListener('click', onExpandLink);
	}

	button.ext.on('click', onButtonClick);
	Application.on(MSG.ROUTE, onRoute, true);
}
;
