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
			<?php endwhile; ?>
		</main>
	</div>
</div>
<?php
if (have_rows('flexible_content')) :
	while (have_rows('flexible_content')) : the_row();
	get_template_part('template-parts/acf/flexible-article');
	get_template_part('template-parts/acf/full-width-50-50');
	get_template_part('template-parts/acf/accordion');
	get_template_part('template-parts/acf/tab');
	get_template_part('template-parts/acf/carousel');
	endwhile;
endif;
?>
<?php get_footer();
