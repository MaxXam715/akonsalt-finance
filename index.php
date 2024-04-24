<?php
global $version;
$root = $_SERVER['DOCUMENT_ROOT'];
require_once $root . '/backend/template.php';

// получаем версию JSON для resources
$versionJSON = file_get_contents($root . "/static/version.txt");

?>

<!doctype html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <title>Invest Globals</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="version" content="<?= $version ?>">

    <!-- meta -->
    <meta property="og:locale" content="ru_RU">
    <meta property="og:site_name" content="" />
    <meta property="og:title" content=""/>
    <meta property="og:image" content="/assets/img/logo-banner.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="" />
    <meta name="twitter:title" content="">
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:image" content="/assets/img/logo-banner.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="vk:image" content="/assets/img/logo-banner.jpg" />
    <meta name="description" content="" />
    <meta property="og:url" content="" />
    <meta property="article:author" content="Invest Globals" />
    <meta property="article:publisher" content="Invest Globals" />
    <link rel="image_src" href="/assets/img/logo-banner.jpg">

    <!-- Favicons -->
<!--    <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png">-->
<!--    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png">-->
<!--    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png">-->
<!--    <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#5bbad5">-->
<!--    <meta name="msapplication-TileColor" content="#F7F1E4">-->
<!--    <meta name="theme-color" content="#F7F1E4">-->

    <!-- Style -->
    <link rel="stylesheet" href="/css/global.css?v=<?= $version ?>">
</head>
<body>

<main id="app"></main>

<script src="/plugins/imask/imask.js"></script>
<script src="/plugins/fancybox/fancybox.umd.js"></script>

<script src="/js/Helpers.js?v=<?= $version ?>"></script>
<script src="/js/scripts.js?v=<?= $version ?>"></script>
<script src="/js/router.js?v=<?= $version ?>"></script>

</body>
</html>