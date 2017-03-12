<nav class="pull-left pop pop-in">;
  <ul>
    <?php
      $nav = array('index'=>'Home', 'about'=>'About', 'work'=>'Work', 'contact'=>'Contact');
      foreach($nav as $n => $l) {
        echo '<li id="#' . $n . '"><a href="' . $n . '">'. $l . '</a></li>';
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
