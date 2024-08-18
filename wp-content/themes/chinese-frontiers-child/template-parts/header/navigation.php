<div class="site-header__top">
  <div class="container max-w-fhd sm:px-4 px-2 flex md:justify-center justify-end items-center gap-4">
    <?php if (is_front_page()) {get_template_part('template-parts/navigation/top-bar-menu');} else get_template_part('template-parts/navigation/top-bar-menu-subpages'); ?>
    <?php get_template_part('template-parts/navigation/languages-menu'); ?>
    <?php get_template_part('template-parts/navigation/hamburger'); ?>
  </div>
</div>