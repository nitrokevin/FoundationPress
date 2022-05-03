<?php
/**

 */

?>
<ul class="accordion" data-accordion data-allow-all-closed="true">
	<?php
	if (have_rows('repeater_content_accordion')) {
		$counter = 0; 
		
		while (have_rows('repeater_content_accordion')) { the_row(); 
		$content_type = get_sub_field('content_type');
		$accordion_heading = get_sub_field('accordion_heading');
		$accordion_content = get_sub_field('accordion_content');
		$accordion_background_color = get_sub_field('accordion_background_color');
		$counter++;
		?>

		<li class="accordion-item <?php echo $accordion_background_color ?>" data-accordion-item>  
			<a href="#" class="accordion-title">
					<?php echo $accordion_heading ?>
			</a>
			<div class="accordion-content" data-tab-content>
				<div class="accordion-content-container">
					<div class="accordion-content-inner">
						<?php  echo $accordion_content; ?>
					</div>
					</div>
				</div>
		</li>
		<?php } ?>
		<?php } ?>	
</ul>