<section id="profiles" class="bbx-builder-row bbx-4x-padding-bottom">
        <div class="section-content-width"> <!-- Element Width -->
          <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
            <div class="bbx-col-1">
              <div class="bbx-element-content bbx-animation-on-appear fade_up active">
                <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
                  <div class="bbx-col-1">
                    <h3><?php echo $data->title()->html() ?></h3>
                    <?php $profiles = $data->children()->visible()->flip()->paginate(3) ?>

                        <?php foreach($profiles as $article): ?>
                    <div class="bbx-wide-member-wrap bbx-corner-details visible-corners" style="margin-bottom:24px;">
                      <div class="bbx-member-picture">
                        <img src="<?php if($article->image()){echo $article->image()->url();} ?>" alt="<?php if($article->image()){echo html($article->image()->title());} ?>">
                      </div>
                      <h5 class="bbx-block bbx-no-margin"><a class="bbx-dark-link"><?php echo $article->title()->html() ?></a></h5>
                      <h5 class="bbx-sergeant bbx-block transparent-text-black"><?php echo $article->position()->html() ?></h5>
                      <span class="bbx-divider-small"></span>

                      <div class="bbx-member-description">
                        <p class="transparent-text-black"><?php echo $article->text()->kirbytext() ?></p>
                      </div>

                      <span class="bbx-top-left-detail"></span>
                      <span class="bbx-top-right-detail"></span>
                      <span class="bbx-bottom-right-detail"></span>
                      <span class="bbx-bottom-left-detail"></span>
                    </div>
                    <?php endforeach ?>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>