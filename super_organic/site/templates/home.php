<?php snippet('header') ?>
<div id="bbx-contents-wrap" class="main-wrap" style="background-color:#262626-">
<section id="main">
        <div class="bbx-hello-slider bbx-slider" data-full-screen="yes">
          <!-- Swiper slides texts-->
          <div class="slide-content">
            <div class="slide-content-item" data-appear-effect="right" data-color-style="dark">
              <div class="bbx-row side-padding">
                <div class="bbx-col-2">
                  <p class="bbx-sergeant transparent-text-black">Fast & Smooth</p>
                  <span class="bbx-wide-divider-small-detail"></span>
                  <h1>Lawyer Template</h1>
                  <span class="bbx-wide-divider-small-detail"></span>
                  <p class="transparent-text-black bbx-no-margin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis tincidunt lobortis. Nulla accumsan eu tortor tincidunt posuere. (slide 1 text)</p>
                </div>
              </div>
            </div>
            <div class="slide-content-item" data-appear-effect="right" style="display:none;" data-color-style="light">
              <div class="bbx-row side-padding">
                <div class="bbx-col-2">
                  <p class="bbx-sergeant transparent-text-black">Fast & Smooth</p>
                  <span class="bbx-wide-divider-small-detail"></span>
                  <h1>Lawyer Template</h1>
                  <span class="bbx-wide-divider-small-detail"></span>
                  <p class="transparent-text-black bbx-no-margin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis tincidunt lobortis. Nulla accumsan eu tortor tincidunt posuere.</p>
                </div>
              </div>
            </div>
            <div class="slide-content-item" data-appear-effect="right" style="display:none;" data-color-style="light">
              <div class="bbx-row side-padding">
                <div class="bbx-col-2">
                  <p class="bbx-sergeant transparent-text-black">Fast & Smooth</p>
                  <span class="bbx-wide-divider-small-detail"></span>
                  <h1>Lawyer Template</h1>
                  <span class="bbx-wide-divider-small-detail"></span>
                  <p class="transparent-text-black bbx-no-margin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis tincidunt lobortis. Nulla accumsan eu tortor tincidunt posuere.</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Swiper backgrounds (actual slides) -->
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" style="background-image: url('<?php echo url('assets/images/1344x840.jpg') ?>');"></div>
              <div class="swiper-slide" style="background-image: url('<?php echo url('assets/images/1344x840-2.jpg') ?>');"></div>
              <div class="swiper-slide" style="background-image: url('<?php echo url('assets/images/1344x840-2.jpg') ?>');"></div>
            </div>
          </div>
          <!-- Swiper control nav buttons -->
          <ul class="bbx-fancy-bullets swiper-control-nav">
            <li class="current-bullet" data-type="active">
              <a href="#" class="bullet">
                <span class="left-detail"></span>
                <span class="right-detail"></span>
              </a>
            </li>
            <li class="inactive" data-type="inactive">
              <a href="#" class="bullet">
                <span class="left-detail"></span>
                <span class="right-detail"></span>
              </a>
            </li>
            <li class="inactive" data-type="inactive">
              <a href="#" class="bullet">
                <span class="left-detail"></span>
                <span class="right-detail"></span>
              </a>
            </li>
          </ul>
          <!-- Swiper direction nav buttons -->
          <div class="bbx-arrow-nav swiper-direction-nav">
            <a href="#" class="arrow-nav arrow-nav-prev">
              <i class="fa fa-chevron-left"></i>
            </a>
            <a href="#" class="arrow-nav arrow-nav-next">
              <i class="fa fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </section>

<?php foreach($pages->visible() as $section) {
  		snippet($section->uid(), array('data' => $section));
	}

?>

<?php snippet('footer') ?>