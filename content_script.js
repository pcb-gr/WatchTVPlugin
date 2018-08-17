$(document).ready(function() {
	var channelList = convertInto2KOM(playlist) ;
	$('.faq-section').html(buildMenu(channelList));
	
});

function buildMenu(channelList) {
	var ul = $('<ul></ul>')
	for (i = 0; i < channelList.length; i++) { 
		var channel = channelList[i];
		var li = $('<li></li>')
		var img = $('<img src= "' + channel.logo + '" channelLink="' + channel.url + '"/>');
		img.click(function() {
			play($(this).attr('channelLink'));
		});
		li.append(img);
		ul.append(li);
	}
	return ul;
}

function convertInto2KOM(m3u) {
	var channelList = [];
	var items = m3u.replace(/#EXTM3U/g, "").trim().split("#"); 
	for (i = 0; i < items.length; i++) {
		var item = items[i].trim();
		if (item.indexOf(".m3u8") != -1 && item.indexOf("fulltelevisiononline") == -1
				 && item.indexOf("thaitvonline") == -1) {
			item = item.substring(item.indexOf("tvg-logo"));
			var logo = item.substring(0, item.indexOf("group-title")).replace(/tvg-logo/g, "").replace(/"/g, "").replace(/=/g, "").trim();
			item = item.substring(item.indexOf("group-title"));
			var title = item.substring(0, item.indexOf("http")).replace(/group-title/g, "").replace(/"/g, "").replace(/=/g, "").trim();
			url = item.substring(item.indexOf("http"));
			channelList.push({
					'logo': logo,
					'title': title,
					'url': url
				})
		}
		
	}
	return channelList;
}

function play(url) {
	$('#player-src').val(url);
	$('#player-start').click();
}


