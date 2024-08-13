<?php

/**
 * Template for displaying search forms in Custom Theme
 *
 * @package WordPress
 * @subpackage Content Hub Child Theme
 * @since 1.0
 * @version 1.0
 */

?>


<form role="search" method="get" class="search-form" action="<?php echo esc_url(home_url('/')); ?>">
  <input type="search" class="search-field bg-transparent border-0 tracking-wider" id="search-field"
    value="<?php echo get_search_query(); ?>" name="s" placeholder=" " />
  <label for="search-field"><?php _e('WYSZUKAJ', 'zelmer'); ?></label>
  <button type="submit" class="search-submit"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/loupe.svg"
      alt="Szukaj"></button>
</form>