<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * e.g., it puts together the home page when no home.php file exists.
 *
 * Learn more: {@link https://codex.wordpress.org/Template_Hierarchy}
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

get_header(); ?>
<header class="header-container">
	<div class="header-text-content">
		<div class="header-content">
			<h1 class="entry-title"><?php single_post_title(); ?></h1>
		</div>
	</div>
	<div class="header-image-content">
		<?php
			$featured_image_small_image = wp_get_attachment_image_src(get_post_thumbnail_id(get_option('page_for_posts')), 'fp-small');
			$featured_image_small = $featured_image_small_image[0];
			$featured_image_medium_image = wp_get_attachment_image_src(get_post_thumbnail_id(get_option('page_for_posts')), 'fp-medium');
			$featured_image_medium = $featured_image_medium_image[0];
		
			 ?>
			 <div class="featured-hero" role="banner" data-interchange="[<?php echo $featured_image_small ?>, small], [<?php echo $featured_image_medium ?>, medium]">
	
</div>
	</div>
</header>
<?php get_template_part( 'template-parts/share-links' ); ?>
<div class="main-container">
	<div class="main-grid">
		<main class="main-content">
		<span class="filter-bar"><h3>Filter Results:</h3><?php echo do_shortcode( '[searchandfilter fields="categories,search"]' ); ?></span>
	
		<div class="block-grid-container">
			<ul class="block-grid-1up-3up-content">
		<?php if ( have_posts() ) : ?>

			<?php /* Start the Loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<li class="grid-item"><?php get_template_part( 'template-parts/content', get_post_format() ); ?></li>
			<?php endwhile; ?>
			</ul>

			<?php else : ?>
				<?php get_template_part( 'template-parts/content', 'none' ); ?>

			<?php endif; // End have_posts() check. ?>
		</div>
			<?php /* Display navigation to next/previous pages when applicable */ ?>
			<?php
			if ( function_exists( 'foundationpress_pagination' ) ) :
				foundationpress_pagination();
			elseif ( is_paged() ) :
			?>
				<nav id="post-nav" aria-label="Post navigation">
					<div class="post-previous"><?php next_posts_link( __( '&larr; Older posts', 'foundationpress' ) ); ?></div>
					<div class="post-next"><?php previous_posts_link( __( 'Newer posts &rarr;', 'foundationpress' ) ); ?></div>
				</nav>
			<?php endif; ?>

		</main>
		<?php get_sidebar(); ?>

	</div>
</div>
<?php get_footer();
