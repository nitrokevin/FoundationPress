<?php
// If a featured image is set, insert into layout and use Interchange
// to select the optimal image size per named media query.
if ( has_post_thumbnail( $post->ID ) && is_front_page() ) : ?>
	<header class="front-hero" role="banner" data-interchange="[<?php the_post_thumbnail_url( 'featured-small' ); ?>, small], [<?php the_post_thumbnail_url( 'featured-medium' ); ?>, medium], [<?php the_post_thumbnail_url( 'featured-large' ); ?>, large], [<?php the_post_thumbnail_url( 'featured-xlarge' ); ?>, xlarge]">
	<div class="marketing">
		<div class="tagline">
			<h1><?php bloginfo( 'name' ); ?></h1>
			<h4 class="subheader"><?php bloginfo( 'description' ); ?></h4>
		</div>
	</div>
</header>
	<?php endif;
if ( has_post_thumbnail( $post->ID ) && !is_front_page()) : ?>
	<header class="featured-hero" role="banner" data-interchange="[<?php the_post_thumbnail_url( 'fp-small' ); ?>, small], [<?php the_post_thumbnail_url( 'fp-medium' ); ?>, medium]">
	</header>
<?php endif;
