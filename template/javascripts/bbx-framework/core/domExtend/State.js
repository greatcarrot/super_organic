"use strict";

var State = function(ext, element) {

	var cc = function(p) {
		return p.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
	}

	ext.data = {};

	ext.show = function(display) {
		element.style.display = display || "block";
	};

	ext.hide = function() {
		element.style.display = "none";
	};

	ext.visible = function() {
		return ext.readCss('display') != "none";
	};

	ext.on = function(event, callback, useCapture) {
		return element.addEventListener(event, callback, useCapture);
	};

	ext.off = function(event, callback, useCapture) {
		return element.removeEventListener(event, callback, useCapture);
	};

	ext.css = function(property, value) {
		if(typeof property == "string") {
			element.style[cc(property)] = value;
		} else {
		// assume property arg is object
			for(var p in property){
				element.style[cc(property)] = property[p];
			}
		}
	};

	ext.readCss = function(property, notCalculated) {
		return (notCalculated) ? element.style[property] : getComputedStyle(element).getPropertyValue(property);
	}

	ext.attr = function(name, value) {
		if(value != undefined) {
			element.setAttribute(name, value);
		}
		return element.getAttribute(name);
	}

	ext.removeClass = function(remove) {
		if (!remove) return;

		var newClassNames = [];
		var i;
		var classes = element.className.split(" ");
		var classesLength = classes.length;
		for(i = 0; i < classesLength; i++) {
			if(classes[i] !== remove) {
				newClassNames.push(classes[i]);
			}
		}
		element.className = newClassNames.join(' ');
	}

	ext.addClass = function(add) {
		if (!add) return;

		if (element.className.split(' ').indexOf(add) === -1) element.className += " " + add;
	}

	ext.hasClass = function(className) {
		return element.className.split(' ').indexOf(className) === -1 ? false : true;
	}

	ext.index = function() {
		var i = 0, child = element;
		while( (child = child.previousElementSibling) != null ) {
			i++;	
		}
		return i;
	}

	// ext.val = function() {
	// 	var val = false;
	// 	switch (element.tagName) {
	// 	 case 'INPUT':
	// 		val = element.value;
	// 		break;
	// 	 case 'TEXTAREA':
	// 		val = element.innerHTML;
	// 		break;
	// 	}
	// 	return val;
	// }
};
