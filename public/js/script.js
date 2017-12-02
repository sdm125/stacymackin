(function() {

  $(window).load(function() {
    $('#loadContainer').hide();
    $("body").removeClass("preload");
  });

  /******************************************
  ******************* MENU ******************
  *******************************************/

  (function(){
    var nav = $('nav');
    var navList = $('nav ul');
    var container = $('.container').length > 0 ? $('.container') :
    $('.container-fluid').length > 0 ? $('.container-fluid') : $('section');
    $('.menu-btn').on('click', function() {
      if(nav.hasClass('hide-nav')){
        nav.css('z-index','101');
        nav.addClass('show-nav').removeClass('hide-nav');
        navList.css('font-size','1rem');
        container.addClass('blur-background');
      }
      else {
        nav.addClass('hide-nav').removeClass('show-nav');
        setTimeout(function(){
          nav.css('z-index','-1');
        }, 500);
        navList.css('font-size','50rem');
        container.removeClass('blur-background');
      }
      $(this).toggleClass('change');
    });
  })();

  /******************************************
  ******************* HOME ******************
  *******************************************/

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

  /******************************************
  ******************* WORK ******************
  *******************************************/

  (function(){
    var width = $(window).width(),
    setWorkHeight = function(){
      setTimeout(function(){
        if($('.work').length > 0){
          var work = $('.work');
          work.css('height', 'auto');
          var tallest = work[0].offsetHeight;
          work.each(function(_, elem){
            if(elem.offsetHeight > tallest){
              tallest = elem.offsetHeight;
            }
          });
          work.css('height', tallest);
        }
      }, 200);
    },
    toggleFullHeight = function(){
      if($('.work').length > 0){
        if(window.innerHeight > 700){
          $('html').css('height','100%');
        }
        else {
          $('html').css('height','auto');
        }
      }
    };
    setWorkHeight();
    toggleFullHeight();

    $(window).on('resize', function(){
      toggleFullHeight();
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
          work[i].classList.add('active')
          work[i].style.animation = 'grow 300ms ease-in-out';
          indicators[i].classList.add('fa-circle');
          indicators[i].classList.remove('fa-circle-o');
        }
      }
      else if($(this).hasClass('fa-long-arrow-right')){
        if(i < work.length - 1){
          indicators[i].classList.add('fa-circle-o');
          indicators[i].classList.remove('fa-circle');
          work[i++].classList.remove('active');
          work[i].style.animation = 'grow 300ms ease-in-out';
          work[i].classList.add('active');
          indicators[i].classList.add('fa-circle');
          indicators[i].classList.remove('fa-circle-o');
        }
      }
    });
  })();

  /******************************************
  ***************** CONTACT *****************
  *******************************************/

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
  (function(){
    var empty,
    errorsElem,
    errorList,
    container = $('.container'),
    body = $('body'),
    capitolize = function(name){
      return name.charAt(0).toUpperCase() + name.substring(1, name.length);
    };

    container.on('click', function(){
      if($('.errors').length > 0){
        $('.errors').fadeOut();
        container.removeClass('blur-background');
      }
    });

    $('button[type="submit"]').on('click', function(e) {
      e.preventDefault();
      empty = contactInput.numEmpty();
      if(empty.length) {
        if($('.errors').length){ $('.errors').remove(); }
        container.addClass('blur-background');
        errorsElem = document.createElement('div');
        errorsElem.classList.add('errors', 'alert', 'alert-danger', 'text-center');
        errorList = document.createElement('span');
        errorList.innerText = 'Please fill in your:';
        errorsElem.appendChild(errorList);
        document.body.insertBefore(errorsElem, $('.container')[0]);
        empty.each(function(_, elem){
          contactInput.highlightEmpty(elem);
          // Appends empty input names to errors element.
            errorList.innerText += '\n' + capitolize(elem.name);
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
            body.append(success);
            $('.alert-success').delay(1200).fadeOut('slow');
            container.addClass('blur-background')
            setTimeout(function(){ container.removeClass('blur-background') }, 1200);
            $('#contactForm').trigger('reset');
            $('p.slide-in-labels').removeClass('slide-in-labels').addClass('hide-labels');
            $('input.slide-placeholder-out, textarea.slide-placeholder-out').removeClass('slide-placeholder-out').addClass('slide-placeholder-in');
            setTimeout(function(){ $('p.hide-labels').css('color','#ff6666'); }, 300);
          },
          error: function(e) {
            console.log(e);
          }
        });
      }
    });
  })();

})();
