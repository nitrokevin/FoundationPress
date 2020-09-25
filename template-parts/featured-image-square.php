<?php
// If a featured image is set, insert into layout and use Interchange
// to select the optimal image size per named media query.
if ( has_post_thumbnail( $post->ID ) ) : ?>
	<img class="featured-hero-square" role="banner" data-interchange="[<?php echo the_post_thumbnail_url('featured-small-square'); ?>, small], [<?php echo the_post_thumbnail_url('featured-medium-square'); ?>, medium]" />


<?php endif;
