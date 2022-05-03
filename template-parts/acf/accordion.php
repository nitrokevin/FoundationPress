<?php if (get_row_layout() == 'accordion') {
 /**
 * Accordion
 */
$id = 'acf-accordion-' . get_row_index();
$className = 'acf-accordion';
$section_heading = get_sub_field('section_heading');
$full_width = get_sub_field('full_width');
$section_heading_color = get_sub_field('section_heading_color');
$section_background_color = get_sub_field('section_background_color');
$counter++; ?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?> accordion-outer-container <?php echo $section_background_color; ?>  " >
    <div class="<?php echo esc_attr($className); ?>-container <?php if($full_width == 1){?>alignfull<?php }?>"> 
		<div class="<?php echo esc_attr($className); ?>-grid" >
			<div class="<?php echo esc_attr($className); ?>-content" >
				<?php get_template_part( 'template-parts/content', 'accordion' ); ?>
			</div>
		</div>
	</div>
</section>

<?php } ?>