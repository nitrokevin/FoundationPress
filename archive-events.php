<?php
/**
 * The template for displaying archive pages
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * If you'd like to further customize these archive views, you may create a
 * new template file for each one. For example, tag.php (Tag archives),
 * category.php (Category archives), author.php (Author archives), etc.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

get_header(); ?>
<header class="header-container">
	<div class="header-text-content">
		<div class="header-content">
		<h1 class="entry-title"><?php echo post_type_archive_title( '', false );?></h1>
		</div>
	</div>
	<div class="header-image-content">
		<?php get_template_part( 'template-parts/featured-image' ); ?>
	</div>
</header>
<?php get_template_part( 'template-parts/share-links' ); ?>
<div class="main-container">
	<div class="main-grid">
	<main class="main-content-full-width">
	<span class="filter-bar"><h3>Filter Results:</h3><?php echo do_shortcode( '[searchandfilter fields="events_categories,search"]' ); ?></span>

	<div class="block-grid-container">
		<ul class="block-grid-2up-4up-content">
		<?php if ( have_posts() ) : ?>

		
			<?php while ( have_posts() ) : the_post(); ?>
			<li class="grid-item">	<?php get_template_part( 'template-parts/content', get_post_format() ); ?></li>
			<?php endwhile; ?>

			<?php else : ?>
				<?php get_template_part( 'template-parts/content', 'none' ); ?>

			<?php endif; // End have_posts() check. ?>
			
			</ul>
			
			</div>
	</main>
		
			<?php
			if ( function_exists( 'foundationpress_pagination' ) ) :
				foundationpress_pagination();
			elseif ( is_paged() ) :
			?>
				<nav id="post-nav">
					<div class="post-previous"><?php next_posts_link( __( '&larr; Older posts', 'foundationpress' ) ); ?></div>
					<div class="post-next"><?php previous_posts_link( __( 'Newer posts &rarr;', 'foundationpress' ) ); ?></div>
				</nav>
			<?php endif; ?>

		
	

	</div>
</div>

<?php get_footer();
