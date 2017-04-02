<?php require_once '../app/Mobile_Detect.php'; ?>
<?php $detect = new Mobile_Detect; ?>

<?php if (!$detect->isMobile() && !$detect->isTablet()): ?>
  <?php $videos = array('about','work', 'contact'); ?>
  <?php foreach($videos as $v): ?>
    <video id=<?php echo '"' . $v . 'Video"'; ?> loop muted>
      <source src=<?php echo '"videos/' . $v . '.mp4"'; ?> type="video/mp4">
    </video>
  <?php endforeach ?>
<?php else: ?>
  <?php echo '<link rel="stylesheet" href="styles/mobile.css">' ?>
  <img id="mobile-bg" src="images/mobile-bg.gif">
<?php endif ?>

<div class="container-fluid home">
  <div class="wrapper">
    <div class="row">
      <div class="col">
        <header>
        	<h1>
            <span class="slide-down-in">STACY</span>
            <span class="slide-up-in">MACKIN</span>
          </h1>
        </header>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <nav class="pull-left home">
          <ul>
            <?php $nav = array('about' => 'pop-in-left', 'work' => 'pop-in-right',
                               'contact' => 'pop-in-left'); ?>
            <?php foreach($nav as $link => $class): ?>
              <li id=<?php echo '"' . $link . '"'; ?> class=<?php echo '"home ' . $class . '"'; ?>>
                <a href=<?php echo '"' . $link . '"'; ?> ><?php echo strtoupper($link); ?></a>
              </li>
            <?php endforeach ?>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</div>
