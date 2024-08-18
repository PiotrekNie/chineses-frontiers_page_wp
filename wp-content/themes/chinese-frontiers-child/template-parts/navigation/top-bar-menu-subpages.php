<?php
wp_nav_menu(
  array(
    'menu' => 'Navigation Subpages',
    'menu_id'        => 'menu-subpages',
    'container' => 'nav',
    'container_class' => 'menu-main-menu-container hidden lg:block mx-auto',
    'container_id' => 'site-navigation'
  )
);