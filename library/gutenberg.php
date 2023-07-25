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

 
  
    ) );

	}

	add_action( 'after_setup_theme', 'foundationpress_gutenberg_support' );
endif;
