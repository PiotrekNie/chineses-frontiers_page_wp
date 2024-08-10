<?php
function cc_mime_types($mimes) {
  $mimes['ico'] = 'icon';
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}

add_filter('upload_mimes', 'cc_mime_types');