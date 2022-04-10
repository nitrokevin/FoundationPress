<?php
	
	
/** IMAGE FUNCTIONS */

/** ACF Responsive Images */
add_filter( 'acf_the_content', 'wp_make_content_images_responsive' );

	// REMOVE P TAG FROM IMAGES
function img_unautop($pee) {
    $pee = preg_replace('/<p>\\s*?(<a .*?><img.*?><\\/a>|<img.*?>)?\\s*<\\/p>/s', '<div class="figure">$1</div>', $pee);
    return $pee;
}
add_filter( 'acf_the_content', 'img_unautop', 30 );
	// REMOVE P TAG FROM Buttons
  function a_unautop($aa) {
    $aa = preg_replace('/<p>\\s*?(<a .*?><a.*?><\\/a>|<a.*?>)?\\s*<\\/p>/s', '$1', $aa);
    return $aa;
}
add_filter( 'acf_the_content', 'a_unautop', 30 );

add_post_type_support( 'page', 'excerpt' );
// GUTENBURG
add_theme_support( 'align-wide' );
function custom_block_categories( $categories ) {
  return array_merge(
      $categories,
      [
          [
              'slug'  => 'avidd',
              'title' => __( 'AVIDD Blocks', 'avidd' ),
          ],
      ]
  );
}
add_action( 'block_categories_all', 'custom_block_categories', 10, 2 );

// change buttons in WYSWIG post editor, edit color palette
function my_mce4_options($init) {
  include 'colors.php';

  $default_colours = '"fefefe", "White",
                      "000000", "Black",
                       "'.$primary_color = substr($primary_color, 1).'" ,"primary",
                       "'.$secondary_color = substr($secondary_color, 1).'","secondary",
                       "'.$light_gray = substr($light_gray, 1).'", "dark gray",
                       "'.$medium_gray = substr($medium_gray, 1).'", "dark gray",
                       "'.$dark_gray = substr($dark_gray, 1).'", "dark gray",
                       "'.$theme_color_1 = substr($theme_color_1, 1).'", "theme color 1",
                       "'.$theme_color_2 = substr($theme_color_2, 1).'", "theme color 2",
                       "'.$theme_color_3 = substr($theme_color_3, 1).'", "theme color 3",
                       "'.$theme_color_4 = substr($theme_color_4, 1).'", "theme color 4",

                      ';
  $init['textcolor_map'] = '['.$default_colours.']';
  return $init;
}
add_filter('tiny_mce_before_init', 'my_mce4_options');

  


/**  PASTE AS TEXT */
add_filter('tiny_mce_before_init', 'ag_tinymce_paste_as_text');
function ag_tinymce_paste_as_text( $init ) {
	$init['paste_as_text'] = true;
	return $init;
}


//Responsive native video embed

function alx_embed_html( $html ) {
  return '<div class="responsive-embed">' . $html . '</div>';
}

add_filter( 'embed_oembed_html', 'alx_embed_html', 10, 3 );
add_filter( 'video_embed_html', 'alx_embed_html' );

function oembed_related( $html, $url, $attr, $post_id ) {
  if ( strpos ( $html, 'feature=oembed' ) !== false )
    return str_replace( 'feature=oembed',
      'feature=oembed&amp;rel=0&modestbranding=1&showinfo=0', $html );
  else
    return $html;
}
add_filter('embed_oembed_html', 'oembed_related', 10, 4 );
