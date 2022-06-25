<?php if (get_row_layout() == 'flexible_grid') {
	$id = 'acf-flexible-grid-' . get_row_index();
	$className = 'acf-flexible-grid';
	$desktop_columns = get_sub_field('desktop_columns');
	$tablet_columns = get_sub_field('tablet_columns');
	$mobile_columns = get_sub_field('mobile_columns');
	$section_heading = get_sub_field('section_heading');
	$full_width = get_sub_field('full_width');
	$section_heading_color = get_sub_field('section_heading_color');
	$section_background_color = get_sub_field('section_background_color');
	$section_background_image = get_sub_field('section_background_image');
	if($section_background_image){;
	$small = $section_background_image['sizes']['fp-small'];
	$medium = $section_background_image['sizes']['fp-medium'];
	$large = $section_background_image['sizes']['fp-large'];
	};
	$article_gutter = get_sub_field('article_gutter');
	$article_padding = get_sub_field('article_padding');
	?>
<section id="<?php if ($section_heading) { 
	$section_heading_remove = preg_replace("/[\s_]/", "-", $section_heading); 
	$section_heading_processed = strtolower($section_heading_remove); 
	echo $section_heading_processed;  
	} else { echo esc_attr($id);} ?>" class="<?php echo esc_attr($className); ?> <?php  echo $section_background_color; ?> <?php if ($section_background_image) { ?> section-background-image<?php } ?>" <?php if ($section_background_image) { ?> src="<?php echo $small; ?>" data-interchange="[<?php echo $small; ?>, small], [<?php echo $medium; ?>, medium], [<?php echo $large; ?>, large]" <?php } ?>>
	<div class="<?php echo esc_attr($className);?>-container <?php if($full_width == 1){?>alignfull<?php }?>">
		<div class="<?php echo esc_attr($className);?>-grid" >
			<?php if ($section_heading) { ?>
				<header class="section-header">
					<h4 class="<?php if($section_heading_color){ echo $section_heading_color; } ?>"><?php echo $section_heading; ?></h4>
				</header>
			<?php } ?>
		</div>
		<div class="<?php echo esc_attr($className);?>-grid  <?php if($article_gutter == 0){ ?>collapsed<?php }?> <?php if($full_width == 1){?>alignfull<?php }?>" >
		<div class="flexible-grid-<?php echo $mobile_columns ?>-small-<?php echo $tablet_columns ?>-medium-<?php echo $desktop_columns ?>-large">
			<?php if (have_rows('repeater_content_grid')) { ?>
				<?php while (have_rows('repeater_content_grid')) : the_row();
					$article_background_color = get_sub_field('article_background_color');
					$article_heading = get_sub_field('article_heading');
					$article_content = get_sub_field('article_content');
					$article_footer = get_sub_field('article_footer');
					$article_vertical_alignment = get_sub_field('article_vertical_alignment');
					$article_horizontal_alignment = get_sub_field('article_horizontal_alignment');
					$article_image = get_sub_field('article_image');
					$article_background_image = get_sub_field('article_background_image');
					if($article_background_image){;
					$article_small = $article_background_image['sizes']['fp-small'];
					$article_medium = $article_background_image['sizes']['fp-medium'];
					$article_large = $article_background_image['sizes']['fp-large'];
			};	
					?>	
					<article class="<?php echo $article_background_color;?> <?php echo $article_vertical_alignment;?> <?php echo $article_horizontal_alignment;?>" <?php if ($article_background_image) { ?> src="<?php echo $article_small; ?>" data-interchange="[<?php echo $article_small; ?>, small], [<?php echo $article_medium; ?>, medium], [<?php echo $article_large; ?>, large]" <?php } ?>>
						<div class=" <?php if($article_padding == 1){ ?>article-padding<?php }?>">
							<?php if ($article_image) { ?>

							

							<?php } ?>
							<?php if ($article_heading) { ?>
							<header class="entry-header">
								<h4 ><?php echo $article_heading; ?></h4>
							</header>
							<?php } ?>
					
						<?php if ($article_content) { ?>
							<div class="entry-content">
								<?php echo $article_content; ?>
							</div>
						<?php } ?>	
						<?php if ($article_footer) { ?>
							<div class="entry-footer">
								<?php echo $article_footer; ?>
							</div>
						<?php } ?>									
						</div>
					</article>
				<?php endwhile; ?>
			<?php } ?>
		</div>
	</div>	
</section>
<?php } ?>