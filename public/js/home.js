/**
 * HOME
 */
$(document).ready(function() {
  var homeVideo = (function() {
    var on = function(video, headerColor) {
      $(video)
        .fadeIn('fast')
        .get(0)
        .play();
      $('h1').css({ color: headerColor });
    };

    var off = function(video) {
      $(video)
        .fadeOut('fast')
        .get(0)
        .pause();
      // Returns home page to default state when not hovering on a link
      $('html').css({ background: '#FFF' });
      $('nav a').css({ color: '#bfbfbf', 'text-shadow': 'none' });
      $('h1').css({ color: '#000', 'text-shadow': 'none' });
    };

    return {
      on: on,
      off: off
    };
  })();

  // Hover nav links toggle video on & h1 color
  $('nav.home a')
    .on('mouseover', function() {
      var id = $(this).parent()[0].id;
      $('.home a, h1').css({ 'text-shadow': '1px 1px 1px #000' });
      if (id === 'about') {
        homeVideo.on('#aboutVideo', '#ffb840');
      } else if (id === 'work') {
        homeVideo.on('#workVideo', '#9fff80');
      } else {
        homeVideo.on('#contactVideo', '#0CA1F2');
      }
    })
    // Hover nav links toggle video off & return to default styles
    .on('mouseleave', function() {
      var id = $(this).parent()[0].id;
      if (id === 'about') {
        homeVideo.off('#aboutVideo');
      } else if (id === 'work') {
        homeVideo.off('#workVideo');
      } else {
        homeVideo.off('#contactVideo');
      }
    });

  /*
   * Toggle fade out animation on h1, nav links, video bg changes.
   * Changes location on delay after fade out.
   */
  $('.home a').on('click', function(e) {
    e.preventDefault();
    var goTo = this.getAttribute('href'); // store anchor href
    var nav = $('nav.home li');

    $('h1 span:first-child')
      .removeClass('slide-down-in')
      .addClass('slide-down-out');
    $('h1 span:last-child')
      .removeClass('slide-up-in')
      .addClass('slide-up-out');

    nav.each(function(_, elem) {
      var classList = elem.classList;
      elem.style.opacity = '1';
      if (classList.contains('pop-in-left')) {
        classList.remove('pop-in-left');
        classList.add('pop-out-right');
      } else if (classList.contains('pop-in-right')) {
        classList.remove('pop-in-right');
        classList.add('pop-out-left');
      }
    });

    $('video').fadeOut(2500);

    setTimeout(function() {
      window.location = goTo;
    }, 1500);
  });
});
