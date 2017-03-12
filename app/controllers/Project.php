<?php

require_once '../app/ConnectDB.php';
require_once 'Work.php';

class Project extends Work
{

  public function index()
  {
    $this->view('project');
  }

}
