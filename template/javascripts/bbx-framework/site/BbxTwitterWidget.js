"use strict";

var BbxTwitterWidget = function(element) {
	var active = false;

	var numTweets = element.ext.attr('data-max-tweets') || 3;
	var url =		element.ext.attr('data-fethcer-url') || 'components/get_tweets.php';

	var handleTweets = function(tweets) {
		
	}

	var onTweetsLoaded = function(text) {
		if (text) {
			element.ext.removeClass('bbx-twitter-element');
			element.innerHTML = text;
			Main.addComponents(element);
		}
	}

	Loader.loadText(url, onTweetsLoaded);
	

	element.bxxDestroy = function() {
		
	}

	return element;
}
;
