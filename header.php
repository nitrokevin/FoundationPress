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

	<?php if ( get_theme_mod( 'wpt_mobile_menu_layout' ) === 'offcanvas' ) : ?>
		<?php get_template_part( 'template-parts/mobile-off-canvas' ); ?>
	<?php endif; ?>
	<header class="site-header sticky-shrinknav-header" role="banner">
  	<div class="site-title-bar" <?php foundationpress_title_bar_responsive_toggle(); ?>>
    	<div class="sticky-shrinknav-header-title">
					 <a href='<?php echo esc_url( home_url( '/' ) ); ?>' title='<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>' rel='home'><img src='<?php echo esc_url( get_theme_mod( 'header_logo' ) ); ?>' alt='<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>'></a>
				</div>
				<div class="menu align-center sticky-shrinknav-menu">
        <button aria-label="<?php _e( 'Main Menu', 'foundationpress' ); ?>" class="menu-icon" type="button" data-toggle="<?php foundationpress_mobile_menu_id(); ?>"></button>
			</div>    	
  	</div>
		<nav class="desktop-menu" role="navigation">
				<div class="sticky-shrinknav-header-title">
					 <a href='<?php echo esc_url( home_url( '/' ) ); ?>' title='<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>' rel='home'><img src='<?php echo esc_url( get_theme_mod( 'header_logo' ) ); ?>' alt='<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>'></a>
				</div>

			<div class="menu align-center sticky-shrinknav-menu">
				<?php foundationpress_top_bar_r(); ?>

				<?php if ( ! get_theme_mod( 'wpt_mobile_menu_layout' ) || get_theme_mod( 'wpt_mobile_menu_layout' ) === 'topbar' ) : ?>
					<?php get_template_part( 'template-parts/mobile-top-bar' ); ?>
				<?php endif; ?>
			</div>
		</nav>
		<?php
		$promotion_image = get_field('promotion_image'); 
		$promotion_link = get_field('promotion_link');
		$promotion_src = wp_get_attachment_image_url( $promotion_image['id'], 'medium' );
		$promotion_srcset = wp_get_attachment_image_srcset( $promotion_image['id'], 'medium' ); 
		if ($promotion_image){ ?>
<div class="promotion">
	<a href="<?php echo esc_url($promotion_link); ?>" >
<img src="<?php echo esc_url( $promotion_src ); ?>" srcset="<?php echo esc_attr( $promotion_srcset ); ?>"
sizes="(max-width: 100vw) 480px" alt="<?php echo $promotion['alt']; ?> " />
	</a>
	</div>
	<?php } ?>
	</header>
