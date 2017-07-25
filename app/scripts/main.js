$(document).ready(function() {
  $('.player').on('mouseover', function() {
    if(document.body.clientWidth > 1700){
      $('.player__controls').css({
        "position": "relative",
        "bottom": "110px",
        "transition": "all ease .6s"
      });
    }
  });
  $('.player').on('mouseleave', function() {
    if(document.body.clientWidth > 1700){
      $('.player__controls').css({
        "position": "relative",
        "bottom": "66px",
        "transition": "all ease .6s"
      });
    }
  });

  var player = $('.player');
  var animation = $('.viewer');
  var progress = $('.progress');
  var progressBar = $('.progress__filled');
  var playButton = $('.toggle');
  var range = $('.slider');
  var skip = $('.skip');

  playButton.on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    console.log(animation.prop);
    animation.trigger( animation.prop('paused') ? 'play' : 'pause');
  });
});
