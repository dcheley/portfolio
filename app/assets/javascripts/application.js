//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require materialize.min
//= require progress-circles
$(document).ready(function() {
  //Add turbolinks event listener for jQuery
  $(document).on('turbolinks:load', function() {
    $('body').hide();
    $('#intro-arrow').hide();
    $('#reappear-animation').hide();
    $('body').fadeIn(6000);
    $('.parallax').parallax();
    $(window).scroll(function() {
      var y_scroll_pos = window.pageYOffset;
      var scroll_pos_test = 125;

      if (y_scroll_pos > scroll_pos_test) {
        $('#intro-arrow').fadeIn(4000);
        $('#reappear-animation').fadeIn(5000);
        $('.skillbar').each(function(){
          $(this).find('.skillbar-bar').animate({
            width:$(this).attr('data-percent')
          }, 5000);
        });
        $('.carousel.carousel-slider').carousel({fullWidth: true});
      }
    });
  });
});
