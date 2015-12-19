<?php snippet('header') ?>
<div id="bbx-contents-wrap" class="main-wrap" style="background-color:#262626-">
      <section id="news">
        <header class="bbx-head bbx-9x-padding-top bbx-4x-padding-bottom">
          <div class="bbx-header-content bbx-main-container">
            <div class="bbx-head-title-area">
              <h5 class="bbx-no-margin">News</h5>
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
            <div class="bbx-col-1-5"> <!-- Content -->
              <section class="bbx-builder-row bbx-4x-padding-bottom">
                <div class="section-content-width"> <!-- Element Width -->
                  <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
                    <div class="bbx-col-1">
                      <div class="bbx-element-content">
                        <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
                          <div class="bbx-col-1">
                          <?php $news = $page->find('news_section')->children()->visible()->flip()->paginate(10) ?>

                        	<?php foreach($news as $articles): ?>
                            <article class="bbx-post-wrap bbx-animation-on-appear fade_up">
                              <div class="bbx-image-wrap">
                                <span class="bbx-image">
                                  <img src="<?php echo $articles->image()->url() ?>" alt="<?php echo html($articles->image()->title()) ?>">
                                  <a href="<?php echo $articles->image()->url() ?>" class="bbx-gallery-link bbx-photo-swipe"
                                                   data-bbx-photo-swipe-rel="home_blog"
                                                   data-origin-size="<?php echo html($articles->image()->width()) ?>x<?php echo html($articles->image()->height()) ?>"><i class="fa fa-search"></i></a>
                                </span>
                                <!--
                                                * BbxPhotoSwipe
                                                *
                                                * Based on PhotoSwipe library by @dimsemenov
                                                *
                                                * @param string data-bbx-photo-swipe-rel Defines the group to select images from in the gallery
                                                * @param string data-origin-size In the format "widthXheight" defines the original size of the image
                                                -->
                                <a href="standard-blog-post.html" class="bbx-gallery-link bbx-post-link"><i class="fa fa-link"></i></a>
                                <div class="bbx-date-container bbx-date-container-dark">
                                  <span class="bbx-month"><?php echo $articles->date('M') ?></span>
                                  <span class="bbx-day"><?php echo $articles->date('j') ?></span>
                                </div>
                              </div>
                              <div class="bbx-post-content">
                                <h3><a class="bbx-dark-link" href="standard-blog-post.html"><?php echo $articles->title()->html() ?></a></h3>
                                <p class="transparent-text-black excerpt"><?php echo $articles->text()->kirbytext() ?></p>
                                <div class="bbx-meta-container">
                                  <a class="bbx-bullet-link bbx-dark-link" href="<?php echo $page->url() ?>">Read More <i class="fa fa-plus"></i></a>
                                  
                                </div>
                              </div>
                            </article>
                            <?php endforeach ?>
                            <?php if($articles->pagination()->hasPages()): ?>
                            <ul class="bbx-std-pagination">
                              <?php if($articles->pagination()->hasPrevPage()): ?>
							  <li><a href="<?php echo $articles->pagination()->prevPageURL() ?>">previous</a></li>
                              <?php endif ?>
                              <?php foreach($articles->pagination()->range(10) as $r): ?>
    						  <li><a<?php if($articles->pagination()->page() == $r) echo ' class="current"' ?> href="<?php echo $articles->pagination()->pageURL($r) ?>"><?php echo $r ?></a></li>
    						  <?php endforeach ?>	
                              
                              <?php if($articles->pagination()->hasNextPage()): ?>
                              <li><a href="<?php echo $articles->pagination()->nextPageURL() ?>">next</a></li>
                              <?php endif ?>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div class="bbx-col-3">
              <div class="widget-wrap">
                <h5 class="bbx-sergeant transparent-text-black">Custom Text</h5>
                <span class="bbx-wide-divider-small-detail"></span>
                <div class="textwidget">
                  <p class="transparent-text-black">All theme effects have been <mark class="emerald">carefully</mark> thought through. Each effect has been fully tested and made sure compatible with the wholesome feel of the theme.</p>
                  <p>Vivamus auctor, ex ac finibus congue, libero purus facilisis nisi, sed <del>egestas ex ipsum id nisl</del>. Curabitur sed ipsum in lorem ultricies pharetra. Duis facilisis erat nulla. Etiam nulla dui, hendrerit quis dui a, aliquam tempor quam.</p>
                </div>
              </div>
              <div class="widget-wrap">
                <h5 class="bbx-sergeant transparent-text-black">Social Networks</h5>
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
              
            </div>
          </div>
        </div>
      </section>
<?php snippet('footer') ?>