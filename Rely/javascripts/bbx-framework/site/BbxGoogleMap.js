"use strict";

var BbxGoogleMap = (function(window) {

	var queue = [], initialized = false;

	window.bbxGoogleMapOnLoadCallback = function() {
		// var overlayScript = document.createElement("script");
		// overlayScript.src = gummBaseJsUrl + 'googlecode.markerwithlabel.js';
		// document.body.appendChild(overlayScript);

		// overlayScript.addEventListener('load', function() {
			initialized = true;
			bbxgm.trigger(MSG.GOOGLE_MAP);
		// });
	}

	var bbxgm = Events({}, true);

	bbxgm.initialized = function() {
		return initialized;
	}

	if (!bbxgm.initialized()) {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "https://maps.googleapis.com/maps/api/js?3&sensor=true&callback=bbxGoogleMapOnLoadCallback";
		document.body.appendChild(script);
	}

	return bbxgm;
})(window);
