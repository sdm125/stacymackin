/*
 * WORK
 */
$(document).ready(function() {
  var workElmIndex = 0;
  var work = $('.work');
  var indicators = $('.indicator');
  $(work[workElmIndex]).addClass('active');

  $('.arrow').on('click', function() {
    $(indicators[workElmIndex])
      .removeClass('fa-circle')
      .addClass('fa-circle-o');
    $(work[workElmIndex]).removeClass('active');

    if ($(this).hasClass('fa-long-arrow-left')) {
      workElmIndex = workElmIndex > 0 ? workElmIndex - 1 : work.length - 1;
    } else if ($(this).hasClass('fa-long-arrow-right')) {
      workElmIndex = workElmIndex < work.length - 1 ? workElmIndex + 1 : 0;
    }

    $(indicators[workElmIndex])
      .removeClass('fa-circle-o')
      .addClass('fa-circle');
    $(work[workElmIndex])
      .removeClass('active')
      .addClass('active')
      .css('animation', 'grow 300ms ease-in-out');
  });
});
