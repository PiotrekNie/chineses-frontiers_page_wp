<?php get_header(); ?>

<section class="container max-w-fhd sm:px-4 px-2" data-aos="fade">
  <?php $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
  if ($paged == 1) : ?>
  <div class="text-center md:text-left">
    <?php $home_title = get_the_title(get_option('page_for_posts')); ?>
    <h1 class="h1"><?php echo $home_title; ?></h1>
  </div>
  <?php endif; ?>
  <div class="flex items-center md:justify-between flex-col md:flex-row pt-12">
    <span>
      <?php $count_posts = wp_count_posts();

      if ($count_posts) {
        $published_posts = $count_posts->publish;

        printf('Znaleziono ', 'zelmer');

        if ($published_posts == 1) {
          printf(__('%s artykuł', 'zelmer'), $published_posts);
        } elseif ($published_posts > 1 && $published_posts < 5) {
          printf(__('%s artykuły', 'zelmer'), $published_posts);
        } else {
          printf(__('%s artykułów', 'zelmer'), $published_posts);
        }
      } ?>
    </span>
    <div class="flex flex-col md:flex-row items-center pt-6 md:pt-0">
      <span class="uppercase font-bold text-sm block mb-4 md:mb-0"><?php _e('SORTUJ WEDŁUG', 'zelmer'); ?></span>
      <?php if (is_search()) { ?>

      <select name="sort-posts" id="sortbox"
        onchange="document.location.href='?s=<?php the_search_query(); ?>&'+this.options[this.selectedIndex].value;">

        <?php } else { ?>
        <select name="sort-posts" id="sortbox" class="md:ml-7 h-11 w-72 text-sm px-8"
          onchange="document.location.href='?'+this.options[this.selectedIndex].value;">

          <?php } ?>
          <option value="orderby=date&order=dsc"><?php _e('Najnowsze', 'zelmer');  ?></option>
          <option value="orderby=date&order=asc"><?php _e('Najstarsze', 'zelmer');  ?></option>
          <option value="orderby=title&order=asc"><?php _e('Alfabetycznie rosnąco', 'zelmer');  ?></option>
          <option value="orderby=title&order=dsc"><?php _e('Alfabetycznie malejąco', 'zelmer');  ?></option>
        </select>
    </div>

    <script type="text/javascript">
    <?php
      $sortby = isset($_GET['orderby']) ? $_GET['orderby'] : 'date';
      $sortOrder = isset($_GET['order']) ? $_GET['order'] : 'dsc';

      if (($sortby == 'date') && ($sortOrder == 'dsc')) { ?>
    document.getElementById('sortbox').value = 'orderby=date&order=dsc';
    <?php } elseif (($sortby == 'date') && ($sortOrder == 'asc')) { ?>
    document.getElementById('sortbox').value = 'orderby=date&order=asc';
    <?php } elseif (($sortby == 'title') && ($sortOrder == 'asc')) { ?>
    document.getElementById('sortbox').value = 'orderby=title&order=asc';
    <?php } elseif (($sortby == 'title') && ($sortOrder == 'dsc')) { ?>
    document.getElementById('sortbox').value = 'orderby=title&order=dsc';
    <?php } else { ?>
    document.getElementById('sortbox').value = 'orderby=comment_count&order=dsc';
    <?php } ?>
    </script>
  </div>
  <?php if (have_posts()) : ?>
  <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-5 pt-12">
    <?php while (have_posts()) : the_post(); ?>

    <article class="sec-articles__block container" data-aos="fade">
      <div class="sec-articles__block--thumb">
        <a href="<?php the_permalink(); ?>" title="<?php echo get_the_title(); ?>">
          <?php if (has_post_thumbnail()) {
                the_post_thumbnail('large');
              } else {
                echo "<img src='" .  get_stylesheet_directory_uri() . "/img/z.svg' alt='zelmer' class='placeholder' />";
              } ?>
        </a>
      </div>
      <div class="sec-articles__block--content">
        <?php $tags = get_the_tags();
            if ($tags) : ?>
        <ul class="sec-articles__block--tags">
          <?php foreach ($tags as $tag) :
                  $text_color = get_field('kolor_tagu', 'term_' . $tag->term_id); ?>
          <li class="border border-gray-300 text-gray-300">
            <a href="<?php echo get_term_link($tag->term_id); ?>"><?php echo $tag->name; ?></a>
          </li>
          <?php endforeach; ?>
        </ul>
        <?php endif; ?>
        <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>

        <?php if (has_excerpt()) : ?>
        <p><?php the_excerpt(); ?></p>
        <?php endif; ?>

        <div class="flex items-center sec-articles__block--footer">
          <span><?php echo get_the_date('', get_the_ID()); ?></span>
          <span class="divider block px-4">|</span>
          <span><?php echo reading_time(get_the_ID()); ?></span>
        </div>
      </div>
    </article>

    <?php endwhile; ?>
  </div>
  <div class="grid grid-cols-2 pt-20">
    <div class="nav-previous alignleft"><?php previous_posts_link('Poprzednia strona'); ?></div>
    <div class="nav-next alignright flex justify-end"><?php next_posts_link('Kolejna strona'); ?></div>
  </div>
  <?php wp_reset_postdata();
  else : ?>
  <p><?php _e('Niestety nie dodano jeszcze żadnych aktualności', 'zelmer'); ?></p>
  <?php endif; ?>
</section>

<?php get_footer(); ?>