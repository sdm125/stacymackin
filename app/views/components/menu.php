
<nav class="pull-left not-home">
  <ul>
    <?php
      $nav = array('index'=>'HOME', 'about'=>'ABOUT', 'work'=>'WORK', 'contact'=>'CONTACT');
      foreach($nav as $name => $link) {
        echo '<li id="#' . $name . '"><a href="' . $name . '">'. $link . '</a></li>';
      }
    ?>
  </ul>
</nav>
<div class="menu-btn clearfix">
  <?php
    for($i = 0; $i < 4; $i++) {
      echo '<div class="bar' . $i . '"></div>';
    }
  ?>
</div>
