<?php snippet('header') ?>
<div id="bbx-contents-wrap" class="main-wrap" style="background-color:#262626-">
      <section id="investments">
        <header class="bbx-head bbx-9x-padding-top bbx-4x-padding-bottom">
          <div class="bbx-header-content bbx-main-container">
            <div class="bbx-head-title-area">
              <h5 class="bbx-no-margin"><?php echo $page->title()->html() ?></h5>
            </div>
          </div>
        </header>
        <div class="content-width-wrap"> <!-- Blog Loop & Single Posts -->
          <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
            <div class="bbx-col-1"> <!-- Content -->
              <section class="bbx-builder-row">
                <div class="section-content-width"> <!-- Element Width -->
                  <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
                    <div class="bbx-col-1">
                      <div class="bbx-element-content">
                        <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
                          <div class="bbx-col-1">
                            <article class="bbx-post-wrap bbx-single-post-wrap">
                              <?php if($image = $page->image()): ?>
                              <div class="bbx-image-wrap single-button-wrap">
                                <span class="bbx-image">
                                  <img src="<?php echo $image->url() ?>" alt="<?php echo html($image->title()) ?>">
                                  <a href="<?php echo $image->url() ?>" class="bbx-gallery-link bbx-photo-swipe"
                                                   data-bbx-photo-swipe-rel="home_blog"
                                                   data-origin-size="<?php echo html($image->width()) ?>x<?php echo html($image->height()) ?>"><i class="fa fa-search"></i>
                                  </a>
                                </span>
                                
                                <!--
                                                * BbxPhotoSwipe
                                                *
                                                * Based on PhotoSwipe library by @dimsemenov
                                                *
                                                * @param string data-bbx-photo-swipe-rel Defines the group to select images from in the gallery
                                                * @param string data-origin-size In the format "widthXheight" defines the original size of the image
                                                -->
                              </div>
                              <?php endif ?>
                              <div class="bbx-post-content">
                                
                                <p><?php echo $page->text()->kirbytext() ?></p>
                                
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      
<?php snippet('footer') ?>