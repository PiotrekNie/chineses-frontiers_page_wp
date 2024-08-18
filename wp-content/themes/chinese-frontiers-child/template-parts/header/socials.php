<?php
$social_links = [
    'tik_tok' => 'icon-tik-tok.svg',
    'instagram' => 'icon-instagram.svg',
    'youtube' => 'icon-yt.svg',
    'twitter' => 'icon-x.svg',
    'linkedin' => 'icon-in.svg',
    'twitch' => 'icon-twitch.svg',
    'discord' => 'icon-discord.svg'
];

function render_social_link($url, $icon, $label) {
    if ($url) {
        echo '<li>
                <a href="' . esc_url($url) . '" target="_blank" rel="noopener noreferrer" aria-label="Open in ' . esc_attr($label) . '"
                   class="w-5 h-5 flex items-center justify-center hover:bg-gray hover:bg-opacity-20 transition-all duration-150 ease-linear rounded-sm">
                    <img src="' . esc_url(get_stylesheet_directory_uri() . '/img/' . $icon) . '" alt="' . esc_attr($label) . ' Icon" class="pointer-events-none">
                </a>
              </li>';
    }
}

$has_links = false;
foreach ($social_links as $key => $icon) {
    if (get_field($key, 'options')) {
        $has_links = true;
        break;
    }
}

if ($has_links) : ?>
<nav class="fixed w-7 right-0 top-1/2 transform -translate-y-1/2 z-100">
  <ul class="flex flex-col gap-3 items-center">
    <?php
            foreach ($social_links as $key => $icon) {
                $url = get_field($key, 'options');
                render_social_link($url, $icon, ucfirst(str_replace('_', ' ', $key)));
            }
            ?>
  </ul>
</nav>
<?php endif; ?>