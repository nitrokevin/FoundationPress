<?php
/*
Template Name: Right Sidebar
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
<div class="main-container">
	<div class="main-grid sidebar-right">
		<main class="main-content">
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'template-parts/content', 'page' ); ?>
			
			<?php endwhile; ?>
		 </main>
	<?php get_sidebar(); ?>
	</div>
</div>
<?php get_footer();
