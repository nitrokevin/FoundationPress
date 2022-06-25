<?php if (get_row_layout() == 'flexible_article') {
	$id = 'acf-flexible-article-' . get_row_index();
	$className = 'acf-flexible-article';
	$section_heading = get_sub_field('section_heading');
	$full_width = get_sub_field('full_width');
	$section_heading_color = get_sub_field('section_heading_color');
	$section_background_color = get_sub_field('section_background_color');
	$section_background_image = get_sub_field('section_background_image');
	if ($section_background_image) {;
	$small = $section_background_image['sizes']['fp-small'];
	$medium = $section_background_image['sizes']['fp-medium'];
	$large = $section_background_image['sizes']['fp-large'];
	};
	$article_gutter = get_sub_field('article_gutter');

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
			<?php if (have_rows('repeater_content_article')) { ?>
					<?php while (have_rows('repeater_content_article')) : the_row();
						$content_type = get_sub_field('content_type');
						
						$article_width = get_sub_field('article_width'); 
						$article_background_color = get_sub_field('article_background_color');
						$article_heading = get_sub_field('article_heading');
						$article_content = get_sub_field('article_content');
						$article_padding = get_sub_field('article_padding'); 
						$article_background_image = get_sub_field('article_background_image');
						if($article_background_image){;
						$article_small = $article_background_image['sizes']['fp-small'];
						$article_medium = $article_background_image['sizes']['fp-medium'];
						$article_large = $article_background_image['sizes']['fp-large'];	
						};
						?>
			
				<article class="<?php echo $article_background_color;?> <?php echo $article_width;?>" <?php if ($article_background_image) { ?> src="<?php echo $article_small; ?>" data-interchange="[<?php echo $article_small; ?>, small], [<?php echo $article_medium; ?>, medium], [<?php echo $article_large; ?>, large]" <?php } ?>>
					<div class=" <?php if($article_padding == 1){ ?>article-padding<?php }?>">
					<?php if( $content_type && in_array('article', $content_type) ) {?>
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
					<?php } ?>

					<?php if($content_type && in_array('accordion', $content_type)){?>
						<?php get_template_part( 'template-parts/content', 'accordion' ); ?>
					<?php } ?>

					<?php if($content_type && in_array('tab', $content_type)){?>
						<?php get_template_part( 'template-parts/content', 'tab' ); ?>
					<?php } ?>

					<?php if($content_type && in_array('carousel', $content_type)){?>
						<?php if( get_sub_field('carousel_type') == 'gallerycarousel' ) {?>
							<?php $carousel_gallery = get_sub_field('carousel_gallery');
								if ($carousel_gallery) { ?>
								<?php get_template_part('template-parts/content', 'gallerycarousel'); ?>
							<?php } ?>
						<?php } ?>
						<?php if( get_sub_field('carousel_type') == 'slidecarousel' ) {?>
							<?php get_template_part( 'template-parts/content', 'slidecarousel' ); ?>
						<?php } ?>
					<?php } ?>
					</div>
				</article>
				<?php endwhile; ?>
		<?php } ?>
		</div>
	</div>	
</section>
<?php } ?>