<?php if (is_nav_menu('Languages')) : ?>
<div class="lang dropdown open-menu">
  <?php
    wp_nav_menu(
      array(
        'menu' => 'Languages',
        'menu_id' => 'languages-menu',
        'container' => 'nav',
        'container_class' => 'sub-menu',
      )
    ); ?>
</div>
<?php endif; ?>