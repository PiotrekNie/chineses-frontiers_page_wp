<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package chinese-frontiers
 */

?>

</main>
<footer id="colophon" class="site-footer">
  <div class="site-info text-sm py-8 border-t border-gray">
    <div class="container">
      <div class="flex flex-col md:flex-row items-center text-center justify-center md:text-left">
        <p>
          <?php
          $year = date('Y');

          echo sprintf(__('&copy; Copyrights %s', 'chinese-frontiers'), $year);
          ?> | <a
            href="<?php echo esc_attr( esc_url( get_privacy_policy_url() ) ); ?>"><?php echo sprintf(__('Cookie Policy', 'chinese-frontiers')) ?></a>
        </p>
      </div>
    </div>
  </div><!-- .site-info -->
  <a href="#page" class="btt"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/icon-arrow-top.svg"
      alt="Back to top" aria-label="<?php echo sprintf(__('Back to page top', 'chinese-frontiers')) ?>"></a>
</footer><!-- #colophon -->

</div><!-- #page -->

<?php get_template_part('template-parts/home-url'); ?>

<?php wp_footer(); ?>

</body>

</html>

</html>