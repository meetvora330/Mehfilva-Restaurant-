 

jQuery(document).ready(function(){
  jQuery('.reviews-slider').bxSlider({
  	pager:false
  });
  
  jQuery(document).on("click", function(event) {
    if (jQuery(event.target).parents(".main-navigation").length < 1 && !jQuery(event.target).hasClass("main-navigation")) {
      jQuery("body").removeClass("menu-open");
      jQuery(".main-navigation ul li").removeClass("open");
    }
  });    
  jQuery('.hambuger-menu').click(function() {
    event.preventDefault();
    event.stopPropagation();
    jQuery('body').toggleClass('menu-open');
  });

});