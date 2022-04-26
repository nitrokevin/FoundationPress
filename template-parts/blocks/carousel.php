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
$section_background_image = get_field('section_background_image');
$small = $section_background_image['sizes']['fp-small'];
$medium = $section_background_image['sizes']['fp-medium'];
$large = $section_background_image['sizes']['fp-large'];

?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?> carousel-container <?php echo $carousel_type; ?>   <?php echo $section_background; ?> " >
		<div class="carousel-grid" >
		
		<?php if($carousel_type == 'centered-carousel'){?>
			<?php get_template_part('template-parts/content', 'centeredcarousel'); ?>
			<?php } if($carousel_type == 'gallery-carousel'){ ?>
				<?php get_template_part('template-parts/content', 'gallerycarousel'); ?>

			<?php } ?>
		</div>
	
</section>
