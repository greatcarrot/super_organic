// var bbxXMLHttpRequestRequest;
"use strict";

window.Loader = {

	loadText: function(path, onLoadedFunc){
		// if (bbxXMLHttpRequestRequest) {
		// 	bbxXMLHttpRequestRequest.abort();
		// 	bbxXMLHttpRequestRequest = null;
		// }
		var request = new XMLHttpRequest();
		request.open("GET", path);

		request.onreadystatechange = function(){
			if (request.readyState == 4) {
				onLoadedFunc.call(null, request.responseText);
			}
		};

		request.send();

		// bbxXMLHttpRequestRequest = new XMLHttpRequest();
		// bbxXMLHttpRequestRequest.open("GET", path);
		// 
		// bbxXMLHttpRequestRequest.onreadystatechange = function(){
		// 	if (bbxXMLHttpRequestRequest.readyState == 4) {
		// 		onLoadedFunc.call(null, bbxXMLHttpRequestRequest.responseText);
		// 		bbxXMLHttpRequestRequest = null;
		// 	}
		// };
		// 
		// bbxXMLHttpRequestRequest.send();
	},

	loadJSON: function(path, onLoadedFunc){
		Loader.loadText(path, function(text) {
			onLoadedFunc(JSON.parse(text));
		});
	},

	loadImage:function(src, callback){
		var img = new Image();
		img.onload = callback(img);
		img.src = src;
	},

	loadHtmlElement: function(path, elementSelector, onLoadedFunc) {
		var request = new XMLHttpRequest();
		request.open("GET", path);

		request.onreadystatechange = function(){
			if (request.readyState == 4) {

				Loader.__helperContainer.innerHTML = null;

				var elementBody = request.responseText.match(/<\s*body.*>[\s\S]*<\s*\/body\s*>/ig).join("");

				var responseElement = null;

				if (elementBody) {
					elementBody  = elementBody.replace(/<\s*body/gi,"<div");
					elementBody  = elementBody.replace(/<\/body/gi,"<\/div");

					Loader.__helperContainer.innerHTML = elementBody;
					responseElement = Loader.__helperContainer.ext.select(elementSelector);
				}

				onLoadedFunc.call(null, responseElement);
			}
		};

		request.send();
	},

	post: function(url, data, callback) {
		var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200 && callback) {
				var finished = false;

				try {
					var obj = JSON.parse(xmlhttp.responseText);
					if (obj) {
						callback(obj);
						finished = true;
					}
				} catch(err) {}

				// if (!finished) {
				// 	var helperDiv = document.createElement('div');
				// 	var dataBody = xmlhttp.responseText.match(/<\s*body.*>[\s\S]*<\s*\/body\s*>/ig).join("");
				// 
				// 	if (!dataBody) return;
				// 
				// 	dataBody  = dataBody.replace(/<\s*body/gi,"<div");
				// 	dataBody  = dataBody.replace(/<\/body/gi,"<\/div");
				// 	helperDiv.innerHTML = dataBody;
				// 	var bodyDiv = EXT.extend(helperDiv.firstChild);
				// 
				// 	callback(bodyDiv);
				// }

			} else if (xmlhttp.readyState === 4 && xmlhttp.status != 200 && callback) {
				callback(false);
			}
		};

		xmlhttp.open("POST", url, true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send(data);
	},

	__helperContainer: EXT.extend(document.createElement('div'))

};
