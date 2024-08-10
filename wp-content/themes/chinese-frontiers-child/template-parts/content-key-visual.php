<section class="key-visual container xxl:max-w-fhd" data-aos="fade">
  <div class="flex justify-center w-full z-10 relative">
    <div class="md:w-10/12 w-full">
      <div class="key-visual__text">
        <?php if ($args['data']['title']) : ?>
        <h1 class="text-4xl font-bold text-white block mb-12 h1"><?php echo $args['data']['title']; ?></h1>
        <?php endif;

        $link = $args['data']['button'];

        if ($link) :

          $url = $link['url'];
          $url = str_replace(array('http://', 'https://'), '', $url);
          $url = rtrim($url, '/'); ?>

        <a href="<?php echo $url; ?>" class="open-video cta cta-white mt-12"><?php echo $link['title']; ?></a>

        <?php endif; ?>

      </div>
    </div>
  </div>
  <?php echo get_the_post_thumbnail(); ?>
</section>