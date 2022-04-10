<?php if (get_row_layout() == 'accordion') {
 /**
 * Accordion
 */
$id = 'accordion-' . get_row_index();
$className = 'acf-accordion';


$section_background = get_sub_field('section_background');
$alignfull = get_sub_field('alignfull');


$counter++; ?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?> accordion-outer-container <?php echo $section_background; ?>  " >
    <div class="<?php echo esc_attr($className); ?>-container <?php if($alignfull == 1){?>alignfull<?php }?>"> 
		<div class="<?php echo esc_attr($className); ?>-grid" >
			<div class="<?php echo esc_attr($className); ?>-content" >
				<?php get_template_part( 'template-parts/content', 'accordion' ); ?>
			</div>
		</div>
	</div>
</section>

<?php } ?>