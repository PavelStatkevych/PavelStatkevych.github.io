$(function() {

    //SVG Fallback
    if(!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});

$('.reviews').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical:true,
    speed: 700,
    vertical: true,
    dots: false,

});

$('.slider--articles').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
});


var range = $("#rangeSlider");

//$(range).ionRangeSlider({
//    type: "single",
//    min: 1000,
//    max: 100000,
//    from: 20000,
//    to: 100000,
//    step: 1000,
//});

//overflow text

var size = 190,
    newsContent= $('.article__text'),
    newsText = newsContent.text();

if(newsText.length > size){
    newsContent.text(newsText.slice(0, size) + ' ...');
}




$("#rangeSlider").change(function(){

    var d = new Date($.now());
    var hours = d.getHours();
    var min = d.getMinutes();

    if (min > 29) {
        min = 60 - min;
        hours++;
    }
    else{
        min += 30;
    }
    $('.current-time').text(hours + ":" + min);
    $('.range-help__wrapper').addClass('active');

    if ($("#rangeSlider").val() >= 20000){
        $("#rangeSlider").attr('step', '5000');
    }
    else{
        $("#rangeSlider").attr('step', '1000');
    }
})
//$("#rangeSlider").ionRangeSlider()



