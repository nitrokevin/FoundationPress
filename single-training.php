<?php
/**
 * The template for displaying all single posts and attachments
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

get_header(); ?>

<header class="header-container">
	<div class="header-text-content">
		<div class="header-content">
			<h1 class="entry-title"><?php the_title(); ?></h1>
		</div>
	</div>
	<div class="header-image-content">
		<?php get_template_part( 'template-parts/featured-image' ); ?>
	</div>
</header>
<?php get_template_part( 'template-parts/share-links' ); ?>
<?php if ( !empty( get_the_content() ) ) {?> 
<div class="main-container">
	<div class="main-grid">
	
		<main class="main-content">
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'template-parts/content', '' ); ?>
			<?php endwhile; ?>
		</main>

			<aside class="sidebar" >
	<?php dynamic_sidebar( 'training-sidebar-widgets' ); ?>
	</aside>
	
		
		
	</div>
</div>
<?php } ?>
<?php
if (have_rows('sections')) :
	while (have_rows('sections')) : the_row();
		get_template_part('template-parts/flexible-layout-article');
		get_template_part('template-parts/acf-cta');
		get_template_part('template-parts/acf-tabs');
	endwhile;
endif;
?>
<?php get_footer();
