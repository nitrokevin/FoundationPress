<?php
/*
Template Name: Projects
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
			<?php endwhile; ?>
		</main>
	</div>
</div>
</section>
<?php
//  Projects
    $args = array(
      'post_type' => 'projects',
      'posts_per_page'=> '100',
      'tax_query' => array(       
      )
    );
    $casestudies = new WP_Query( $args );
    $count = $casestudies->post_count;
    if( $casestudies->have_posts() ) { ?>

     <div class="range-block-grid-container">
		<div class="range-block-grid"  data-active-collapse="true" data-tabs id="collapsing-tabs">
			<div class="full">
  		<div class="block-grid-4up-content">
    	 <?php while( $casestudies->have_posts() ) {
        $casestudies->the_post();
        ?>
           <div class="block-grid-item tabs-title">
			<a href="<?php echo esc_url( get_permalink() ) ?>"><?php get_template_part( 'template-parts/content-case-study-thumbnail', get_post_format() ); ?></a>
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
									<?php while( $casestudies->have_posts() ) {
									$casestudies->the_post();
									?>      

									<div class="tabs-panel" id="panel<?php the_ID(); ?>">
										<?php get_template_part( 'template-parts/content-case-studies', get_post_format() ); ?>
											<?php
											if( have_rows('sections') ):
											while ( have_rows('sections') ) : the_row(); ?>         
      <?php get_template_part( 'template-parts/acf-repeater-row-layout' ); ?>
      <?php get_template_part( 'template-parts/acf-block-grid-layout' ); ?>   
      <?php get_template_part( 'template-parts/acf-range-block-grid-layout' ); ?>    
       <?php get_template_part( 'template-parts/acf-style-article-layout' ); ?> 
       <?php get_template_part( 'template-parts/acf-one-column-article-tab-layout' ); ?> 
       <?php get_template_part( 'template-parts/acf-background-image-layout' ); ?> 
       <?php get_template_part( 'template-parts/acf-map-layout' ); ?>  
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

<?php get_footer();
