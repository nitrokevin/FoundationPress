<?php

/**
 * Background Video Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'background-video-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'background-video';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}

$loop = get_field('loop');
$autoplay = get_field('autoplay');
$controls = get_field('controls');
$muted = get_field('muted');
$poster = get_field('poster');

?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>" >
<div class="background-video-container">
<div class="background-video-content">
<?php if (get_field('background_video_mobile_mp4')) { ?>
	<video id="teaservideo" class="media show-for-small-only" data-object-fit <?php if( $controls == 1 ){?>controls<?php } ?>  <?php if( $controls == 1 ){?>muted<?php } ?>  <?php if( $autoplay == 1 ){?>autoplay<?php } ?> <?php if( $loop == 1 ){?>loop<?php } ?> playsinline poster="<?php echo $poster['sizes']['fp-small']; ?>">
	    <source src="<?php echo get_field('background_video_mobile_mp4'); ?>" type="video/mp4">
	</video>
<?php } ?>
	<video id="teaservideo" class="media <?php if (get_field('background_video_mobile_mp4')) { ?>show-for-medium<?php } ?>" data-object-fit <?php if( $controls == 1 ){?>controls<?php } ?>  <?php if( $controls == 1 ){?>muted<?php } ?>  <?php if( $autoplay == 1 ){?>autoplay<?php } ?> <?php if( $loop == 1 ){?>loop<?php } ?> playsinline poster="<?php echo $poster['sizes']['fp-xlarge']; ?>">
		<source src="<?php echo get_field('background_video_mp4'); ?>" type="video/mp4">
	</video>
    </div>
</div>
</section>