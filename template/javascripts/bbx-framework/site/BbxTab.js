"use strict";

var BbxTab = function(element) {

	var tabs =			element.ext.selectAll('.bbx-tabs-list > *') || [];
	var contents =		element.ext.selectAll('.bbx-tab-content') || [];
	var activeTab =		element.ext.select('.bbx-tabs-list > .current-tab');
	var active =		activeTab ? activeTab.ext.index() : 0;

	var activateTab = function(e) {
		if (e) e.preventDefault();
		var _i = this.ext.index();
		if (_i === active) {
			return
		}

		activeTab.ext.removeClass('current-tab');
		this.ext.addClass('current-tab');
		if (contents[active]) contents[active].ext.css('display', 'none');
		if (contents[_i]) contents[_i].ext.css('display', 'block');

		activeTab = this;
		active = _i;
	}

	tabs.forEach(function(ele) {
		ele.addEventListener('click', activateTab);
	});

	element.bbxDestroy = function() {
		// tabs.forEach(function(ele) {
		// 	ele.removeEventListener('click', activateTab);
		// });
	}

	return element;
}
;
