<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package zelmer
 */

get_header();
?>

<?php
while (have_posts()) :
	the_post();
	get_template_part('template-parts/content', get_post_type()); ?>

<div data-aos="fade">
  <?php the_post_navigation(
			array(
				'prev_text' => '<span class="nav-subtitle">' . esc_html__('Poprzedni artykuł:', 'zelmer') . '</span> <span class="nav-title">%title</span>',
				'next_text' => '<span class="nav-subtitle">' . esc_html__('Następny artykuł:', 'zelmer') . '</span> <span class="nav-title">%title</span>',
			)
		); ?>
</div>
<?php
endwhile; // End of the loop.
?>

<?php
get_template_part('template-parts/content-featured-posts', get_post_type());
get_footer();