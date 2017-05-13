<?php

require_once '../app/ConnectDB.php';

class Contact extends Controller
{

  public $handler, $query;

  public function __construct()
  {
    $this->handler = ConnectDB::connect();
  }

  public function index()
  {
    $this->view('contact');
  }

  public function insert()
  {

    $firstName = (!empty($_POST['first']) ? $_POST['first'] : '');
    $lastName = (!empty($_POST['last']) ? $_POST['last'] : '');
    $email = (!empty($_POST['email']) ? $_POST['email'] : '');
    $message = (!empty($_POST['message']) ? $_POST['message'] : '');

    $sql = "INSERT INTO contact (firstName, lastName, email, message)
    VALUES(:firstName, :lastName, :email, :message)";

    $this->query = $this->handler->prepare($sql);

    $this->query->execute(array(
      ':firstName' => $firstName,
      ':lastName' => $lastName,
      ':email' => $email,
      ':message' => $message
    ));

    mail('stacy.mackin@gmail.com', $firstName . ' ' . $lastName . ' sent a message', $message);

  }

}
