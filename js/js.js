$(document).ready(function(){
	$('.product-slider-wrap').slick({
		autoplay:true,
		autoplaySpeed: 3000,
		slidesToShow: 5,
		slidesToScroll: 5,
		arrows: false
	});
	$('.feedback-slider').slick({
		autoplay:true,
		autoplaySpeed: 3000,
		dots: true,
		prevArrow: $('.ar-prev'),
		nextArrow: $('.ar-next'),
		dotsClass: 'dots-bottom'
	});
	$('.header-slider').slick({
		autoplay:true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: true,
		infinite: true,
		speed: 800,
		fade: true,
		cssEase: 'linear'
	});
	$('.header-wrapper').addClass('animated bounceInDown');
	$('.main-head').addClass('animated bounceInLeft');
	$('.works').addClass('animated bounceInUp');
	$('.portfolio-head').addClass('animated bounceInLeft');
	$('.projects-wrapper').addClass('animated bounceInUp');
});