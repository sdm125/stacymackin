<div class="container contact">
  <header>
    <h2 class="slide-down-in">CONTACT</h2>
  </header>

  <div class="row mt-5 slide-down-in">
    <div class="col-6">
      <a href="https://github.com/sdm125" target="_blank"><i class="fa fa-5x fa-github" aria-hidden="true"></i><br>Github</a>
    </div>
    <div class="col-6">
      <a href="mailto:stacy.mackin@gmail.com"><i class="fa fa-5x fa-envelope" aria-hidden="true"></i><br>Email</a>
    </div>
  </div>

  <form id="contactForm" method="post" action="" class="slide-down-in" autocomplete="off">
    <fieldset>
      <div class="row">
        <?php $fields = array('First Name' => ['first','text'], 'Last Name' => ['last','text'], 'Email' => ['email','email']); ?>
        <?php foreach($fields as $key => $value): ?>
          <?php echo ($key === 'Email') ? '<div class="col-12 col-sm-12">' : '<div class="col-12 col-sm-6">'; ?>
            <label>
              <div class="title">
                <p class="hide-labels"><?php echo $key ?></p>
              </div>
              <input type=<?php echo '"' . $value[1] . '"'; ?> name=<?php echo '"' . $value[0]
              . '"'; ?> placeholder=<?php echo '"' . $key . '"'; ?>>
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
