"use strict";

var HistoryRouter = function (broadcast) {

	var rootUrl = document.location.protocol + '//' + (document.location.hostname || document.location.host);
	if(document.location.port) rootUrl += ":" + document.location.port;

	var route, prevRoute;

	var hijackLinks = function (allLinks) {
		if (!Simplrz.history || bbxHijackLinks === false) return;

		// var allLinksSelector = 'a[href]';
		// var allLinks = EXT.selectAll(allLinksSelector);
		if (!allLinks) allLinks = EXT.selectAll('a[href]');

		for (var i = 0; i < allLinks.length; i++) {
			var link = allLinks[i];

			var url = link.ext.attr('href');
			var target = link.ext.attr('target');
			var hj = link.ext.attr('data-hj');

			if ( target == '_blank' || hj == 'no' || url.indexOf('#') === 0 ||
				 url.indexOf(bbxAdminUrl) !== -1 || url.indexOf(bbxLoginUrl) !== -1 ||
				 link.host !== window.location.host || url.match(/(\.js|\.jpg|\.jpeg|\.pdf|\.png|\.gif|\.css|\.tif|\.tiff)$/) ) {
				// Skip absolute URLs, those that have a _blank target 
				// and those that are explicitely set to not be hijacked
				// (this is done by adding an attribute like this: data-hj='no')

				// console.log('HistoryRouter.hijackLinks: skipping ' + url);
				// console.log('HistoryRouter.hijackLinks: skipping link: '); console.log(link);

				continue;
			}

			if (!link.hijacked) {
				link.hijacked = true;

				var cb = function (e) {
					if(e) e.preventDefault();

					// Do we really want to reload the same page?
					if (this.href === window.location.href) {
						window.scrollTo(0, 0);
						return false;
					}

					pushState(this.href);
				}

				link.addEventListener('click', cb);
				// if(Simplrz.touch) {
				// 	Util.handleTap(link, cb);
				// } else {
				// 	link.addEventListener('click', cb);
				// }
			}
		}
	};

	// Some browser fire the popstate event on start others don't.
	// Those who don't need help, and this is what the setTimeout below is for.
	// but it can't be called twice, so we also need this flag./
	// It's mostly for Chrome <33, so in the future this can be removed (maybe).
	var historyAPIInitiated = false;

	var notify = function(e) {
		var r = route.substring(rootUrl.length);
		// var p = r.split("/");
		// p.shift(); // Remove the first empty element

		// console.log(route);
		// console.log(document.location.href);

		broadcast.trigger(MSG.ROUTE, {
			route: r,
			// parts: p,
			prevRoute: prevRoute,
			eventType: e ? e.type : null
		});
	}

	var pushState = function (href) {
		if (Simplrz.history && href) history.pushState(null, null, href);

		prevRoute = (route) ? route.replace(rootUrl, "") : null;
		route = document.location.href;

		if (href) notify();
	};

	window.addEventListener('popstate', function(e) {
		e.preventDefault();

		prevRoute = (route) ? route.replace(rootUrl, "") : null;
		route = document.location.href;

		if (route.replace(rootUrl, "").indexOf(prevRoute) !== 0 && historyAPIInitiated) {
			notify(e);
		}
		historyAPIInitiated = true;
	});

	broadcast.on(MSG.HIJACK_LINKS, hijackLinks);
	broadcast.on(MSG.NAVIGATE, pushState);

	setTimeout(function() {
		if(!historyAPIInitiated) {
			historyAPIInitiated = true;
			pushState();
		} else {
			console.log("History initiated, no manual push.");
		}
	}, 20, document.location.href);

	return {
		init: function () {
			hijackLinks();
		},
		hijackLinks: function(links) {
			hijackLinks(links);
		}
	}
};
