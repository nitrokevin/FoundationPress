<?php
/**
 * The template for displaying range detail
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

get_header(); ?>
<div class="main-container">
	<div class="main-grid">
		<main class="main-content-full-width">
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'template-parts/content-case-studies', '' ); ?>
			<?php endwhile; ?>
		</main>
	</div>
</div>
<?php
  if( have_rows('sections') ):
    while ( have_rows('sections') ) : the_row(); ?>    
      <?php get_template_part( 'template-parts/acf-repeater-row-layout' ); ?>
      <?php get_template_part( 'template-parts/acf-image-slider-layout' ); ?>   
      <?php get_template_part( 'template-parts/acf-range-block-grid-layout' ); ?>    
       <?php get_template_part( 'template-parts/acf-one-column-article-layout' ); ?> 
       <?php get_template_part( 'template-parts/acf-background-image-layout' ); ?> 
    <?php endwhile;   
  endif; 
?>
<?php get_footer();
