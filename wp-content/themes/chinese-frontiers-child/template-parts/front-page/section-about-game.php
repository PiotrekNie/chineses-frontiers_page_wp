<?php
$front_page = get_option('page_on_front');
$about_game = get_field('about_game', $front_page);
$game_attributes = $about_game['game_attributes'];

if ($about_game && $game_attributes) : ?>
<section id="sec-2" class="md:pt-36 pt-12 container about-game">
  <?php
        $section_title = $about_game['section_title'];
        $section_description = $about_game['section_description'];

  if ($section_title || $section_description) : ?>
  <div class="text-center">
    <?php if ($section_title) : ?>
    <h2 class="mb-8"><?php echo esc_html($section_title); ?></h2>
    <?php endif; ?>
    <?php if ($section_description) : ?>
    <div class="mx-auto md:w-8/12 w-full">
      <?php echo wp_kses_post($section_description); ?>
    </div>
    <?php endif; ?>
  </div>
  <?php endif; ?>
  <div class="flex flex-col md:gap-28 gap-14 w-full">
    <?php foreach ($game_attributes as $key=>$attributes): ?>
    <div class="md:grid flex flex-col md:grid-cols-12 md:gap-16 gap-10 md:pt-20 items-center">
      <div class="col-span-7 <?php if ($key % 2) echo 'md:order-2'; ?>">
        <div class="md:w-5/6 flex flex-col gap-8 <?php if ($key % 2 != 1) echo 'md:ml-auto'; ?>">
          <?php $title = $attributes['title'];
        $description = $attributes['description'];
        if ($title): ?>
          <h3 class="title-ornament h2"><img src="<?php echo get_stylesheet_directory_uri(  ); ?>/img/cta_ornaments.svg"
              alt="ornament" class="hidden md:block"><span><?php echo $title; ?></span><img
              src="<?php echo get_stylesheet_directory_uri(  ); ?>/img/cta_ornaments.svg" alt="ornament"
              class="transform -scale-100"></h3>
          <?php endif;
      if ($description) {echo $description;} ?>
        </div>
      </div>
      <div class="col-span-5">
        <?php $video_file = $attributes['video_file'];
      if ($video_file && $video_file['type'] == 'video'): ?>
        <video loop muted autoplay>
          <source src="<?php echo $video_file['url']; ?>" type="video/mp4">
        </video>
        <?php endif; ?>
      </div>
    </div>
    <?php endforeach; ?>
  </div>
</section>
<?php endif; ?>