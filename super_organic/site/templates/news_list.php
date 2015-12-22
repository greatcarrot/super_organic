<?php snippet('header') ?>
<div id="bbx-contents-wrap" class="main-wrap" style="background-color:#262626-">
      <section id="news">
        <header class="bbx-head bbx-9x-padding-top bbx-4x-padding-bottom">
          <div class="bbx-header-content bbx-main-container">
            <div class="bbx-head-title-area">
              <h5 class="bbx-no-margin"><?php echo $page->title()->html() ?></h5>
            </div>
            <div class="bbx-headline-extra">
              <ul class="bbx-breadcrumbs">
                <li>You are here:</li>
                <li><a href="<?php echo $site->url() ?>">Home</a></li>
                <li class="current-page"><a href="<?php echo $page->url() ?>">News</a></li>
              </ul>
            </div>
          </div>
        </header>
        <div class="content-width-wrap"> <!-- Blog Loop & Single Posts -->
          <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
            <div class="bbx-col-1"> <!-- Content -->
              <section class="bbx-builder-row bbx-4x-padding-bottom">
                <div class="section-content-width"> <!-- Element Width -->
                  <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
                    <div class="bbx-col-1">
                      <div class="bbx-element-content">
                        <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
                          <div class="bbx-col-1">
                          <?php $news = $site->find('news_section')->children()->visible()->flip()->paginate(10) ?>

                        	<?php foreach($news as $articles): ?>
                            <article class="bbx-post-wrap bbx-animation-on-appear fade_up">
                              <div class="bbx-image-wrap">
                                <span class="bbx-image">
                                  <img src="<?php if($articles->image()){echo $articles->image()->url();} ?>" alt="<?php if($articles->image()){echo html($articles->image()->title());} ?>">
                                  <a href="<?php if($articles->image()){echo $articles->image()->url();} ?>" class="bbx-gallery-link bbx-photo-swipe"
                                                   data-bbx-photo-swipe-rel="home_blog"
                                                   data-origin-size="<?php if($articles->image()){echo html($articles->image()->width());} ?>x<?php if($articles->image()){echo html($articles->image()->height());} ?>"><i class="fa fa-search"></i></a>
                                </span>
                                <!--
                                                * BbxPhotoSwipe
                                                *
                                                * Based on PhotoSwipe library by @dimsemenov
                                                *
                                                * @param string data-bbx-photo-swipe-rel Defines the group to select images from in the gallery
                                                * @param string data-origin-size In the format "widthXheight" defines the original size of the image
                                                -->
                                <a href="<?php echo $articles->url() ?>" class="bbx-gallery-link bbx-post-link"><i class="fa fa-link"></i></a>
                                <div class="bbx-date-container bbx-date-container-dark">
                                  <span class="bbx-month"><?php echo $articles->date('M') ?></span>
                                  <span class="bbx-day"><?php echo $articles->date('j') ?></span>
                                </div>
                              </div>
                              <div class="bbx-post-content">
                                <h3><a class="bbx-dark-link" href="<?php echo $articles->url() ?>"><?php echo $articles->title()->html() ?></a></h3>
                                <p class="transparent-text-black excerpt"><?php echo $articles->text()->kirbytext() ?></p>
                                <div class="bbx-meta-container">
                                  <a class="bbx-bullet-link bbx-dark-link" href="<?php echo $articles->url() ?>">Read More <i class="fa fa-plus"></i></a>
                                  
                                </div>
                              </div>
                            </article>
                            <?php endforeach ?>
                            <?php if($news->pagination()->hasPages()): ?>
                            <ul class="bbx-std-pagination">
                              <?php if($news->pagination()->hasPrevPage()): ?>
							  <li><a href="<?php echo $news->pagination()->prevPageURL() ?>">previous</a></li>
                              <?php endif ?>
                              <?php foreach($news->pagination()->range(10) as $r): ?>
    						  <li><a<?php if($news->pagination()->page() == $r) echo ' class="current"' ?> href="<?php echo $news->pagination()->pageURL($r) ?>"><?php echo $r ?></a></li>
    						  <?php endforeach ?>	
                              
                              <?php if($news->pagination()->hasNextPage()): ?>
                              <li><a href="<?php echo $news->pagination()->nextPageURL() ?>">next</a></li>
                              <?php endif ?>
                            </ul>
                            <?php endif ?>
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