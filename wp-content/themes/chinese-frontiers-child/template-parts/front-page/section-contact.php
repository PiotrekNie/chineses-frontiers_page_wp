<?php $front_page = get_option('page_on_front');
$contact_us = get_field('contact_us', $front_page);


if ($contact_us): ?>

<section id="sec-6" class="section-contact container md:pt-36 pt-12">
  <?php $section_title = $contact_us['section_title'];
  if ($section_title): ?>
  <div class="text-center">
    <h2><?php echo $section_title; ?></h2>
  </div>
  <?php endif; ?>
  <div class="md:grid flex flex-col items-center grid-cols-12 gap-4 md:pt-36 pt-12">
    <div class="col-span-7">
      <?php $section_text = $contact_us['section_text'];
      if ($section_text): ?>
      <div class="w-full md:w-4/6 mx-auto text-center md:text-left">
        <?php echo $section_text; ?>
      </div>
      <?php endif; ?>
    </div>
    <div class="col-span-5">
      <?php echo do_shortcode( '[wpforms id="147"]'); ?>
    </div>
  </div>
</section>

<?php endif; ?>