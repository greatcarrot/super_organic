"use strict";

var BbxScrollTop = (function() {

	var _active = false;

	var links =			EXT.selectAll('.bbx-back-to-top') || []
	var linksLength =	links.length;

	var speed = BBX_CONFIG.scrollTopSpeed;
	var startTime, time, startY;

	var run = function() {
		time = new Date().getTime() - startTime;
		time = time / speed;
		if(time < 1) requestAnimationFrame(run);
		time = time * time * time;

		window.scrollTo( 0, ( startY - (startY * time) ) );
	}

	var onClick = function(e) {
		if (e) e.preventDefault();

		startTime = new Date().getTime(); 
		startY = NativeScroll.getScrollTop();

		run();
	}

	for (var i = 0; i < linksLength; i++) {
		links[i].addEventListener('click', onClick);
	}
})();
