
$(document).ready(function(){

	var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
	var current = 0;
	var path = ".//gallery/";

	$("#img").attr("src", path + images[current]);
	changeDots(current);
	$("#back").click(function(){
		if (current != 0) {
			current--;
		}
		else {current = images.length - 1;}
		$('#img').fadeToggle("fast");
		setTimeout(function(){
			$("#img").attr("src", path + images[current]);
		}, 200);
		$('#img').fadeToggle("fast");
		changeDots(current);
	});
	$("#forward").click(function(){
		if (current != images.length - 1) {
			current++;
		}
		else {current = 0;}
		$('#img').fadeToggle("fast");
		setTimeout(function(){
			$("#img").attr("src", path + images[current]);
		}, 200);
		$('#img').fadeToggle("fast");
		changeDots(current);
	});

	$('#close').click(function(){
		$("#background").removeClass('show');
		$("#form").removeClass('show');
		$("#pop").removeClass('show-pop-up');
		$('body').removeClass('disable-scrolling');
	});

});
function changeDots(current)
{
	var dots = ["#dot1", "#dot2", "#dot3", "#dot4"];
	for(var index = 0; index < dots.length; index++)
	{
		if(index == current)
		{
			$(dots[index]).fadeTo("fast", 1.0);
		}
		else
		{
			$(dots[index]).fadeTo("fast", 0);
		}
	}
}

function popUpFunction() {
	$("#background").addClass('show');
	$("#form").addClass('show');
	$("#pop").addClass('show-pop-up');
	$('body').addClass('disable-scrolling');
}

