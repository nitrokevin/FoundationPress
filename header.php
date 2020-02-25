<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "container" div.
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

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
	<div data-sticky-container <?php if ( true == get_theme_mod( 'fixed_header', true ) ) : ?><?php if ( has_post_thumbnail( $post->ID ) ) { ?>class="fixed-header"<?php } ?><?php endif; ?>>
	<div data-sticky data-sticky-on="small" data-options="marginTop:0; z-index:100;">
	<?php endif; ?>
	<header class="site-header" role="banner">
		<div class="site-title-bar title-bar" <?php foundationpress_title_bar_responsive_toggle(); ?>>
		<div class="title-bar-left"> 
					<button aria-label="<?php _e('Main Menu', 'foundationpress'); ?>" class="menu-icon" type="button" data-toggle="<?php foundationpress_mobile_menu_id(); ?>"></button>
				</div>
				<div class="title-bar-center">
					<span class="site-mobile-title title-bar-title">
						<a href="<?php echo esc_url(home_url('/')); ?>" title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>" rel="home">
							<img src="<?php echo esc_url(get_theme_mod('header_logo')); ?>" alt="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>"></a>
					</span>
				</div>
				<div class="title-bar-right">
				
				</div>
		</div>
		
		<nav class="site-navigation top-bar" role="navigation" id="<?php foundationpress_mobile_menu_id(); ?>">
		<div class="top-bar-inner-container">
			<div class="top-bar-left">
			</div>
			<div class="top-bar-center">
				<div class="site-desktop-title top-bar-title">
					<a href="<?php echo esc_url(home_url('/')); ?>" title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>" rel="home">
						<img src="<?php echo esc_url(get_theme_mod('header_logo')); ?>" alt="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>">
					</a>
				</div>
			</div>

			<div class="top-bar-right">
				<?php foundationpress_top_bar_r(); ?>
				<?php if ( ! get_theme_mod( 'foundationpress_mobile_menu_layout' ) || get_theme_mod( 'foundationpress_mobile_menu_layout' ) === 'topbar' ) : ?>
					<?php get_template_part( 'template-parts/mobile-top-bar' ); ?>
				<?php endif; ?>
			</div>
		</div>
		</nav>
		
	</header>
	<?php if ( true == get_theme_mod( 'sticky_header', true ) ) : ?>
	</div>
	</div>
	<?php endif; ?>