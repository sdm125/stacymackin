<div id="landscape-cover" class="hidden-xl-down text-center">
  <h2>Landscape not supported on this page</h2>
  <i class="fa fa-refresh fa-spin fa-3x fa-fw text-center"></i>
</div>
<section class="about" id="about-one">
  <header>
    <h2 class="slide-down-in about">ABOUT</h2>
  </header>
  <div id="bio" class="slide-down-in">
    <span class="about-left"></span>
    <span class="about-right"></span>
    <img class="profile-img rounded-circle" src="images/stacy_bw.jpg">
  </div>
  <i class="fa fa-3x fa-arrow-down" aria-hidden="true"></i>
</section>

<section class="about" id="about-two"></section>

<section class="about" id="about-three"></section>

<section class="about" id="about-four">
  <div>
    <h2>Skills</h2>
    <?php $logos = array('html', 'css', 'javascript', 'php', 'mysql', 'java'); ?>
    <?php foreach (array_chunk($logos, 3, true) as $arr): ?>
      <div>
        <?php foreach($arr as $logo): ?>
          <img src=<?php echo '"images/' . $logo . '.svg"' ?> alt=<?php echo '"' . $logo . ' logo"' ?> />
        <?php endforeach ?>
      </div>
    <?php endforeach ?>
  </div>
</section>

<section class="about" id="about-five">
  <h2><a href="https://github.com/sdm125" target="_blank">
    <?php $resume = array('V', 'i', 'e', 'w', '&nbsp;', 'm', 'y', '&nbsp;' ,'G', 'i', 't', 'h', 'u', 'b'); ?>
    <?php foreach($resume as $letter): ?>
      <span class="stagger"><?php echo $letter ?></span>
    <?php endforeach ?>
  </a></h2>
</section>
