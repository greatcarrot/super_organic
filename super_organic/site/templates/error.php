<?php snippet('header') ?>
    <div id="bbx-contents-wrap" class="main-wrap" style="background-color:#262626-">
      <section id="main">
        <header class="bbx-head bbx-9x-padding-top">
        </header>
        <div> <!-- Blog Loop & Single Posts class="content-width-wrap" -->
          <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
            <div class="bbx-col-1"> <!-- Content -->
              <section class="bbx-builder-row bbx-4x-padding-bottom">
                <div class="section-content-width"> <!-- Element Width -->
                  <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
                    <div class="bbx-col-2 bbx-offset-4">
                      <div class="bbx-element-head bbx-align-center bbx-4x-padding-bottom">
                        <h1 class="bbx-no-margin">404</h1>
                        <br>
                        <p class="bbx-no-margin">Sorry, the page you’re looking for doesn’t exist. <a href="<?php echo $site->homePage()->url() ?>">Go back to home?</a></p>
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