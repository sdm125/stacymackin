<div class="container contact">
  <header>
    <h2 class="slide-down-in">CONTACT</h2>
  </header>

  <div class="row mt-5 slide-down-in">
    <div class="col-6">
      <a href="https://github.com/sdm125" target="_blank"><i class="fa fa-5x fa-github mb-1" aria-hidden="true"></i><br>Github</a>
    </div>
    <div class="col-6">
      <a href="mailto:stacy.mackin@gmail.com"><i class="fa fa-5x fa-envelope mb-1" aria-hidden="true"></i><br>Email</a>
    </div>
  </div>
  <form id="contactForm" method="post" action="" class="slide-down-in" autocomplete="off">
    <div class="row mt-5">
      <div class="col-md-5 offset-md-1">
        <fieldset>
          <?php $fields = array('Name' => ['name','text'], 'Email' => ['email','email']); ?>
          <?php foreach($fields as $key => $value): ?>
          <label>
            <div class="title">
              <p class="hide-labels"><?php echo $key ?></p>
            </div>
            <input autocomplete="off" type=<?php echo '"' . $value[1] . '"'; ?> name=<?php echo '"' . $value[0]
            . '"'; ?> placeholder=<?php echo '"' . $key . '"'; ?>>
          </label>
        <?php endforeach ?>
        </fieldset>
      </div>
      <div class="col-md-5">
        <fieldset>
          <label>
            <div class="title">
              <p class="hide-labels">Message</p>
            </div>
            <textarea rows="5" name="message" placeholder="Message"></textarea>
          </label>
        </fieldset>
      </div>
      <div class="col-md-1 hidden-md"></div>
      <div class="col-12 mt-5">
        <fieldset>
          <div>
            <button type="submit">SEND</button>
          </div>
        </fieldset>
      </div>
    </div>
  </form>
</div>
