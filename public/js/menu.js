/*
 * MENU
 */
$(document).ready(function() {
  var nav = $('nav');
  var navBg = $('nav .modal-bg');
  var navList = $('nav ul');

  $('#loadContainer').hide();
  $('body').removeClass('preload');

  $('.menu-btn').on('click', function() {
    if (nav.hasClass('hide-nav')) {
      nav.css('z-index', '101');
      navBg.css('opacity', '.9');
      nav.addClass('show-nav').removeClass('hide-nav');
      navList.css('font-size', '1rem');
    } else {
      nav.addClass('hide-nav').removeClass('show-nav');
      navBg.css('opacity', '0');
      navList.css('font-size', '50rem');
      setTimeout(function() {
        nav.css('z-index', '-1');
      }, 500);
    }

    $(this).toggleClass('change');
  });
});
