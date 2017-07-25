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
  var volume = $('#volume');
  var skip = $('.skip');

  volume.on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    console.log(event.target.value, animation["0"].volume);
    animation["0"].volume = event.target.value;
  });

  playButton.on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    console.log(animation.html());
    animation.trigger( animation.prop('paused') ? 'play' : 'pause');
    if (animation.prop('paused')) {
      playButton.html('►');
    } else {
      playButton.html('❚❚');

    }
  });
  animation.on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    console.log(animation.html());
    animation.trigger( animation.prop('paused') ? 'play' : 'pause');
    if (animation.prop('paused')) {
      playButton.html('►');
    } else {
      playButton.html('❚❚');
    }
  });
});
