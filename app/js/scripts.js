// jQuery(document).ready(function ($) {
// 		    $("img.lazy").lazyload();
// 		});

// Create random background color

jQuery(document).ready(function(){
	var colors = ["#ff9600", "#8ac641", "#00c7ff"];
	var selectedColor = colors[Math.floor(Math.random()*colors.length)];
		if (selectedColor == "#ff9600") {
			var afterColor = "orange";
		} else if (selectedColor == "#8ac641") {
			var afterColor = "green";
		} else {
			var afterColor = "blue";
		}
			
	$('body').addClass(afterColor);
});
		
		
		//open/close primary navigation
		var toggleNav = $('.nav-trigger'),
			navigation = $('.navigation--main'),
			icon = $('.cd-icon'),
			body = $('body');
		toggleNav.click(function(){
			body.toggleClass("is-open");
			navigation.toggleClass("menu-is-open");
			icon.toggleClass("is-clicked");
			body.toggleClass("overflow");
		});
		smoothScroll = $('.smoothScroll');
		smoothScroll.click(function() {
        if (body.hasClass("is-open")){
              body.toggleClass("is-open");
              navigation.toggleClass("menu-is-open");
              icon.toggleClass("is-clicked");
              body.toggleClass("overflow");
            } else {
            }
        });
			
		
		var offset = 700,
    offset_opacity = 1200,
    scroll_top_duration = 700,
    $back_to_top = $('.sttop');

$(window).scroll(function() {
   ( $(this).scrollTop() > offset) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');
  if ( $(this).scrollTop > offset_opacity) {
    $back_to_top.addClass('fade-out');
  }
});
$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	
		$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});
