<?php

if (!defined('_S_VERSION')) {
  // Replace the version number of the theme on each release.
  define('_S_VERSION', '1.0.0');
}

add_action('wp_enqueue_scripts', 'content_hub_child_enqueue_styles', 100);

function content_hub_child_enqueue_styles()
{
  wp_enqueue_style('chinese-frontiers-main-style', get_stylesheet_directory_uri() . '/assets/css/app.css', '', _S_VERSION);

  wp_enqueue_script('chinese-frontiers-scripts', get_stylesheet_directory_uri() . '/assets/js/app.js', array(), _S_VERSION, true);

  /**
   * Custom styles for Front Page
   */
  if (is_front_page()) {
    wp_enqueue_style('chinese-frontiers-front-page', get_stylesheet_directory_uri() . '/assets/css/app-front.css', array('chinese-frontiers-main-style'), _S_VERSION);

    wp_enqueue_script('chinese-frontiers-front-scripts', get_stylesheet_directory_uri() . '/assets/js/app-front.js', array(), _S_VERSION, true);
  }

   /**
   * If is any page template
   */
  if (!is_front_page() && (is_search() || is_page() || is_404() || is_home() || is_singular('post') || is_category() || is_tag())) {
    wp_enqueue_script('chinese-frontiers-page-scripts', get_stylesheet_directory_uri() . '/assets/js/app-page.js', array(), _S_VERSION, true);

    wp_enqueue_style('chinese-frontiers-page-styles', get_stylesheet_directory_uri() . '/assets/css/app-page.css', array('chinese-frontiers-main-style'), _S_VERSION);
  }

   /**
   * Custo scripts - single article
   */
  if (is_singular('post')) {
    wp_enqueue_script('chinese-frontiers-article-scripts', get_stylesheet_directory_uri() . '/assets/js/app-article.js', array('chinese-frontiers-scripts'), _S_VERSION, true);
  }
}