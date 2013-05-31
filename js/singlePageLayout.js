// set all nav-links to scroll to their respective target anchor with animation
$(".nav-link").click(function(event) {
	// prevent normal anchor link behaviour
	event.preventDefault();
	// get the target href
	var targetAnchor = $(this).attr('href');
	// strip away the # from href to get just the id
	var targetAnchorID = targetAnchor.substr(1);
	// animate scroll to this anchor position
	$('html, body').animate({ scrollTop: $('a[id=' + targetAnchorID + ']').offset().top }, 'slow');
});

// toggle drop-down navigation when drop-down button pressed
$("nav#dropdown-btn").click(function(){
	if ( $(this).hasClass('nav-expanded') )
	{
		$(this).removeClass('nav-expanded');
		$('nav#dropdown').slideUp();
	}
	else
	{
		$(this).addClass('nav-expanded');
		$('nav#dropdown').slideDown();
	}
});

// add additional click functionality to dropdown links, to hide drop-down nav after click
$('nav#dropdown a').click(function(){
	$('nav#dropdown').slideUp();
	$('nav#dropdown-btn').removeClass('nav-expanded');
});


