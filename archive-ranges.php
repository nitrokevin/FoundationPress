<?php
/**
 * The template for Range archive pages
 *
 */

get_header(); ?>
 <header class="featured-hero-spacer">
 </header>
 <div class="main-container">
	<div class="main-grid">
		<main class="main-content-full-width">
<?php
		if ( is_single() ) {
			the_title( '<h1 class="entry-title">', '</h1>' );
		} else {
			the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		}
	?>

		</main>
	</div>
</div>

	<div class="range-block-grid-container">
		<div class="range-block-grid"  data-active-collapse="true" data-tabs id="collapsing-tabs">
			<div class="full">
  		<div class="block-grid-4up-content">
	  		<?php if ( have_posts() ) : ?>
						<?php /* Start the Loop */ ?>
							<?php while ( have_posts() ) : the_post(); ?>
								<div class="block-grid-item tabs-title">
									<a href="#panel<?php the_ID(); ?>"><?php get_template_part( 'template-parts/content-case-study-thumbnail', get_post_format() ); ?></a>
								</div>
							<?php endwhile; ?>
							<?php else : ?>
								<?php get_template_part( 'template-parts/content', 'none' ); ?>
							<?php endif; // End have_posts() check. ?>

								<?php /* Display navigation to next/previous pages when applicable */ ?>
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
				</div>
	  </div>
	  	   	
 <div class="main-container">
  <div class="main-grid">
	  <div class="main-content-full-width">
	<?php if ( have_posts() ) : ?>
							<?php while ( have_posts() ) : the_post(); ?>
		 	<div class="tabs-content" data-tabs-content="collapsing-tabs">

									<div class="tabs-panel" id="panel<?php the_ID(); ?>">
													
										<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header>
	<?php
		if ( is_single() ) {
			the_title( '<div class="featured-hero-spacer"></div><h1 class="entry-title">', '</h1>' );
		} else {
			the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		}
	?>
	</header>
	<div class="entry-content">
		<?php the_content(); ?>
	</div>
<?php	while ( have_rows('sections') ) : the_row(); ?>         
			<?php get_template_part( 'template-parts/acf-image-slider-layout' ); ?>   
						<?php endwhile;  ?> 
								<?php if( have_rows('reusable_sections', 'option') ): ?>
        <?php while( have_rows('reusable_sections', 'option') ): the_row(); ?>
        
       <?php get_template_part( 'template-parts/acf-one-column-article-layout' ); ?> 
    <?php endwhile; ?>

<?php endif; ?>
											
					</article>
				</div>
			</div>
								<?php endwhile; ?>
							<?php endif; // End have_posts() check. ?>
		</div>
</div>
</div>
				
										        		


<?php get_footer();
