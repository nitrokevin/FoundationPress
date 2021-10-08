<?php

if ( ! function_exists( 'foundationpress_gutenberg_support' ) ) :
	function foundationpress_gutenberg_support() {
        include 'colors.php';
    // Add foundation color palette to the editor
    add_theme_support( 'editor-color-palette', array(
        array(
            'name' => __( 'Primary Color', 'foundationpress' ),
            'slug' => 'primary',
            'color' => $primary_color,
        ),
        array(
            'name' => __( 'Secondary Color', 'foundationpress' ),
            'slug' => 'secondary',
            'color' => $secondary_color,
        ),
        array(
            'name' => __( 'Light Gray', 'foundationpress' ),
            'slug' => 'light-gray',
            'color' => $light_gray,
        ),
        array(
            'name' => __( 'Medium Gray', 'foundationpress' ),
            'slug' => 'medium-gray',
            'color' => $medium_gray,
        ),
        array(
            'name' => __( 'Dark Gray', 'foundationpress' ),
            'slug' => 'dark-gray',
            'color' => $dark_gray,
        ),
        array(
            'name' => __( 'Theme Color 1', 'foundationpress' ),
            'slug' => 'theme-color-1',
            'color' => $theme_color_1,
        ),
        array(
            'name' => __( 'Theme Color 2', 'foundationpress' ),
            'slug' => 'theme-color-2',
            'color' => $theme_color_2,
        ),
        array(
            'name' => __( 'Theme Color 3', 'foundationpress' ),
            'slug' => 'theme-color-3',
            'color' => $theme_color_3,
        )
    ) );

	}

	add_action( 'after_setup_theme', 'foundationpress_gutenberg_support' );
endif;
