<?php $newsletter = get_field('sekcja_newsletter', 'options');
if ($newsletter) : ?>
  <section class="sec-newsletter container max-w-fhd sm:px-4 px-2" data-aos="fade">
    <div class="flex justify-center">
      <div class="md:w-11/12 w-full grid xl:grid-cols-2 xl:gap-x-5">
        <div class="sec-newsletter__img" data-aos="fade" data-aos-anchor=".sec-newsletter" data-aos-delay="300">
          <?php if ($newsletter['obrazek']) :
            echo wp_get_attachment_image($newsletter['obrazek']['ID'], 'full');
          endif; ?>
        </div>
        <div class="pt-9 pb-6 xl:pl-28 md:pl-20 sm:px-10 px-6 md:pr-14 relative shadow-lg xl:block lg:flex lg:flex-row flex-col" data-aos="fade" data-aos-anchor=".sec-newsletter" data-aos-delay="350">
          <?php if ($newsletter['naglowek']) : ?>
            <h2 class="decorator"><?php echo $newsletter['naglowek']; ?></h2>
          <?php endif; ?>
          <?php get_template_part('template-parts/newsletter-form'); ?>
        </div>
      </div>
    </div>
  </section>
<?php endif; ?>