      <footer class="bbx-4x-padding-bottom bbx-4x-padding-top bbx-dark-background">
        <div class="bbx-footer-content bbx-main-container">
          <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
            <div class="bbx-col-3">
              <div class="widget-wrap">
                <p class="transparent-text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nisi tincidunt, molestie nunc vulputate, posuere mauris. Donec gravida augue eget risus.</p>
                <span class="bbx-sign">John Doe Sign</span>
              </div>
            </div>
            <div class="bbx-col-3">
              <div class="widget-wrap">
                <h5 class="bbx-sergeant">Our Firm</h5>
                <ul class="bbx-icon-list bbx-no-margin">
                  <li>
                    <i class="fa fa-user transparent-text-black"></i><strong><a href="#">Gregory Moreno</a></strong> <span class="transparent-text-black">/ Lawyer</span>
                  </li>
                  <li>
                    <i class="fa fa-user transparent-text-black"></i><strong><a href="#">Henry Sanders</a></strong> <span class="transparent-text-black">/ Lawyer</span>
                  </li>
                  <li>
                    <i class="fa fa-user transparent-text-black"></i><strong><a href="#">Ronald Lawrence</a></strong> <span class="transparent-text-black">/ Lawyer</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="bbx-col-3">
              <div class="widget-wrap">
                <h5 class="bbx-sergeant">Stay Connected</h5>
                <ul class="bbx-icon-list bbx-no-margin">
                  <li><i class="fa fa-phone transparent-text-black"></i><strong>215-564-4312</strong></li>
                  <li><i class="fa fa-globe transparent-text-black"></i><span class="transparent-text-black">4743 Ridge Road Philadelphia, PA</span></li>
                  <li><i class="fa fa-envelope-o transparent-text-black"></i><span class="transparent-text-black">office@relytemplate.com</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <a href="#" class="bbx-back-to-top bbx-fancy-link bbx-fancy-box">
          <span class="fancy-text">
            <i class="fa fa-chevron-up"></i>
          </span>
        </a>
      </footer>
      <div class="bbx-copyright">
        <div class="bbx-copyright-content">
          <ul class="footer-social-links">
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
          </ul>
          <p class="transparent-text-white bbx-no-margin bbx-align-right"><?php echo $site->copyright()->html() ?></p>
        </div>
      </div>
      <span class="bbx-left-border"></span>
      <span class="bbx-right-border"></span>
      <span class="top-layout-detail"></span>
      <span class="bottom-layout-detail"></span>
      <div id="bbx-loading-mask">
        <!--
                <div id="bbx-loader">
                    <div class="bbx-loader-icon"><i class="fa fa-balance-scale"></i></div>
                    <div class="bbx-loader-filler"></div>
                </div>
                 -->
      </div>
    </div>
    <!-- Bbx Fullscreen popup containers -->
    <div id="bbx-header-search-form-container" class="bbx-fullscreen-popup-container bbx-dark-background">
      <div class="bbx-popup-mask"></div>
      <div class="bbx-popup-content">
        <form method="get" action="/" class="search-form bbx-form">
          <p class="bbx-fancy-input">
            <!--<input class="bbx-search-input" type="text" name="s" placeholder="Search..." autocomplete="off">
                    <input type="submit" class="submit" value="Search">-->
            <label for="f__search">Search</label>
            <br>
            <span class="wpcf7-form-control-wrap your-name">
              <input id="f__search" type="text" name="your-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Search">
              <button type="submit"><i class="fa fa-search"></i></button>
            </span>
          </p>
        </form>
      </div>
    </div>
    <div id="bbx-full-screen-contact-form-container" class="bbx-fullscreen-popup-container bbx-dark-background">
      <div class="bbx-popup-mask"></div>
      <div class="bbx-popup-content">
        <div class="bbx-row">
          <div class="bbx-col-1">
            <form action="components/mailer.php" accept-charset="UTF-8" class="bbx-form wpcf7-form bbx-corner-details visible-corners" method="post">
              <p class="bbx-fancy-input">
                <label for="f__name">Your Name (required)</label>
                <br>
                <span class="wpcf7-form-control-wrap your-name">
                  <input id="f__name" type="text" name="contact_form[name]" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Your Name (required)">
                </span>
              </p>
              <p class="bbx-fancy-input">
                <label for="f__email">Your E-Mail (required)</label>
                <br>
                <span class="wpcf7-form-control-wrap your-name">
                  <input id="f__email" type="text" name="contact_form[email]" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Your E-Mail (required)">
                </span>
              </p>
              <p class="bbx-2x-margin-bottom bbx-fancy-input">
                <label for="f__message">Your Message</label>
                <br>
                <span class="wpcf7-form-control-wrap your-message">
                  <textarea id="f__message" name="contact_form[message]" cols="40" rows="8" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Your Message"></textarea>
                </span>
              </p>
              <!--
                            BbxProgessButton
                            
                            Display progress indicator button, triggered on click
                            
                            @param float data-halt  Sets the value to stop the progress to. Should be used only
                                                    if the button's status is planned to be triggered manually to 1
                                                    e.g. button.bbxProgressButton.setStatus(1)
                            -->
              <a href="#" class="bbx-fancy-link bbx-submit bbx-progress-button" data-halt="0.8">
                <span class="bbx-fancy-button-progress"><span class="progress-indicator"></span></span>
                <span class="fancy-text">
                  Send
                                </span>
              </a>
              <!--
                            Leave this (even if empty), as the javascript sending functions will expect this container
                            to display success/eror results
                            -->
              <p class="form-extra-info transparent-text-black form-results-container">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nisi tincidunt, molestie nunc vulputate
                            </p>
              <span class="bbx-top-left-detail"></span>
              <span class="bbx-top-right-detail"></span>
              <span class="bbx-bottom-right-detail"></span>
              <span class="bbx-bottom-left-detail"></span>
            </form>
                                </div>
        </div>
      </div>
    </div>
    <div id="bbx-full-screen-popup-sidebar-container" class="bbx-fullscreen-popup-container">
      <div class="bbx-popup-mask"></div>
      <div class="bbx-popup-content">
        <div class="widget-wrap">
          <ul class="bbx-popup-menu">
            <li class="bbx-animation-on-appear fade_up delay-1"><a href="index.html">Home</a></li>
            <li class="bbx-animation-on-appear fade_up delay-2"><a href="about-us.html">About Us</a></li>
            <li class="bbx-animation-on-appear fade_up delay-3"><a href="clients.html">Clients</a></li>
            <li class="bbx-animation-on-appear fade_up delay-4"><a href="#">Pages</a></li>
            <li class="bbx-animation-on-appear fade_up delay-5"><a href="news.html">News</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- PhotoSwipe gallery main container -->
    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="pswp__bg"></div>
      <div class="pswp__scroll-wrap">
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
            <div class="pswp__counter"></div>
            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
            <button class="pswp__button pswp__button--share" title="Share"></button>
            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip"></div>
          </div>
          <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
          </button>
          <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
          </button>
          <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Scripts -->

    <?php echo js('assets/js/all.js') ?>
    <?php echo js('assets/js/jquery-1.11.3.min.js') ?>
    <?php echo js('assets/js/scrollOnePage.js') ?>

    <?php if(strcmp((string)$page->template(), 'investment') == 0): ?>
    <script type="text/javascript">
    var newHeight = parseInt($('#sidebar').css('height')) + 200;
    newHeight = newHeight+'px';
    console.log(newHeight);
    $('#maintext').css({'minHeight': newHeight});
    </script>
	<?php endif ?>
  </body>
</html>