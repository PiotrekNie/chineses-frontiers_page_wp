<?php if (is_nav_menu('Wersje językowe')) : ?>
<div class="lang dropdown open-menu">
  <?php $my_current_lang = apply_filters( 'wpml_current_language', NULL ); ?>
  <a href="#" class="lang__current"><?php echo $my_current_lang; ?></a>
  <?php
    wp_nav_menu(
      array(
        'menu' => 'Wersje językowe',
        'menu_id' => 'languages-menu',
        'container' => 'nav',
        'container_class' => 'sub-menu',
      )
    ); ?>
</div>
<?php endif; ?>