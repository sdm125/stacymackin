/*
 * CONTACT
 */
$(document).ready(function() {
  $('.contact a')
    .on('mouseover', function() {
      $(this)
        .children('.fa')
        .css('transform', 'scale(1.2)');
    })
    .on('mouseout', function() {
      $(this)
        .children('.fa')
        .css('transform', 'scale(1)');
    });

  var contactInput = (function() {
    // Returns an array of text inputs that are empty.
    var numEmpty = function() {
        var inputs = $('input[type="text"], input[type="email"], textarea'),
          empty = inputs.filter(function(_, elem) {
            return elem.value === '';
          });
        return empty;
      },
      /**
       * Highlights an empty text input. Adds slide-placeholder-out class to slide out
       * placeholder text. Adds slide-in-labels class to slide in hidden labels.
       */
      highlightEmpty = function(selector) {
        $(selector)
          .css('padding-left', '0')
          .addClass('slide-placeholder-out')
          .prev()
          .children()
          .addClass('slide-in-labels');
      };
    return {
      numEmpty: numEmpty,
      highlightEmpty: highlightEmpty
    };
  })();

  /**
   * Checks text inputs on focus. If there are other empty inputs, it slides out
   * their label and slides in the placeholder text.
   */
  $('input[type="text"], input[type="email"], textarea')
    .on('focus', function() {
      var empty = contactInput.numEmpty();
      if (empty.length > 0) {
        empty.each(function(_, elem) {
          $(elem).removeClass('slide-placeholder-out');
          $(elem)
            .prev()
            .children()
            .removeClass('slide-in-labels');
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
      if ($this.val() !== '') {
        $this
          .prev()
          .children()
          .css('color', '#66cc66');
      } else {
        $this
          .prev()
          .children()
          .css('color', '#ff6666');
      }
    });

  /**
   * On button click checks for empty text inputs.
   * Sends empty input elements to highlightEmpty function.
   */
  $('button[type="submit"]').on('click', function(e) {
    e.preventDefault();
    var empty = contactInput.numEmpty();
    if (empty.length) {
      empty.each(function(_, elem) {
        contactInput.highlightEmpty(elem);
      });
    } else {
      $.ajax({
        url: 'contact/insert',
        type: 'POST',
        data: $('#contactForm').serialize()
      }).then(function() {
        var success =
          '<div class="modal-bg success"></div><div class="alert alert-success text-center" role="alert">Message sent! Thank you!</div>';
        $('body').append(success);
        $('.modal-bg.success')
          .delay(1500)
          .fadeOut('slow');
        $('.alert-success')
          .delay(1500)
          .fadeOut('slow');
        $('#contactForm').trigger('reset');
        $('p.slide-in-labels')
          .removeClass('slide-in-labels')
          .addClass('hide-labels');
        $('input.slide-placeholder-out, textarea.slide-placeholder-out')
          .removeClass('slide-placeholder-out')
          .addClass('slide-placeholder-in');
        setTimeout(function() {
          $('p.hide-labels').css('color', '#ff6666');
        }, 300);
      });
    }
  });
});
