$(document).ready(function(){
	$('.slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true
	});

	$('.fancybox').fancybox({
		openEffect	: 'elastic',
		closeEffect	: 'elastic',

		helpers : {
			title : {
				type : 'inside'
			}
		}
	});
	$(document).bind("fullscreenerror", function() {
		alert("Browser rejected fullscreen change");
	});
	
});
	function myFunction() {
		var popup = document.getElementById("popup");
		popup.classList.toggle("show");
	};