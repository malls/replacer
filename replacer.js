// replaces nonexistant local images

(function replacer(){
	var localImages = document.getElementsByTagName('img');
	for (var i = 0; i < localImages.length; i++){
		if (localImages[i].src.indexOf('local') > -1){
			localImages[i].src = 'https://' + localImages[i].src.substring(13);
		}
	}
})()
