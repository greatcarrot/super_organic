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
                              <div class="bbx-member-sidebar">
                                <ul class="bbx-icon-list bbx-2x-margin-bottom">
                                  <li><i class="fa fa-phone transparent-text-black"></i><strong class="color-color-option"><?php echo $page->tel()->kirbytext() ?></strong></li>
                                  <li><i class="fa fa-envelope transparent-text-black"></i><span><?php echo $page->email()->kirbytext() ?></span></li>
                                  <li><i class="fa fa-map-marker transparent-text-black"></i><?php echo $page->address()->kirbytext() ?></li>
                                </ul>
                                <h5 class="bbx-sergeant bbx-block transparent-text-black"><?php echo $page->leftsection()->kirbytext() ?></h5>
                                <span class="bbx-wide-divider-small-detail"></span>
                                <p><strong><?php echo $page->leftsectiontitle()->kirbytext() ?></strong></p>
                                <p class="bbx-2x-margin-bottom"><?php echo $page->leftsectiontext()->kirbytext() ?></p>
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
                              <h3 class="bbx-block bbx-no-margin">Frank Griffin</h3>
                              <h5 class="bbx-sergeant bbx-block transparent-text-black bbx-2x-margin-bottom">Attorney</h5>
                              <span class="bbx-wide-divider-small-detail"></span>
                              <div>
                                <p><span class="bbx-dropcap large-dropcap text-color-color-option">a</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nisi tincidunt, molestie nunc vulputate, posuere mauris. Donec gravida augue eget risus varius lacinia. Vestibulum gravida dictum est eu aliquam. Nulla suscipit, quam ac interdum ullamcorper, justo quam auctor libero, a porttitor ante urna eu ante.</p>
                                <p class="transparent-text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nisi tincidunt, molestie nunc vulputate, posuere mauris. Donec gravida augue eget risus varius lacinia. Vestibulum gravida dictum est eu aliquam. Nulla suscipit, quam ac interdum ullamcorper</p>
                                <h5 class="bbx-sergeant bbx-block transparent-text-black">Biography</h5>
                                <span class="bbx-wide-divider-small-detail"></span>
                                <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nisi tincidunt, molestie nunc vulputate, posuere mauris.</strong></p>
                                <p>Donec gravida augue eget risus varius lacinia. Vestibulum gravida dictum est eu aliquam. Nulla suscipit, quam ac interdum ullamcorper, justo quam auctor libero, a porttitor ante urna eu ante.</p>
                                <p class="bbx-2x-margin-bottom">Sed et tristique mauris. Fusce eget orci vel velit interdum blandit ut at augue. Ut rhoncus venenatis elit, a rhoncus mi iaculis nec. Nunc sit amet elit suscipit, efficitur purus vitae, ultrices enim. Cras ex magna, aliquet et venenatis ac, rhoncus at mauris. Nam a enim molestie enim tempus elementum non et diam.</p>
                                <h5 class="bbx-sergeant bbx-block transparent-text-black">Practice Areas</h5>
                                <span class="bbx-wide-divider-small-detail"></span>
                                <p>Sed et tristique mauris. Fusce eget orci vel velit interdum blandit ut at augue.</p>
                                <ul class="bbx-icon-list bbx-no-margin">
                                  <li><i class="fa fa-check color-turquoise"></i><strong>Cras ex magna, aliquet et venenatis ac, rhoncus at mauris. Nam a enim molestie.</strong></li>
                                  <li><i class="fa fa-check color-turquoise"></i><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nisi tincidunt, molestie nunc vulputate, posuere mauris.</strong></li>
                                  <li><i class="fa fa-check color-turquoise"></i><strong>Donec gravida augue eget risus varius lacinia. Vestibulum gravida dictum est eu.</strong></li>
                                </ul>
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