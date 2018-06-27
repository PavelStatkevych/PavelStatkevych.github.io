$(document).ready(function(){
	$('.slider').slick({
		dots:true,
		prevArrow: $('.ar-prew-top'),
		nextArrow: $('.ar-next-top')
	});
	$('.sale-catalog-slider').slick({
		dots: true,
		prevArrow: $('.ar-prew'),
		nextArrow: $('.ar-next'),
		dotsClass: 'bottom-dots'
	});
	$('.sale-catalog-slider2').slick({
		dots: true,
		prevArrow: $('.ar-prew2'),
		nextArrow: $('.ar-next2'),
		dotsClass: 'bottom-dots'
	});
});