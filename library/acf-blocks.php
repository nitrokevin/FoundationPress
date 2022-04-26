<?php
include 'colors.php';

add_action('acf/init', 'my_acf_init_block_types');
function my_acf_init_block_types() {

    // Check function exists.
    if( function_exists('acf_register_block_type') ) {

        // register a 50-50 block.
        acf_register_block_type(array(
            'name'              => 'full-width-50-50',
            'title'             => __('50 / 50 Block'),
            'description'       => __('Full with background image with contained content'),
            'render_template'   => 'template-parts/blocks/full-width-50-50.php',
         
            'category'          => 'avidd',
            'icon'              => '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"></defs><title/><g data-name="22-chat" id="_22-chat"><polygon class="acfb_svg_icon" points="31 3 1 3 1 23 8 23 14 29 14 23 31 23 31 3"/><line class="acfb_svg_icon" x1="7" x2="25" y1="9" y2="9"/><line class="acfb_svg_icon" x1="7" x2="25" y1="13" y2="13"/><line class="acfb_svg_icon" x1="7" x2="25" y1="17" y2="17"/></g></svg>',
             'supports'			=> array(
				'align' => true,
				'mode' => false,

				
			),
            'keywords'          => array( '50-50' ),
            'enqueue_assets' => function(){
                wp_enqueue_style( 'editor-css', get_stylesheet_directory_uri() . '/dist/assets/css/editor.css');
                
              },
        ));
         // register a accordion block.
         acf_register_block_type(array(
            'name'              => 'accordion',
            'title'             => __('Accordion'),
            'description'       => __(''),
            'render_template'   => 'template-parts/blocks/accordion.php',
            'supports'			=> array(
				'align' => true,
				'mode' => false,
				'jsx' => true
			),
            'category'          => 'avidd',
            'icon'              => '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M0 0v180.705882h1024V0H0z m963.764706 120.470588H60.235294V60.235294h903.529412v60.235294zM0 783.058824h1024V240.941176H0v542.117648z m60.235294-481.882353h903.529412v421.647058H60.235294V301.176471zM0 1024h1024v-180.705882H0v180.705882z m60.235294-120.470588h903.529412v60.235294H60.235294v-60.235294z" /></svg>',
            'keywords'          => array( 'accordion' ),
            'enqueue_assets' => function(){
                wp_enqueue_style( 'editor-css', get_stylesheet_directory_uri() . '/dist/assets/css/editor.css');
                
              },
        ));
        
        // register a tab block.
        acf_register_block_type(array(
        'name'              => 'tab',
        'title'             => __('Tab'),
        'description'       => __(''),
        'render_template'   => 'template-parts/blocks/tab.php',
        'supports'			=> array(
            'align' => true,
            'mode' => false,
            
        ),
        'category'          => 'avidd',
        'icon'              => '<svg viewBox="0 -21 511.98744 511" xmlns="http://www.w3.org/2000/svg"><path d="m377.652344 469.828125c-4.03125 0-8.148438-.511719-12.226563-1.578125l-329.898437-88.34375c-25.449219-7.019531-40.617188-33.34375-33.960938-58.773438l36.265625-139.070312c2.21875-8.535156 10.945313-13.71875 19.519531-11.433594 8.535157 2.21875 13.675782 10.964844 11.4375 19.519532l-36.269531 139.09375c-2.238281 8.574218 2.859375 17.425781 11.394531 19.773437l329.707032 88.300781c8.46875 2.238282 17.214844-2.796875 19.433594-11.222656l11.261718-45.441406c2.136719-8.574219 10.796875-13.78125 19.371094-11.6875 8.578125 2.132812 13.804688 10.792968 11.691406 19.367187l-11.304687 45.65625c-5.699219 21.609375-25.152344 35.839844-46.421875 35.839844zm0 0"/><path d="m463.988281 341.828125h-330.667969c-26.472656 0-48-21.527344-48-48v-245.335937c0-26.472657 21.527344-48 48-48h330.667969c26.472657 0 48 21.527343 48 48v245.335937c0 26.472656-21.527343 48-48 48zm-330.667969-309.335937c-8.832031 0-16 7.167968-16 16v245.335937c0 8.832031 7.167969 16 16 16h330.667969c8.832031 0 16-7.167969 16-16v-245.335937c0-8.832032-7.167969-16-16-16zm0 0"/><path d="m191.988281 149.828125c-23.53125 0-42.667969-19.136719-42.667969-42.667969s19.136719-42.667968 42.667969-42.667968 42.664063 19.136718 42.664063 42.667968-19.132813 42.667969-42.664063 42.667969zm0-53.335937c-5.890625 0-10.667969 4.78125-10.667969 10.667968 0 5.886719 4.777344 10.667969 10.667969 10.667969 5.886719 0 10.664063-4.78125 10.664063-10.667969 0-5.886718-4.777344-10.667968-10.664063-10.667968zm0 0"/><path d="m101.746094 320.066406c-4.09375 0-8.191406-1.558594-11.304688-4.691406-6.25-6.25-6.25-16.386719 0-22.636719l96.425782-96.425781c14.59375-14.59375 38.335937-14.59375 52.90625 0l25.792968 25.792969 79.230469-95.105469c7.082031-8.492188 17.472656-13.398438 28.503906-13.460938 11.859375-.660156 21.460938 4.734376 28.605469 13.121094l106.199219 123.902344c5.757812 6.699219 4.96875 16.8125-1.730469 22.570312-6.71875 5.761719-16.808594 4.972657-22.570312-1.726562l-106.238282-123.945312c-1.410156-1.6875-3.136718-1.601563-4.097656-1.902344-.914062 0-2.6875.277344-4.09375 1.941406l-90.453125 108.589844c-2.882813 3.453125-7.082031 5.546875-11.5625 5.738281-4.566406.253906-8.875-1.496094-12.035156-4.671875l-38.183594-38.1875c-2.710937-2.710938-4.949219-2.710938-7.660156 0l-96.425781 96.40625c-3.117188 3.132812-7.210938 4.691406-11.308594 4.691406zm0 0"/></svg>',
        'keywords'          => array( 'tab' ),
        'enqueue_assets' => function(){
            wp_enqueue_style( 'editor-css', get_stylesheet_directory_uri() . '/dist/assets/css/editor.css');
            
          },
      ));
       // register a background video block.
       acf_register_block_type(array(
        'name'              => 'backgroundvideo',
        'title'             => __('Background Video'),
        'description'       => __(''),
        'render_template'   => 'template-parts/blocks/background-video.php',
        'supports'			=> array(
            'align' => true,
            'mode' => false,
            
        ),
        'category'          => 'avidd',
        'icon'              => '<svg viewBox="0 -21 511.98744 511" xmlns="http://www.w3.org/2000/svg"><path d="m377.652344 469.828125c-4.03125 0-8.148438-.511719-12.226563-1.578125l-329.898437-88.34375c-25.449219-7.019531-40.617188-33.34375-33.960938-58.773438l36.265625-139.070312c2.21875-8.535156 10.945313-13.71875 19.519531-11.433594 8.535157 2.21875 13.675782 10.964844 11.4375 19.519532l-36.269531 139.09375c-2.238281 8.574218 2.859375 17.425781 11.394531 19.773437l329.707032 88.300781c8.46875 2.238282 17.214844-2.796875 19.433594-11.222656l11.261718-45.441406c2.136719-8.574219 10.796875-13.78125 19.371094-11.6875 8.578125 2.132812 13.804688 10.792968 11.691406 19.367187l-11.304687 45.65625c-5.699219 21.609375-25.152344 35.839844-46.421875 35.839844zm0 0"/><path d="m463.988281 341.828125h-330.667969c-26.472656 0-48-21.527344-48-48v-245.335937c0-26.472657 21.527344-48 48-48h330.667969c26.472657 0 48 21.527343 48 48v245.335937c0 26.472656-21.527343 48-48 48zm-330.667969-309.335937c-8.832031 0-16 7.167968-16 16v245.335937c0 8.832031 7.167969 16 16 16h330.667969c8.832031 0 16-7.167969 16-16v-245.335937c0-8.832032-7.167969-16-16-16zm0 0"/><path d="m191.988281 149.828125c-23.53125 0-42.667969-19.136719-42.667969-42.667969s19.136719-42.667968 42.667969-42.667968 42.664063 19.136718 42.664063 42.667968-19.132813 42.667969-42.664063 42.667969zm0-53.335937c-5.890625 0-10.667969 4.78125-10.667969 10.667968 0 5.886719 4.777344 10.667969 10.667969 10.667969 5.886719 0 10.664063-4.78125 10.664063-10.667969 0-5.886718-4.777344-10.667968-10.664063-10.667968zm0 0"/><path d="m101.746094 320.066406c-4.09375 0-8.191406-1.558594-11.304688-4.691406-6.25-6.25-6.25-16.386719 0-22.636719l96.425782-96.425781c14.59375-14.59375 38.335937-14.59375 52.90625 0l25.792968 25.792969 79.230469-95.105469c7.082031-8.492188 17.472656-13.398438 28.503906-13.460938 11.859375-.660156 21.460938 4.734376 28.605469 13.121094l106.199219 123.902344c5.757812 6.699219 4.96875 16.8125-1.730469 22.570312-6.71875 5.761719-16.808594 4.972657-22.570312-1.726562l-106.238282-123.945312c-1.410156-1.6875-3.136718-1.601563-4.097656-1.902344-.914062 0-2.6875.277344-4.09375 1.941406l-90.453125 108.589844c-2.882813 3.453125-7.082031 5.546875-11.5625 5.738281-4.566406.253906-8.875-1.496094-12.035156-4.671875l-38.183594-38.1875c-2.710937-2.710938-4.949219-2.710938-7.660156 0l-96.425781 96.40625c-3.117188 3.132812-7.210938 4.691406-11.308594 4.691406zm0 0"/></svg>',
        'keywords'          => array( 'video' ),
      ));

    }
}



