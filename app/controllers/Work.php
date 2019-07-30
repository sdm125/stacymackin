<?php

require_once '../app/ConnectDB.php';

class Work extends Controller
{

  public $query, $results;

  public function __construct()
  {
    $this->query = ConnectDB::connect()->query('SELECT w.title, w.subtitle, w.description, w.image, w.url, w.github_url FROM work AS w ORDER BY w.displayOrder');
    $this->results = $this->query->fetchAll(PDO::FETCH_ASSOC);
  }

  public function index()
  {
    $this->view('work');
  }

}
