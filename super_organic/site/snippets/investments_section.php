      <section id="investments" class="bbx-builder-row bbx-4x-padding-bottom">
        <div class="section-content-width"> <!-- Element Width -->
          <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
            <div class="bbx-col-1">
              <div class="bbx-element-head bbx-align-center bbx-4x-padding-bottom">
                <p class="bbx-quote-text bbx-no-margin"><?php echo $data->title()->html() ?></p>
              </div>
              <div class="bbx-element-content">
                <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
                  <?php $investments = $data->children()->visible()->flip() ?>

                  <?php foreach($investments as $article): ?>
                  <div class="bbx-col-2">
                    <div class="bbx-frame-icon-box bbx-corner-details bbx-align-center bbx-4x-margin-bottom bbx-animation-on-appear fade_up">
                      <h5><a href="#" class="bbx-dark-link"><?php echo $article->title()->html() ?></a></h5>
                      <span class="bbx-divider-small"></span>
                      <p class="transparent-text-black"><?php echo $article->rightSectionText()->excerpt(60) ?></p>
                      <a href="<?php echo $article->url() ?>" class="bbx-fancy-link bbx-block" style="padding-top:7px; max-width:200px;text-align: center; margin:auto;">
                        <span class="fancy-text">
                          Learn More
                                        </span>
                      </a>
                      <span class="bbx-top-left-detail"></span>
                      <span class="bbx-top-right-detail"></span>
                      <span class="bbx-bottom-right-detail"></span>
                      <span class="bbx-bottom-left-detail"></span>
                    </div>
                    
                  </div>
                  <?php endforeach ?>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>