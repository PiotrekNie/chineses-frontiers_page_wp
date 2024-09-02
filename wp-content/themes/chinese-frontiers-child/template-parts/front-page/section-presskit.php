<?php $front_page = get_option('page_on_front'); ?>

<section id="sec-5"
  class="section-presskit container md:grid flex flex-col items-center grid-cols-12 gap-4 md:pt-36 pt-12">
  <div class="col-span-6"></div>
  <div class="col-span-6">
    <?php echo do_shortcode( '[mailerlite_form form_id=1]' ); ?>
  </div>
</section>