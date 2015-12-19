"use strict";

var BbxAccordion = function(element) {

	var currentClass =		element.ext.attr('data-current-class') || 'current-tab';
	var titles =			element.ext.selectAll('.tab-header') || [];
	var contentContainers =	element.ext.selectAll('.bbx-acc-tab-container') || [];
	var contents =			element.ext.selectAll('.bbx-acc-tab-content') || [];
	var icons =				element.ext.selectAll('.tab-header .accordion-bullet > i');

	// var activeTab =		element.ext.select('.headline-container.current');
	// var active =		activeTab ? activeTab.ext.index() : 0;
	var activeTitle =		element.ext.select('.tab-header.' + currentClass);
	var active =			activeTitle ? titles.indexOf(activeTitle) : null;

	var activateTab = function(e) {
		if (e) {
			e.preventDefault();
			e.stopPropagation();
		}
		if (this === activeTitle) {
			this.ext.removeClass(currentClass);

			icons[active].className = 'fa fa-plus';
			contentContainers[active].ext.css('height', '0');

			active = null;
			activeTitle = null;
			return;
		}

		var _i = titles.indexOf(this);

		if (activeTitle) {
			activeTitle.ext.removeClass(currentClass);
			contentContainers[active].ext.css('height', '0');
		}
		if (active !== null) {
			icons[active].className = 'fa fa-plus';
		}

		this.ext.addClass(currentClass);

		contentContainers[_i].ext.css('height', contents[_i].ext.height() + 'px');
		icons[_i].className = 'fa fa-minus';

		activeTitle = this;
		active = _i;
	}

	titles.forEach(function(ele) {
		ele.addEventListener('click', activateTab);
	});

	element.bbxDestroy = function() {
		// titles.forEach(function(ele) {
		// 	ele.removeEventListener('click', activateTab);
		// });
	}

	return element;
}
;
