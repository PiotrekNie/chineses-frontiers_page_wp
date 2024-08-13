<?php

/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package zelmer
 */

get_header();

/**
 * @Breadcumbs
 */
$args = array(
  'delimeter' => '>',
);

woocommerce_breadcrumb($args); ?>

<?php if (have_posts()) : ?>

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

<div class="page-header container max-w-fhd sm:px-4 px-2 pt-12" data-aos="fade">
  <div class="flex justify-center">
    <div class="md:w-11/12">
      <h1 class="page-title">
        <span>
          <?php
            $allsearch = new WP_Query("s=$s&showposts=0");
            /* translators: %s: search query. */
            printf(_n('%s wynik', '%s wyniki', '%s wyników', 'zelmer'), $allsearch->found_posts);
            printf(__(' dla "%s"', 'zelmer'), get_search_query());
            ?>
        </span>
      </h1>
    </div>
  </div>
</div><!-- .page-header -->

<div class="container max-w-fhd sm:px-4 px-2" data-aos="fade">
  <div class="flex justify-center">
    <div class="md:w-11/12 w-full grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-9">
      <?php
        /* Start the Loop */
        while (have_posts()) :
          the_post();

          /**
           * Run the loop for the search to output the results.
           * If you want to overload this in a child theme then include a file
           * called content-search.php and that will be used instead.
           */
          get_template_part('template-parts/content', 'search');

        endwhile;
        ?>
    </div>
  </div>
  <div class="flex justify-center pt-8">
    <div class="md:w-11/12 w-full">
      <?php the_posts_navigation();

    else :

      get_template_part('template-parts/content', 'none'); ?>
    </div>
  </div>
</div>
<?php endif; ?>

<?php
get_footer();