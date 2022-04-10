<?php

/**
 * Tab Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'tab-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'block-tab';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}


?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>  <?php echo $section_background; ?> " >
    <div class="block-tab-container "> 
		<div class="block-tab-grid" >
	
		
			<?php
            if (have_rows('repeater_content')) {
              $counter = 0; ?>
			  <ul class="tabs" data-tabs id="tabs">
			 
             <?php while (have_rows('repeater_content')) { the_row(); 
			
				$tab_title = get_sub_field('tab_title');
			
				$tab_color = get_sub_field('tab_color');
				
				$counter++;
				?>

				<li class="tabs-title  <?php if( $counter ==1 ){ echo "is-active"; } ?> <?php echo $tab_color ?>"><a href="#tab<?php echo $counter?>" aria-selected="true"><?php echo $tab_title ?></a>
                </li>
			
			
			<?php } ?>
			</ul>
			<?php $counter = 0; ?>
			<div class="tabs-content" data-tabs-content="tabs">
			<?php while (have_rows('repeater_content')) { the_row();
				$tab_content = get_sub_field('tab_content');
				$counter++; ?>
				  <div class="tabs-panel  <?php if( $counter ==1 ){ echo "is-active"; } ?>" id="tab<?php echo $counter?>">
					  <?php echo $tab_content ?>
 				 </div>
			<?php } ?>
			</div>
			<?php } ?>	
		</div>
	</div>
</section>
