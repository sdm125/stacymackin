<?php

class ConnectDB
{

  public static function connect()
  {
    try {
      $handler->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      return $handler;
    }
    catch(PDOException $e) {
      echo $e->getMessage();
      die();
    }
  }

}
