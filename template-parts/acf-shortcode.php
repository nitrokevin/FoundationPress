<?php if (get_row_layout() == 'shortcode_layout') {
	$section_heading_color = get_sub_field('section_heading_color');
	$section_heading = get_sub_field('section_heading');
	$section_background = get_sub_field('section_background');
	$shortcode = get_sub_field('shortcode');
	?>
<section id="<?php $section_heading_remove = preg_replace("/[\s_]/", "-", $section_heading);
						$section_heading_processed = strtolower($section_heading_remove);
						echo $section_heading_processed; ?>" class="<?php echo $section_background ?>" >
	
		<div class="shortcode-grid">
		<?php if ($section_heading) { ?>
			<header class="shortcode-header">
				<h3 class="<?php echo $section_heading_color ?>"><?php echo $section_heading ?></h3>
			</header> 
		<?php } ?>
			<div class="shortcode-content">
			<?php echo do_shortcode($shortcode); ?>
			</div>
		</div>

</section>
<?php } ?>