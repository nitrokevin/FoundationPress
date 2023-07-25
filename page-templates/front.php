<?php
/*
Template Name: Front
*/
get_header(); ?>

<?php get_template_part( 'template-parts/featured-image' ); ?>

<?php do_action( 'foundationpress_before_content' ); ?>
<?php while ( have_posts() ) : the_post(); ?>
<section class="intro" role="main">
	<div class="fp-intro">
		<div <?php post_class(); ?> id="post-<?php the_ID(); ?>">
			<?php do_action( 'foundationpress_page_before_entry_content' ); ?>
			<div class="entry-content">
				<?php the_content(); ?>
			</div>
		</div>
	</div>
</section>
<?php endwhile; ?>
<?php do_action( 'foundationpress_after_content' ); ?>
<?php
if (have_rows('flexible_content')) :
	while (have_rows('flexible_content')) : the_row();
	get_template_part('template-parts/acf/flexible-article');
	get_template_part('template-parts/acf/flexible-grid');
	get_template_part('template-parts/acf/full-width-50-50');
	get_template_part('template-parts/acf/accordion');
	get_template_part('template-parts/acf/tab');
	get_template_part('template-parts/acf/carousel');
	endwhile;
endif;
?>

<?php get_footer();