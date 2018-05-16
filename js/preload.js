
$(document).ready(function(){

	preload (["4.jpg", "5.jpg", "6.jpg"]);

	function preload(images){
		var imag = new Array();
		for (i = 0; i < images.length; i++){
			imag[i] = new Image()
			imag[i].src = images[i]
		}
	};
});