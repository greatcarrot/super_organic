<?php snippet('header') ?>
<div id="bbx-contents-wrap" class="main-wrap" style="background-color:#262626-">
      <section id="investments">
        <header class="bbx-head bbx-9x-padding-top">
        </header>
        <div> <!-- Blog Loop & Single Posts class="content-width-wrap" -->
          <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
            <div class="bbx-col-1"> <!-- Content -->
              <section class="bbx-builder-row bbx-4x-padding-bottom">
                <div class="section-content-width"> <!-- Element Width -->
                  <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
                    <div class="bbx-col-1">
                      <div class="bbx-element-content">
                        <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
                          <div class="bbx-col-1">
                            <div class="bbx-wide-member-wrap bbx-single-member bbx-corner-details visible-corners">
                              <?php if($image = $page->image()): ?>
                              <div class="bbx-member-picture">
                                <img src="<?php echo $image->url() ?>" alt="<?php echo html($image->title()) ?>">
                              </div>
                              <?php endif ?>
                              <div class="bbx-member-sidebar" id="sidebar">
                                <ul class="bbx-icon-list bbx-2x-margin-bottom">
                                  <li><i class="fa fa-phone transparent-text-black"></i><strong class="color-color-option"><?php echo $page->phone()->kirbytext() ?></strong></li>
                                  <li><i class="fa fa-envelope transparent-text-black"></i><span><?php echo $page->email()->kirbytext() ?></span></li>
                                  <li><i class="fa fa-map-marker transparent-text-black"></i><?php echo $page->address()->kirbytext() ?></li>
                                </ul>
                                <h5 class="bbx-sergeant bbx-block transparent-text-black"><?php echo $page->leftSectionTitle()->kirbytext() ?></h5>
                                <span class="bbx-wide-divider-small-detail"></span>
                                <p class="bbx-2x-margin-bottom"><?php echo $page->leftSectionText()->kirbytext() ?></p>
                                <h5 class="bbx-sergeant bbx-block transparent-text-black">Social Networks</h5>
                                <span class="bbx-wide-divider-small-detail"></span>
                                <a href="#" class="bbx-simple-social-link bbx-facebook">
                                  <i class="fa fa-facebook"></i>
                                </a>
                                <a href="#" class="bbx-simple-social-link bbx-twitter">
                                  <i class="fa fa-twitter"></i>
                                </a>
                                <a href="#" class="bbx-simple-social-link bbx-google-plus">
                                  <i class="fa fa-google-plus"></i>
                                </a>
                              </div>
                              <h3 class="bbx-block bbx-no-margin"><?php echo $page->rightSectionTitle()->kirbytext() ?></h3>
                              <span class="bbx-wide-divider-small-detail"></span>
                              <div style="min-height: 670px;" id="maintext">
                                <?php echo $page->rightSectionText()->kirbytext() ?>
                                
                              </div>
                              <span class="bbx-top-left-detail"></span>
                              <span class="bbx-top-right-detail"></span>
                              <span class="bbx-bottom-right-detail"></span>
                              <span class="bbx-bottom-left-detail"></span>
                            </div>
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