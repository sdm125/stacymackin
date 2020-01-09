<?php

require_once '../app/init.php';
require '../vendor/autoload.php';

if (file_exists(__DIR__ . '/.env')) {
  $dotenv = new Dotenv\Dotenv(__DIR__ . '/../');
  $dotenv->load();
}

$app = new App;
