<?php if (get_row_layout() == 'carousel') {
	$id = 'acf-carousel-' . get_row_index();
	$className = 'acf-carousel';

	$section_background = get_sub_field('section_background');
	$full_width = get_sub_field('full_width');
	
	$carousel_type = get_sub_field('carousel_type');
	$section_heading = get_sub_field('section_heading');
	$section_heading_color = get_sub_field('section_heading_color');
	$section_background_color = get_sub_field('section_background_color');
	$section_background_image = get_sub_field('section_background_image');
	if ($section_background_image) {;
	$small = $section_background_image['sizes']['fp-small'];
	$medium = $section_background_image['sizes']['fp-medium'];
	$large = $section_background_image['sizes']['fp-large'];
	};
	$count = 0;
	$count ++;
	?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?> <?php echo $section_background_color; ?><?php if ($section_background_image) { ?>background-image<?php } ?>" <?php if ($section_background_image) { ?>src="<?php echo $small; ?>" data-interchange="[<?php echo $small; ?>, small], [<?php echo $medium; ?>, medium], [<?php echo $large; ?>, large]" <?php } ?>>
	<div class="<?php echo $carousel_type; ?> <?php echo esc_attr($className); ?>-container <?php if($full_width == 1){?>alignfull<?php }?>">
		<div class=" <?php echo esc_attr($className); ?>-grid">
			<div class=" <?php echo esc_attr($className); ?>-content">
			<?php if ($section_heading) { ?>
			<header class="carousel-header">
				<h3 class="<?php echo $section_heading_color ?>"><?php echo $section_heading; ?></h3>
			</header>
			<?php } ?>
			<?php if( get_sub_field('carousel_type') == 'slidecarousel' ) {?>
					<?php get_template_part( 'template-parts/content', 'slidecarousel' ); ?>
			<?php } ?>
			<?php if( get_sub_field('carousel_type') == 'gallerycarousel' ) {?>
				<?php $carousel_gallery = get_sub_field('carousel_gallery');
					if ($carousel_gallery) { ?>
					<?php get_template_part('template-parts/content', 'gallerycarousel'); ?>
				<?php } ?>
			<?php } ?>
		</div>
		</div>
	</div>
</section>
<?php } ?>