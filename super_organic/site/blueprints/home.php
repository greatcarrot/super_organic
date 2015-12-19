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
    label: First Slide
    type: headline
  firstSlideTitle:
    label: First Slide Title
    type: text
  firstSlideTagline:
    label: First Slide Tagline
    type: text
  firstSlideText:
    label: First Slide Text
    type: textarea
  firstSlideColorstyle:
    label: Color Style
    type: radio
    options:
      dark: Dark
      light: Light
  secondSlide:
    label: Second Slide
    type: headline
  secondSlideTitle:
    label: Second Slide Title
    type: text
  secondSlideTagline:
    label: Second Slide Tagline
    type: text
  secondSlideText:
    label: Second Slide Text
    type: textarea
  secondSlideColorstyle:
    label: Color Style
    type: radio
    options:
      dark: Dark
      light: Light
  thirdSlide:
    label: Third Slide
    type: headline
  thirdSlideTitle:
    label: Third Slide Title
    type: text
  thirdSlideTagline:
    label: Third Slide Tagline
    type: text
  thirdSlideText:
    label: Third Slide Text
    type: textarea
  thirdSlideColorstyle:
    label: Color Style
    type: radio
    options:
      dark: Dark
      light: Light