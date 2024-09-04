<?php $front_page = get_option('page_on_front');
$press_kit = get_field('press_kit', $front_page);

if ($press_kit): ?>

<section id="sec-5"
  class="section-presskit container md:grid flex flex-col-reverse items-center grid-cols-12 gap-4 md:pt-36 pt-12">
  <div class="col-span-6 grid grid-cols-2 gap-4 grid-rows-4">
    <?php $images = $press_kit['images'];
    if ($images):
    foreach($images as $key=>$image): ?>
    <div
      class="overflow-hidden w-full row-span-2 <?php echo ($key == 0) ? 'md:mt-[50%]' : ($key == count($images) - 1 ? 'md:-mt-[50%]' : ''); ?>">
      <?php echo wp_get_attachment_image($image['image']['ID'], 'large', '', array('class' => 'aspect-square w-full rounded-lg')); ?>
    </div>
    <?php endforeach;
    endif; ?>
  </div>
  <div class="col-span-6 newsletter">
    <div class="md:w-4/6 mx-auto">
      <?php $form_id = $press_kit['form_id'];
    if ($form_id):
      echo do_shortcode( '[mailerlite_form form_id="' . $form_id . '"]' );
      endif;
    
    $section_description = $press_kit['section_description'];
    
    if ($section_description):
      echo '<div class="pt-4 italic">' . $section_description . '</div>'; 
    endif; ?>
    </div>
  </div>
</section>

<?php endif; ?>