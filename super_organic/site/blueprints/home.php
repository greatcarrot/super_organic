<?php if(!defined('KIRBY')) exit ?>

title: Home
pages: false
deletable: false
files:
  sortable: true
fields:
  title:
    label: Title
    type:  text
  firstSlide:
    label: Image Properties
    type: headline
  firstSlideTitle:
    label: Image Title
    type: text
  firstSlideTagline:
    label: Image Tagline
    type: text
  firstSlideText:
    label: Image Text
    type: textarea
  firstSlideColorstyle:
    label: Color Style
    type: radio
    options:
      dark: Dark
      light: Light
  