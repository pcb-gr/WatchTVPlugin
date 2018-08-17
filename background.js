/*
ws = new WebSocket('ws://localhost:8080/name');
(function() {
	ws.onopen = function(e) {
		//console.log("Connection opened");
		
	}
})();

chrome.webRequest.onBeforeSendHeaders.addListener(function(trafficInfo) {
	if (trafficInfo.url.indexOf("master.m3u8") != -1) {
		//console.log(trafficInfo.url);
		//ws.send(trafficInfo.url);
	}
}, {
	urls : [ "<all_urls>" ]
}, [ 'requestHeaders', 'blocking' ]);
*/