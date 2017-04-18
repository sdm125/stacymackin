<?php

class ConnectDB
{

  public static function connect()
  {
    try {
      $handler = new PDO('mysql:host=us-cdbr-iron-east-03.cleardb.net;dbname=heroku_787125b1034d88e', 'be34506a26e02e', '7426d1d9');
      $handler->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      return $handler;
    } catch(PDOException $e) {
      echo $e->getMessage();
      die();
    }
  }

}
