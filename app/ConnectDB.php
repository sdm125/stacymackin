<?php

class ConnectDB
{

  public static function connect()
  {
    try {
      $handler = new PDO('mysql:host=' . getenv('DB_HOST') . ';dbname=' . getenv('DB_NAME'), getenv('DB_USER_NAME'), getenv('DB_PASSWORD'));
      $handler->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      return $handler;
    }
    catch(PDOException $e) {
      echo $e->getMessage();
      die();
    }
  }

}
