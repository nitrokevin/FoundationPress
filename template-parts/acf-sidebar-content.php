<?php if (get_row_layout() == 'sidebar_content') {

	$content = get_sub_field('section_content');
	$section_background = get_sub_field('section_background');
	?>
<section id="<?php $section_heading_remove = preg_replace("/[\s_]/", "-", $section_heading);
						$section_heading_processed = strtolower($section_heading_remove);
						echo $section_heading_processed; ?>" class="<?php echo $section_background ?>" >
	<div class="shortcode-container small-padding align-normal">
		<div class="shortcode-grid">
			<div class="shortcode-content">
			<?php echo $content; ?>
			</div>
		</div>
	</div>
</section>
<?php } ?>