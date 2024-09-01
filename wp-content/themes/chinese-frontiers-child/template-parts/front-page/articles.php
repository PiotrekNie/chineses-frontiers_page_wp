<?php $articles = get_field('wyroznione_artykuly', 'options');
if ($articles) : ?>
<section class="sec-articles container xxl:max-w-fhd px-4" data-aos="fade">
  <?php get_template_part('template-parts/subtitle', null, array('class' => 'subtitle', 'data' => array('title' => 'Wyróżnione artykuły z bloga', 'color' => 'blue'))); ?>
  <div class="grid xl:grid-cols-4 md:grid-cols-2 xl:gap-x-4 gap-4">
    <?php foreach ($articles as $key => $article) :
        $obj = $article['artykul'];
        $delay = 300 + (($key + 1) * 50); ?>
    <article class="sec-articles__block container" data-aos="fade" data-aos-anchor=".sec-articles"
      data-aos-delay="<?php echo $delay; ?>">
      <div class="sec-articles__block--thumb">
        <a href="<?php the_permalink($obj->ID); ?>" title="<?php echo get_the_title($obj->ID); ?>">
          <?php if (has_post_thumbnail($obj->ID)) {
                the_post_thumbnail($obj->ID, 'large');
              } else {
                echo "<img src='" .  get_stylesheet_directory_uri() . "/img/logo-chinese-small.webp' alt='chinsese-frontiers' class='placeholder' />";
              } ?>
        </a>
      </div>
      <div class="sec-articles__block--content">
        <?php $tags = get_the_tags($obj->ID);
            if ($tags) : ?>
        <ul class="sec-articles__block--tags">
          <?php foreach ($tags as $tag) :
                  $text_color = get_field('kolor_tagu', 'term_' . $tag->term_id); ?>
          <li class="<?php echo ($text_color) ? 'border border-' . $text_color . '' : 'border-gray'; ?>"><a
              href="<?php echo get_term_link($tag->term_id); ?>"><?php echo $tag->name; ?></a>
          </li>
          <?php endforeach; ?>
        </ul>
        <?php endif; ?>
        <h3><a href="<?php the_permalink($obj->ID); ?>"><?php echo get_the_title($obj->ID); ?></a></h3>
        <?php if ($obj->post_excerpt) : ?>
        <p><?php echo wp_trim_words($obj->post_excerpt, 33); ?></p>
        <?php endif; ?>
        <div class="flex items-center sec-articles__block--footer">
          <span><?php echo get_the_date('', $obj->ID); ?></span>
          <span class="divider block px-4">|</span>
          <span><?php echo reading_time($obj->ID); ?></span>
        </div>
      </div>
    </article>
    <?php endforeach; ?>
  </div>
  <?php if (wp_count_posts()->publish > 4) : ?>
  <div class="flex justify-center pt-11">
    <a href="<?php echo get_permalink(get_option('page_for_posts')); ?>"
      class="cta cta-blue"><?php _e('Więcej', 'zelmer'); ?></a>
  </div>
  <?php endif; ?>
</section>
<?php endif; ?>