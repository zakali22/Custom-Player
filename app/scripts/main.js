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
  var speed = $('#speed');

  animation.on('timeupdate', function(event) {
    event.preventDefault();
    /* Act on the event */
    var percentDur = (animation["0"].currentTime / animation["0"].duration ) * 100;
    progressBar.css({
      "width": percentDur + "%"
    });
  });

  progress.on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    console.log(progress[0].offsetWidth);
    var path = (event.offsetX / progress["0"].offsetWidth) * animation["0"].duration;
    animation["0"].currentTime = path;
  });

  volume.on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    console.log(event.target.value, animation["0"].volume);
    animation["0"].volume = event.target.value;
  });

  speed.on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    console.log(event.target.value, animation["0"].playbackRate);
    animation["0"].playbackRate = event.target.value;
  });

  playButton.on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
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
    animation.trigger( animation.prop('paused') ? 'play' : 'pause');
    if (animation.prop('paused')) {
      playButton.html('►');
    } else {
      playButton.html('❚❚');
    }
  });
});
