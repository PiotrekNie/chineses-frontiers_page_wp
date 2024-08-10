<?php $social = get_field('social_media', 'options');
if ($social) : ?>
<nav class="social-menu">
  <ul class="flex items-center">
    <?php foreach ($social as $link) : ?>
    <li><a href="<?php echo $link['link_do_serwisu']; ?>" target="_blank" rel="noopener noreferrer"><img
          src="<?php echo get_stylesheet_directory_uri(); ?>/img/acf/<?php echo $link['ikona_serwisu'] ?>.svg"
          alt="<?php echo $link['ikona_serwisu'] ?>" class="convert-svg"></a></li>
    <?php endforeach; ?>
  </ul>
</nav>
<?php endif; ?>