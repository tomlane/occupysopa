//scroll the page whenever needed
function scrollToPlace(place) {
	$('html,body').animate(
		{
			scrollTop: place.offset().top + 1
		}, 
		{
			duration: 1000,
			easing: "easeInOutQuart"
		}
	);
}

function eventHandlers() {
	$("#nav a").live('click tap', function() {
		var destination = $(this).attr("href");
		scrollToPlace($(destination))	
		return false;
		
	})
}

$(document).ready(function() {
	eventHandlers();
	if(swfobject.hasFlashPlayerVersion("1"))
	{
	    $(".flash-detection .emoticon").text(":-(");
	    $(".flash-detection p").text("Flash is currently installed on this browser");
	}
	else
	{
	    $(".flash-detection p").text("Flash is not installed on this browser.  Hurray!");
	    $(".flash-detection .emoticon").text(":-)");
	}
			
})
