<?php
//estimated reading time
function reading_time($post_id)
{
  // GET THE CONTENT OF THE WORDPRESS POST
  $content = get_post_field('post_content', $post_id);

  // COUNT THE NUMBER OF WORDS
  $word_count = str_word_count(strip_tags($content));

  // COUNT THE NUMBER OF IMAGES
  $image_count = substr_count($content, '<img');

  // READING TIME OF TEXTS - 200 WORDS PER MINUTE
  $reading_time = $word_count / 200;

  // READING TIME OF IMAGES - 10 SECONDS PER IMAGE
  $image_time = ($image_count * 10) / 60;

  // ADD READING TIME OF TEXTS AND IMAGES
  $total_time = round($reading_time + $image_time);

  return sprintf(__('%s min czytania', 'zelmer'), $total_time);
}
