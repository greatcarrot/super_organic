<section id="news" class="bbx-builder-row bbx-4x-padding-bottom">
        <div class="section-content-width"> <!-- Element Width -->
          <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
            <div class="bbx-col-1">
              <div class="bbx-element-content bbx-animation-on-appear fade_up">
                <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
                  <div class="bbx-col-1">
                    <h3><?php echo $page->title()->html() ?></h3>
                    <div class="bbx-content-swiper bbx-slider" data-effect="slide">
                      <!-- Swiper backgrounds (actual slides) -->
                      <div class="swiper-container">
                        <div class="swiper-wrapper">
                        <?php $news = $page->children()->visible()->flip()->paginate(3) ?>

                        <?php foreach($news as $article): ?>
                          <div class="swiper-slide">
                            <div class="bbx-row bbx-grid-2x-margin no-outter-padding">
                              <div class="bbx-col-2">
                                <div class="bbx-simple-photo-slider">
                                  <div class="bbx-photo-wrap">
                                    <img src="<?php echo $article->image()->url() ?>" alt="<?php echo html($article->image()->title()) ?>">
                                  </div>
                                </div>
                              </div>
                              <div class="bbx-col-2">
                                <h5 class="bbx-sergeant"><a href="<?php echo $article->url() ?>"><i class="fa fa-bank color-color-option"></i> <?php echo $article->title()->html() ?></a></h5>
                                <span class="bbx-wide-divider-small-detail"></span>
                                <p><?php echo $article->text()->kirbytext() ?></p>
                              </div>
                            </div>
                          </div>
                        <?php endforeach ?>
                        </div>
                      </div>
                      <ul class="bbx-simple-bullets swiper-control-nav">
                        <li class="current-bullet"><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>