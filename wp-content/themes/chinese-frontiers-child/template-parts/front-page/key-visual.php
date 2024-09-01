<?php $front_page = get_option('page_on_front'); ?>
<section id="sec-1"
  class="key-visual flex justify-center items-end z-10 relative overflow-hidden rounded-2xl p-4 min-h-[736px] md:max-h-[768px]"
  data-aos="fade">
  <div class="container md:grid flex flex-col grid-cols-12 gap-4 z-10 w-full md:py-16 py-10">
    <div class="md:col-span-7 md:flex md:items-end">
      <h1>
        <?php $custom_logo_id = get_theme_mod( 'custom_logo' );
        $logo = wp_get_attachment_image_src( $custom_logo_id , 'full' );
        if ( has_custom_logo() ) {
            echo '<img src="'. esc_url( $logo[0] ) . '" alt="'. get_bloginfo( 'name' ) . '" /aria-label="'. get_bloginfo( 'name' ) . '" title="'. get_bloginfo( 'name' ) . '">'; 
          } else {
            echo get_bloginfo('name');
          } ?>
      </h1>
    </div>
    <div class="md:col-span-5 flex justify-end flex-col text-white md:overflow-hidden">

      <?php $section_title = get_field('section_title', $front_page);
      if ($section_title): echo '<h2 class="font-handwrite mb-4 text-white text-shadow-sm shadow-[#00000025]">' . $section_title . '</h2>'; endif; ?>

      <?php $section_description = get_field('section_description', $front_page);
      if ($section_description) : echo $section_description; endif; ?>

      <?php $cta_buttons = get_field('cta_buttons', $front_page);
      if ($cta_buttons) : ?>
      <div class="md:py-12 py-6 flex flex-col md:flex-row gap-4 items-center">
        <?php $add_to_whislist = $cta_buttons['add_to_whislist'];
          if ($add_to_whislist):  ?>
        <a href="<?php echo $add_to_whislist['url'] ?>" target="_blank" class="cta cta-white cta-outline has-icon"
          rel="noopener noreferrer" aria-label="<?php _e('Go to Steam page', 'zelmer'); ?>"
          title="<?php echo $add_to_whislist['title']; ?>"><img
            src="<?php echo get_stylesheet_directory_uri(); ?>/img/icon-steam-white.svg" alt="Steam"
            class="pointer-events-none"><span><?php echo $add_to_whislist['title']; ?></span></a>
        <?php endif; ?>

        <?php $play_free_prologue = $cta_buttons['play_free_prologue'];
          if ($play_free_prologue):  ?>
        <a href="<?php echo $play_free_prologue['url'] ?>" target="_blank" class="cta cta-red cta-primary has-icon"
          rel="noopener noreferrer" aria-label="<?php _e('Go to Steam page', 'zelmer'); ?>"
          title="<?php echo $play_free_prologue['title']; ?>"><img
            src="<?php echo get_stylesheet_directory_uri(); ?>/img/icon-steam-red.svg" alt="Steam"
            class="pointer-events-none"><span><?php echo $play_free_prologue['title']; ?></span></a>
        <?php endif; ?>
      </div>
      <?php endif; ?>

      <?php $carousel = get_field('carousel', $front_page);
      if ($carousel): ?>
      <div class="flex justify-between items-center">
        <h2><?php echo sprintf(__('Scenes', 'chinese-frontiers')); ?></h2>
        <div class="swiper-navigation-container">
          <button class="swiper-button-prev"
            aria-label="<?php echo sprintf(__('Previous slide', 'chinese-frontiers')); ?>"><img
              src="<?php echo get_stylesheet_directory_uri(); ?>/img/icon-arrow-prev.svg"
              alt="<?php echo sprintf(__('Previous slide', 'chinese-frontiers')); ?>">
          </button>
          <button class="swiper-button-next"
            aria-label="<?php echo sprintf(__('Next slide', 'chinese-frontiers')); ?>"><img
              src="<?php echo get_stylesheet_directory_uri(); ?>/img/icon-arrow-next.svg"
              alt="<?php echo sprintf(__('Next slide', 'chinese-frontiers')); ?>">
          </button>
        </div>
      </div>
      <div class="swiper-container swiper-scenes pt-2">
        <div class="swiper-wrapper">
          <?php foreach($carousel as $slide ): ?>
          <div class="swiper-slide"><?php echo wp_get_attachment_image( $slide['image']['id'], 'medium', '' ); ?>
          </div>
          <?php endforeach; ?>
        </div>
      </div>
      <?php endif; ?>
    </div>
  </div>
  <?php $background_image = get_field('background_image', $front_page);
  if ($background_image): 
    echo wp_get_attachment_image( $background_image['ID'], 'full', '', array('class' => 'absolute w-full h-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none -z-10'));
  endif; ?>
</section>