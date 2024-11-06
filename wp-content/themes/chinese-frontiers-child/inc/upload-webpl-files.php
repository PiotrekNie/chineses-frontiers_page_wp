<?php
//** *Enable upload for webp image files.*/
function add_custom_upload_mimes( $mimes_types ) {
  $mimes_types['webp'] = 'image/webp'; // webp files
  return $mimes_types;
}
add_filter( 'upload_mimes', 'add_custom_upload_mimes' );

function add_allow_upload_extension_exception( $types, $file, $filename, $mimes ) {
  // Do basic extension validation and MIME mapping
    $wp_filetype = wp_check_filetype( $filename, $mimes );
    $ext         = $wp_filetype['ext'];
    $type        = $wp_filetype['type'];
  if( in_array( $ext, array( 'webp' ) ) ) { // if follows webp files have
    $types['ext'] = $ext;
    $types['type'] = $type;
  }
  return $types;
}
add_filter( 'wp_check_filetype_and_ext', 'add_allow_upload_extension_exception', 99, 4 );



function displayable_image_webp( $result, $path ) {
  if ($result === false) {
      $displayable_image_types = array( IMAGETYPE_WEBP );
      $info = @getimagesize( $path );

      if (empty($info)) {
          $result = false;
      } elseif (!in_array($info[2], $displayable_image_types)) {
          $result = false;
      } else {
          $result = true;
      }
  }

  return $result;
}
add_filter( 'file_is_displayable_image', 'displayable_image_webp', 10, 2 );