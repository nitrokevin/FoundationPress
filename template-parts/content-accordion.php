<?php
/**

 */

?>
<ul class="accordion" data-accordion data-allow-all-closed="true">
			<?php
            if (have_rows('repeater_content')) {
              $counter = 0; 
			 
              while (have_rows('repeater_content')) { the_row(); 
				$content_type = get_sub_field('content_type');
				$accordion_title = get_sub_field('accordion_title');
				$accordion_content = get_sub_field('accordion_content');
				$accordion_color = get_sub_field('accordion_color');
				$counter++;
				?>

				<li class="accordion-item <?php echo $accordion_color ?>" data-accordion-item>  
					<a href="#" class="accordion-title">
						<div class="inner-container">
						  <?php echo $accordion_title ?>
						</div>
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