<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "container" div.
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */
$contact_phone_number = get_theme_mod('contact_phone_number');
$page_header = get_field('page_header');
$slider = get_field('slider');
?>
<!doctype html>
<html class="no-js" <?php language_attributes(); ?> >
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<?php if (get_theme_mod('wpt_mobile_menu_layout') === 'offcanvas') : ?>
		<?php get_template_part( 'template-parts/mobile-off-canvas' ); ?>
	<?php endif; ?>
	<?php if ( true == get_theme_mod( 'sticky_header', true ) ) : ?>
	<div data-sticky-container data-check-every="0" <?php if ( true == get_theme_mod( 'fixed_header', true ) ) : ?><?php if ( has_post_thumbnail(  ) || ($slider == 1)  ) { ?>class="fixed-header"<?php } ?><?php endif; ?>>
	<div data-sticky data-sticky-on="small" class="<?php if (!is_front_page()){ ?>page-sticky<?php } ?>" data-check-every="0" data-options="marginTop:0; z-index:100;">
	<?php endif; ?>
	<header class="site-header" role="banner">
		<div class="site-title-bar title-bar" <?php foundationpress_title_bar_responsive_toggle(); ?>>
			<div class="title-bar-left"> 
				
				</div>
			<div class="title-bar-center">
				<span class="site-mobile-title title-bar-title">
					<a href="<?php echo esc_url(home_url('/')); ?>" title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>" rel="home">
						<img src="<?php echo esc_url(get_theme_mod('header_logo')); ?>" alt="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>"></a>
				</span>
				<div class="header-intro">
			<h1 class="subheader"><?php bloginfo( 'description' ); ?></h1>
			<?php if (is_front_page()){ ?>
			<a href="/contact-booking/" class="button hollow">Book Online</a>
			<?php } ?>
			</div>
			</div>
			<div class="title-bar-right">
				<button aria-label="<?php _e('Main Menu', 'foundationpress'); ?>" class="menu-icon" type="button" data-toggle="<?php foundationpress_mobile_menu_id(); ?>"></button>
			</div>
		</div>
		
		<nav class="site-navigation top-bar wave" role="navigation" id="<?php foundationpress_mobile_menu_id(); ?>">
			<div class="top-bar-inner-container <?php if ( true == get_theme_mod( 'contained_header', true ) ) { ?>contained<?php } ?>">
				<div class="top-bar-left">
					<div class="site-desktop-title">
						<a href="<?php echo esc_url(home_url('/')); ?>" title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>" rel="home">
							<img src="<?php echo esc_url(get_theme_mod('header_logo')); ?>" alt="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>">
						</a>
					</div>
				<?php foundationpress_top_bar_l(); ?>
			</div>
			
			<div class="top-bar-right">
			<?php foundationpress_top_bar_r(); ?>
			<ul><?php if (get_theme_mod('social-facebook')) : ?>
					<li><a href="<?php echo esc_url(get_theme_mod('social-facebook-url')); ?> " rel="noreferrer"  target="_blank" aria-label="Facebook">
							<i class="fab fa-facebook-f fa-fw"></i>
						</a></li>
				<?php endif; ?>
				<?php if (get_theme_mod('social-twitter')) : ?>
					<li><a href="<?php echo esc_url(get_theme_mod('social-twitter-url')); ?>" rel="noreferrer" target="_blank" aria-label="Twitter">
							<i class="fab fa-twitter fa-fw"></i>
						</a></li>
				<?php endif; ?>
				<?php if (get_theme_mod('social-instagram')) : ?>
					<li><a href="<?php echo esc_url(get_theme_mod('social-instagram-url')); ?>" rel="noreferrer" target="_blank" aria-label="Instagram">

							<i class="fab fa-instagram fa-fw"></i>
						</a></li>
				<?php endif; ?>
				<?php if (get_theme_mod('social-linkedin')) : ?>
					<li><a href="<?php echo esc_url(get_theme_mod('social-linkedin-url')); ?>" rel="noreferrer" target="_blank" aria-label="LinkedIn">

							<i class="fab fa-linkedin-in fa-fw"></i>
						</a></li>
				<?php endif; ?>
				<?php if (get_theme_mod('social-pinterest')) : ?>
					<li><a href="<?php echo esc_url(get_theme_mod('social-pinterest-url')); ?>" rel="noreferrer" target="_blank" aria-label="Pinterest">
							<i class="fab fa-pinterest fa-fw"></i>
						</a></li>
				<?php endif; ?>
				<?php if ($contact_phone_number){?><li><?php echo $contact_phone_number ?></li><?php } ?>
			</ul>
		<?php if (is_front_page()){ ?>
			<div class="header-intro text-left">
			<h1 class="subheader"><?php bloginfo( 'description' ); ?></h1>
			<p><?php echo $page_header ?></p>
			<a href="/contact-booking/" class="button hollow">Book Online</a>
			</div>
			<?php } ?>
				<?php if ( ! get_theme_mod( 'foundationpress_mobile_menu_layout' ) || get_theme_mod( 'foundationpress_mobile_menu_layout' ) === 'topbar' ) : ?>
					<?php get_template_part( 'template-parts/mobile-top-bar' ); ?>
				<?php endif; ?>
			</div>
		</div>
		</nav>
		<svg class="svg"><clipPath id="clip1" clipPathUnits="objectBoundingBox"><path d="M0,0l1,0l0,0.8c0,0-0.1-0.1-0.3-0.1S0.5,0.8,0.3,0.8S0,0.7,0,0.7"></path></clipPath></svg>
	</header>
	<?php if ( true == get_theme_mod( 'sticky_header', true ) ) : ?>
	</div>
	</div>
	<?php endif; ?>