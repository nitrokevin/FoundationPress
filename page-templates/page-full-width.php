<?php
/*
Template Name: Full Width
*/
get_header(); ?>

<?php get_template_part( 'template-parts/featured-image' ); ?>
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
<?php
if (have_rows('sections')) :
	while (have_rows('sections')) : the_row();
		get_template_part('template-parts/acf/flexible-layout-article');
		get_template_part('template-parts/acf/full-width-50-50');
		get_template_part('template-parts/acf/accordion');
	endwhile;
endif;
?>
<?php get_footer();
