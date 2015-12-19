<!DOCTYPE html>
<html lang="en">
  <head>

<!-- Always force latest IE rendering engine or request Chrome Frame -->
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php echo $site->description()->html() ?>">
    <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">
    <meta name="author" content="">
    <!-- Google Fonts -->
    <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900,200italic,300italic,400italic,600italic,700italic,900italic&amp;subset=latin,latin-ext' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Playfair+Display:400,700,900,400italic,700italic,900italic&amp;subset=latin,cyrillic,latin-ext' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Mrs+Saint+Delafield&amp;subset=latin,latin-ext' rel='stylesheet' type='text/css'>
    <!-- FontAwesome -->
    <!--<link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <!-- Favicon -->
    <link rel="shortcut icon" href="<?php echo url("assets/images/favicon.ico") ?>" />
    <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
    

    <?php echo css('assets/css/application.css') ?>

  </head>
  <body>

    <!--<header class="header cf" role="banner">
      <a class="logo" href="<?php //echo url() ?>">
        <img src="<?php //echo url('assets/images/logo.svg') ?>" alt="<?php //echo $site->title()->html() ?>" />
      </a>
      <?php //snippet('menu') ?>
    </header>-->
    <header id="header" class="bbx-nav bbx-nav-dark-text bbx-nav-no-background bbx-nav-dark-sub-menu" data-on-scroll-style="light">
      <!-- Do not remove the container, as some javascript might fail, just leave empty if not needed -->
      <div class="bbx-info-bar-container">
      </div>
      <?php snippet('menu') ?>