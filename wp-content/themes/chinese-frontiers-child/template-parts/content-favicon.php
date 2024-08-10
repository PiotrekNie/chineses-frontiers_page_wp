<?php $favicon = get_field('favicon', 'options');
$theme_color = get_field('theme_color', 'options');
$favicon_32x32px = get_field('favicon_32x32px', 'options');
$favicon_16x16px = get_field('favicon_16x16px', 'options');
$apple_touch_icon = get_field('apple_touch_icon', 'options');
$safari_pinned_tab = get_field('safari_pinned_pab', 'options'); ?>

<link rel="apple-touch-icon" sizes="180x180"
  href="<?php echo $apple_touch_icon ? $apple_touch_icon['url'] : get_stylesheet_directory_uri() . '/img/favicon/apple-touch-icon.png'?>">
<link rel="icon" type="<?php echo get_stylesheet_directory_uri(); ?>image/png" sizes="32x32"
  href="<?php echo $favicon_32x32px ? $favicon_32x32px['url'] : get_stylesheet_directory_uri() .'/img/favicon/favicon-32x32.png'?>">
<link rel="manifest" href="<?php echo get_stylesheet_directory_uri(); ?>/img/favicon/site.webmanifest"
  crossorigin="use-credentials">
<link rel="mask-icon"
  href="<?php echo $safari_pinned_tab ? $safari_pinned_tab['url'] : get_stylesheet_directory_uri() . '/img/favicon/safari-pinned-tab.svg' ?>"
  color="<?php echo $theme_color ? $theme_color : '#004a9c' ?>">
<link rel="shortcut icon"
  href="<?php echo $favicon ? $favicon['url'] : get_stylesheet_directory_uri() . '/img/favicon/favicon.ico' ?>">
<meta name="msapplication-TileColor" content="<?php echo $theme_color ? $theme_color : '#004a9c' ?>">
<meta name="msapplication-config" content="/img/favicon/browserconfig.xml">
<meta name="theme-color" content="<?php echo $theme_color ? $theme_color : '#004a9c' ?>">