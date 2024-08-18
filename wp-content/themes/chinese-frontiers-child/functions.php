<?php

/**
 * Template constants
 */
define('CF_THEME_DIRECTORY', get_stylesheet_directory());

/**
 * Enqueue scripts and styles.
 */
require_once CF_THEME_DIRECTORY . '/inc/enqueue-scripts.php';

/**
 * Custom option page for ACF
 */
require_once CF_THEME_DIRECTORY . '/inc/theme-options.php';


/**
 * Custom features for articles
 */
require_once CF_THEME_DIRECTORY . '/inc/article-options.php';

/**
 * Wordpress - modify theme
 */
require_once CF_THEME_DIRECTORY . '/inc/wordpress-modifier.php';

/**
 * Enable upload & preview WEBPL files
 */
require_once CF_THEME_DIRECTORY . '/inc/upload-webpl-files.php';

/**
 * Wordpress - allow to upload ico & svg files
 */
require_once CF_THEME_DIRECTORY . '/inc/allow-upload-files.php';

/**
 * Wordpress - allow to upload ico & svg files
 */
require_once CF_THEME_DIRECTORY . '/inc/theme-logo.php';