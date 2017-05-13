<div class="container about">
  <header>
    <h2 class="slide-down-in">CONTACT</h2>
  </header>
  <form id="contactForm" method="post" action="" class="slide-down-in">
    <fieldset>
      <div class="row">
        <?php $fields = array('First Name' => ['first','text'], 'Last Name' => ['last','text'], 'Email' => ['email','email']); ?>
        <?php foreach($fields as $key => $value): ?>
          <div class="col">
            <label>
              <div class="title">
                <p class="hide-labels"><?php echo $key ?></p>
              </div>
              <input type=<?php echo '"' . $value[1] . '"'; ?> name=<?php echo '"' . $value[0] . '"'; ?> placeholder=<?php echo '"' . $key . '"'; ?>>
            </label>
          </div>
        <?php endforeach ?>
      </div>
    </fieldset>
    <fieldset>
      <div class="row">
        <label class="col">
          <div class="title">
            <p class="hide-labels">Message</p>
          </div>
          <textarea rows="5" cols="20" name="message" placeholder="Message"></textarea>
        </label>
      </div>
    </fieldset>
    <fieldset>
      <div>
        <button type="submit">SUBMIT</button>
      </div>
    </fieldset>
  </form>
</div>
