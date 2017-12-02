<?php

require_once '../app/ConnectDB.php';
require '../vendor/autoload.php';

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
    $name = (!empty($_POST['name']) ? $_POST['name'] : '');
    $email = (!empty($_POST['email']) ? $_POST['email'] : '');
    $message = (!empty($_POST['message']) ? $_POST['message'] : '');

    $sql = "INSERT INTO contact(name, email, message)
    VALUES(:name, :email, :message)";

    $this->query = $this->handler->prepare($sql);

    $this->query->execute(array(
      ':name' => $name,
      ':email' => $email,
      ':message' => $message
    ));

    $from = new SendGrid\Email($name, $email);
    $subject = $name . ' has sent a message from stacymackin.com';
    $to = new SendGrid\Email('Stacy Mackin', 'stacy.mackin@gmail.com');
    $content = new SendGrid\Content('text/html', 'Name: ' . $name . '<br>' . 'Email: '. $email . '<br><br>' . $message);
    $mail = new SendGrid\Mail($from, $subject, $to, $content);
    $mail->CharSet = "utf-8";
    $apiKey = getenv('SENDGRID_API_KEY');
    $sg = new \SendGrid($apiKey);

    $response = $sg->client->mail()->send()->post($mail);
    echo $response->statusCode();
    print_r($response->headers());
    echo $response->body();
  }
}
