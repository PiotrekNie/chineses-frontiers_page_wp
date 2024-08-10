<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package zelmer
 */

?>

</main>
<footer id="colophon" class="site-footer">
  <div class="site-footer__nav">
    <div class="container max-w-fhd sm:px-4 px-2">
      <div class="xl:grid flex md:flex-row flex-col md:items-start items-center xl:grid-cols-6 xl:gap-x-4 gap-x-3">
        <div class="xl:col-span-4">
          <?php $logo = get_field('logotyp', 'options');
          if ($logo) : ?>
          <img src="<?php echo $logo['url'] ?>" alt="<?php echo $logo['alt'] ?>">
          <?php else: ?>
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/logo.svg" alt="Zelmer">
          <?php endif;
          $social = get_field('social_media', 'options');
          if ($social) : ?>
          <div class="flex items-center mt-8">
            <span class="text-gray-300 mr-6"><?php _e('Dołącz do nas', 'zelmer'); ?></span>
            <?php get_template_part('template-parts/navigation/social-menu'); ?>
          </div>
          <?php endif; ?>
        </div>
        <div class="xl:m-0 md:ml-auto xl:w-auto md:w-2/12 md:pt-0 pt-7">
          <h3><?php _e('Informacje', 'zelmer'); ?></h3>
          <nav class="site-footer__nav--ul">
            <?php wp_nav_menu(array(
              'menu' => 'Informacje'
            )); ?>
          </nav>
        </div>
        <?php $contact_data = get_field('dane_kontaktowe', 'options');
        if ($contact_data) : ?>
        <div class="xl:w-auto md:w-3/12">
          <h3><?php _e('Dane kontaktowe', 'zelmer'); ?></h3>
          <ul class="site-footer__nav--list">
            <?php foreach ($contact_data as $contact) : ?>
            <li><?php echo $contact['tekst']; ?></li>
            <?php endforeach; ?>
          </ul>
        </div>
        <?php endif; ?>
      </div>
    </div>
  </div>
  <div class="site-info text-sm py-8">
    <div class="container">
      <div class="flex flex-col md:flex-row items-center text-center justify-center md:text-left">
        <p>
          <?php
          $dev_url = get_field('developer_page_url', 'options');
          $dev_name = get_field('developer_page_name', 'options');
          $n = $dev_name ?? 'They';
          $year = date('Y');

          echo sprintf(__('&copy; %s Zelmer by ', 'zelmer'), $year);

          if ($dev_url) {
            echo "<a href='{$dev_url}' class='hover:underline' target='_blank' rel='noopener noreferrer'>{$n}</a>";
          } else {
            echo $n;
          }

          $cookie = get_field('polityka_cookies', 'options');

          if ($cookie) :
            echo ' | '; ?>
          <a href="<?php the_permalink($cookie->ID); ?>" class="hover:underline"><?php echo $cookie->post_title; ?></a>
          <?php endif;
          ?>
        </p>
      </div>
    </div>
  </div><!-- .site-info -->
  <a href="#page" class="btt"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/backtotop.svg"
      alt="Back to top"></a>
</footer><!-- #colophon -->

</div><!-- #page -->

<?php get_template_part('template-parts/home-url'); ?>

<?php wp_footer(); ?>

</body>

</html>

</html>