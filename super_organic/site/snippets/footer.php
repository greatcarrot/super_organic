      <footer class="bbx-4x-padding-bottom bbx-4x-padding-top bbx-dark-background">
        <div class="bbx-footer-content bbx-main-container">
          <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
            <div class="bbx-col-3">
              
            </div>
            <div class="bbx-col-3">
              
            </div>
            <div class="bbx-col-3">
              
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