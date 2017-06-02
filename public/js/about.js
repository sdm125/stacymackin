$(document).ready(function(){

  window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

  if(window.mobilecheck()){
    if(window.innerHeight < window.innerWidth){
      $('#landscape-cover').removeClass('hidden-xl-down');
    }
    else{
      $('#landscape-cover').addClass('hidden-xl-down');
    }
    window.addEventListener("resize", function() {
      if(window.innerHeight < window.innerWidth){
        $('#landscape-cover').removeClass('hidden-xl-down');
      }
      else{
        $('#landscape-cover').addClass('hidden-xl-down');
      }
    });
  }

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
