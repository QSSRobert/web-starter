$(document).ready(function() {
	// responsive JS triggers
  var w = $(window);
  var device;
  function responsiveCheck(){
    if (w.width() >= 992){
      device = 'md';
    } else { device = 'sm'; }
  };
  responsiveCheck();
  w.on('resize', responsiveCheck());
  
  // debounce scroll event
  var didScroll = false;
  $(window).on('scroll', function(){
    didScroll = true;
  });

  setInterval(function(){
    if ( didScroll ) {
      didScroll = false;
      // scroll functions
      fadeScrolltop();
    }
  }, 50);

	// smoothscrolling
	$('a[href^="#"]:not([href="#"])').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top//-90(offset for fixed header's height) 
		}, 500);
		return false;
	});
  
  // page has anchor in URL
/*  if(window.location.hash && $(window.location.hash).length){
    // offset for SP header
    var offset = 70;
    // offset for PC header
    if ($(window).width() > $pc-width){ offset = 0; }
    $(window).load(function(){
      $("html,body").stop().animate( {scrollTop:$(window.location.hash).offset().top-offset}, 100, "linear" );
      return false;
    });
  }*/

	// scroll to top
  function fadeScrolltop(){
    if ($(window).scrollTop() > 900){
			$('#scrolltop').fadeIn();
		}
		else {
			$('#scrolltop').fadeOut();
		}
  }


	$("#scrolltop").click(function(){
		$("html, body").animate({ scrollTop : 0 }, 800);
		return false;
	});

});

