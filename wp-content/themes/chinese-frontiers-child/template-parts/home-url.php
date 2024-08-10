<input type="hidden" id="home-url" value="<?php echo get_home_url(); ?>">
<input type="hidden" id="theme-url" value="<?php echo get_stylesheet_directory_uri(); ?>">
<?php $compare_url = get_field('porownaj_produkty_url', 'options');
if ($compare_url) {
  echo '<input type="hidden" id="compare-url" value="' . $compare_url . '">';
} ?>