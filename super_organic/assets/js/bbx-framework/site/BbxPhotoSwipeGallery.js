"use strict";

var BbxPhotoSwipeGallery = (function() {

	var _active = false, animating = false, initialized = false;;

	var pswpElement = document.querySelectorAll('.pswp')[0];
	if (!pswpElement) return;

	var allLinks, items, galleries;
	var linksLength, itemsLength;
	var initIndex = null;
	var speed = BBX_CONFIG.photoSwipeShowHideSpeed;

	var gal;

	var ps = {}

	var onRoute = function(e) {
		initialized = false;
	}

	var onPageLoaded = function() {
		init();
	}

	var init = function() {
		if (initialized) return;

		// console.log('BbxPhotoSwipeGallery::init');

		initialized = true;

		items = {};
		galleries = {};

		allLinks =		EXT.selectAll('.bbx-photo-swipe') || [];
		linksLength =	allLinks.length;

		if (linksLength === 0) return false;

		for (var i = 0; i < linksLength; i++) {
			// var img = allLinks[i].ext.select('img');
			// if (!img) continue;

			var group =	allLinks[i].ext.attr('data-bbx-hb-rel');
			var url =	allLinks[i].ext.attr('href');
			var wh =	allLinks[i].ext.attr('data-origin-size') || 'x';
				wh = wh.split('x');
			var bbxItemContainer = allLinks[i].ext.attr('data-bbx-hb-container') || 'parent';

			var item = {
				src: url,
				w: parseInt(wh[0], 10),
				h: parseInt(wh[1], 10),
				msrc: url,
				bbxContainer: null,
				bbxContainerSlider: false
			}

			if (bbxItemContainer === 'slider') {
				item.bbxContainerSlider =	allLinks[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
				item.bbxContainer =			item.bbxContainerSlider.firstChild;
			
				EXT.extend(item.bbxContainerSlider.firstChild);
			} else {
				// var parent = allLinks[i].parentNode;
				// EXT.extend(parent);
				
				item.bbxContainer = 		allLinks[i].parentNode;
			
				EXT.extend(allLinks[i].parentNode);
			}

			if (items[group] === undefined) items[group] = [];
			if (items[group].indexOf(item) === -1) items[group].push(item);
			allLinks[i].bbxHeavyBoxGalleryIndex = items[group].indexOf(item);

			// if (Simplrz.touch) {
			// 	Util.handleTap(allLinks[i], onClick);
			// } else {
				allLinks[i].addEventListener('click', onClick);
			// }

		}
	}

	var onShow = function() {
		gal.currItem.bbxContainer.ext.css('opacity', '0');
		Util.delay(blurElements, speed*.8);
		if (Main.getWpadminbar()) {
			Main.getWpadminbar().ext.css('z-index', '99');
		}
	}

	var onHide = function() {
		Util.delay(onHideEnd, this.options.hideAnimationDuration);
		unblurElements();
		if (Main.getWpadminbar()) {
			Main.getWpadminbar().ext.css('z-index', '9999');
		}
	}

	var onHideEnd = function() {
		gal.items[initIndex].bbxContainer.ext.css('opacity', '');
	}

	var blurElements = function() {
		Main.blur();
		Header.blur();
	}

	var unblurElements = function() {
		Main.unblur();
		Header.unblur();
	}

	var onClick = function(e) {
		e.preventDefault();

		var currentGroup = this.ext.attr('data-bbx-hb-rel');

		initIndex = this.bbxHeavyBoxGalleryIndex;

		var options = {   
			history: false,
			focus: false,
			showHideOpacity: false,
			bgOpacity: .86,
			showAnimationDuration: speed,
			hideAnimationDuration: speed,
			closeOnScroll: false,
			index: initIndex,
			getThumbBoundsFn: function(index) {
				var rect = 	gal.currItem.bbxContainer.ext.rect(),
					pageYScroll = window.pageYOffset || document.documentElement.scrollTop;

				return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
			}
		};

		if (this.ext.attr('data-bbx-hb-cropped') === 'yes') {
			options.showHideOpacity = true;
			// options.showAnimationDuration = 0;
			// options.hideAnimationDuration = 0;
		}
		var resetHideAnimationDurationOnChange = this.ext.attr('data-bbx-hb-no-hide-anim') === 'yes';

		gal = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items[currentGroup], options);
		gal.listen('afterChange', function() {
			if (gal.currItem.bbxContainerSlider) {
				gal.currItem.bbxContainerSlider.bbxSwiper.swipeTo(this.getCurrentIndex() - 1);
			}

			if (resetHideAnimationDurationOnChange && initIndex != gal.getCurrentIndex()) {
				this.options.hideAnimationDuration = 0;
			} else if (gal.currItem.bbxContainer) {
				// gal.currItem.bbxContainer.ext.css('opacity', '1');
			}
		});

		gal.listen('initialZoomIn', onShow);
		// gal.listen('initialZoomInEnd', onShowEnd);
		gal.listen('initialZoomOut', onHide);
		// gal.listen('initialZoomOutEnd', onHideEnd);

		gal.init();
	}

	Application.on(MSG.ROUTE, onRoute);
	Application.on(MSG.PAGE_LOADED, onPageLoaded);

	ps.init = init;

	return ps;
})();
