$(document).ready(function(){
    // var tabsContent = ["#serv-1", "#serv-2", "#serv-3", "#serv-4", "#serv-5", "#serv-6"];
    // var current = sessionStorage.getItem('page') || 0;
    // sessionStorage.setItem('page', 0);

    // $("#to-serv-1, #to-serv-2, #to-serv-3, #to-serv-4, #to-serv-5, #to-serv-6,").click(function(){goToService();});

    // function goToService(){
    //     if (current != tabsContent.length - 1) {
    //         current++;
    //     }
    //     else {current = 0;}
    //     $('#img, #text1').fadeToggle("fast");
    //     setTimeout(function(){
    //         $("#img").attr("src", images[current]);
    //         $("#text1").html($(texts[current]).html());
    //         $("#next").click(function(){goToService();});
    //     }, 200);
    //     $('#img, #text1').fadeToggle("fast");
    //     changeDots(current);
    // };
    var tabs = $('#tabs');
    $('.serv-cont-tabs > div', tabs).each(function(i){
        if ( i != 0 ) $(this).hide(0);
    });
    tabs.on('click', '.tabs a', function(e){
        e.preventDefault();
        var tabId = $(this).attr('href');
        $('.tabs a', tabs).removeClass('active');
        $(this).addClass('active');
        $('.serv-cont-tabs > div', tabs).hide(0);
        $(tabId).fadeIn();
    });

    // Кнопка вверх
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {       
            $('#return-to-top').fadeIn(200);    
        } else {
            $('#return-to-top').fadeOut(200);  
        }
    });
    $('#return-to-top').click(function() {      
        $('body,html').animate({
            scrollTop : 0                       
        }, 500);
    });
    // Основной слайдер -----Настройки------
    $('.slider').slick({
    	slidesToShow: 1,
    	autoplay: true,
    	arrows:true,
    	autoplaySpeed: 4000,
    	dots: true,
    	arrows:true,
    	speed:500
    });

});
//POPUP
$('#question').click(function(){
    $('.pop-up').addClass('call-back')
    $('body').addClass('dark')
});
$('.close-pop-up').click(function(){
    $('.pop-up').removeClass('call-back')
    $('body').removeClass('dark')
});
$('#send-popup-info').click(function(){
    $('.pop-up').removeClass('call-back')
    $('body').removeClass('dark')
});