$color_array =  array(
	$primary_color => 'primary-color',
	$secondary_color => 'secondary-color',
	$light_gray => 'light-gray',
	$medium_gray => 'medium-gray',
	$dark_gray => 'dark-gray',
	$theme_color_1 => 'theme-color-1',
	$theme_color_2 => 'theme-color-2',
	$theme_color_3 => 'theme-color-3',
	$theme_color_4 => 'theme-color-4',
	$white => 'white',
	'transparent' => 'transparent',
);
//50-50
acf_add_local_field_group(array(
	'key' => 'group_622b363287772',
	'title' => 'Block: full-width-50-50',
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
            'value' => 'acf/full-width-50-50',
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
            'key' => 'field_5c34ede232awf61',
            'label' => 'Accordion',
            'name' => 'repeater_content',
            'type' => 'repeater',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'collapsed' => '',
            'min' => 0,
            'max' => 0,
            'layout' => 'block',
            'button_label' => 'Add Row',
            'sub_fields' => array(
                
                
                array(
                    'key' => 'field_5c8129ec8s19be1',
                    'label' => 'Accordion Colour',
                    'name' => 'accordion_color',
                    'type' => 'swatch',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '0',
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
                    'key' => 'field_5c812c92h819c21',
                    'label' => 'Accordion title',
                    'name' => 'accordion_title',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '25',
                        'class' => '',
                        'id' => '',
                    ),
                ),
                array(
                    'key' => 'field_5c38y12a7a819bf1',
                    'label' => 'Content Type',
                    'name' => 'content_type',
                    'type' => 'select',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '0',
                        'class' => '',
                        'id' => '',
                    ),
                    'choices' => array(
                        'content' => 'Content',
                        
                    ),
                    'default_value' => array(
                        0 => 'small-padding',
                    ),
                    'allow_null' => 0,
                    'multiple' => 0,
                    'ui' => 1,
                    'ajax' => 0,
                    'return_format' => 'value',
                    'placeholder' => '',
                ),
               
                array(
                    'key' => 'field_5c815c95b12b921',
                    'label' => 'Accordion content',
                    'name' => 'accordion_content',
                    'type' => 'wysiwyg',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            'field' => 'field_5c38y12a7a819bf1',
                            'operator' => '==',
                            'value' => 'content',
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'toolbar' => 'full',
                ),
                
            
            ),
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
            'key' => 'field_5c34ede232awf613',
            'label' => 'Tab',
            'name' => 'repeater',
            'type' => 'repeater',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'collapsed' => '',
            'min' => 0,
            'max' => 0,
            'layout' => 'block',
            'button_label' => 'Add Tab',
            'sub_fields' => array(
                
                
                array(
                    'key' => 'field_5c8129ec8s19be13',
                    'label' => 'Tab Colour',
                    'name' => 'tab_color',
                    'type' => 'swatch',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '0',
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
                    'key' => 'field_5c812c92h819c213',
                    'label' => 'Tab title',
                    'name' => 'tab_title',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                ),
              
               
                array(
                    'key' => 'field_5c815c95b12b9213',
                    'label' => 'Tab content',
                    'name' => 'tab_content',
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
                
            
            ),
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
				'value' => 'acf/backgroundvideo',
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
