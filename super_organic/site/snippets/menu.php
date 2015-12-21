  <nav>
    <a id="bbx-mobile-menu-button" href="#">
      <span></span>
    </a>
    <a href="<?php echo $site->homePage()->url() ?>" class="bbx-logo">
      <img class="bbx-logo-light" src="<?php echo url('assets/images/super_organic_logo.png') ?>" alt="logo image">
      <img class="bbx-logo-default" src="<?php echo url('assets/images/super_organic_logo.png') ?>" alt="logo image">
    </a>
    <div class="bbx-logo-extra-text">
      <p class="bbx-meta bbx-no-margin">
        <!--<i class="fa fa-phone transparent-text-white" style="margin-right:12px;"></i> 215-564-4312-->
        <!--RELY - --><?php echo $site->title()->html() ?>
    </p>
    </div>
    <ul class="prime-nav">
      <li class="current-menu-item"><a href="<?php if(page()->isHomePage()){echo "#main";}else{echo $site->homePage()->url();}?>">Home</a></li>
      <li class=""><a href="<?php if(page()->isHomePage()){echo "#about";}else{echo $site->homePage()->url() . DS . "#about";}?>">About</a></li>
      <li class=""><a href="<?php if(page()->isHomePage()){echo "#news";}else{echo $site->homePage()->url() . DS . "#news";}?>">News</a></li>
      <li class=""><a href="<?php if(page()->isHomePage()){echo "#investments";}else{echo $site->homePage()->url() . DS . "#investments";}?>">New Zealand Investments</a></li>
      <li class=""><a href="<?php if(page()->isHomePage()){echo "#contact";}else{echo $site->homePage()->url() . DS . "#contact";}?>">Contact</a></li>
    </ul>
  </nav>
</header>
<nav id="bbx-mobile-menu">
  <ul id="prime-nav-mobile" class="prime-nav-mobile-list">
    <li class="menu-item menu-item-has-children" style="overflow: hidden;">
      <a href="#main">Home</a>
    </li>
    <li class="menu-item">
      <a href="#about">About</a>
    </li>
    <li class="menu-item">
      <a href="#news">News</a>
    </li>
    <li>
      <a href="#investments">New Zealand Investments</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
  </ul>
</nav>