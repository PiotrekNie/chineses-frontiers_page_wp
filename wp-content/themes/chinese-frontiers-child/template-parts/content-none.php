<?php

/**
 * Template part for displaying a message that posts cannot be found
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package zelmer
 */

?>

<section class="no-results not-found container max-w-fhd px-2 md:px-4 py-14">
  <header class="page-header text-center">
    <h1 class="page-title h1"><?php esc_html_e('Nic nie znaleziono', 'zelmer'); ?></h1>
  </header><!-- .page-header -->

  <div class="page-content text-center pt-9">
    <?php
		if (is_home() && current_user_can('publish_posts')) :

			printf(
				'<p>' . wp_kses(
					/* translators: 1: link to WP admin new post page. */
					__('Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'zelmer'),
					array(
						'a' => array(
							'href' => array(),
						),
					)
				) . '</p>',
				esc_url(admin_url('post-new.php'))
			);

		elseif (is_search()) :
		?>

    <p class="pb-9">
      <?php esc_html_e('Przepraszamy, ale&nbsp;nic nie pasuje do&nbsp;wyszukiwanych haseł. Spróbuj ponownie z&nbsp;innymi słowami kluczowymi.', 'zelmer'); ?>
    </p>
    <section class="search__form" data-aos="fade">
      <div class="container">
        <div class="flex justify-center">
          <div class="md:w-6/12 w-full">
            <div class="flex justify-center">
              <?php get_product_search_form(); ?>
            </div>
          </div>
        </div>
      </div>
    </section>
    <?php
		else :
		?>

    <p>
      <?php esc_html_e('It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'zelmer'); ?>
    </p>
    <section class="search__form" data-aos="fade">
      <div class="container">
        <div class="flex justify-center">
          <div class="md:w-6/12 w-full">
            <div class="flex justify-center">
              <?php get_product_search_form(); ?>
            </div>
          </div>
        </div>
      </div>
    </section>
    <?php
		endif;
		?>
  </div><!-- .page-content -->
</section><!-- .no-results -->