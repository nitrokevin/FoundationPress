<?php
/**
 * The template for displaying pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that
 * other "pages" on your WordPress site will use a different template.
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

get_header(); ?>

<?php get_template_part( 'template-parts/featured-image' ); ?>
<?php if ( !empty( get_the_content() ) ) {?> 
<div class="main-container">
	<div class="main-grid">
		<main class="main-content">
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'template-parts/content', 'page' ); ?>
				<?php comments_template(); ?>
			<?php endwhile; ?>
		</main>
		<?php get_sidebar(); ?>
	</div>
</div>
<?php } ?>
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
<?php
get_footer();
