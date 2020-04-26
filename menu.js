$(document).ready(function () {
	var menu = $('.menu-link'),
		close = $('.close-btn');

	menu.click(function() {
		$('menu').toggleClass('active-menu');
	});

	close.click(function() {
		$('menu').toggleClass('active-menu');
	});

	$(this).keyup(function(event) {
		if(event.which == 27 && $('menu').is('.active-menu')) {
			$('menu').toggleClass('active-menu');
		}
	});

	$(this).on('mouseup', function(event) {
		if(!($('menu').is(event.target)) && $('menu').has(event.target).length == 0 && $('menu').hasClass('active-menu')) {
			$('menu').toggleClass('active-menu');
		}
	});

	$('ul li').on('click', function(event) {
		event.preventDefault();
		var target = $(this).children().attr('href');
		var top = $(target).offset().top;
		$('html, body').animate({scrollTop: top}, 500);
	});
});