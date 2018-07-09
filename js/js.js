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
var acc = document.getElementsByClassName("fl-cat-name");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}