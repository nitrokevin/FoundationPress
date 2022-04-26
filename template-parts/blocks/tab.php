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
		<?php get_template_part( 'template-parts/content', 'tab' ); ?>
		</div>
	</div>
</section>
