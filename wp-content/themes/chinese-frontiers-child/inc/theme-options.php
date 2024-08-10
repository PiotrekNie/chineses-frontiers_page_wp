<?php

add_action('acf/init', 'my_acf_op_init');
function my_acf_op_init()
{

  // Check function exists.
  if (function_exists('acf_add_options_page')) {
    // Add parent.
    $parent = acf_add_options_page(array(
      'page_title'  => __('Ustawienia szablonu'),
      'menu_title'  => __('Edycja szablonu'),
      'redirect'    => false,
    ));

    // Add sub page.
    acf_add_options_page(array(
      'page_title'  => __('Wyróżnione artykuły'),
      'menu_title'  => __('Wyróżnione artykuły'),
      'parent_slug' => $parent['menu_slug'],
    ));

    // Add sub page.
    acf_add_options_page(array(
      'page_title'  => __('Social Settings'),
      'menu_title'  => __('Social media'),
      'parent_slug' => $parent['menu_slug'],
    ));

    // Add sub page.
    acf_add_options_page(array(
      'page_title'  => __('Newsletter'),
      'menu_title'  => __('Newsletter'),
      'parent_slug' => $parent['menu_slug'],
    ));

    // Add sub page.
    acf_add_options_page(array(
      'page_title'  => __('Resellerzy'),
      'menu_title'  => __('Resellerzy'),
      'parent_slug' => $parent['menu_slug'],
    ));

    // Add sub page.
    acf_add_options_page(array(
      'page_title'  => __('Favicon'),
      'menu_title'  => __('Favicon'),
      'parent_slug' => $parent['menu_slug'],
    ));
  }
}