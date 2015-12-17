"use strict";

window.Site = function() {
	
	// if(Simplrz.touch) {
	// 	document.addEventListener("touchmove", function(e) {
	// 		e.preventDefault();
	// 	});
	// }

	// BbxLoader.init(true);

	Application.init();
	Main.init();
	Header.init();
	BbxPhotoSwipeGallery.init();
	BbxMobileMenu();
}
;
