<?php

 class Controller
 {

   public function model($model)
   {
     require_once '../app/models/' . $model . '.php';
     return new $model();
   }

   public function view($view, $data = [])
   {
     require_once '../app/views/components/header.php';
     echo '<div id="loadContainer"><div id="loader"></div></div>';
     if ($view !== 'home') {
       require_once '../app/views/components/menu.php';
     }
     require_once '../app/views/' . $view . '.php';
     require_once '../app/views/components/footer.php';
   }

 }
