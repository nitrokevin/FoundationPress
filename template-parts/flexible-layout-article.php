<?php if (get_row_layout() == 'flexible-layout-article') {
	$number_of_desktop_columns = get_sub_field('number_of_desktop_columns');
	$number_of_mobile_columns = get_sub_field('number_of_mobile_columns');
	$section_padding = get_sub_field('section_padding');
	$section_width = get_sub_field('section_width');
	$section_heading = get_sub_field('section_heading');
	$section_sub_heading = get_sub_field('section_sub_heading');
	$section_heading_color = get_sub_field('section_heading_color');
	$section_content = get_sub_field('section_content');
	$section_background = get_sub_field('section_background');
	$section_background_image = get_sub_field('section_background_image');
	$small_size = 'fp-small';
	$medium_size = 'fp-medium';
	$large_size = 'fp-large';
	$small = $section_background_image['sizes'][$small_size];
	$medium = $section_background_image['sizes'][$medium_size];
	$large = $section_background_image['sizes'][$large_size];
	?>
	<?php if (get_sub_field('section_width')  == 'align-full' )  { ?>
	<section id="<?php $section_heading_remove = preg_replace("/[\s_]/", "-", $section_heading); $section_heading_processed = strtolower($section_heading_remove); echo $section_heading_processed; ?>" class="flexible-layout-article-outer-container <?php echo $section_background; ?>  <?php echo $section_trigger; ?> <?php if ($section_background_image) { ?>background-image<?php } ?>" <?php if ($section_background_image) { ?>src="<?php echo $small; ?>" data-interchange="[<?php echo $small; ?>, small], [<?php echo $medium; ?>, medium], [<?php echo $large; ?>, large]" <?php } ?>>
		<div class="flexible-layout-article-container <?php echo $section_width; ?>">
			<div class="flexible-layout-article-grid  <?php echo $section_padding; ?>">
	<?php } ?>
	
	<?php if (get_sub_field('section_width')  != 'align-full' )  { ?>
	<section id="<?php $section_heading_remove = preg_replace("/[\s_]/", "-", $section_heading); $section_heading_processed = strtolower($section_heading_remove); echo $section_heading_processed; ?>" class="flexible-layout-section  <?php echo $section_background; ?>   <?php echo $section_padding; ?>  <?php echo $section_trigger; ?> <?php if ($section_background_image) { ?>background-image<?php } ?>" <?php if ($section_background_image) { ?>src="<?php echo $small; ?>" data-interchange="[<?php echo $small; ?>, small], [<?php echo $medium; ?>, medium], [<?php echo $large; ?>, large]" <?php } ?>>
		<div class="flexible-layout-article-container <?php echo $section_width; ?>">
	<?php } ?>
			<?php if ($section_heading) { ?><header class="section-header">
					<h4 class="<?php if($section_heading_color){ echo $section_heading_color; } ?>"><?php echo $section_heading; ?></h4>
					<?php if ($section_sub_heading) { ?><p><?php echo $section_sub_heading; ?></p><?php } ?>
				</header><?php } ?>
			<?php if ($section_content) { ?><div class="section-content"><?php echo $section_content; ?></div><?php } ?>

			<?php if (have_rows('repeater_grid')) { ?>
				<div class="flexible-layout-article-grid" data-equalizer="header">
					<div class="flexible-layout-article-<?php echo $number_of_mobile_columns ?>-small-<?php echo $number_of_desktop_columns ?>-large">
					<?php while (have_rows('repeater_grid')) : the_row();
								$cell_alignment = get_sub_field('cell_alignment');
								$cell_header = get_sub_field('cell_header');
								$cell_heading_color = get_sub_field('cell_heading_color');
								$cell_content = get_sub_field('cell_content');
								$image = get_sub_field('image');
								$cell_footer = get_sub_field('cell_footer');
								$mobile_order = get_sub_field('mobile_order');
								$cell_background_image = get_sub_field('cell_background_image');
								$fit_background_image = get_sub_field('fit_background_image');
								$cell_background = get_sub_field('cell_background');
								$cell_outline = get_sub_field('cell_outline');
								$text_padding = get_sub_field('text_padding');
								$link = get_sub_field('link');
								$new_window = get_sub_field('new_window');
								$small_size = 'fp-small';
								$medium_size = 'fp-small';
								$large_size = 'fp-medium';
								$small = $cell_background_image['sizes'][$small_size];
								$medium = $cell_background_image['sizes'][$medium_size];
								$large = $cell_background_image['sizes'][$large_size];
								$square_image = $image['sizes']['square']; ?>

						<article class="flex-container flex-dir-column <?php echo $text_padding; ?> <?php echo $cell_outline; ?> flexible-item <?php echo $cell_background; ?> <?php echo $mobile_order; ?> <?php echo $cell_alignment; ?> <?php if ($cell_background_image) { ?>cell-background-image<?php } ?> <?php if ($fit_background_image) { ?>cell-background-image-contain<?php } ?>" <?php if ($cell_background_image) { ?>src="<?php echo $small; ?>" data-interchange="[<?php echo $small; ?>, small], [<?php echo $medium; ?>, medium], [<?php echo $large; ?>, large]" <?php } ?>>
							<?php if ($link) { ?><a href="<?php echo $link ?>" <?php if ($new_window) {?> target="_blank" <?php } ?>> <?php } ?>
						<?php if ($image) { ?>
							<div class="header-image-container">
								<div class="header-image-content">
									<div class="header-image" data-interchange="[<?php echo $square_image; ?>, small]">
									</div>
								</div>
							</div>
						<?php } ?>
							<?php if ($cell_header) { ?>
								<header class="entry-header" data-equalizer-watch="header">
									<h4 class="<?php if($cell_heading_color){  echo $cell_heading_color; } ?>"><?php echo $cell_header; ?></h4>
								</header>
							<?php } ?>
							<?php if ($cell_content) { ?>
							
								<div class="entry-content flex-child-shrink">
									<?php echo $cell_content; ?>
								</div>
							
							<?php } ?>
							<?php if ($cell_footer) { ?>
								<div class="entry-footer flex-child-stretch">
									<?php echo $cell_footer; ?>
								</div>
							<?php } ?>
							<?php if ($link) { ?></a><?php } ?>
						</article>
					<?php endwhile; ?>
				</div>
			<?php } ?>
	<?php if (get_sub_field('section_width')  == 'align-full' )  { ?>	
	</div>
	</div>
	</section>
	<?php } ?>
	<?php if (get_sub_field('section_width')  != 'align-full' )  { ?>
	</div>	
	</section>
	
	<?php } ?>
<?php } ?>