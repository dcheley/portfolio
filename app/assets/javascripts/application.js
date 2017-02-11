//= require jquery
//= require materialize
$(document).ready( function() {
  $('body').hide();
  $('body').fadeIn(5000);
  $(".play").hide();
  $(".background").hide();
  $(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 50;
    var scroll_pos_test_2 = 190;

    if(y_scroll_pos > scroll_pos_test) {
      $(".play").fadeIn(5000);
    }

    if(y_scroll_pos > scroll_pos_test_2) {
      $(".background").fadeIn(5000);
    }

  });
});
