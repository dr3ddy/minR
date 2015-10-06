$(window).load(function() {
	$('#preload-status').fadeOut();
	$('#preloader').delay(350).fadeOut('slow');
});
	
$(document).ready(function() {
	
	$('body').scrollspy({
			target: '#navbar',
			offset: 50
	});
	
	$('#navbar a[href*=#], .banner-scroll a[href*=#]').bind("click", function(e){
		var target = $(this);
		$('html, body').stop().animate({
			scrollTop: $(target.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
	});
});

$('.magnify').magnificPopup({
   type: 'image',
});

$('#skill').waypoint(function() {
	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},2000);
	});
},
{ offset: '90%', triggerOnce: true });

$(window).scroll(function() {			
	if($(this).scrollTop() > 100) { 
		$('.navbar').addClass('navbar-white'); 
	} else {
		$('.navbar').removeClass('navbar-white'); 
	}
});
	  
$('.scrollToTop').click(function () {
	$('html, body').animate({
		scrollTop: 0
	}, 400);
	return false;
});

$(window).scroll(function () {
    if ($(this)
            .scrollTop() > 100) {
        $('.scrollToTop')
                .fadeIn();
    } else {
        $('.scrollToTop')
                .fadeOut();
    }
});

$('#left').waypoint(function() {
	$('#left').css("opacity", "1");
	$(this).toggleClass('animate slideInLeft');
},
{ offset: '90%', triggerOnce: true });

$('#right').waypoint(function() {
	$('#right').css("opacity", "1");
	$(this).toggleClass('animate slideInRight');
},
{ offset: '90%', triggerOnce: true });

$('#portfolio-grid').isotope({
	animationEngine: 'best-available',
	animationOptions: {
		duration: 250,
		easing: 'easeInOutSine',
		queue: false
	}
});

$('#portfolio-controls').find('a').click(function (e) {
	var currentOption = $(this).data('cat');
	$('#portfolio-controls').find('a').removeClass('active');
	$(this).addClass('active');
	if (currentOption !== '*') {
		currentOption = '.' + currentOption;
	}
	$('#portfolio-grid').isotope({
		filter: currentOption
	});
	return false;
});