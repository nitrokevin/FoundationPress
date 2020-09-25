<?php
/*
Template Name: Full Width
*/
get_header(); 
$background = get_field('intro_background');?>

<?php get_template_part( 'template-parts/featured-image' ); ?>
<section class="<?php  echo $background; ?>">
<div class="main-container">
	<div class="main-grid">
		<main class="main-content-full-width">
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'template-parts/content', 'page' ); ?>
			<?php endwhile; ?>
		</main>
	</div>
</div>
</section>



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
