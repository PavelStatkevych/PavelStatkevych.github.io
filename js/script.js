

$(document).ready(function(){

	var images = ["4.jpg", "5.jpg", "6.jpg"];
	var texts = ["#1", "#2", "#3"];
	var current = sessionStorage.getItem('page') || 0;
	sessionStorage.setItem('page', 0);
	$("#img").attr("src", images[current]);
	$("#text1").html($(texts[current]).html());
	changeDots(current);
	
	$("#back").click(function(){
		if (current != 0) {
			current--;
		}
		else {current = images.length - 1;}

		$('#img, #text1').fadeToggle("fast");
		setTimeout(function(){
			$("#img").attr("src", images[current]);
			$("#text1").html($(texts[current]).html());
			$("#next").click(function(){goToNextPage();});
		}, 200);
		$('#img, #text1').fadeToggle("fast");
		changeDots(current);
	});
	$("#forward, #next").click(function(){goToNextPage();});

	function goToNextPage(){
		if (current != images.length - 1) {
			current++;
		}
		else {current = 0;}
		$('#img, #text1').fadeToggle("fast");
		setTimeout(function(){
			$("#img").attr("src", images[current]);
			$("#text1").html($(texts[current]).html());
			$("#next").click(function(){goToNextPage();});
		}, 200);
		$('#img, #text1').fadeToggle("fast");
		changeDots(current);
	};

});


function changeDots(current)
{
	var dots = ["#dot1", "#dot2", "#dot3"];
	for(var index = 0; index < dots.length; index++)
	{
		if(index == current)
		{
			$(dots[index]).fadeTo("fast", 1.0);
		}
		else
		{
			$(dots[index]).fadeTo("fast", 0.4);
		}
	}

}
