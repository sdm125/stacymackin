<?php

class ProjectData
{

  public $title, $description, $techList, $images, $URL;

  public function __construct()
  {
    $this->explodeImages();
  }

  private function explodeImages()
  {
    $this->images = explode(" ", $this->images);
  }

  private function explodeTechList()
  {
    $this->techList = explode(" ", $this->techList);
  }

}
