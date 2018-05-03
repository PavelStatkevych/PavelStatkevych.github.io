$(document).ready(function(){
	$('.product-slider-wrap').slick({
		autoplay:true,
		autoplaySpeed: 3000,
		slidesToShow: 5,
		slidesToScroll: 5,
		arrows: false
	});
	$('.header-wrapper').addClass('animated bounceInDown');
	$('.main-head').addClass('animated bounceInLeft');
	$('.works').addClass('animated bounceInUp');
	$('.portfolio-head').addClass('animated bounceInLeft');
	$('.projects-wrapper').addClass('animated bounceInUp');
});