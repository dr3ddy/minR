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
   type: 'inline',
   mainClass: 'mfp-fade'
});

$('.magnify').click(function() {
	//alert($(this).closest('.overlay').children("img").attr("src"));
	$('.inline-item-img img').attr("src", $(this).closest('.overlay').children("img").attr("src"));
	$customPortfolioTitle = $(this).closest('.overlay').children("#custom-item-title");
	//alert($customPortfolioTitle);
	if($customPortfolioTitle.length) {
		$title = $customPortfolioTitle.children("#title");
		$description = $customPortfolioTitle.children("#description");
		if($title.length > 0) {
			$('.inline-item-content').children("h4").text($title.html());
		}
		if($description.length > 0) {
			$('.inline-item-content').children("p").text($description.html());
		}
	}
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
		$('.navbar').addClass('navbar-opaque'); 
	} else {
		$('.navbar').removeClass('navbar-opaque'); 
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