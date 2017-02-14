//= require jquery
//= require materialize
$(document).ready( function() {
  $('body').hide();
  $('body').fadeIn(5000);
  $(".play").hide();
  $(".background").hide();
  $(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 200;

    if (y_scroll_pos > scroll_pos_test) {
      $(".play").fadeIn(5000);
      $(".background").fadeIn(5000);
    }
  });
});
