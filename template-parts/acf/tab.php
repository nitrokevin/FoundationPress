<?php if (get_row_layout() == 'tab') {
 /**
 * Tab
 */
$id = 'acf-tab-' . get_row_index();
$className = 'acf-tab';
$section_heading_color = get_sub_field('section_heading_color');
$section_heading = get_sub_field('section_heading');
$section_background_color = get_sub_field('section_background_color');
$full_width = get_sub_field('full_width');


$counter++; ?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?> <?php echo $section_background_color; ?>  " >
    <div class="<?php echo esc_attr($className); ?>-container <?php if($full_width == 1){?>alignfull<?php }?>"> 
		<div class="<?php echo esc_attr($className); ?>-grid" >
	
			<div class="<?php echo esc_attr($className); ?>-content" >
			<?php if ($section_heading) { ?><header class="section-header">
					<h4 class="<?php if($section_heading_color){ echo $section_heading_color; } ?>"><?php echo $section_heading; ?></h4>
				</header><?php } ?>
				<?php get_template_part( 'template-parts/content', 'tab' ); ?>
			</div>
		</div>
	</div>
</section>

<?php } ?>