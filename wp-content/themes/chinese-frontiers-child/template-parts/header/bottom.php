<div class="container max-w-fhd sm:px-4 px-2 flex items-center relative site-header__bottom">
  <!-- Mobile menu back -->
  <span class="flex lg:hidden items-center site-header__mobile">
    <a href="#" class="site-header__mobile--back"></a>
    <span class="site-header__mobile--title"><?php _e('Małe AGD do domu', 'zelmer'); ?></span>
  </span>

  <div class="site-branding flex items-center">
    <?php
    if (is_front_page()) :
    ?>
    <h1 class="site-title text-white tracking-wide flex items-center md:ml-0">
      <?php $slogan = get_field('logotyp', 'options');
        if ($slogan): ?>
      <img src="<?php echo $slogan['url']; ?>" alt="<?php bloginfo('name'); ?>" class="convert-svg">
      <?php else: ?>
      <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/logo.svg" alt="<?php bloginfo('name'); ?>"
        class="convert-svg">
      <?php endif; ?>
      <span><?php bloginfo('name'); ?></span>
    </h1>
    <?php
    else :
    ?>
    <a href="<?php echo get_home_url(); ?>">
      <span class="site-title tracking-wide flex items-center text-2xl ml-5 md:ml-0">
        <?php $slogan = get_field('logotyp', 'options');
        if ($slogan): ?>
        <img src="<?php echo $slogan['url']; ?>" alt="<?php bloginfo('name'); ?>" class="convert-svg">
        <?php else: ?>
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/logo.svg" alt="<?php bloginfo('name'); ?>"
          class="convert-svg">
        <?php endif; ?>
        <span><?php bloginfo('name'); ?></span>
      </span>
    </a>
    <?php
    endif; ?>
  </div><!-- .site-branding -->

  <nav id="site-navigation" class="main-navigation ml-auto mr-6 hidden lg:block">
    <?php
    wp_nav_menu(
      array(
        'menu' => 'Header Menu - Bottom',
        'menu_id'        => 'primary-menu',
        'menu_class' => 'flex items-center'
      )
    );
    ?>
  </nav><!-- #site-navigation -->
  <div class="hidden lg:block ml-auto lg:ml-0"><?php get_product_search_form(); ?></div>
  <div class="open-menu site-header__search lg:hidden block mr-2">
    <a href="#" class="block icon-search open-menu rounded-md p-2 hover:bg-white hover:bg-opacity-5 transition-all"
      data-for="site-header__search"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/loupe.svg"
        alt="Szukaj..." class="pointer-events-none h-6"></a>
    <?php get_template_part('template-parts/content-search-header'); ?>
  </div>
  <div class="hamburger lg:hidden block">
    <i></i>
    <span class="close-wrap">
      <span class="close-line close-line-1"></span>
      <span class="close-line close-line-2"></span>
    </span>
  </div>
</div>