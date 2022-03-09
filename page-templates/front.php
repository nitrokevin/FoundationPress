<?php
/*
Template Name: Front
*/
get_header();
$member_section = get_field('member_section');
$member_section_small_image = $member_section['member_image']['sizes']['fp-small'];
$mid_section = get_field('mid_section');
$mid_section_small_image = $mid_section['mid_section_right_image']['sizes']['square'];
$mid_section_medium_image = $mid_section['mid_section_right_image']['sizes']['square-medium'];

?>
<div class="front">
	<section class="home-main-section">
	<?php if( have_rows('home_carousel') ){ ?>
		<div class="home-carousel">
	
			<div class="home-carousel-fade">
			<?php while( have_rows('home_carousel') ) { the_row(); 
		 $home_carousel_fade_content = get_sub_field('home_carousel_fade_content'); 
			?>
				<div><?php echo $home_carousel_fade_content ?></div>
				<?php } ?>
			</div>
		
		
			<div class="home-carousel-slide">
			<?php while( have_rows('home_carousel') ) { the_row(); 
		 $home_carousel_slider_content = get_sub_field('home_carousel_slider_content'); 
		 $home_carousel_slider_image = get_sub_field('home_carousel_slider_image');
		$slider_small_image = $home_carousel_slider_image ['sizes']['fp-small'];
		$slider_medium_image = $home_carousel_slider_image ['sizes']['fp-medium'];	
			?>
				<div>
					<div class="slider-image" data-interchange="[<?php echo $slider_small_image; ?>, small], [<?php echo $slider_medium_image; ?>, medium]"></div>
					<div class="slider-content">
					<?php echo $home_carousel_slider_content ?>
					</div>
				</div>
				<?php } ?>
			</div>
		
		</div>
		<?php } ?>
		<aside class="home-member">
			<div class="member-image" data-interchange="[<?php echo $member_section_small_image; ?>, small]"></div>
			<div class="member-content">
				<?php echo $member_section['member_content'] ?>
			</div>
		</aside>
	</section>
</div>
<section class="home-mid-section">
	<div class="home-mid-section-container">
		<div class="latest-news">
			<h4>Latest news</h4>
			<ul>
			<?php $args = array(
			'posts_per_page' => '3',
			'post_type' => 'post',
			
			);
			$news = new WP_Query($args);
			while ($news->have_posts()) {
			$news->the_post(); ?>
				<li class="">
					<?php get_template_part('template-parts/content', get_post_format()); ?>
				</li>
			<?php } wp_reset_postdata(); ?>
			</ul>
		</div>
		<div class="right-section">
		<div class="training-image" data-interchange="[<?php echo $mid_section_small_image; ?>, small], [<?php echo $mid_section_medium_image; ?>, medium]"></div>
		<div class="training">
		<?php echo $mid_section['mid_section_right_content'] ?>
		</div>
		</div>
	</div>
</section>
<section class="featured-pages-container">
<?php if( have_rows('featured_pages') ){ ?>
	<ul class="featured-pages-2up-3up-content">
	<?php while( have_rows('featured_pages') ) { the_row();
		 $page_title = get_sub_field('page_title'); 
		 $page_description = get_sub_field('page_description');
		 $header_image = get_sub_field('header_image');
		 $featured_pages_small_image = $header_image['sizes']['fp-small'];
		 $page_link =get_sub_field('page_link');  ?>
		<li class="grid-item">
		<a href="<?php echo $page_link ?>">
			<div class="header-image" data-interchange="[<?php echo $featured_pages_small_image; ?>, small]"></div>
			<div class="entry-title">
				<h4><?php echo $page_title ?></h4>
			</div>
		</a>
			<div class="entry-content">
			<?php echo $page_description ?>
			<br />
			<a href="<?php echo $page_link ?>">Learn More</a>
			</div>
		</li>
		<?php } ?>
	</ul>
	<?php } ?>

</section>

<?php
if (have_rows('sections')) :
	while (have_rows('sections')) : the_row();
		get_template_part('template-parts/flexible-layout-article');
		get_template_part('template-parts/page-blocks');
	endwhile;
endif;
?>

<?php get_footer();