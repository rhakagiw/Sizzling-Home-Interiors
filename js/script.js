
$(document).ready(function() {
	$('.nav-button').click(function() {
		$('.nav-button').toggleClass('change');
	});

	$(window).scroll(function() {
		let position = $(this).scrollTop();
		if(position >= 200) {
			$('.nav-menu').addClass('custom-navbar');
		} else {
			$('.nav-menu').removeClass('custom-navbar');
		}
	});
});




/*===================================================
wow.js jquery plugin
==================================================== */

$(function(){
    new WOW().init();
});
/*animate on scroll */




/*===================================================
Show / hide transparent black navigation bar and back to top button
==================================================== */
$(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() < 50){
  //hide
	$("nav").removeClass("myNavbar-top-nav");
	$("#back-to-top").fade0ut();
   } else{
  //show nav
	$("nav").addClass("myNavbar-top-nav");
	$("#back-to-top").fadeIn();
   }
  });
  
  });
  
  /*===================================================
  Smooth Scroll effect
  ==================================================== */
  $(function(){
  $("a.smooth-scroll").click(function(event){
	  event.preventDefault();
	  //get return id like #about, #work , #team and etc
	  var section =$(this).attr("href");
  
  $("html,body").animate ({
	  scrollTop: $(section).offset().top - 74
  },1250, "easeInOutExpo");
  
  
  
  });	

});
	

	

			












    