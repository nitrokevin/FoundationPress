<?php
/**

 */

?>
	<?php
            if (have_rows('repeater')) {
              $counter = 0; ?>
			  <ul class="tabs" data-tabs id="<?php echo esc_attr($id); ?>">
			 
             <?php while (have_rows('repeater')) { the_row(); 
			
				$tab_title = get_sub_field('tab_title');
			
				$tab_color = get_sub_field('tab_color');
				
				$counter++;
				?>

				<li class="tabs-title  <?php if( $counter ==1 ){ echo "is-active"; } ?> <?php echo $tab_color ?>"><a href="#tab<?php echo $counter?>-<?php echo esc_attr($id); ?>" aria-selected="true"><?php echo $tab_title ?></a>
                </li>
			
			
			<?php } ?>
			</ul>
			<?php $counter = 0; ?>
			<div class="tabs-content" data-tabs-content="<?php echo esc_attr($id); ?>">
			<?php while (have_rows('repeater')) { the_row();
				$tab_content = get_sub_field('tab_content');
				$counter++; ?>
				  <div class="tabs-panel  <?php if( $counter ==1 ){ echo "is-active"; } ?>" id="tab<?php echo $counter?>-<?php echo esc_attr($id); ?>">
					  <?php echo $tab_content ?>
 				 </div>
			<?php } ?>
			</div>
			<?php } ?>	