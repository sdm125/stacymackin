$(document).ready(function() {

  $(window).load(function() {
    $('#loadContainer').hide();
    $("body").removeClass("preload");
  });

  /********** MENU **********/
	$('.menu-btn').on('click', function() {
		var nav = $('nav');
    var navList = $('nav ul');
    var container = $('.container').length > 0 ? $('.container') : $('section');
		if(nav.css('opacity') == 0){
      nav.css({'filter':'blur(0)','opacity':'.6','z-index':'99'});
      navList.css('font-size','5rem');
      container.css('filter','blur(10px)');
		}
		else {
      nav.css({'filter':'blur(20px)','opacity':'0'});
      setTimeout(function(){
        nav.css('z-index','-1');
      }, 1000);
      navList.css('font-size','50rem');
      container.css('filter','none');
		}
		$(this).toggleClass('change');
	});

  /********** HOME **********/
  var homeVideo = (function() {
    var on = function(video, headerColor) {
      $(video).fadeIn('fast').get(0).play();
      $('h1').css({'color': headerColor});
    },
    off = function(video) {
      $(video).fadeOut('fast').get(0).pause();
      // Returns home page to default state when not hovering on a link
      $('html').css({'background':'#FFF'});
      $('nav a').css({'color':'#bfbfbf','text-shadow':'none'});
      $('h1').css({'color':'#000','text-shadow':'none'});
    };
    return {
      on: on,
      off: off
    }
  })();

  // Hover nav links toggle video on & h1 color
  if(document.querySelectorAll("video").length > 0){
    $('.home a').on('mouseover', function() {
      var id = $(this).parent()[0].id;
      $('.home a, h1').css({'text-shadow':'1px 1px 1px #000'});
      if(id === 'about') {
        homeVideo.on('#aboutVideo', '#ffb840');
      }
      else if(id === 'work') {
        homeVideo.on('#workVideo', '#9fff80');
      }
      else {
        homeVideo.on('#contactVideo', '#0CA1F2');
      }
    })
    // Hover nav links toggle video off & return to default styles
    .on('mouseleave', function() {
      var id = $(this).parent()[0].id;
      if(id === 'about'){
        homeVideo.off('#aboutVideo');
      }
      else if(id === 'work') {
        homeVideo.off('#workVideo');
      }
      else {
        homeVideo.off('#contactVideo')
      }
    });
  }

  /*
  * Toggle fade out animation on h1, nav links, video bg changes.
  * Changes location on delay after fade out.
  */
	$('.home a').click(function(e) {
    var goTo = this.getAttribute("href"), // store anchor href
    nav = $('nav.home li');

    e.preventDefault();

    $('h1 span:first-child').removeClass('slide-down-in').addClass('slide-down-out');
    $('h1 span:last-child').removeClass('slide-up-in').addClass('slide-up-out');

    nav.each(function(_, elem) {
      var classList = elem.classList;
      elem.style.opacity = '1';
      if(classList.contains('pop-in-left')){
        classList.remove('pop-in-left');
        classList.add('pop-out-right');
      }
      else if(classList.contains('pop-in-right')){
        classList.remove('pop-in-right');
        classList.add('pop-out-left');
      }
    });

    $('video').fadeOut(2500);

    setTimeout(function(){
      window.location = goTo;
    }, 1500);
	});

  /********** CONTACT **********/
  var contactInput = (function(){
    // Returns an array of text inputs that are empty.
    var numEmpty = function() {
      var inputs = $('input[type="text"], input[type="email"], textarea'),
      empty = inputs.filter(function(_, elem){
        return elem.value === '';
      });
      return empty;
    },
    /**
     * Highlights an empty text input. Adds slide-placeholder-out class to slide out
     * placeholder text. Adds slide-in-labels class to slide in hidden labels.
     */
    highlightEmpty = function(selector) {
      $(selector).css('padding-left','0').addClass('slide-placeholder-out')
      .prev().children().addClass('slide-in-labels');
    };
    return {
      numEmpty: numEmpty,
      highlightEmpty: highlightEmpty
    }
  })();

  /**
   * Checks text inputs on focus. If there are other empty inputs, it slides out
   * their label and slides in the placeholder text.
   */
  $('input[type="text"], input[type="email"], textarea').on('focus', function() {
    var empty = contactInput.numEmpty();
    if(empty.length > 0) {
      empty.each(function(_, elem){
        $(elem).removeClass('slide-placeholder-out');
        $(elem).prev().children().removeClass('slide-in-labels');
      });
      contactInput.highlightEmpty($(this));
    }
  })
  /**
   * Checks to see if input has a value. If there is no value it changes the label
   * color to red. If there is a value in the input it changes to label color to green.
   */
  .keyup(function() {
    var $this = $(this);
    if($this.val() !== '') {
      $this.prev().children().css('color','#66cc66');
    }
    else {
      $this.prev().children().css('color','#ff6666');
    }
  });

  /**
   * On button click checks for empty text inputs. Appends name of empty inputs to form.
   * Sends empty input elements to highlightEmpty function. If there are no empty inputs,
   * contents of body fade out and success message with
   * selected character image is displayed.
   */
  $('button[type="submit"]').on('click', function(e) {
    var capitolize = function(name){
      return name.charAt(0).toUpperCase() + name.substring(1, name.length);
    };
    var empty = contactInput.numEmpty();

    e.preventDefault();

    if(empty.length > 0) {
      if($('.errors').length > 0){
        $('.errors').remove();
      }
      $('form').append('<p class="errors">Please fill in your:</p>');
      empty.each(function(_, elem){
        var errors = $('.errors');
        contactInput.highlightEmpty(elem);
        // Appends empty input names to errors element.
        if(elem.name !== 'message' && elem.name !== 'email'){
          errors.append('<br>' + capitolize(elem.name) + ' Name');
        }
        else {
          errors.append('<br>' + capitolize(elem.name));
        }
      });
      return false;
    }
    else {
      $.ajax({
        url: 'contact/insert',
        type: 'POST',
        data: $('#contactForm').serialize(),
        success: function() {
          var success = '<div class="alert alert-success fade show text-center" role="alert">' +
                        'Thank you!</div>';
          $('body').append(success);
          $('.alert-success').delay(1000).fadeOut('slow');
          $('#contactForm').trigger('reset');;
        },
        error: function(e) {
          console.log(e);
        }
      });
    }
  });

  /**
   * Work
   */

  (function(){
    var width = $(window).width(),
    setWorkHeight = function(){
      if($('.work').length){
        $('.work').css('height', 'auto');
        var tallest = $('.work').get(0).offsetHeight;
        $('.work').each(function(_, elem){
          if(elem.offsetHeight > tallest){
            tallest = elem.offsetHeight;
          }
        });
        $('.work').css('height', tallest + 50);
      }
    };
    if($('.work').length > 0){
      setWorkHeight();
    }

    $(window).on('resize', function(){
      if(width != $(window).width()){
        width = $(window).width();
        setWorkHeight();
      }
    });
  })();

  (function(){
    if($('.work').length > 0){
      var i = 0,
      work = $('.work'),
      indicators = $('.indicator');
      work[i].classList.add('active');
    }
    $('.arrow').on('click', function(){
      if($(this).hasClass('fa-long-arrow-left')){
        if(i > 0){
          indicators[i].classList.remove('fa-circle');
          indicators[i].classList.add('fa-circle-o');
          work[i--].classList.remove('active');
          work[i].classList.add('active');
          indicators[i].classList.add('fa-circle');
          indicators[i].classList.remove('fa-circle-o');
        }
      }
      else if($(this).hasClass('fa-long-arrow-right')){
        if(i < work.length - 1){
          indicators[i].classList.add('fa-circle-o');
          indicators[i].classList.remove('fa-circle');
          work[i++].classList.remove('active');
          work[i].classList.add('active');
          indicators[i].classList.add('fa-circle');
          indicators[i].classList.remove('fa-circle-o');
        }
      }
    });
  })();

});
