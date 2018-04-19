// Кнопка вверх
$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {       
        $('#return-to-top').fadeIn(200);    
    } else {
        $('#return-to-top').fadeOut(200);  
    }
});
if($(window).width() < 1024){
    $('.header-video').addClass('hide-video')
} else {
    $('.header-video').removeClass('hide-video')
}
$('#return-to-top').click(function() {      
    $('body,html').animate({
        scrollTop : 0                       
    }, 500);
});
$('#portfolio-link').click(function() {      
    $('#portfolio-head').animate({
        scroll: 0                       
    }, 500);
});
//Карусель Услуги -----Настройки------
$('.sl').slick({
	// autoplay:true,
	autoplaySpeed: 4000,
	arrows:true,
    dots: true,
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 3
});
$('.question').click(function(){
    $('.pop-up').addClass('call-back--pop-up')
    $('body').addClass('dark')
});
$('.close-pop-up').click(function(){
    $('.pop-up').removeClass('call-back--pop-up')
    $('body').removeClass('dark')
});
// $('#send-popup-info').click(function(){
//     $('.pop-up').removeClass('call-back--pop-up')
//     $('body').removeClass('dark')
// });
$('.product-case').click(function(){
    $('.in-process').addClass('in-process--open')
    $('body').addClass('.for-body')
});
$('.close-in-process').click(function(){
    $('.in-process').removeClass('in-process--open')
    $('body').removeClass('.for-body')
});
