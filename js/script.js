$(document).ready(function(){
    var image = $('#img-change');
    var sound = $('#audio');

    $("#btn1").click(function(){
       $('#buttons').find('.active').removeClass("active");
       sound.attr('src', 'sound/1.mp3');
       image.fadeOut('fast', function (){
        image.attr('src','img/bigairplan.jpg');
        image.fadeIn('fast');
    });
       $('.button-link1').addClass('active');
   });
    $("#btn2").click(function(){
       $('#buttons').find('.active').removeClass("active");
        sound.attr('src', 'sound/2.mp3');
       image.fadeOut('fast', function (){
        image.attr('src','img/forest.jpg');
        image.fadeIn('fast');
    });
       $('.button-link2').addClass('active');
   });
    $("#btn3").click(function(){
       $('#buttons').find('.active').removeClass("active");
        sound.attr('src', 'sound/3.mp3');
       image.fadeOut('fast', function (){
        image.attr('src','img/bigcar.jpg');
        image.fadeIn('fast');
    });
       $('.button-link3').addClass('active');
   });
    $("#btn4").click(function(){
       $('#buttons').find('.active').removeClass("active");
        sound.attr('src', 'sound/4.mp3');
       image.fadeOut('fast', function (){
        image.attr('src','img/person.jpg');
        image.fadeIn('fast');
    });
       $('.button-link4').addClass('active');
   });
});


