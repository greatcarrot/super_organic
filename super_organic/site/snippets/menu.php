<nav role="navigation">

  <ul class="menu cf">
    <?php foreach($pages->visible() as $p): ?>
    <li>
      <a <?php e($p->isOpen(), ' class="active"') ?> href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a>

      <?php if($p->hasVisibleChildren()): ?>
      <ul class="submenu">
        <?php foreach($p->children()->visible() as $p): ?>
        <li>
          <a href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a>
        </li>
        <?php endforeach ?>
      </ul>
      <?php endif ?>

    </li>
    <?php endforeach ?>
  </ul>

</nav>
  <nav>
    <a id="bbx-mobile-menu-button" href="#">
      <span></span>
    </a>
    <a href="index.html" class="bbx-logo">
      <img class="bbx-logo-light" src="<?php echo url('assets/images/logo-r-peter-river.png') ?>" alt="logo image">
      <img class="bbx-logo-default" src="<?php echo url('assets/images/logo-r-peter-river.png') ?>" alt="logo image">
    </a>
    <div class="bbx-logo-extra-text">
      <p class="bbx-meta bbx-no-margin">
        <!--<i class="fa fa-phone transparent-text-white" style="margin-right:12px;"></i> 215-564-4312-->
        <!--RELY - -->Super Organic Dairy
    </p>
    </div>
    <ul class="prime-nav">
      <li class="current-menu-item"><a href="index.html">Home</a></li>
      <li class=""><a href="#about">About</a></li>
      <li class=""><a href="#news">News</a></li>
      <li class=""><a href="#investments">New Zealand Investments</a></li>
      <li class=""><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
<nav id="bbx-mobile-menu">
  <ul id="prime-nav-mobile" class="prime-nav-mobile-list">
    <li class="menu-item menu-item-has-children" style="overflow: hidden;">
      <a href="index.html">Home</a>
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