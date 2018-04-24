$(document).ready(function(){
	$('.feedback').slick({
		autoplay:true,
		autoplaySpeed: 5000,
		prevArrow: $('.btn-left'),
		nextArrow: $('.btn-right')
	});
	$('.header-wrapper').addClass('animated bounceInDown');
	$('.main-head').addClass('animated bounceInLeft');
	$('.works').addClass('animated bounceInUp');
});