<?php

function avidd_theme_settings( $wp_customize ) {
     /**
     * Add Panel
     */
     $wp_customize->add_panel( 'theme_settings_panel', array(
      'priority'    => 10,
      'title'       => __( 'Theme options', 'avidd' ),
      'description' => __( 'Theme options and styles', 'avidd' ),
     ) );

     /**
     * Add a Section for Site Header
     */
    $wp_customize->add_section( 'avidd_header', array(
      'title'       => __( 'Site Header', 'avidd' ),
      'priority'    => 10,
      'panel'       => 'theme_settings_panel',
      'description' => __( 'Modify the site header', 'avidd' ),
     ) );
     
     /**
     * Add a Section for Site Footer
     */
     $wp_customize->add_section( 'avidd_footer', array(
      'title'       => __( 'Site Footer', 'avidd' ),
      'priority'    => 10,
      'panel'       => 'theme_settings_panel',
      'description' => __( 'Modify the site footer.', 'avidd' ),
     ) );

      /**
     * Add a Section for site settings
     */
    $wp_customize->add_section( 'avidd_settings', array(
      'title'       => __( 'Site Settings', 'avidd' ),
      'priority'    => 10,
      'panel'       => 'theme_settings_panel',
      'description' => __( 'Modify the site settings.', 'avidd' ),
     ) );
     
    }
    add_action( 'customize_register', 'avidd_theme_settings' );

    function avidd_theme_settings_fields( $fields ) {
    /**
    * Add a Field to change the header
    */
    $color_array = [ '#FFB400', '#707070', '#E8E8E8', '#fefefe' ];
    $fields[] = array(
      'type'        => 'color-palette',
      'setting'     => 'avidd_headerbackground_color',
      'label'       => __( 'Header background color', 'avidd' ),
      'description' => __( '', 'avidd' ),
      'section'     => 'avidd_header',
      'priority'    => 10,
      'default'     => '', 
      'choices'     => [
        'colors' => $color_array,
        'style'  => 'round',
      ],     
      'output'      => array(
        array(
          'element'  => ' .site-title-bar ',
          'property' => 'background-color'
        ),
      ));
      
      $fields[] = array(
        'type'        => 'color-palette',
        'setting'     => 'avidd_headertext_color',
        'label'       => __( 'Header text color', 'avidd' ),
        'description' => __( '', 'avidd' ),
        'section'     => 'avidd_header',
        'priority'    => 10,
        'default'     => '#fefefe',
        'choices'     => [
          'colors' => $color_array ,
          'style'  => 'round',
        ],   
        'output'      => array(
          array(
            'element'  => '.desktop-menu a,
            .mobile-menu a',
            'property' => 'color'
          ),
        ));

        $fields[] = array(
          'type'        => 'image',
          'settings'    => 'header_logo',
          'label'       => esc_html__( 'Header Image', 'avidd' ),
          'description' => esc_html__( '', 'avidd' ),
          'section'     => 'avidd_header',
          'choices'     => [
            'save_as' => 'url',
          ]
          );
          $fields[] = array(
            'type'        => 'image',
            'settings'    => 'header_logo_2',
            'label'       => esc_html__( 'Second Header Image', 'avidd' ),
            'description' => esc_html__( '', 'avidd' ),
            'section'     => 'avidd_header',
            'choices'     => [
              'save_as' => 'url',
            ]
            );
         
            $fields[] = array(
              'type'        => 'color-palette',
              'setting'     => 'avidd_footerbackground_color',
              'label'       => __( 'Footer background color', 'avidd' ),
              'description' => __( '', 'avidd' ),
              'section'     => 'avidd_footer',
              'priority'    => 10,
              'choices'     => [
                'colors' => $color_array ,
                'style'  => 'round',
              ],     
              'output'      => array(
                array(
                  'element'  => '.footer',
                  'property' => 'background-color'
                ),
              ));
              $fields[] = array(
                'type'        => 'image',
                'settings'    => 'footer_background_image',
                'label'       => esc_html__( 'Footer Background Image', 'avidd' ),
                'description' => esc_html__( '', 'avidd' ),
                'section'     => 'avidd_footer',
                'choices'     => [
                  'save_as' => 'id',
                ]
                );

                $fields[] = array(
                  'type'        => 'color-palette',
                  'setting'     => 'avidd_bodybackground_color',
                  'label'       => __( 'Body background color', 'avidd' ),
                  'description' => __( '', 'avidd' ),
                  'section'     => 'avidd_settings',
                  'priority'    => 10,
                  'default'     => '#f3f3f3', 
                  'choices'     => [
                    'colors' => $color_array,
                    'style'  => 'round',
                  ],     
                  'output'      => array(
                    array(
                      'element'  => ' body ',
                      'property' => 'background-color'
                    ),
                  ));
      
      return $fields;
    }
    add_filter( 'kirki/fields', 'avidd_theme_settings_fields' );
  


