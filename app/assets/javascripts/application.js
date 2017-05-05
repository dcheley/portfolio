//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require materialize.min
$(document).ready(function() {
  //Add turbolinks event listener for jQuery
  $(document).on('turbolinks:load', function() {
    $('body').hide();
    $('body').fadeIn(5000);
    $(".play").hide();
    $(".background").hide();
    $(window).scroll(function() {
      var y_scroll_pos = window.pageYOffset;
      var scroll_pos_test = 100;

      if (y_scroll_pos > scroll_pos_test) {
        $(".play").fadeIn(5000);
        $(".background").fadeIn(5000);
      }
    });
    $('.skillbar').each(function(){
  		$(this).find('.skillbar-bar').animate({
  			width:$(this).attr('data-percent')
  		}, 6000);
  	});
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  });
});
