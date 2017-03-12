<header>
  <h2 class="slide-down-in">CONTACT</h2>
</header>
<div class="container about">
  <form id="contactForm" method="post" action="" class="slide-down-in">
    <fieldset>
      <?php $fields = array('First Name' => 'first', 'Last Name' => 'last', 'Email' => 'email'); ?>
      <?php foreach($fields as $key => $value): ?>
        <label class="name-input">
          <div class="title">
            <p class="hide-labels"><?php echo $key ?></p>
          </div>
          <input type="text" name=<?php echo '"' . $value . '"'; ?> placeholder=<?php echo '"' . $key . '"'; ?>>
        </label>
      <?php endforeach ?>
    </fieldset>
    <fieldset>
      <label class="name-input">
        <div class="title">
          <p class="hide-labels">Message</p>
        </div>
        <textarea rows="5" cols="20" name="message" placeholder="Message"></textarea>
      </label>
    </fieldset>
    <fieldset>
      <div>
        <button type="submit">SUBMIT</button>
      </div>
    </fieldset>
  </form>
</div>
