<?php
/**

 */

?>

	<?php if( get_field('accordion_type') == 'faq' ){ 
		 if (have_rows('repeater_accordion','option')) :
			$counter_section = 0;
			while (have_rows('repeater_accordion','option')) : the_row(); 
			$section_heading_color = get_sub_field('section_heading_color','option');
			$header = get_sub_field('section_heading','option');
			$counter_section++; ?>
			<?php if ($header) { ?>
				<h4 class="<?php echo $section_heading_color ?>"><?php echo $header ?></h4>
			  <?php } ?>
			  <ul class="accordion" data-accordion data-allow-all-closed="true">
			  <?php 
    	 if (have_rows('repeater_content_accordion','option')) :
              while (have_rows('repeater_content_accordion','option')) : the_row();
                $header = get_sub_field('header');
                $content = get_sub_field('content');
                $category = get_sub_field('category');
                ?>
                
                <li data-filter="category-<?php echo $category ?>" class="accordion-item category-<?php echo $category ?> filter-simple-item" data-accordion-item>
                  <!-- Accordion tab title -->
                  <a href="#" class="accordion-title"><?php echo $header ?></a>

                  <!-- Accordion tab content: it would start in the open state due to using the `is-active` state class. -->
                  <div class="accordion-content" data-tab-content>
                    <?php echo $content ?>
                  </div>
                </li>

              <?php endwhile; 
             endif; ?>
			 <?php endwhile; 
             endif; ?>
            <?php } elseif( get_field('accordion_type') == 'custom' ){ ?>
				<ul class="accordion" data-accordion data-allow-all-closed="true">
	<?php
	if (have_rows('repeater_content_accordion')) {
		$counter = 0; 
		
		while (have_rows('repeater_content_accordion')) { the_row(); 
		$content_type = get_sub_field('content_type');
		$accordion_heading = get_sub_field('accordion_heading');
		$accordion_content = get_sub_field('accordion_content');
		$accordion_heading_background_color = get_sub_field('accordion_heading_background_color');
		$counter++;
		?>

		<li class="accordion-item <?php echo $accordion_heading_background_color ?>" data-accordion-item>  
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
		<?php } ?>	
</ul>