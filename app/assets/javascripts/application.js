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
    $('#neon-glow').hide();
    $('#neon-glow-2').hide();
    $(".play").hide();
    $(".background").hide();
    $('.parallax').parallax();
    $(".button-collapse").sideNav();
    $(window).scroll(function() {
      var y_scroll_pos = window.pageYOffset;
      var scroll_pos_test_1 = 100;
      var scroll_pos_test_2 = 200;

      if (y_scroll_pos > scroll_pos_test_1) {
        $('#neon-glow').fadeIn(5000);
        $('#neon-glow').addClass('neon-glow');
      }
      if (y_scroll_pos > scroll_pos_test_2) {
        $(".play").fadeIn(5000);
        $(".background").fadeIn(5000);
        $('#neon-glow-2').fadeIn(5000);
        $('#neon-glow-2').addClass('neon-glow');
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
