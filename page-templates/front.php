<?php
/*
Template Name: Front
*/
get_header(); 

	?>

<?php get_template_part( 'template-parts/featured-image-slider' ); ?>

</div>
<?php do_action( 'foundationpress_before_content' ); ?>
<?php while ( have_posts() ) : the_post(); ?>
<section class="intro" role="main">
	<div class="fp-intro">

		<div <?php post_class(); ?> id="post-<?php the_ID(); ?>">
			<?php do_action( 'foundationpress_page_before_entry_content' ); ?>
			<div class="entry-content">
				<?php the_content(); ?>
			</div>
			<footer>
				<?php
					wp_link_pages(
						array(
							'before' => '<nav id="page-nav"><p>' . __( 'Pages:', 'foundationpress' ),
							'after'  => '</p></nav>',
						)
					);
				?>
				<p><?php the_tags(); ?></p>
			</footer>
			<?php do_action( 'foundationpress_page_before_comments' ); ?>
			<?php comments_template(); ?>
			<?php do_action( 'foundationpress_page_after_comments' ); ?>
		</div>

	</div>
</section>
<?php endwhile; ?>
<?php do_action( 'foundationpress_after_content' ); ?>

<?php
  if( have_rows('sections') ):
    while ( have_rows('sections') ) : the_row(); ?> 
        
      <?php get_template_part( 'template-parts/acf-repeater-row-layout' ); ?>
      <?php get_template_part( 'template-parts/acf-block-grid-layout' ); ?> 
      <?php get_template_part( 'template-parts/acf-range-block-grid-layout' ); ?>
      <?php get_template_part( 'template-parts/acf-one-column-article-layout' ); ?> 
      <?php get_template_part( 'template-parts/acf-background-image-layout' ); ?> 
      <?php get_template_part( 'template-parts/acf-image-slider-layout' ); ?> 
      <?php get_template_part( 'template-parts/acf-map-layout' ); ?> 
       
    <?php endwhile;   
  endif; ?>

<?php get_footer();
