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


?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?> carousel-container <?php echo $carousel_type; ?>   <?php echo $section_background; ?> " >
		<div class="carousel-grid" >
		
		<?php if($carousel_type == 'slidecarousel'){?>
			<?php get_template_part( 'template-parts/content', 'slidecarousel' ); ?>

			<?php } ?>
			<?php if($carousel_type == 'gallerycarousel'){?>
				<div class="splide gallery-carousel">
	<div class="splide__arrows splide__arrows--ltr">
		<button class="splide__arrow splide__arrow--prev" type="button" aria-label="Go to last slide">
		<i class="fa-solid fa-arrow-left-long"></i>
		</button>
		<button class="splide__arrow splide__arrow--next" type="button" aria-label="Next slide">
		<i class="fa-solid fa-arrow-right-long"></i>
		</button>
	</div>
	<div class="splide__track">
		<ul class="splide__list">
			<?php
			$carousel_gallery= (get_field('carousel_gallery'));
			foreach( $carousel_gallery as $image ):      
			$small = $image['sizes']['featured-small'];
			$medium = $image['sizes']['featured-medium'];
			$large = $image['sizes']['featured-large']; 
			$xlarge = $image['sizes']['featured-xlarge'];  ?>
			<li class="splide__slide" data-interchange="[<?php echo $small; ?>, small], [<?php echo $medium; ?>, medium], [<?php echo $large; ?>, large], [<?php echo $xlarge; ?>, xlarge]" data-index="<?php echo $counter;?>"></li>
			<?php endforeach; ?>
		</ul>	
	</div>
</div>

			<?php } ?>
		</div>
	
</section>
