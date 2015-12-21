<section id="contact" class="bbx-builder-row bbx-4x-padding-bottom">
        <div class="section-content-width"> <!-- Element Width -->
          <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
            <div class="bbx-col-1">
              <h3><?php echo $data->title()->html() ?></h3>
              <div class="bbx-element-content">
                <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
                  <div class="bbx-col-1">
                    <!--
                                *
                                * BbxMap
                                *
                                * A Google Map with some custom functionalities
                                *
                                * @param string data-latlng - a comma separated string pointing to the center of the map
                                * @param string data-markerlatlng - a comma separated string pointing to the map coords (if marker needed)
                                * @param string data-pin-style - the style of the pint. Available options:
                                                                                        dark_svg, white_svg, dark_png, white_png
                                * @param int data-zoom - the zoom level of the map
                                * @param bool data-wheel - whether to enable zoom on scroll wheel
                                * @param bool data-zoom-control - whether to display zoom controls
                                * @param bool data-street-view - whether to display street view control
                                * @param bool data-pan - display of pan control
                                * @param bool data-scale - display scale
                                * @param string data-map-style - based on snazzymaps (https://snazzymaps.com/). Available in theme:
                                                                subtleGrayscale
                                                                blueWater
                                                                paleDown
                                                                shadesOfGrey
                                                                midnightCommander
                                                                appleMapsEsque
                                                                retro
                                                                lightMonochrome
                                                                blueEssence
                                                                paper
                                                                flatMap
                                                                greyscale
                                                                blackAndWhite
                                                                mutedBlue
                                                                cleanCut
                                                                snazzyMaps
                                                                redHues
                                                                vintage
                                                                aDarkWorld
                                -->
                    <div class="bbx-map"
                                     style="padding-top:33%;"
                                     data-latng="42.135251626085854,24.756848411331248"
                                     data-markerlatlng="42.13627,24.76276000000007"
                                     data-pin-style="dark_svg"
                                     data-zoom="13"
                                     data-wheel="false"
                                     data-zoom-control="true"
                                     data-street-view="false"
                                     data-pan="true"
                                     data-scale="false"
                                     data-map-style="subtleGrayscale">
                      <div class="bbx-map-holder"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bbx-builder-row bbx-4x-padding-bottom">
        <div class="section-content-width"> <!-- Element Width -->
          <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
            <div class="bbx-col-3">
              <div class="bbx-element-content">
                <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
                  <div class="bbx-col-1">
                    <div class="bbx-simple-icon-box style-2 bbx-3x-margin-bottom">
                      <span class="bbx-simple-box">
                        <i class="fa fa-map-marker"></i>
                      </span>
                      <p><strong><a class="bbx-dark-link" href="#">2760 Bell Street<br>
                             San Antonio, TX 78217</a></strong></p>
                      <p class="transparent-text-black bbx-no-margin bbx-block">210-995-0926<br>
                        sanantonio@mail.com</p>
                    </div>
                    <span class="bbx-wide-divider-small-detail"></span>
                    <h5 class="bbx-sergeant transparent-text-black">Extra Details</h5>
                    <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong></p>
                    <p class="transparent-text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p class="transparent-text-black bbx-2x-margin-bottom">Donec gravida augue eget risus varius lacinia. Vestibulum gravida dictum est eu.</p>
                    <a href="#" class="bbx-solid-social-link bbx-facebook">
                      <i class="fa fa-facebook"></i>
                    </a>
                    <a href="#" class="bbx-solid-social-link bbx-twitter">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="bbx-col-1-5">
              <div class="bbx-element-content">
                <div class="bbx-row bbx-grid-4x-margin no-outter-padding">
                  <div class="bbx-col-1">
                    <form action="<?php echo url('assets/components/mailer.php'); ?>" accept-charset="UTF-8" class="bbx-form wpcf7-form bbx-corner-details visible-corners" method="post">
                      <p class="bbx-fancy-input">
                        <label for="f1name">Your Name (required)</label>
                        <br>
                        <span class="wpcf7-form-control-wrap your-name">
                          <input id="f1name" type="text" name="contact_form[name]" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Your Name (required)">
                        </span>
                      </p>
                      <p class="bbx-fancy-input">
                        <label for="f1email">Your E-Mail (required)</label>
                        <br>
                        <span class="wpcf7-form-control-wrap your-name">
                          <input id="f1email" type="text" name="contact_form[email]" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Your E-Mail (required)">
                        </span>
                      </p>
                      <p class="bbx-2x-margin-bottom bbx-fancy-input">
                        <label for="f1message">Your Message</label>
                        <br>
                        <span class="wpcf7-form-control-wrap your-message">
                          <textarea id="f1message" name="contact_form[message]" cols="40" rows="8" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Your Message"></textarea>
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
                        We will get back to you within 1-2 business days
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
          </div>
        </div>
      </section>