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
<header class="header-container">
	<div class="header-text-content">
		<div class="header-content">
			<h1 class="entry-title"><?php the_title(); ?></h1>
			<?php get_template_part( 'template-parts/content', 'page' ); ?>
		</div>
	</div>
	<div class="header-image-content">
		<?php get_template_part( 'template-parts/featured-image' ); ?>
	</div>
</header>
<?php get_template_part( 'template-parts/share-links' ); ?>
<div class="main-container">
	<div class="main-grid">
		<main class="main-content-full-width">
			<span class="filter-bar"><h3>Filter Results:</h3><?php echo do_shortcode( '[searchandfilter fields="member_benefit_categories,search"]' ); ?></span>
		<div class="block-grid-container">
			<ul class="block-grid-2up-4up-content">
		    <?php $args = array(
					'posts_per_page' => '200',
					'post_type' => 'members_benefits',
					'order' => 'ASC',
					);
			$query = new WP_Query($args);
			
			while ($query->have_posts()) {
			$query->the_post(); 
			 ?>
			<li class="grid-item">	<?php get_template_part( 'template-parts/content', 'benefits' ); ?></li>
			<?php } ?>
			</ul>
		</div>
		</main>
		</div>
</div>

<?php
get_footer();
