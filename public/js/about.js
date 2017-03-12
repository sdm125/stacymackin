$(document).ready(function(){

  $.scrollify({
		section : "section.about",
		easing: "easeOutExpo",
		scrollSpeed: 700,
    scrollbars: false,
		setHeights: true,
    overflowScroll: false,
		updateHash: true,
		touchScroll: true,
	});

  var scrollMagicData = (function(){
    var isAbout = document.getElementById('about-one'),
      controller = new ScrollMagic.Controller(),
      scenes = [],
      tween0 = {rotation: 360},
      tween1 = {width: 275},
      tween2 = {rotation: -360},
      tween4 = {width: 295},
      tween5 = {opacity: 1},
      tween8 = {};
    return {
      isAbout: isAbout,
      controller: controller,
      scenes: scenes,
      tween0: tween0,
      tween1: tween1,
      tween2: tween2,
      tween4: tween4,
      tween5: tween5,
      tween8: tween8
    };
  })();

  // Add properties to tween objects if not mobile
  (function() {
    if ($(window).width() < 700) {
      $('#bio span').addClass('bio-mobile');
      $('.stagger').css({'left':'0'});
    }
    else {
      scrollMagicData.tween0.left = 175;
      scrollMagicData.tween1.width = 375;
      scrollMagicData.tween1.right = 275;
      scrollMagicData.tween2.left = -210;
      scrollMagicData.tween4.width = 400;
      scrollMagicData.tween4.right = -270;
      scrollMagicData.tween5.scale = 2;
      scrollMagicData.tween8 = TweenMax.staggerFromTo('.stagger', 1, {left: 700}, {left: 7, ease: Back.easeOut}, 0.05);
    }
  })();

  if(scrollMagicData.isAbout) {
    // Scene 1 - part 1 of 2 - rolls image to the right
    scrollMagicData.scenes[0] = new ScrollMagic.Scene({
      triggerElement: 'h2.about',
      triggerHook: 'onLeave',
      offset: 50
    })
    .setTween('.profile-img', .5, scrollMagicData.tween0)
    .setPin('#bio')
    .on('start', function(e) {
      if(e.scrollDirection === 'FORWARD'){
        if($('.fa-arrow-down').length > 0) {
          $('.fa-arrow-down').hide();
        }
        $('body').css({'background-color':'#FFD23F'});
      }
      else {
        $('body').css({'background-color':'#FFF'});
        $('#about-one').css({'background-image':'none'});
      }
    });

    // Scene 1 - part 2 of 2 - slides 'My name is Stacy' to left of image
    scrollMagicData.scenes[1] = new ScrollMagic.Scene({
      triggerElement: 'h2.about',
      triggerHook: 'onLeave',
      offset: 50
    })
    .setTween('#bio .about-left', .5, scrollMagicData.tween1)
    .on('start', function(e){
      if(e.scrollDirection === 'FORWARD'){
        $('#bio .about-left').hide().html('My name is Stacy').fadeIn();
      }
      else {
        $('#bio .about-left').fadeOut();
      }
    });

    // Scene 2 - part 1 of 3 - rolls image to the left
    scrollMagicData.scenes[2] = new ScrollMagic.Scene({
      triggerElement: '#about-three'
    })
    .setTween('.profile-img', .5, scrollMagicData.tween2)
    .on('start', function(e) {
      var body = $('body');
      if(e.scrollDirection === 'FORWARD'){
        body.css({'background-color':'#0EB1D2'});
      }
      else {
        body.css({'background-color':'#FFD23F'});
      }
    });

    // Scene 2 - part 2 of 3 - slide 'My name is Stacy' back behind image
    scrollMagicData.scenes[3] = new ScrollMagic.Scene({
      triggerElement: '#about-three'
    })
    .setTween('#bio .about-left', .5, {width: 0})
    .on('start', function(e) {
      if(e.scrollDirection === 'FORWARD')
      {
        $('#bio .about-left').fadeOut();
        $('#bio .profile-img').attr('src','images/www.svg').css('border','none');
      }
    });

    // Scene 2 - part 3 of 3 - slide 'I develop websites' out
    scrollMagicData.scenes[4] = new ScrollMagic.Scene({
      triggerElement: '#about-three'
    })
    .setTween('#bio .about-right', .5, scrollMagicData.tween4)
    .on('start', function(e) {
      if(e.scrollDirection === 'FORWARD'){
        $('#bio .about-right').hide().html('I develop websites').fadeIn();
      }
      else {
        $('.profile-img').attr('src','images/stacy_bw.jpg').css('border','3px solid #000');
        $('#bio .about-right').fadeOut();
        $('#bio .about-left').fadeIn();
      }
    });

    // Scene 3 part 1 of 1 fade in Skills header
    scrollMagicData.scenes[5] = new ScrollMagic.Scene({
      triggerElement: '#about-four'
    })
    .setTween('#about-four h2', .5, scrollMagicData.tween5)
    .on('start', function(e) {
      if(e.scrollDirection === 'FORWARD'){
        $('body').css({'background-color':'#82D173'});
      }
      else {
        $('body').css({'background-color':'#0EB1D2'});
      }
    });

    // Scene 3 part 2 of 2 fade in web icons
    scrollMagicData.scenes[6] = new ScrollMagic.Scene({
      triggerElement: '#about-four'
    })
    .setTween('#bio', .5, {scale: .1, opacity: 0})
    .on('start', function(e) {
      if(e.scrollDirection === 'FORWARD'){
        setTimeout(function(){
          $('#about-four img').css({'opacity':'1'});
        }, 500);
      }
      else {
        $('#about-four img').css({'opacity':'0'});
      }
    });

    // Scene 4  Resume
    scrollMagicData.scenes[7] = new ScrollMagic.Scene({
      triggerElement: '#about-five'
    })
    .setTween('#about-five h2', .5, { opacity: 1 })
    .on('start', function(e) {
      if(e.scrollDirection === 'FORWARD'){
        $('body').css({'background-color':'#A06CD5'});
      }
      else {
        $('body').css({'background-color':'#82D173'});
      }
    });

    // Scene 4  Resume
    scrollMagicData.scenes[8] = new ScrollMagic.Scene({
      triggerElement: '#about-five',
      duration: 0
    })
    .setTween(scrollMagicData.tween8);

    for(var i = 0; i < scrollMagicData.scenes.length; i++) {
      scrollMagicData.scenes[i].addTo(scrollMagicData.controller);
    }
  }
});
