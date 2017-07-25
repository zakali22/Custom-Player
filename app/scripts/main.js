$(document).ready(function() {
  $('.player').on('mouseover', function() {
    $('.player__controls').css({
      "position": "relative",
      "bottom": "100px",
      "transition": "all ease .6s"
    });
  });
  $('.player').on('mouseleave', function() {
    $('.player__controls').css({
      "position": "relative",
      "bottom": "65px",
      "transition": "all ease .6s"
    });
  });
});
