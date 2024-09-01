<?php $front_page = get_option('page_on_front');
$posts_args = array(
'posts_per_page' => 4,
'post_type' => 'post',
'post_status' => 'publish',
'orderby' => 'date',
'order' => 'DESC',
'orderby' => 'rand',
);
$posts_query = new WP_Query( $posts_args );
if ($posts_query->have_posts()) : ?>
<section id="sec-3" class="sec-articles">
  <?php $news = get_field('news', $front_page);
  if ($news): ?>
  <div class="text-center">
    <?php if ($news['section_title']): ?>
    <h2><?php echo $news['section_title']; ?></h2>
    <?php endif; ?>
    <?php if ($news['section_description']): ?>
    <div class="pt-4">
      <?php echo $news['section_description'];?>
    </div>
    <?php endif; ?>
  </div>
  <?php endif; ?>
  <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-5 md:pt-16 pt-8">
    <?php while ($posts_query->have_posts()) : $posts_query->the_post(); ?>
    <article class="sec-articles__block container" data-aos="fade">
      <div class="sec-articles__block--thumb">
        <a href="<?php the_permalink(); ?>" title="<?php echo get_the_title(); ?>">
          <?php if (has_post_thumbnail()) {
                the_post_thumbnail('large');
              } else {
                echo "<img src='" .  get_stylesheet_directory_uri() . "/img/logo-chinese-small.webp' alt='chinsese-frontiers' class='placeholder' />";
              } ?>
        </a>
      </div>
      <div class="sec-articles__block--content">
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
  <div class="flex justify-center pt-11">
    <a href="<?php echo get_permalink(get_option('page_for_posts')); ?>"
      class="cta cta-outline cta-dark"><?php _e('View All News', 'Chinese Frontiers'); ?></a>
  </div>
</section>
<?php endif; ?>