// CUSTOMIZER SOCIAL ICONS
function social_customizer( $wp_customize ) {
$wp_customize->add_section(
'social',
array(
  'title' => 'Social Media',
  'description' => 'Add social media links to header and footer',
  'priority' => 50,
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
'label' => 'Intagram Page',
'section' => 'social',
'type' => 'text',
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
'social-linkedin',
array(
'default' => '',
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
$wp_customize->add_setting(
'social-pinterest',
array(
'default' => '',
)
);
$wp_customize->add_control(
'social-pinterest',
array(
'label' => 'Pinterest',
'section' => 'social',
'type' => 'checkbox',
)
);
$wp_customize->add_setting(
'social-pinterest-url',
array(
'default' => '',
)
);
$wp_customize->add_control(
'social-pinterest-url',
array(
'label' => 'Pinterest Page',
'section' => 'social',
'type' => 'text',
)
);
$wp_customize->add_setting(
'social-pinterest',
array(
'default' => '',
)
);
$wp_customize->add_control(
'social-pinterest',
array(
'label' => 'Pinterest',
'section' => 'social',
'type' => 'checkbox',
)
);
$wp_customize->add_setting(
'social-pinterest-url',
array(
'default' => '',
)
);
$wp_customize->add_control(
'social-pinterest-url',
array(
'label' => 'Pinterest Page',
'section' => 'social',
'type' => 'text',
)
);

$wp_customize->add_setting(
  'social-youtube',
  array(
  'default' => '',
  )
  );
  $wp_customize->add_control(
  'social-youtube',
  array(
  'label' => 'Youtube',
  'section' => 'social',
  'type' => 'checkbox',
  )
  );
  $wp_customize->add_setting(
  'social-youtube-url',
  array(
  'default' => '',
  )
  );
  $wp_customize->add_control(
  'social-youtube-url',
  array(
  'label' => 'Youtube Page',
  'section' => 'social',
  'type' => 'text',
  )
  );
}
add_action( 'customize_register', 'social_customizer' );



// CUSTOMIZER FOOTER CONTACT
function footer_contact_customizer( $wp_customize ) {
$wp_customize->add_section(
'contact_section',
array(
   'title' => 'Contact Details',
   'description' => 'Add contact details.',
   'priority' => 40,
)
);
$wp_customize->add_setting( 'footer_logo' );
$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'footer_logo', array(
'label' => __( 'Footer Logo', 'logo' ),
'section' => 'contact_section',
'settings' => 'footer_logo',
) ) );
$wp_customize->add_setting(
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
); 
$wp_customize->add_setting(
'footer_copyright',
array(
'default' => '',
'sanitize_callback' => 'sanitize_text_field',
)
);
$wp_customize->add_control(
'footer_copyright',
array(
'label' => 'Copyright',
'section' => 'contact_section',
'type' => 'text',
)
); 
$wp_customize->add_setting(
'footer_company_number',
array(
'default' => '',
'sanitize_callback' => 'sanitize_text_field',
)
);
$wp_customize->add_control(
'footer_company_number',
array(
'label' => 'Company registration number',
'section' => 'contact_section',
'type' => 'text',
)
); 
}
add_action( 'customize_register', 'footer_contact_customizer' );
