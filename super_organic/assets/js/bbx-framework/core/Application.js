"use strict";

var Application = (function(window) {

	var app = Events({}, false);
	var router, broadcast;

	app.init = function() {

		router = HistoryRouter(app);
		router.init();

		window.addEventListener('resize', function(e) {
			app.trigger(MSG.RESIZE, e);
		});

		window.addEventListener('orientationchange', function(e) {
			app.trigger(MSG.RESIZE, e);
		});

		// if(window.FrameImpulse && window.Anm) FrameImpulse.on(Anm.update);
	}

	app.addHijackLinks = function(links) {
		router.hijackLinks(links);
	}

	return app;

})(window);


