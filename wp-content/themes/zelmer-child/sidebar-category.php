<aside class="filter" data-aos="fade">
  <div class="filter__topbar">
    <button class="filter__toggle btn-toggle">
      <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/filter.svg" alt="<?php _e('Filtruj', 'zelmer'); ?>">
      <span><?php _e('Filtruj', 'zelmer'); ?></span>
    </button>
    <?php
    woocommerce_result_count(); ?>

    <div class="filter__topbar--sortby">
      <?php echo '<h4 class="filter-title">' .  __('SORTUJ WEDŁUG:', 'zelmer'). '</h4>';

      woocommerce_catalog_ordering(); ?>

    </div>
  </div>

  <div class="filter__yith">
    <div class="filter__yith--head">
      <div>
        <span class="h2"><?php _e('Filtruj', 'zelmer'); ?></span>
      </div>
      <div class="flex justify-end">
        <button class="btn-toggle flex lg:hidden">&times;</button>
      </div>
    </div>
    <?php $category = get_queried_object();
    $shortcode = get_field('filtr_shortcode', 'product_cat_' . $category->term_id);

    if ($shortcode) {
      echo do_shortcode($shortcode);
    } ?>
  </div>
</aside>