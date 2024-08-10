<?php

if (!defined('_S_VERSION')) {
  // Replace the version number of the theme on each release.
  define('_S_VERSION', '1.0.0');
}

add_action('wp_enqueue_scripts', 'content_hub_child_enqueue_styles', 100);

function content_hub_child_enqueue_styles()
{
  wp_enqueue_style('zelmer-main-style', get_stylesheet_directory_uri() . '/assets/css/app.css', '', _S_VERSION);

  wp_enqueue_script('zelmer-scripts', get_stylesheet_directory_uri() . '/assets/js/app.js', array(), _S_VERSION, true);

  /**
   * Custom styles for Front Page
   */
  if (is_front_page()) {
    wp_enqueue_style('zelmer-front-page', get_stylesheet_directory_uri() . '/assets/css/app-front.css', array('zelmer-main-style'), _S_VERSION);

    wp_enqueue_script('zelmer-front-scripts', get_stylesheet_directory_uri() . '/assets/js/app-front.js', array(), _S_VERSION, true);
  }
}