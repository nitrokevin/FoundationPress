<?php
include 'colors.php';
$color_array =  array(
	'#fefefe' => 'white',
	$primary_color => 'primary',
	$secondary_color => 'secondary',
	$light_gray => 'light-gray',
	$medium_gray => 'medium-gray',
	$dark_gray => 'dark-gray',


	'transparent' => 'transparent',
);
if( function_exists('acf_register_block_type') ) {
add_action('acf/init', 'my_acf_init_block_types');
function my_acf_init_block_types() {

    // Check function exists.

function checkCategoryOrder($categories)
{
    //custom category array
	$temp = array(
        'slug'  => 'avidd-blocks',
        'title' => 'AVIDD'
    );
    //new categories array and adding new custom category at first location
    $newCategories = array();
    $newCategories[0] = $temp;

    //appending original categories in the new array
    foreach ($categories as $category) {
        $newCategories[] = $category;
    }

    //return new categories
    return $newCategories;
}
add_filter( 'block_categories', 'checkCategoryOrder', 99, 1);
  
add_action( 'init', 'register_acf_blocks' );
function register_acf_blocks() {
    register_block_type(  __DIR__ . '/acf-5050/block.json' );
    register_block_type(  __DIR__ . '/acf-accordion/block.json' );
    register_block_type(  __DIR__ . '/acf-backgroundvideo/block.json' );
    register_block_type(  __DIR__ . '/acf-carousel/block.json' );
    register_block_type(  __DIR__ . '/acf-tab/block.json' );
    register_block_type(  __DIR__ . '/acf-business-details/block.json' );

    }
}

//50-50
acf_add_local_field_group(array(
	'key' => 'group_622b363287772',
	'title' => 'Block: 50-50',
	'fields' => array (
		array(
            'key' => 'field_622b36b9900e2',
            'label' => 'Section background',
            'name' => 'section_background',
            'type' => 'swatch',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '100',
                'class' => '',
                'id' => '',
            ),
            'choices' => $color_array,
            'allow_null' => 1,
            'default_value' => array(
                0 => '#fefefe',
            ),
            'layout' => 'horizontal',
            'return_format' => 'label',
            'other_choice' => 0,
            'save_other_choice' => 0,
        ),
        array(
            'key' => 'field_5c812c92819c9',
            'label' => 'Section background image',
            'name' => 'section_background_image',
            'type' => 'image',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '100',
                'class' => '',
                'id' => '',
            ),
            'return_format' => 'array',
            'preview_size' => 'thumbnail',
            'library' => 'all',
        ),
        array(
            'key' => 'field_tab1',
            'label' => 'Left',
            'name' => '',
            'type' => 'tab',
            'required' => 0,
            'conditional_logic' => 0,
            'endpoint' => 0,
        ),
        array(
            'key' => 'field_5c8129ec8s19be',
            'label' => 'Left background Colour',
            'name' => 'left_background',
            'type' => 'swatch',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '100',
                'class' => '',
                'id' => '',
            ),
            'choices' => $color_array,
            'allow_null' => 1,
            'default_value' => '',
            'layout' => 'horizontal',
            'return_format' => 'label',
            'other_choice' => 0,
            'save_other_choice' => 0,
        ),
        array(
            'key' => 'field_5c812c928139c4',
            'label' => 'Left Overlay color',
            'name' => 'left_overlay',
            'type' => 'true_false',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'message' => '',
            'ui' => 1,
            'ui_on_text' => '',
            'ui_off_text' => '',
        ),
        array(
            'key' => 'field_5c812kc928139c4',
            'label' => 'Left Padded',
            'name' => 'left_padded',
            'type' => 'true_false',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'message' => '',
            'ui' => 1,
            'ui_on_text' => '',
            'ui_off_text' => '',
        ),
        array(
            'key' => 'field_5c812c92h819c2',
            'label' => 'Left background image',
            'name' => 'left_background_image',
            'type' => 'image',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '25',
                'class' => '',
                'id' => '',
            ),
            'return_format' => 'array',
            'preview_size' => 'thumbnail',
            'library' => 'all',
    
        ),   
        array(
            'key' => 'field_5c812kc928d139c4',
            'label' => 'Contain background image',
            'name' => 'left_background_image_contain',
            'type' => 'true_false',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'message' => '',
            'ui' => 1,
            'ui_on_text' => '',
            'ui_off_text' => '',
        ),
        array(
            'key' => 'field_5c815c95b12b92',
            'label' => 'Left content',
            'name' => 'left_content',
            'type' => 'wysiwyg',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'default_value' => '',
            'toolbar' => 'full',
        ),
        array(
            'key' => 'field_tab2',
            'label' => 'Right',
            'name' => '',
            'type' => 'tab',
            'required' => 0,
            'conditional_logic' => 0,
            'endpoint' => 0,
        ),
        array(
            'key' => 'field_5c8129ec8s19ber',
            'label' => 'Right background Colour',
            'name' => 'right_background',
            'type' => 'swatch',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '100',
                'class' => '',
                'id' => '',
            ),
            'choices' => $color_array,
            'allow_null' => 1,
            'default_value' => '',
            'layout' => 'horizontal',
            'return_format' => 'label',
            'other_choice' => 0,
            'save_other_choice' => 0,
        ),
        array(
            'key' => 'field_5c812c928139c4r',
            'label' => 'Right Overlay color',
            'name' => 'right_overlay',
            'type' => 'true_false',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'message' => '',
            'ui' => 1,
            'ui_on_text' => '',
            'ui_off_text' => '',
        ),
        array(
            'key' => 'field_5c812kc928k139c4',
            'label' => 'Right Padded',
            'name' => 'right_padded',
            'type' => 'true_false',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'message' => '',
            'ui' => 1,
            'ui_on_text' => '',
            'ui_off_text' => '',
        ),
        array(
            'key' => 'field_5c812c92h819c2r',
            'label' => 'Right background image',
            'name' => 'right_background_image',
            'type' => 'image',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '100',
                'class' => '',
                'id' => '',
            ),
            'return_format' => 'array',
            'preview_size' => 'thumbnail',
            'library' => 'all',
    
        ),  
        array(
            'key' => 'field_5c81s2kc928d139c4',
            'label' => 'Contain background image',
            'name' => 'right_background_image_contain',
            'type' => 'true_false',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'message' => '',
            'ui' => 1,
            'ui_on_text' => '',
            'ui_off_text' => '',
        ), 
        array(
            'key' => 'field_5c815c95b12b92r',
            'label' => 'Right content',
            'name' => 'right_content',
            'type' => 'wysiwyg',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'default_value' => '',
            'toolbar' => 'full',
        ),
    )  ,
    'location' => array(
      array(
           array(
            'param' => 'block',
            'operator' => '==',
            'value' => 'acf/acf-50-50',
         ),
     ),
    ),
    'menu_order' => 0,
    'position' => 'normal',
    'style' => 'seemless',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
    'hide_on_screen' => '',
    'active' => true,
    'description' => '',
    'show_in_rest' => 0,
));
//Accordion
acf_add_local_field_group(array(
	'key' => 'group_622b3632877721',
	'title' => 'Block: Accordion',
	'fields' => array(
              array(
                'key' => 'field_626da8818c735',
                'label' => 'Accordion',
                'name' => 'accordion_clone',
                'type' => 'clone',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'clone' => array(
                    0 => 'field_626db345738d5',
                    1 => 'field_626db2h7e738c3',
                    2 => 'field_626db2f7738c7',
                
                ),
                'display' => 'seamless',
                'layout' => 'block',
                'prefix_label' => 0,
                'prefix_name' => 0,
            ),
                
       
	),
	'location' => array(
		array(
			array(
				'param' => 'block',
				'operator' => '==',
				'value' => 'acf/accordion',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'seemless',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
	'show_in_rest' => 0,
));
//Tab
acf_add_local_field_group(array(
	'key' => 'group_622b3632877723',
	'title' => 'Block: Tab',
	'fields' => array(
		
        array(
            'key' => 'field_626da8818c735k',
            'label' => 'Tab',
            'name' => 'tab_clone',
            'type' => 'clone',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'clone' => array(
                0 => 'field_626dcf6a205d4',
                1 => 'field_626da7410655fg',
                2 => 'field_626dcf6a205da',
               
            
            ),
            'display' => 'seamless',
            'layout' => 'block',
            'prefix_label' => 0,
            'prefix_name' => 0,
        ),
	),
	'location' => array(
		array(
			array(
				'param' => 'block',
				'operator' => '==',
				'value' => 'acf/tab',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'seemless',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
	'show_in_rest' => 0,
));
//Background Video
acf_add_local_field_group(array(
	'key' => 'group_622b3632877724',
	'title' => 'Block: Background Video',
	'fields' => array(

    array(
        'key' => 'field_5df7fa4df4d59',
        'label' => 'Background video mp4',
        'name' => 'background_video_mp4',
        'type' => 'file',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
            'width' => '100',
            'class' => '',
            'id' => '',
        ),
        'return_format' => 'url',
        'library' => 'all',
        'min_size' => '',
        'max_size' => '',
        'mime_types' => '',
    ),
 
    array(
        'key' => 'field_5df7fa4df44d59',
        'label' => 'Background video Mobile mp4',
        'name' => 'background_video_mobile_mp4',
        'type' => 'file',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
            'width' => '100',
            'class' => '',
            'id' => '',
        ),
        'return_format' => 'url',
        'library' => 'all',
        'min_size' => '',
        'max_size' => '',
        'mime_types' => '',
    ),
    array(
        'key' => 'field_playvideo',
        'label' => 'Autoplay Video',
        'name' => 'autoplay',
        'type' => 'true_false',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
        ),
        'message' => '',
        'ui' => 1,
        'ui_on_text' => '',
        'ui_off_text' => '',
    ),
    array(
        'key' => 'field_controlvideo',
        'label' => 'Controls',
        'name' => 'controls',
        'type' => 'true_false',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
        ),
        'message' => '',
        'ui' => 1,
        'ui_on_text' => '',
        'ui_off_text' => '',
    ),
    array(
        'key' => 'field_loopvideo',
        'label' => 'Loop Video',
        'name' => 'loop',
        'type' => 'true_false',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
        ),
        'message' => '',
        'ui' => 1,
        'ui_on_text' => '',
        'ui_off_text' => '',
    ),
    array(
        'key' => 'field_mutedvideo',
        'label' => 'Muted',
        'name' => 'muted',
        'type' => 'true_false',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
        ),
        'message' => '',
        'ui' => 1,
        'ui_on_text' => '',
        'ui_off_text' => '',
    ),
    array(
        'key' => 'field_ovelayvideo',
        'label' => 'Color overlay',
        'name' => 'overlay',
        'type' => 'true_false',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
        ),
        'message' => '',
        'ui' => 1,
        'ui_on_text' => '',
        'ui_off_text' => '',
    ),
    array(
        'key' => 'field_videoposter',
        'label' => 'Poster image',
        'name' => 'poster',
        'type' => 'image',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
        ),
        'return_format' => 'array',
        'preview_size' => 'thumbnail',
        'library' => 'all',

    ),   
  
		
    
	),
	'location' => array(
		array(
			array(
				'param' => 'block',
				'operator' => '==',
				'value' => 'acf/acf-backgroundvideo',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'seemless',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
	'show_in_rest' => 0,
));


//Carousel
acf_add_local_field_group(array(    
	'key' => 'group_622b36328777a24',
	'title' => 'Block: Carousel',
	'fields' => array(
        array(
    'key' => 'field_5c3812a7a819bf1',
    'label' => 'Carousel Type',
    'name' => 'carousel_type',
    'type' => 'select',
    'instructions' => '',
    'required' => 0,
    'conditional_logic' => 0,
    'wrapper' => array(
        'width' => '25',
        'class' => '',
        'id' => '',
    ),
    'choices' => array(
        'gallerycarousel' => 'Gallery Carousel',
        'slidecarousel' => 'Slide Carousel',
        'people-carousel' => 'People carousel',
   

    ),
    'default_value' => array(
        0 => 'gallerycarousel',
    ),
    'allow_null' => 0,
    'multiple' => 0,
    'ui' => 1,
    'ajax' => 0,
    'return_format' => 'value',
    'placeholder' => '',
    ),


    array(
    'key' => 'field_5d49aea9131e31',
    'label' => 'Section background',
    'name' => 'section_background',
    'type' => 'swatch',
    'instructions' => '',
    'required' => 0,
    'conditional_logic' => 0,
    'wrapper' => array(
        'width' => '33',
        'class' => '',
        'id' => '',
    ),
    'choices' => $color_array,
    'allow_null' => 1,
    'default_value' => array(
        0 => '#fefefe',
    ),
    'layout' => 'horizontal',
    'return_format' => 'label',
    'other_choice' => 0,
    'save_other_choice' => 0,
    ),
    array(
    'key' => 'field_625407c6661c0f',
    'label' => 'Gallery Carousel',
    'name' => 'carousel_gallery',
    'type' => 'gallery',
    'instructions' => '',
    'required' => 0,
    'conditional_logic' => array(
        array(
            'field' => 'field_5c3812a7a819bf1',
            'operator' => '==',
            'value' => 'gallerycarousel',
        ),
    ),
    'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
    ),
    'return_format' => 'array',
    'preview_size' => 'thumbnail',
    'insert' => 'append',
    'library' => 'all',
    ),
    array(
    'key' => 'field_626dd3503e215h',
    'label' => 'Carousel Content',
    'name' => 'repeater_content_carousel',
    'type' => 'repeater',
    'instructions' => '',
    'required' => 0,
    'conditional_logic' => array(
        array(
            array(
                'field' => 'field_5c3812a7a819bf1',
                'operator' => '==',
                'value' => 'slidecarousel',
            ),
        ),
    ),
    'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
    ),
    'collapsed' => 'field_626dd3503e216',
    'min' => 1,
    'max' => 0,
    'layout' => 'block',
    'button_label' => 'Add Slide',
    'sub_fields' => array(
        array(
            'key' => 'field_626ddp4413e2k19',
            'label' => 'Carousel Image',
            'name' => 'carousel_image',
            'type' => 'image',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '33',
                'class' => '',
                'id' => '',
            ),
            'return_format' => 'array',
            'preview_size' => 'thumbnail',
            'library' => 'all',
            'min_width' => '',
            'min_height' => '',
            'min_size' => '',
            'max_width' => '',
            'max_height' => '',
            'max_size' => '',
            'mime_types' => '',
        ),
        array(
            'key' => 'field_626dd35jf03e216',
            'label' => 'Carousel Heading',
            'name' => 'carousel_heading',
            'type' => 'text',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '33',
                'class' => '',
                'id' => '',
            ),
            'default_value' => '',
            'placeholder' => '',
            'prepend' => '',
            'append' => '',
            'maxlength' => '',
        ),
        array(
            'key' => 'field_626dd3503ell217',
            'label' => 'Carousel Background Colour',
            'name' => 'carousel_background_color',
            'type' => 'swatch',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '33',
                'class' => '',
                'id' => '',
            ),
            'choices' => $color_array,
            'allow_null' => 1,
            'default_value' => '',
            'layout' => 'horizontal',
            'return_format' => 'label',
            'other_choice' => 0,
            'save_other_choice' => 0,
        ),
        array(
            'key' => 'field_626hedd3503e218',
            'label' => 'Carousel Content',
            'name' => 'carousel_content',
            'type' => 'wysiwyg',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'default_value' => '',
            'tabs' => 'all',
            'toolbar' => 'full',
            'media_upload' => 1,
            'delay' => 0,
        ),
    ),
    ),
    array(
        'key' => 'field_626dd35jfd03e216',
        'label' => 'Section Heading',
        'name' => 'section_heading',
        'type' => 'text',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
        ),
        'default_value' => '',
        'placeholder' => '',
        'prepend' => '',
        'append' => '',
        'maxlength' => '',
    ),
    array(
        'key' => 'field_626dd3503e215a95',
        'label' => 'Carousel Content',
        'name' => 'repeater_content_carousel_download',
        'type' => 'repeater',
        'instructions' => '',
        'required' => 0,
        'conditional_logic' => array(
            array(
                array(
                    'field' => 'field_5c3812a7a819bf1',
                    'operator' => '==',
                    'value' => 'download-carousel',
                ),
            ),
        ),
        'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
        ),
        'collapsed' => 'field_626dd3503e2169',
        'min' => 1,
        'max' => 0,
        'layout' => 'block',
        'button_label' => 'Add File',
        'sub_fields' => array(
          
            array(
                'key' => 'field_626dd3503ed2169',
                'label' => 'Download',
                'name' => 'download',
                'type' => 'file',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'default_value' => '',
                'return_format' => 'array',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
                'maxlength' => '',
            ),
        
            
        ),
        ),


        ),
        'location' => array(
        array(
            array(
                'param' => 'block',
                'operator' => '==',
                'value' => 'acf/carousel',
            ),
        ),
    ),
    'menu_order' => 0,
    'position' => 'normal',
    'style' => 'seemless',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
    'hide_on_screen' => '',
    'active' => true,
    'description' => '',
    'show_in_rest' => 0,
    )
);   

//Business details
acf_add_local_field_group(array(
	'key' => 'group_622b3632877s724',
	'title' => 'Block: Business Details',
	'fields' => array(

        array(
            'key' => 'field_5d4k9aea91s31e31',
            'label' => 'Section background',
            'name' => 'section_background',
            'type' => 'swatch',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '33',
                'class' => '',
                'id' => '',
            ),
            'choices' => $color_array,
            'allow_null' => 1,
            'default_value' => array(
                0 => '#fefefe',
            ),
            'layout' => 'horizontal',
            'return_format' => 'label',
            'other_choice' => 0,
            'save_other_choice' => 0,
            ),
            array(
                'key' => 'field_52d4c64cef62457159',
                'label' => 'Map',
                'name' => 'map',
                'type' => 'google_map',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'center_lat' => '',
                'center_lng' => '',
                'zoom' => '',
                'height' => '',
            ),
  
		
    
	),
	'location' => array(
		array(
			array(
				'param' => 'block',
				'operator' => '==',
				'value' => 'acf/business-details',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'seemless',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
	'show_in_rest' => 0,
));




}
?>