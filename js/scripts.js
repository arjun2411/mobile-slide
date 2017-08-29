// JavaScript Document


//loader js

jQuery(document).ready(function($) {  

// site preloader -- also uncomment the div in the header and the css style for #preloader
$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});

});


	

//wow js
					if ($('.wow').hasClass('animated')) {
            $(this).removeClass('animated');
            $(this).removeAttr('style');
            new WOW().init();
}
					
					
					
//Sticky Header

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});



//overlay menu
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

   $(document).ready(function() {
	   	
		 $( ".overlay-content a" ).click(function() {
		
				closeNav();
		
   });

    });
	
	//smooth scrool
	$('.overlay-menu a, .footer a, .welcome-header .btn').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
});


//owl first 
    $(document).ready(function() {
     
      var owl = $("#owl-demo");
     
      owl.owlCarousel({
          items : 3, 
          itemsDesktop : [1000,3], 
          itemsDesktopSmall : [900,3], 
          itemsTablet: [600,2], 
          itemsMobile : true 
      });
     
      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
      $(".play").click(function(){
        owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
      })
      $(".stop").click(function(){
        owl.trigger('owl.stop');
      })
     
    });
	
	
	
	
	
	
	//owl second

    $(document).ready(function() {
     
      $("#owl-demo2").owlCarousel({
     
          navigation : true, 
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true
     
  
     
      });
     
    });
	

	




