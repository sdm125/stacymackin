<?php

require_once 'ConnectDB.php';

if(!empty($_POST['first']) && !empty($_POST['last']) && !empty($_POST['email']) && !empty($_POST['message'])) {
  $sql = "INSERT INTO contact (firstName, lastName, email, message)
          VALUES (:firstName, :lastName, :email, :message)";
  $query = ConnectDB::connect()->prepare($sql);
  $query->execute(array(
    ':firstName' => $_POST['first'],
    ':lastName' => $_POST['last'],
    ':email' => $_POST['email'],
    ':message' => $_POST['message']
  ));
}
