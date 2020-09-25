<?php
  
/** ACF Responsive Images */
add_filter('acf_the_content', 'wp_make_content_images_responsive');

function acf_responsive_image( $image_id, $image_size, $max_width ) {
	// Check if the image ID is not blank
	if ( $image_id != '' ) {
		// Set the default src image size
		$image_src = wp_get_attachment_image_url( $image_id, $image_size );
		// Set the srcset with various image sizes
		$image_srcset = wp_get_attachment_image_srcset( $image_id, $image_size );
		// Generate the markup for the responsive image
		echo 'src="' . $image_src . '" srcset="' . $image_srcset . '" sizes="(max-width: ' . $max_width . ') 100vw, ' . $max_width . '"';
	}
}
// Jpeg Quality
add_filter( 'jpeg_quality', create_function( '', 'return 70;' ) );
// CUSTOMIZER HEADER LOGO
function logo_customizer( $wp_customize ) {
$wp_customize->add_section( 'logo_section' , array(
'title' => __( 'Logos', 'logo' ),
'priority' => 30,
'description' => 'Upload a logo for the header of your site',
) );
$wp_customize->add_setting( 'header_logo' );
$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'header_logo', array(
'label' => __( 'Header Logo', 'logo' ),
'section' => 'logo_section',
'settings' => 'header_logo',
) ) );
$wp_customize->add_setting( 'footer_logo' );
$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'footer_logo', array(
'label' => __( 'Footer Logo', 'logo' ),
'section' => 'logo_section',
'settings' => 'footer_logo',
) ) );
}
add_action('customize_register', 'logo_customizer');
// change buttons in WYSWIG post editor, edit color palette
function my_mce4_options($init) {
  $default_colours = '"ffffff", "White",
                       "00567D","Blue",
                        "D7E4EA","Light Blue",
                        "efefef;","light-gray",
                      ';
  $init['textcolor_map'] = '['.$default_colours.','.$custom_colours.']';
  return $init;
}
add_filter('tiny_mce_before_init', 'my_mce4_options');
add_filter('tiny_mce_before_init', 'ag_tinymce_paste_as_text');
function ag_tinymce_paste_as_text( $init ) {
	$init['paste_as_text'] = true;
	return $init;
}
// Login in screen
function my_login_logo() { ?>
    <style type="text/css">
        #login h1 a, .login h1 a {
            background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/logo.svg);
padding-bottom: 120px;
width: 300px;

background-size: 250px;
        }
    </style>
<?php }
add_action( 'login_enqueue_scripts', 'my_login_logo' );
function my_login_logo_url() {
    return home_url();
}
add_filter( 'login_headerurl', 'my_login_logo_url' );
function my_login_logo_url_title() {
    return 'Admin Login';
}
add_filter( 'login_headertitle', 'my_login_logo_url_title' );


