<?php
// If a featured image is set, insert into layout and use Interchange
// to select the optimal image size per named media query.
$background = get_field('page_background_color');
$slider = get_field('slider');
$page_header = get_field('page_header');
$page_intro = get_field('page_intro');
if (has_post_thumbnail($post->ID) && ($slider == 0) && (!is_front_page())) { 
?>
<!-- No Slider Not front page -->
<header class="featured-hero" role="banner">
	<div class="header-grid">
		<div class="header-content left">
			<div class="header-image" data-interchange="[<?php the_post_thumbnail_url('small-square'); ?>, small], [<?php the_post_thumbnail_url('small-square'); ?>, medium]">
			</div>
		</div>
		<div class="header-content right <?php echo $background ?>">
			<div class="right-content">
			<?php if ( is_single() ) {?>
			<?php foundationpress_entry_meta(); ?>
			<?php } ?>
			<?php if (!is_front_page()){ ?>
			<header>
				<h4 class="entry-title"><?php the_title(); ?></h4>
			</header>
			<?php } ?>
		
			<?php echo $page_header ?>
			</div>
		</div>
	</div>
	<?php if ($page_intro) {  ?>
	<div class="intro-container">
	<div class="intro-grid">
	<div class="intro-content">
		<?php echo $page_intro ?>
	</div>
	</div>
	</div>
	<?php } ?>
</header>
<?php } ?>
<!-- Slider Not front page -->
<?php if (($slider == 1) && (!is_front_page())) { ?>
	<header class="featured-hero" role="banner">	
	<div class="header-grid">
				<div class="header-content left">
				<div class="splide slide-carousel">
					<div class="splide__track">
					<ul class="splide__list">
				<?php
			$gallery_image = get_field('repeater_intro_slider');
			
			foreach( $gallery_image as $slider_image ):
				
				if($slider_image){;
				$small = $slider_image['sizes']['fp-small'];
				$medium = $slider_image['sizes']['fp-medium'];
				$large = $slider_image['sizes']['fp-large'];
				};
				?>
				<li class="splide__slide">
					<div class="image" <?php if($slider_image){ ?> data-interchange="[<?php echo $small; ?>, small], [<?php echo $medium; ?>, medium], [<?php echo $large; ?>, large]" <?php } ?>></div>
				</li>
				<?php endforeach; ?>
					
					</ul>
					</div>
				</div>
				</div>

				<div class="header-content right <?php echo $background ?> <?php if ( is_single() ) {?> light-gray <?php } ?>">
					<div class="right-content">
					<?php if (!is_front_page()){ ?>
					<header>
						<h4 class="entry-title"><?php the_title(); ?></h4>
					</header>
					<?php } ?>
					<?php echo $page_header ?>
	
					</div>
				</div>
			</div>
			</li>
</header>
<?php } ?>
<!-- Slider front page -->
<?php if (($slider == 1) && (is_front_page())) { ?>
	<header class="front-hero" role="banner">
	<div class="splide slide-carousel">
	<div class="splide__track">
		<ul class="splide__list">

		<?php $gallery_image = get_field('repeater_intro_slider');
			
			foreach( $gallery_image as $slider_image ):
			
				if($slider_image){;
				$small = $slider_image['sizes']['fp-small'];
				$medium = $slider_image['sizes']['fp-medium'];
				$large = $slider_image['sizes']['fp-large'];
				};
				?>
				<li class="splide__slide">
			<div class="header-grid">
				<div class="header-content">
					<div class="image" <?php if($slider_image){ ?> data-interchange="[<?php echo $small; ?>, small], [<?php echo $medium; ?>, medium], [<?php echo $large; ?>, large]" <?php } ?>></div>
				</div>
				
			</div>
			</li>
			<?php endforeach; ?>
	
		</ul>
	</div>
	</div>
</header>
<?php } ?>