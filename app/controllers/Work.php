<?php

require_once '../app/ConnectDB.php';

class Work extends Controller
{

  public $query, $results;

  public function __construct()
  {
    $this->query = ConnectDB::connect()->query('SELECT * FROM work');
    $this->results = $this->query->fetchAll(PDO::FETCH_ASSOC);
  }

  public function index()
  {
    $this->view('work');
  }

}
