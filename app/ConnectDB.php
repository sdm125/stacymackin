<?php

class ConnectDB
{

  public static function connect()
  {
    try {
      $handler = new PDO('mysql:host=jlg7sfncbhyvga14.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306;dbname=lktl9exoshaftugk', 'wbj99krq561xsclh', 'cgv89uwl70ycwdhe');
      //$handler = new PDO('mysql:host=localhost;dbname=stacy-mackin', 'stacy', 'lucy');
      $handler->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      return $handler;
    }
    catch(PDOException $e) {
      echo $e->getMessage();
      die();
    }
  }

}
