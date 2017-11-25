<?php

require_once '../app/ConnectDB.php';
require 'vendor/autoload.php';

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

    $from = new SendGrid\Email($firstName . ' ' $lastName , $email);
    $subject = $firstName . ' ' $lastName . ' has sent a message from stacymackin.com';
    $to = new SendGrid\Email('Stacy Mackin', 'stacy.mackin@gmail.com');
    $content = new SendGrid\Content('text/plain', $message);
    $mail = new SendGrid\Mail($from, $subject, $to, $content);

    $apiKey = getenv('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');
    $sg = new \SendGrid($apiKey);

    $response = $sg->client->mail()->send()->post($mail);
    echo $response->statusCode();
    print_r($response->headers());
    echo $response->body();
  }

}
