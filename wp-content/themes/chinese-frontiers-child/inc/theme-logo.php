<?php function chinese_frontiers_custom_logo_setup() {
	$defaults = array(
		'height'               => 277,
		'width'                => 450,
		'flex-height'          => true,
		'flex-width'           => true,
		'header-text'          => array( 'site-title', 'site-description' ),
		'unlink-homepage-logo' => false, 
	);
	add_theme_support( 'custom-logo', $defaults );
}
add_action( 'after_setup_theme', 'chinese_frontiers_custom_logo_setup' );