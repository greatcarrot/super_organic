"use strict";

var BbxMap = function(element) {

	var map, marker;
	var mapContainer =	element.ext.select('.bbx-map-holder');
	if (!mapContainer) return;

	var latLng =		element.ext.attr('data-latng') || '53.385873,-1.471471';
	var markerLatLng =	element.ext.attr('data-markerlatlng');
	var zoom =			element.ext.attr('data-zoom') || 15;
	var style =			element.ext.attr('data-map-style') || null;
	var pinStyle =		element.ext.attr('data-pin-style') || 'dark_svg';

	var enableZoom =		element.ext.attr('data-zoom-control') === 'true';
	var enableWheel =		element.ext.attr('data-wheel') === 'true';
	var enableStreetView =	element.ext.attr('data-street-view') === 'true';
	var enablePan =			element.ext.attr('data-pan') === 'true';
	var enableScale =		element.ext.attr('data-scale') === 'true';

	var latlngParts =	latLng.split(',');
	var lat =			latlngParts[0];
	var lng =			latlngParts[1];

	var markerLat, markerLng, markerUrl;

	switch (pinStyle) {
	 case 'dark_svg':
		markerUrl = 'images/pin-black-48px.svg';
		break;
	 case 'dark_png':
		markerUrl = 'images/pin-black-48px.png';
		break;
	 case 'white_svg':
		markerUrl = 'images/pin-white-48px.svg';
		break;
	 case 'white_png':
		markerUrl = 'images/pin-white-48px.png';
		break;
	}

	if (markerLatLng) {
		var markerLatlngParts =	markerLatLng.split(',');
		markerLat =				markerLatlngParts[0];
		markerLng =				markerLatlngParts[1];
	}

	element.events = Events({}, true);

	var init = function() {
		var myOptions = {
			zoom: parseInt(zoom),
			center: new google.maps.LatLng(parseFloat(lat), parseFloat(lng)),
			mapTypeId: google.maps.MapTypeId.ROADMAP,

			zoomControl: enableZoom,
			panControl: enablePan,
			scaleControl: enableScale,
			streetViewControl: enableStreetView,
			scrollwheel: enableWheel,
			mapTypeControl: false,
			overviewMapControl: false,

			// zoomControlOptions: {
				// style: google.maps.ZoomControlStyle.SMALL
				// position: google.maps.ControlPosition.RIGHT_BOTTOM
			// },

			styles: style && BBX_GMAP_STYLES[style] ? BBX_GMAP_STYLES[style] : null
		};

		map = new google.maps.Map(mapContainer, myOptions);
		google.maps.event.addListenerOnce(map, 'tilesloaded', function(){
			mapContainer.ext.css('opacity', 1);
			dropMarker();
		});
	}

	var dropMarker = function() {
		if (!map || !markerLatLng) return;

		marker = new google.maps.Marker({
			icon: markerUrl,
			map:map,
			draggable: false,
			animation: google.maps.Animation.DROP,
			position: new google.maps.LatLng(parseFloat(markerLat), parseFloat(markerLng))
		});
	}

	mapContainer.ext.css('opacity', 0);

	if (BbxGoogleMap.initialized()) {
		init();
	} else {
		BbxGoogleMap.on(MSG.GOOGLE_MAP, init);
	}

	element.bbxDestroy = function() {
		map = null;
		marker = null;
	}

	return element;
		
}
;
