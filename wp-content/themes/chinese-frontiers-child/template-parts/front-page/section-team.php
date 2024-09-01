<?php $front_page = get_option('page_on_front');
$our_team = get_field('our_team', $front_page);

if ($our_team): ?>

<section id="sec-4" class="container md:grid flex flex-col items-center grid-cols-12 gap-4 md:pt-36 pt-12">
  <div class="col-span-6 flex justify-center">
    <div class="md:w-10/12 mx-auto">
      <?php $title = $our_team['section_title'];
      $social_link = $our_team['social_link'];

    if ($title || $social_link): ?>

      <div class="flex items-center justify-between">
        <?php if ($title): ?>

        <h2><?php echo $title; ?></h2>

        <?php endif;

        if ($social_link): ?>

        <a href="<?php echo $social_link['url']; ?>" target="_blank" rel="noopener noreferrer"
          aria-label="<?php echo sprintf(__('Go to %s', 'chinese-frontiers'), $social_link['title']); ?>"
          class="flex gap-4 items-center italic hover:underline"><span><?php echo $social_link['title']; ?></span><img
            src="<?php echo get_stylesheet_directory_uri(); ?>/img/icon-link-external.svg" alt="Open in new window"
            class="pointer-events-none"></a>

        <?php endif; ?>

      </div>
      <?php endif;

      $section_description = $our_team['section_description'];

      if ($section_description) : ?>

      <div class="pt-8">
        <?php echo $section_description; ?>
      </div>

      <?php endif; ?>
    </div>
  </div>
  <?php $team_members = $our_team['team_members'];
  if ($team_members): ?>
  <div class="col-span-6 md:grid md:grid-cols-2 flex flex-col gap-4">
    <?php $directors = $team_members['directors'];
    if ($directors):
    foreach ($directors as $director): ?>
    <div class="overflow-hidden rounded-xl w-full h-[329px] relative">
      <?php $name = $director['name'];
      $title = $director['title'];
      $links = $director['links'];
      if ($name): ?>
      <div class="absolute text-center p-[14px] bg-white bg-opacity-75 backdrop-blur-sm w-full bottom-0">
        <?php if ($name): ?>
        <h4 class="font-handwrite"><?php echo $name; ?></h4>
        <?php endif;
        if ($title): ?>
        <span class="italic"><?php echo $title; ?></span>
        <?php endif;
        if ($links): ?>
        <div class="flex items-center gap-4 pt-2 justify-center mx-auto leading-none">
          <?php foreach($links as $key=>$link):
            if ($key % 2) echo '<span class="divider">|</span>'; ?>
          <a href="<?php echo $link['link']['url'];?>" target="_blank" rel="noopener noreferrer"
            aria-label="<?php echo sprintf(__('Go to %s', 'chinese-frontiers'), $link['link']['title']);?>"
            class="hover:underline"><?php echo $link['link']['title']; ?></a>
          <?php endforeach; ?>
        </div>
        <?php endif; ?>
      </div>
      <?php endif; ?>
      <?php 
      $image = $director['image'];
      if ($image) echo wp_get_attachment_image( $image , 'large', '', array('class' => 'w-full h-full object-cover') ); ?>
    </div>
    <?php endforeach;
    endif;
    $team = $team_members['team'];
    if ($team) echo wp_get_attachment_image( $team['ID'], 'full', '', array('class' => 'rounded-xl col-span-2 md:min-h-[329px] w-full object-contain') ) ?>
  </div>
  <?php endif; ?>
</section>

<?php endif; ?>