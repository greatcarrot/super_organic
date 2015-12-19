"use strict";

// Config

/* global settings */
var bbxHijackLinks =				true && document.location.protocol.indexOf('file') !== 0;
var bbxAdminUrl =					null;
var bbxLoginUrl =					null;

/* timing config */
var bbxPageLoadShowSpeed =	600;
var bbxPageLoadHideSpeed =	600;

// After JS is loaded
window.addEventListener('load', function() {
	EXT.extend(document.body);
	EXT.extend(document.documentElement);

	Site();

	Application.on(MSG.ROUTE, function(e) {
		setTimeout(function() {
			if (typeof ga !== 'undefined') ga('send', 'pageview');
		}, 10);
	});
});
