<?php
/*
Template Name: Front
*/
get_header(); ?>

<section id="front-hero" class="front-hero">
  <div class="front-hero-image" 
       data-interchange="[<?php the_post_thumbnail_url( 'featured-small' ); ?>, small], [<?php the_post_thumbnail_url( 'featured-medium' ); ?>, medium], [<?php the_post_thumbnail_url( 'featured-large' ); ?>, large], [<?php the_post_thumbnail_url( 'featured-xlarge' ); ?>, xlarge]" 
       data-type="background">
  </div>

  <div class="marketing">
    <div class="tagline">
      <h1><?php bloginfo( 'name' ); ?></h1>
      <p><?php bloginfo( 'description' ); ?></p>
      <hr>
	  <div class="wp-block-button">
	  <a href="" class="wp-block-button__link has-secondary-background-color">Book a consultation</a>
	  </div>
	  <div class="wp-block-button">
	  <a href="" class="wp-block-button__link has-secondary-background-color">Explore our services</a>
	  </div>
    </div>
  </div>
</section>

<?php do_action( 'foundationpress_before_content' ); ?>
<?php if ( !empty( get_the_content() ) ) {?> 
<div class="main-container front-page">
	<div class="main-grid">
		<main class="main-content-full-width">
			<?php while ( have_posts() ) : the_post(); ?>
				<?php the_content(); ?>
			<?php endwhile; ?>
		</main>
	</div>
</div>
<?php } ?>
<?php do_action( 'foundationpress_after_content' ); ?>

<?php get_footer();
