<?php
/*
Template Name: Worktops
*/
get_header(); 

$background = get_field('intro_background');?>

<?php get_template_part( 'template-parts/featured-image' ); ?>
<section class="<?php echo $background ?>">
<div class="main-container">
	<div class="main-grid">
		<main class="main-content-full-width">
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'template-parts/content', 'page' ); ?>
				<?php comments_template(); ?>
			<?php endwhile; ?>
		</main>
	</div>
</div>
</section>
<?php
//  Case Studies
    $args = array(
      'post_type' => 'worktops',
      'posts_per_page'=> '10',
      'tax_query' => array(       
      )
    );
    $ranges = new WP_Query( $args );
    $count = $ranges->post_count;
    if( $ranges->have_posts() ) { ?>

   <div class="range-block-grid-container">
		<div class="range-block-grid"  data-active-collapse="true" data-tabs id="collapsing-tabs">
			<div class="full">
  		<div class="block-grid-4up-content">
    	 <?php while( $ranges->have_posts() ) {
        $ranges->the_post();
        ?>
          <div class="block-grid-item tabs-title">
									<a href="#panel<?php the_ID(); ?>"><?php get_template_part( 'template-parts/content-case-study-thumbnail', get_post_format() ); ?></a>
								</div>

        <?php	       
      } ?>
	   </div> 
   </div>
		</div>
   </div>
   
   
   
   
    <div class="main-container">
     <div class="main-grid">
	     <div class="main-content-full-width">
		     	<div class="tabs-content" data-tabs-content="collapsing-tabs">
									<?php while( $ranges->have_posts() ) {
									$ranges->the_post();
									?>      

									<div class="tabs-panel" id="panel<?php the_ID(); ?>">
										<?php get_template_part( 'template-parts/content-case-studies', get_post_format() ); ?>
											<?php
											if( have_rows('sections') ):
											while ( have_rows('sections') ) : the_row(); ?>         
											<?php get_template_part( 'template-parts/acf-image-slider-layout' ); ?>   
											<?php endwhile;  ?> 
											<?php endif; ?> 
									</div>
									<?php
										} ?>
										</div>
        </div>
      </div>
					</div>
         
   <?php }  
  ?>
<?php
  if( have_rows('sections') ):
    while ( have_rows('sections') ) : the_row(); ?>       
      <?php get_template_part( 'template-parts/acf-repeater-row-layout' ); ?>
      <?php get_template_part( 'template-parts/acf-block-grid-layout' ); ?>    
       <?php get_template_part( 'template-parts/acf-style-article-layout' ); ?> 
    <?php endwhile;   
  endif; 
?>

<?php get_footer();






