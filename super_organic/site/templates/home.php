<?php snippet('header') ?>
<div id="bbx-contents-wrap" class="main-wrap" style="background-color:#262626-">
<section id="main">
        <div class="bbx-hello-slider bbx-slider" data-full-screen="yes">
          <!-- Swiper slides texts-->
          <div class="slide-content">
            <div class="slide-content-item" data-appear-effect="right" data-color-style="<?php echo $page->firstSlideColorstyle()->html() ?>">
              <div class="bbx-row side-padding">
                <div class="bbx-col-2">
                  <p class="bbx-sergeant transparent-text-black"><?php echo $page->firstSlideTagline()->html() ?></p>
                  <span class="bbx-wide-divider-small-detail"></span>
                  <h1><?php echo $page->firstSlideTitle()->html() ?></h1>
                  <span class="bbx-wide-divider-small-detail"></span>
                  <p class="transparent-text-black bbx-no-margin"><?php echo $page->firstSlideText()->kirbytext() ?></p>
                </div>
              </div>
            </div>
            
            
          </div>
          <!-- Swiper backgrounds (actual slides) -->
          <div class="swiper-container">
            <div class="swiper-wrapper">
            <?php foreach($page->images()->paginate(1) as $image): ?>
              <div class="swiper-slide" style="background-image: url('<?php echo $image->url() ?>');"></div>
            <?php endforeach ?>
            </div>
          </div>
          
        </div>
      </section>

<?php foreach($pages->visible() as $section) {
  		snippet($section->uid(), array('data' => $section));
	}

?>


<?php snippet('footer') ?>