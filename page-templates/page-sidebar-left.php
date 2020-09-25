<?php
/*
Template Name: Left Sidebar
*/
get_header(); ?>

<?php get_template_part( 'template-parts/featured-image' ); ?>
<div class="main-container">
	<div class="main-grid sidebar-left">
		<main class="main-content">
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'template-parts/content', 'page' ); ?>
			<?php endwhile; ?>
		 </main>
	<?php get_sidebar(); ?>
	</div>
</div>


<?php
  if( have_rows('sections') ):
    while ( have_rows('sections') ) : the_row(); ?>       
      <?php get_template_part( 'template-parts/acf-repeater-row-layout' ); ?>
      <?php get_template_part( 'template-parts/acf-block-grid-layout' ); ?>   
      <?php get_template_part( 'template-parts/acf-range-block-grid-layout' ); ?>    
       <?php get_template_part( 'template-parts/acf-style-article-layout' ); ?> 
       <?php get_template_part( 'template-parts/acf-one-column-article-layout' ); ?> 
       <?php get_template_part( 'template-parts/acf-background-image-layout' ); ?> 
       <?php get_template_part( 'template-parts/acf-map-layout' ); ?> 
    <?php endwhile;   
  endif; 
?>


<?php get_footer();
