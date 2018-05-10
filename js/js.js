$(document).ready(function(){
	$('.product-slider-wrap').slick({
		autoplay:true,
		autoplaySpeed: 3000,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}]
	});
	$('.feedback-slider').slick({
		autoplay:true,
		autoplaySpeed: 8000,
		dots: true,
		prevArrow: $('.ar-prew'),
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