// CUSTOMIZER FOOTER CONTACT
function footer_contact_customizer( $wp_customize ) {
    $wp_customize->add_section(
        'contact_section',
        array(
            'title' => 'Footer Contact',
            'description' => 'Add contact details to the footer.',
            'priority' => 40,
        )
    );
    $wp_customize->add_setting(
    'footer_contact_header',
    array(
        'default' => 'Contact',
         'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control(
    'footer_contact_header',
    array(
        'label' => 'Header',
        'section' => 'contact_section',
        'type' => 'text',
    )
);
  $wp_customize->add_setting(
    'footer_address_1',
    array(
        'default' => '',
         'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control(
    'footer_address_1',
    array(
        'label' => 'Street',
        'section' => 'contact_section',
        'type' => 'text',
    )
);
    $wp_customize->add_setting(
    'footer_address_2',
    array(
        'default' => '',
         'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control(
    'footer_address_2',
    array(
        'label' => 'Street 2',
        'section' => 'contact_section',
        'type' => 'text',
    )
);
   $wp_customize->add_setting(
    'footer_address_3',
    array(
        'default' => '',
         'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control(
    'footer_address_3',
    array(
        'label' => 'Street 3',
        'section' => 'contact_section',
        'type' => 'text',
    )
);
   $wp_customize->add_setting(
    'footer_address_4',
    array(
        'default' => '',
         'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control(
    'footer_address_4',
    array(
        'label' => 'City',
        'section' => 'contact_section',
        'type' => 'text',
    )
);
   $wp_customize->add_setting(
    'footer_address_5',
    array(
        'default' => '',
         'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control(
    'footer_address_5',
    array(
        'label' => 'County',
        'section' => 'contact_section',
        'type' => 'text',
    )
);
   $wp_customize->add_setting(
    'footer_address_6',
    array(
        'default' => '',
         'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control(
    'footer_address_6',
    array(
        'label' => 'Postcode',
        'section' => 'contact_section',
        'type' => 'text',
    )
);    $wp_customize->add_setting(
    'footer_phone_number',
    array(
        'default' => '',
    )
);
$wp_customize->add_control(
    'footer_phone_number',
    array(
        'label' => 'Phone Number',
        'section' => 'contact_section',
        'type' => 'text',
    )
);
    $wp_customize->add_setting(
    'footer_mobile_phone_number',
    array(
        'default' => '',
    )
);
$wp_customize->add_control(
    'footer_mobile_phone_number',
    array(
        'label' => 'Mobile Phone Number',
        'section' => 'contact_section',
        'type' => 'text',
    )
);

    $wp_customize->add_setting(
    'footer_email',
    array(
        'default' => '',
    )
);
$wp_customize->add_control(
    'footer_email',
    array(
        'label' => 'Email',
        'section' => 'contact_section',
        'type' => 'text',
    )
);
}
add_action( 'customize_register', 'footer_contact_customizer' );
// CUSTOMIZER SOCIAL ICONS
function social_customizer( $wp_customize ) {
    $wp_customize->add_section(
        'social',
        array(
            'title' => 'Social Media',
            'description' => 'Add social media links to footer',
            'priority' => 50,
        )
    );
    $wp_customize->add_setting(
    'social-facebook',
    array(
        'default' => '',
    )
);
$wp_customize->add_control(
    'social-facebook',
    array(
        'label' => 'Facebook',
        'section' => 'social',
        'type' => 'checkbox',
    )
);
  $wp_customize->add_setting(
    'social-facebook-url',
    array(
        'default' => '',
    )
);
$wp_customize->add_control(
    'social-facebook-url',
    array(
        'label' => 'Facebook Page',
        'section' => 'social',
        'type' => 'text',
    )
);
    $wp_customize->add_setting(
    'social-twitter',
    array(
        'default' => '',
    )
);
$wp_customize->add_control(
    'social-twitter',
    array(
        'label' => 'Twitter',
        'section' => 'social',
        'type' => 'checkbox',
    )
);
  $wp_customize->add_setting(
    'social-twitter-url',
    array(
        'default' => '',
    )
);
$wp_customize->add_control(
    'social-twitter-url',
    array(
        'label' => 'Twitter Page',
        'section' => 'social',
        'type' => 'text',
    )
);
 $wp_customize->add_setting(
    'social-instagram',
    array(
        'default' => '',
    )
);
$wp_customize->add_control(
    'social-instagram',
    array(
        'label' => 'Instagram',
        'section' => 'social',
        'type' => 'checkbox',
    )
);
  $wp_customize->add_setting(
    'social-instagram-url',
    array(
        'default' => '',
    )
);
$wp_customize->add_control(
    'social-instagram-url',
    array(
        'label' => 'Instagram Page',
        'section' => 'social',
        'type' => 'text',
    )
);
$wp_customize->add_setting(
    'social-linkedin',
    array(
        'default' => '',
    )
);
$wp_customize->add_control(
    'social-linkedin',
    array(
        'label' => 'LinkedIn',
        'section' => 'social',
        'type' => 'checkbox',
    )
);
  $wp_customize->add_setting(
    'social-linkedin-url',
    array(
        'default' => '',
    )
);
$wp_customize->add_control(
    'social-linkedin-url',
    array(
        'label' => 'LinkedIn Page',
        'section' => 'social',
        'type' => 'text',
    )
);
}
add_action( 'customize_register', 'social_customizer' );
// ACF Google Map Key
function my_acf_init() {
	
	acf_update_setting('google_api_key', 'AIzaSyAfU_poabTyiEl-2DFzlKqn8DQMwOE5uy0');
}
add_action('acf/init', 'my_acf_init');
function modify_read_more_link() {
    return '<a class="more-link" href="' . get_permalink() . '">Find out more</a>';
}
add_filter( 'the_content_more_link', 'modify_read_more_link' );
add_filter( 'mpp_avatar_override', '__return_true' );




if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page(array(
		'page_title' 	=> 'Reusable content',
		'menu_title'	=> 'Reusable content',
		'menu_slug' 	=> 'reusable-content',
		'capability'	=> 'edit_posts',
	
	));
	

	
}