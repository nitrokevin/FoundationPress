<?php
/**
 * The template for displaying search results pages.
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

get_header(); ?>
<header class="header-container">
	<div class="header-text-content">
		<div class="header-content">
			<h1 class="entry-title">Search Results</h1>
		</div>
	</div>
	<div class="header-image-content">
		<?php get_template_part( 'template-parts/featured-image' ); ?>
	</div>
</header>
<div class="main-container">
	<div class="main-grid">
	
			<div id="search-results">

				<header>
					<h1 class="entry-title"><?php _e( 'Search Results for', 'foundationpress' ); ?> "<?php echo get_search_query(); ?>"</h1>
				</header>
				<div class="block-grid-container">
				<ul class="block-grid-2up-4up-content">
				<?php if ( have_posts() ) : ?>

					<?php
					while ( have_posts() ) :
						the_post();
						?>
						<li class="grid-item">	<?php get_template_part( 'template-parts/content', get_post_format() ); ?></li>
					<?php endwhile; ?>

					<?php else : ?>
						<?php get_template_part( 'template-parts/content', 'none' ); ?>

						</ul>
					</div>
					<?php endif; ?>

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

			</div>



	</div>
</div>
<?php
get_footer();
