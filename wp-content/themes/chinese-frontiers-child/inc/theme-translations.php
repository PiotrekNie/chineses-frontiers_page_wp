<?php 
function child_theme_slug_setup() {
  load_child_theme_textdomain( 'chinese-frontiers', get_stylesheet_directory() . '/languages' );
}
add_action( 'after_setup_theme', 'child_theme_slug_setup' );