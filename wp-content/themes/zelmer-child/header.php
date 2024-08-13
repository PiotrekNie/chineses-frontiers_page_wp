<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package zelmer
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="https://gmpg.org/xfn/11">

  <!-- Favicon -->
  <?php get_template_part('template-parts/content', 'favicon'); ?>
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>
  <div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'zelmer'); ?></a>

    <header id="masthead" class="site-header ">
      <?php get_template_part('template-parts/header/top'); ?>
      <?php get_template_part('template-parts/header/bottom'); ?>
      <?php get_template_part('template-parts/content-mobile-menu'); ?>
    </header><!-- #masthead -->
    <main id="primary" class="site-main">