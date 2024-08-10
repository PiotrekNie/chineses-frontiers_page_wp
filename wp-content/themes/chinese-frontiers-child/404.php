<?php

/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package zelmer
 */

get_header();
?>

<main id="primary" class="site-main">

  <section class="error-404 not-found">
    <header class="page-header key-visual container xxl:max-w-fhd mb-16" data-aos="fade">
      <div class="flex justify-center w-full z-10 relative">
        <div class="md:w-10/12 w-full">
          <div
            class="key-visual__text md:text-white text-gray flex flex-col md:flex-row items-center md:justify-between py-6 md:py-0">
            <div class="md:w-4/12 w-full">
              <span class="block font-extrabold title-404">404</span>
            </div>
            <div class="md:w-5/12 w-full">
              <?php $page_content = get_field('tresc_komunikatu', 'options');
              if ($page_content) {
                echo $page_content;
              } ?>
            </div>
          </div>
        </div>
      </div>
      <?php $img = get_field('strona_404', 'options');
      if ($img) {
        echo wp_get_attachment_image($img['ID'], 'full', '', array('class' => 'attachment-post-thumbnail'));
      } ?>
    </header><!-- .page-header -->
  </section><!-- .error-404 -->

</main><!-- #main -->

<?php
get_footer();