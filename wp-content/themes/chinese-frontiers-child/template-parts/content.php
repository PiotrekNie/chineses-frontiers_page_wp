<?php

/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package chinese-frontiers
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('article'); ?>>
  <?php $args = array(
    'delimeter' => '>',
  ); ?>

  <header class="entry-header key-visual container max-w-fhd mb-10">
    <div class="flex justify-center w-full z-10 relative">
      <div class="md:w-10/12 w-full">
        <div class="key-visual__text md:w-7/12 w-full px-4 sm:px-6 md:px-0">
          <?php
          if (is_singular()) :
            the_title('<h1 class="entry-title h1 text-white">', '</h1>');
          else :
            the_title('<h2 class="entry-title"><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h2>');
          endif;
          ?>
        </div>
      </div>
    </div>
    <?php chinese_frontiers_post_thumbnail(); ?>
  </header><!-- .entry-header -->
  <div class="container max-w-fhd sm:px-4 px-2 flex flex-col md:flex-row md:justify-between items-center">
    <div
      class="entry-meta md:flex grid grid-cols-3 items-center text-sm text-gray-300 pt-4 md:pt-0 justify-center ml-auto">
      <div class="flex flex-col xl:flex-row">
        <?php chinese_frontiers_posted_on(); ?>
        <span class="mx-4 text-xs hidden xl:block">&#8226;</span>
        <span><?php echo reading_time(get_the_ID()); ?></span>
      </div>
      <span class="divider border-l border-gray-300 h-6 w-px block xl:mx-8 md:mx-4 mx-auto"></span>
      <nav class="md:w-auto w-full flex items-center social">
        <ul class="p-0 m-0 flex items-center md:justify-start justify-center">
          <li>
            <a href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>" target="_blank"
              rel="noopener noreferrer" class="block"><svg xmlns="#www.w3.org/2000/svg" width="7.5" height="14"
                viewBox="0 0 7.5 14" class="fill-current text-blue">
                <path id="icon-facebook" class="cls-1"
                  d="M1467.04,698.893l0.39-2.533h-2.44v-1.644a1.267,1.267,0,0,1,1.43-1.369h1.11V691.19a13.429,13.429,0,0,0-1.96-.171,3.089,3.089,0,0,0-3.31,3.41v1.931h-2.23v2.533h2.23v6.125h2.73v-6.125h2.05Z"
                  transform="translate(-1460.03 -691.031)"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/intent/tweet?url=<?php the_permalink(); ?>&amp;text=<?php the_title(); ?>"
              target="_blank" rel="noopener noreferrer" class="block"><svg xmlns="#www.w3.org/2000/svg" width="14"
                height="11.375" viewBox="0 0 14 11.375" class="fill-current text-blue">
                <path id="icon-twitter" class="cls-1"
                  d="M1529.28,739.167a6.15,6.15,0,0,0,1.44-1.484,5.853,5.853,0,0,1-1.66.445,2.886,2.886,0,0,0,1.27-1.582,5.75,5.75,0,0,1-1.83.693,2.868,2.868,0,0,0-4.96,1.963,3.591,3.591,0,0,0,.07.658,8.182,8.182,0,0,1-5.92-3,2.836,2.836,0,0,0-.39,1.448,2.875,2.875,0,0,0,1.28,2.39,2.862,2.862,0,0,1-1.29-.364v0.035a2.864,2.864,0,0,0,2.3,2.816,3.068,3.068,0,0,1-.76.1,3.533,3.533,0,0,1-.54-0.045,2.869,2.869,0,0,0,2.68,1.99,5.729,5.729,0,0,1-3.56,1.226,5.8,5.8,0,0,1-.69-0.036,8.168,8.168,0,0,0,12.57-6.875C1529.29,739.416,1529.29,739.291,1529.28,739.167Z"
                  transform="translate(-1516.72 -736.344)"></path>
              </svg></a>
          </li>
          <li><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=<?php the_permalink(); ?>"
              target="_blank" rel="noopener noreferrer" class="block"><svg xmlns="#www.w3.org/2000/svg" width="12.26"
                height="12.25" viewBox="0 0 12.26 12.25" class="fill-current text-blue">
                <path id="icon-linkedin" class="cls-1"
                  d="M1549.86,768.268V760.09h-2.53v8.178h2.53Zm-1.27-9.294a1.478,1.478,0,1,0-1.47-1.484A1.477,1.477,0,0,0,1548.59,758.974Zm10.78,9.294h0v-4.492c0-2.2-.47-3.891-3.04-3.891a2.66,2.66,0,0,0-2.4,1.32h-0.04V760.09h-2.43v8.178h2.53v-4.049c0-1.067.2-2.1,1.53-2.1,1.3,0,1.32,1.217,1.32,2.166v3.981h2.53Z"
                  transform="translate(-1547.12 -756.031)"></path>
              </svg></a></li>
        </ul>
      </nav>
    </div><!-- .entry-meta -->
  </div><!-- .entry-header -->

  <div class="entry-content container max-w-fhd sm:px-4 px-2">
    <div class="xl:grid flex flex-col-reverse md:grid-cols-12 md:grid-rows-none grid-rows-2 xl:gap-4 gap-y-8 xl:pt-12">
      <div class="md:col-span-8 article__content">
        <?php
        the_content(
          sprintf(
            wp_kses(
              /* translators: %s: Name of current post. Only visible to screen readers */
              __('Continue reading<span class="screen-reader-text"> "%s"</span>', 'zelmer'),
              array(
                'span' => array(
                  'class' => array(),
                ),
              )
            ),
            wp_kses_post(get_the_title())
          )
        );

        wp_link_pages(
          array(
            'before' => '<div class="page-links">' . esc_html__('Pages:', 'zelmer'),
            'after'  => '</div>',
          )
        );
        ?>
      </div>
      <div class="md:col-span-4 flex w-full md:w-auto md:justify-end xl:border-0 border-b-2 border-gray-100">
        <aside class="article__aside border border-gray rounded-lg xl:sticky top-16 xl:p-8 py-8 pr-8 xl:w-11/12 w-full">
          <h3 class="text-green-400 font-bold h2"><?php _e('Contents', 'chinese-frontiers'); ?></h3>
          <nav class="xl:pt-8 md:pt-4 pt-8">
            <ol class="p-0 m-0 article__aside--list"></ol>
          </nav>
        </aside>
      </div>
    </div>
  </div><!-- .entry-content -->
</article><!-- #post-<?php the_ID(); ?> -->