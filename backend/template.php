<?php

$version = "";
$version_new = "";
$root = $_SERVER['DOCUMENT_ROOT'];
require_once $root . '/backend/clearCash.php';

if ($_SERVER['HTTP_HOST'] != 'you-finances.ru') {
    $version = mt_rand(10000, 99999999);
} else {
    $version = "1.0.189";

    clearCash($root . "/assets", $version);
    clearCash($root . "/css", $version);
    clearCash($root . "/js", $version);
    clearCash($root . "/components", $version);
    clearCash($root . "/pages", $version);
    clearCash($root . "/plugins/modal", $version);
}