"use strict";

var BbxFancyInput = function(element) {

	var _active = false;

	var input = element.ext.select('input') || element.ext.select('textarea');;
	if (!input) return;

	var onFocus = function(e) {
		if (_active) return;

		element.ext.addClass('active');
		_active = true;

	}

	var onBlur = function(e) {
		if (input.value) return;

		element.ext.removeClass('active');
		_active = false;
	}

	input.addEventListener('focus', onFocus);
	input.addEventListener('blur', onBlur);

	return element;

}
;
