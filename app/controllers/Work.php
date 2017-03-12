<?php

require_once '../app/ConnectDB.php';

class Work extends Controller
{

  public $handler, $query;

  public function __construct()
  {
    $this->model('ProjectData');
    $this->query = ConnectDB::connect()->query('SELECT * FROM work');
    $this->query->setFetchMode(PDO::FETCH_CLASS, 'ProjectData');
  }

  public function index()
  {
    $this->view('work');
  }

}
