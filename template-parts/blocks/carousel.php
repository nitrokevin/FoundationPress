<?php

/**
 * Carousel Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'carousel-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'block-carousel';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}
$carousel_type = get_field('carousel_type');
$section_background = get_field('section_background');
$section_heading = get_field('section_heading');
$section_heading_color = get_field('section_heading_color');
$section_background_image = get_field('section_background_image');
if($section_background_image) {; 
$small = $section_background_image['sizes']['fp-small'];
$medium = $section_background_image['sizes']['fp-medium'];
$large = $section_background_image['sizes']['fp-large'];
};
?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?> carousel-container <?php echo $carousel_type; ?>   <?php echo $section_background; ?> " >
	
	<div class="carousel-grid" >
		<h3 class="<?php echo $section_heading_color; ?> carousel-header"><?php echo $section_heading; ?></h3>
	<?php if($carousel_type == 'people-carousel'){
		 get_template_part('template-parts/content', 'peoplecarousel'); 
		 } if($carousel_type == 'slidecarousel'){ 
			 get_template_part('template-parts/content', 'slidecarousel'); 

		 } if($carousel_type == 'gallerycarousel'){ 
			
			get_template_part('template-parts/content', 'gallerycarousel'); 

		} ?>
	</div>

</section>
