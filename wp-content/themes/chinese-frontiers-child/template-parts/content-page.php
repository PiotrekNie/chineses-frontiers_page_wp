<?php

/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package chinese-frontiers
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <?php if (has_post_thumbnail()) : ?>
  <header class="entry-header key-visual container max-w-fhd mb-16" data-aos="fade">
    <div class="flex justify-center w-full z-10 relative">
      <div class="md:w-10/12 w-full">
        <div class="key-visual__text">
          <?php the_title('<h1 class="entry-title h1 text-white">', '</h1>'); ?>
        </div>
      </div>
    </div>
    <?php chinese_frontiers_post_thumbnail(); ?>
  </header><!-- .entry-header -->
  <?php else : ?>
  <header class="entry-header container xxl:max-w-fhd sm:px-4 px-2">
    <div class="flex justify-center">
      <div class="md:w-10/12 w-full flex">
        <div class="md:w-10/12 w-full">
          <?php the_title('<h1 class="entry-title h1">', '</h1>'); ?>
        </div>
      </div>
    </div>
  </header>
  <?php endif; ?>

  <div class="entry-content container xxl:max-w-fhd sm:px-4 px-2 md:pt-10 pt-6">
    <div class="flex justify-center w-full z-10 relative">
      <div class="md:w-10/12 w-full flex">
        <div class="md:w-10/12 w-full">
          <?php
          the_content();

          wp_link_pages(
            array(
              'before' => '<div class="page-links">' . esc_html__('Pages:', 'zelmer'),
              'after'  => '</div>',
            )
          );
          ?>
        </div>
      </div>
    </div>
  </div><!-- .entry-content -->

  <?php if (get_edit_post_link()) : ?>
  <footer class="entry-footer">
    <?php
      edit_post_link(
        sprintf(
          wp_kses(
            /* translators: %s: Name of current post. Only visible to screen readers */
            __('Edit <span class="screen-reader-text">%s</span>', 'zelmer'),
            array(
              'span' => array(
                'class' => array(),
              ),
            )
          ),
          wp_kses_post(get_the_title())
        ),
        '<span class="edit-link">',
        '</span>'
      );
      ?>
  </footer><!-- .entry-footer -->
  <?php endif; ?>
</article><!-- #post-<?php the_ID(); ?> -->