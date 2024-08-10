<?php $home_kv = get_field('key_visual', get_option('page_on_front'));
if ($home_kv) : ?>
<section class="sec-1" data-aos="fade">
  <div class="container xxl:max-w-fhd flex justify-center z-10 relative">
    <div class="md:w-10/12 w-full">
      <div class="sec-1__text text-white">
        <?php if ($home_kv['tytul_maly']) : ?>
        <span class="block text-xs uppercase mb-5 font-semibold"><?php echo $home_kv['tytul_maly']; ?></span>
        <?php endif;
          if ($home_kv['tytul_duzy']) : ?>
        <h2 class="text-4xl font-bold block mb-12 h1"><?php echo $home_kv['tytul_duzy']; ?></h2>
        <?php endif;
          if ($home_kv['cta']) : ?>
        <a href="<?php echo $home_kv['cta']['url']; ?>" class="cta cta-white"
          title="<?php echo $home_kv['cta']['title']; ?>"><?php echo $home_kv['cta']['title']; ?></a>
        <?php endif; ?>
      </div>
    </div>
  </div>
  <?php
    echo get_the_post_thumbnail(); ?>
</section>
<?php endif; ?>