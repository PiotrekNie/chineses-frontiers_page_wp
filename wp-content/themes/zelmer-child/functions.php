<?php

/**
 * Template constants
 */
define('ZELMER_THEME_DIRECTORY', get_stylesheet_directory());

/**
 * Enqueue scripts and styles.
 */
require_once ZELMER_THEME_DIRECTORY . '/inc/enqueue-scripts.php';

/**
 * Custom option page for ACF
 */
require_once ZELMER_THEME_DIRECTORY . '/inc/theme-options.php';

/**
 * Custom breadcrumbs
 */
require_once ZELMER_THEME_DIRECTORY . '/inc/custom-breadcrumbs.php';

/**
 * Enable upload & preview WEBPL files
 */
require_once ZELMER_THEME_DIRECTORY . '/inc/upload-webpl-files.php';

/**
 * Custom features for articles
 */
require_once ZELMER_THEME_DIRECTORY . '/inc/article-options.php';

/**
 * Add extra field for WC Attributes
 */
require_once ZELMER_THEME_DIRECTORY . '/inc/woocommerce-extra-fields.php';

/**
 * Woocommerce - modify product page
 */
require_once ZELMER_THEME_DIRECTORY . '/inc/woocommerce-product-modifier.php';

/**
 * Woocommerce - modify product category page
 */
require_once ZELMER_THEME_DIRECTORY . '/inc/woocommerce-category.php';

/**
 * Wordpress - modify theme
 */
require_once ZELMER_THEME_DIRECTORY . '/inc/wordpress-modifier.php';

/**
 * WPML - display product attributes translation
 */
require_once ZELMER_THEME_DIRECTORY . '/inc/wpml-product-attr.php';

/**
 * Wordpress - allow to upload ico & svg files
 */
require_once ZELMER_THEME_DIRECTORY . '/inc/allow-upload-files.php';