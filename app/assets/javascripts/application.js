//= require jquery
//= require materialize
$(document).ready( function() {
  $('body').hide();
  $('body').fadeIn(3000);
  $(".play").hide();
  $(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 50;

    if(y_scroll_pos > scroll_pos_test) {
      $(".play").fadeIn(3000);
    }
  });
});
