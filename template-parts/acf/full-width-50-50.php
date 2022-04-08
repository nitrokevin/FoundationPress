<?php if (get_row_layout() == 'full_width_50_50') {
 /**
 * Full width 50 50 content
 */
$id = 'full-width-50-50-' . get_row_index();
$className = 'full-width-50-50';


$section_background = get_sub_field('section_background');
$section_background_image = get_sub_field('section_background_image');
$alignfull = get_sub_field('alignfull');
$small = $section_background_image['sizes']['fp-small'];
$medium = $section_background_image['sizes']['featured-medium'];
$large = $section_background_image['sizes']['featured-large'];
$left_content = get_sub_field('left_content');
$left_background = get_sub_field('left_background');
$left_overlay = get_sub_field('left_overlay');
$left_background_image = get_sub_field('left_background_image');
$left_small = $left_background_image['sizes']['fp-small'];
$left_medium = $left_background_image['sizes']['fp-medium'];
$left_large = $left_background_image['sizes']['fp-large'];
$right_content = get_sub_field('right_content');
$right_background = get_sub_field('right_background');
$right_overlay = get_sub_field('right_overlay');
$right_background_image = get_sub_field('right_background_image');
$right_small = $right_background_image['sizes']['fp-small'];
$right_medium = $right_background_image['sizes']['fp-medium'];
$right_large = $right_background_image['sizes']['fp-large'];
$counter++; ?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?> full-width-50-50-outer-container <?php echo $section_background; ?>  <?php if ($section_background_image) { ?> section-background-image<?php } ?>" <?php if ($section_background_image) { ?> data-interchange="[<?php echo $small; ?>, small], [<?php echo $medium; ?>, medium], [<?php echo $large; ?>, large]" <?php } ?>>
    <div class="<?php echo esc_attr($className); ?>-container"> 
		<div class="<?php echo esc_attr($className); ?>-grid <?php if($alignfull == 1){?>alignfull<?php }?>" >
			
			<article class="<?php echo $left_background; ?> <?php if($left_overlay == 1){?>overlay<?php }?>" <?php if ($left_background_image) { ?> data-interchange="[<?php echo $left_small; ?>, small], [<?php echo $left_medium; ?>, medium], [<?php echo $left_large; ?>, large]" <?php } ?>>	
				<div class="article-padding ">
			    	<div class="article-grid ">
				    <div class="entry-content">
					    <?php echo $left_content; ?>
				    </div>
				</div>
				</div>
			</article>
			<article class="<?php echo $right_background; ?> <?php if($right_overlay == 1){?>overlay<?php }?>" <?php if ($right_background_image) { ?> data-interchange="[<?php echo $right_small; ?>, small], [<?php echo $right_medium; ?>, medium], [<?php echo $right_large; ?>, large]" <?php } ?>>	
				<div class="article-padding ">
			    	<div class="article-grid ">
				    <div class="entry-content">
					    <?php echo $right_content; ?>
				    </div>
				</div>
				</div>
			</article>
		
		</div>
</section>

<?php } ?>