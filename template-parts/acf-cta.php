<?php if (get_row_layout() == 'cta-layout-article') {
	$section_padding = get_sub_field('section_padding');
	$section_heading = get_sub_field('section_heading');
	$section_heading_color = get_sub_field('section_heading_color');
	$section_background = get_sub_field('section_background');

	$section_background_image = get_sub_field('section_background_image');
	$small = $section_background_image['sizes']['fp-small'];
	$medium = $section_background_image['sizes']['fp-medium'];
	$large = $section_background_image['sizes']['fp-large'];
	
	?>
<section <?php if ($section_heading) { ?> id="<?php $section_heading_remove = preg_replace("/[\s_]/", "-", $section_heading); $section_heading_processed = strtolower($section_heading_remove); echo $section_heading_processed; ?>" <?php } ?> class="cta-container  <?php echo $section_trigger; ?> <?php if ($section_background_image) { ?> cell-background-image<?php } ?>" <?php if ($section_background_image) { ?>src="<?php echo $small; ?>" data-interchange="[<?php echo $small; ?>, small], [<?php echo $medium; ?>, medium], [<?php echo $large; ?>, large]" <?php } ?>>

	<section class="cta <?php echo $section_background; ?> ">

	<?php if ($section_heading) { ?>
				<header class="section-header">
					<h3 class="<?php echo $section_heading_color; ?>"><?php echo $section_heading; ?></h3>
				</header>
			<?php } ?>
	
		<div class="cta-grid" >

		

			<?php
            if (have_rows('repeater_content')) {
              $counter = 0; 
			 
              while (have_rows('repeater_content')) { the_row(); 
				$column_image = get_sub_field('column_image');
				$square = $column_image['sizes']['thumbnail'];
				$column_heading = get_sub_field('column_heading');
				$column_content = get_sub_field('column_content');
				$column_background = get_sub_field('column_background');
				$column_background_video = get_sub_field('column_background_video');
				$column_background_image = get_sub_field('column_background_image');
				$small = $column_background_image['sizes']['fp-small'];
				$medium = $column_background_image['sizes']['fp-medium'];
				$large = $column_background_image['sizes']['fp-large'];
				$counter++;
				?>
			
			<article class="<?php echo $column_background; ?>" <?php if ($column_background_image) { ?> data-interchange="[<?php echo $small; ?>, small], [<?php echo $medium; ?>, medium], [<?php echo $large; ?>, large]" <?php } ?>>	
				<div class="article-padding ">
				<div class="article-grid ">
				<?php if (($column_heading) || ($column_icon)) { ?>
					<header>
					<?php if ($column_icon){ echo wp_get_attachment_image($column_icon['ID'], $square,'false',["class" => "article-image"] ); } ?>
					<?php if ($column_heading){ ?><h3><?php echo $column_heading; ?></h3><?php } ?>
					</header>
				<?php } ?>	
				<div class="entry-content">
					<?php echo $column_content; ?>
				</div>
				</div>
				</div>
			</article>
			<?php } ?>
			<?php } ?>	
				</section>
	</section>
<?php } ?>
