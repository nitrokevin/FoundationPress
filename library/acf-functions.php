<?php if (function_exists('acf_add_local_field_group')) :
/*************************************************************/
/*   Friendly Block Titles                                  */
/***********************************************************/

function my_layout_title($title, $field, $layout, $i) {
	if($value = get_sub_field('section_heading')) {
		return $value;
	} else {
		foreach($layout['sub_fields'] as $sub) {
			if($sub['name'] == 'section_heading') {
				$key = $sub['key'];
				if(array_key_exists($i, $field['value']) && $value = $field['value'][$i][$key])
					return $value;
			}
		}
	}
	return $title;
}
add_filter('acf/fields/flexible_content/layout_title', 'my_layout_title', 10, 4);
include 'colors.php';
$color_array =  array(
	'#fefefe' => 'white',
	$primary_color => 'primary-color',
	$secondary_color => 'secondary-color',
	$light_gray => 'light-gray',
	$medium_gray => 'medium-gray',
	$dark_gray => 'dark-gray',
	$theme_color_1 => 'theme-color-1',
	$theme_color_2 => 'theme-color-2',
	$theme_color_3 => 'theme-color-3',
	'transparent' => 'transparent',
);

	//SIDEBAR
	acf_add_local_field_group(array(
		'key' => 'group_5cG81293e3db4c',
		'title' => 'Sidebar Content',
		'fields' => array(
			array(
				'key' => 'field_5c81h295e819bd',
				'label' => 'Sidebar Sections',
				'name' => 'sidebar_sections',
				'type' => 'flexible_content',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
					),
					'layouts' => array(
	//Content
	'layout_5c81j839a1ca3a21h39' => array(
		'key' => 'layout_5c81j839a1ca3a21h39',
		'name' => 'sidebar_content',
		'label' => 'Sidebar Content',
		'display' => 'block',
		'sub_fields' => array(
			
			array(
				'key' => 'field_5d49agea91k31e31169',
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
				'default_value' => '',
				'layout' => 'horizontal',
				'return_format' => 'label',
				'other_choice' => 0,
				'save_other_choice' => 0,
			),
			array(
				'key' => 'field_52d4c64ficef62457169',
				'label' => 'Content',
				'name' => 'section_content',
				'type' => 'wysiwyg',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '100',
					'class' => '',
					'id' => '',
				),
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'maxlength' => '',
			),
			
		),
		'min' => '',
		'max' => '',
	),
			
						//SHORTCODE
						'layout_5c81j839a1ca3a2139' => array(
							'key' => 'layout_5c81j839a1ca3a2139',
							'name' => 'shortcode_layout',
							'label' => 'Shortcode Layout',
							'display' => 'block',
							'sub_fields' => array(
								array(
									'key' => 'field_5d49ad7213g1e21169',
									'label' => 'Section heading color',
									'name' => 'section_heading_color',
									'type' => 'swatch',
									'instructions' => '',
									'required' => 0,
									'conditional_logic' => 0,
									'wrapper' => array(
										'width' => '50',
										'class' => '',
										'id' => '',
									),
									'choices' => $color_array,
									'allow_null' => 0,
									'default_value' => '',
									'layout' => 'horizontal',
									'return_format' => 'label',
									'other_choice' => 0,
									'save_other_choice' => 0,
								),
								array(
									'key' => 'field_5d49aea91k31e31169',
									'label' => 'Section background',
									'name' => 'section_background',
									'type' => 'swatch',
									'instructions' => '',
									'required' => 0,
									'conditional_logic' => 0,
									'wrapper' => array(
										'width' => '50',
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
									'key' => 'field_52d4c64fcef62457169',
									'label' => 'Header',
									'name' => 'section_heading',
									'type' => 'text',
									'instructions' => '',
									'required' => 0,
									'conditional_logic' => 0,
									'wrapper' => array(
										'width' => '50',
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
									'key' => 'field_52d4fc64cef624571569',
									'label' => 'Shortcode',
									'name' => 'shortcode',
									'type' => 'text',
									'instructions' => '',
									'required' => 0,
									'conditional_logic' => 0,
									'wrapper' => array(
										'width' => '50',
										'class' => '',
										'id' => '',
									),
									'default_value' => '',
									'placeholder' => '',
									'prepend' => '',
									'append' => '',
									'maxlength' => '',
								),
							),
							'min' => '',
							'max' => '',
						),
					
					),
					'button_label' => 'Add Section',
					'min' => '',
					'max' => '',
				),
			),
			'location' => array(
			
				array(
					array(
						'param' => 'post_type',
						'operator' => '==',
						'value' => 'members_benefits',
					),
				),
			
			),
			'menu_order' => 0,
			'position' => 'normal',
			'style' => 'seamless',
			'label_placement' => 'top',
			'instruction_placement' => 'label',
			'active' => true,
		));
acf_add_local_field_group(array(
	'key' => 'group_5c81293e3db4c',
	'title' => 'Flexible Content',
	'fields' => array(
		array(
			'key' => 'field_5c81295e819bd',
			'label' => 'Sections',
			'name' => 'sections',
			'type' => 'flexible_content',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
				),
				'layouts' => array(



 						//FLEXIBLE ARTICLE
						 '5c81298073475' => array(
							'key' => '5c81298073475',
							'name' => 'flexible-layout-article',
							'label' => 'Flexible layout article',
							'display' => 'block',
							'sub_fields' => array(
	
								array(
									'key' => 'field_5e5431d6d6239',
									'label' => 'Section Settings',
									'name' => '',
									'type' => 'accordion',
									'instructions' => '',
									'required' => 0,
									'conditional_logic' => 0,
									'wrapper' => array(
										'width' => '',
										'class' => '',
										'id' => '',
									),
									'open' => 0,
									'multi_expand' => 0,
									'endpoint' => 0,
								),
								
	
								array(
									'key' => 'field_5c915c95b12b0',
									'label' => 'Section heading color',
									'name' => 'section_heading_color',
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
									'key' => 'field_5c8129ec819be',
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
									'default_value' => '',
									'layout' => 'horizontal',
									'return_format' => 'label',
									'other_choice' => 0,
									'save_other_choice' => 0,
								),
								array(
									'key' => 'field_5c812c92819c2',
									'label' => 'Section background image',
									'name' => 'section_background_image',
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
									'min_width' => '',
									'min_height' => '',
									'min_size' => '',
									'max_width' => '',
									'max_height' => '',
									'max_size' => '',
									'mime_types' => '',
								),
								
								
								
							
								array(
									'key' => 'field_5e5431d6d62391',
									'label' => 'Section Content',
									'name' => '',
									'type' => 'accordion',
									'instructions' => '',
									'required' => 0,
									'conditional_logic' => 0,
									'wrapper' => array(
										'width' => '',
										'class' => '',
										'id' => '',
									),
									'open' => 0,
									'multi_expand' => 0,
									'endpoint' => 0,
								),
								array(
									'key' => 'field_5c815c95b12b0',
									'label' => 'Section heading',
									'name' => 'section_heading',
									'type' => 'text',
									'instructions' => '',
									'required' => 0,
									'conditional_logic' => 0,
									'wrapper' => array(
										'width' => '100',
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
									'key' => 'field_5c34ede232awf6',
									'label' => 'Article',
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
									'button_label' => 'Add Block',
									'sub_fields' => array(
										array(
											'key' => 'field_5c38212au7a819bf1',
											'label' => 'Content Type',
											'name' => 'content_type',
											'type' => 'select',
											'required' => 0,
											'conditional_logic' => 0,
											'wrapper' => array(
												'width' => '50',
												'class' => '',
												'id' => '',
											),
											'choices' => array(
												'article' => 'Article',
												'image' => 'Image',
												'tabs' => 'Tabs',
												'accordion' => 'Accordion',

												
											),
											'default_value' => array(
												0 => 'article',
											),
											'allow_null' => 0,
											'multiple' => 0,
											'ui' => 1,
											'ajax' => 0,
											'return_format' => 'value',
											
										),
										array(
											'key' => 'field_5c812c9281g39c1',
											'label' => 'Width',
											'name' => 'article_width',
											'type' => 'select',
								
											'required' => 0,
											'conditional_logic' => 0,
											'wrapper' => array(
											'width' => '50',
									'class' => '',
									'id' => '',
								),
								'choices' => array(
									'half-width' => 'Half Width',
									'full-width' => 'Full Width',
								
									
								),
								'default_value' => array(
									0 => 'half-width',
								),
										),
							
										array(
											'key' => 'field_5c8129ec8s19be',
											'label' => 'Article background Colour',
											'name' => 'article_background',
											'type' => 'swatch',
											'instructions' => '',
											'required' => 0,
											'conditional_logic' => 0,
											'wrapper' => array(
												'width' => '25',
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
											'key' => 'field_5c812c92h819c2',
											'label' => 'Article background image',
											'name' => 'article_background_image',
											'type' => 'image',
											'instructions' => '',
											'required' => 0,
											'conditional_logic' => array(
												array(
													array(
														'field' => 'field_5c38212au7a819bf1',
														'operator' => '==',
														'value' => 'image',
													),
												),
											),
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
											'key' => 'field_5c8s12c92h819c2',
											'label' => 'Article icon',
											'name' => 'article_icon',
											'type' => 'image',
											'instructions' => '',
											'required' => 0,
											'conditional_logic' => array(
												array(
													array(
														'field' => 'field_5c38212au7a819bf1',
														'operator' => '==',
														'value' => 'article',
													),
												),
											),
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
											'key' => 'field_5c815c95b12b9',
											'label' => 'Article heading',
											'name' => 'article_heading',
											'type' => 'text',
											'instructions' => '',
											'required' => 0,
											'conditional_logic' => array(
												array(
													array(
														'field' => 'field_5c38212au7a819bf1',
														'operator' => '==',
														'value' => 'article',
													),
												),
											),
											'wrapper' => array(
												'width' => '100',
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
											'key' => 'field_5c815c95b12b92',
											'label' => 'Article content',
											'name' => 'article_content',
											'type' => 'wysiwyg',
											'instructions' => '',
											'required' => 0,
											'conditional_logic' => array(
												array(
													array(
														'field' => 'field_5c38212au7a819bf1',
														'operator' => '==',
														'value' => 'article',
													),
												),
											),
											'wrapper' => array(
												'width' => '50',
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
											'key' => 'field_6214ba2d1aaad2',
											'label' => 'Tabs',
											'name' => 'tabsrepeater',
											'type' => 'repeater',
											'instructions' => '',
											'required' => 0,
											'conditional_logic' => array(
												array(
													array(
														'field' => 'field_5c38212au7a819bf1',
														'operator' => '==',
														'value' => 'tabs',
													),
												),
											),
											'wrapper' => array(
												'width' => '',
												'class' => '',
												'id' => '',
											),
											'collapsed' => 'field_6214b8421aaa92',
											'min' => 0,
											'max' => 0,
											'layout' => 'block',
											'button_label' => 'Add Tab',
											'sub_fields' => array(
												array(
													'key' => 'field_6214b9921aaaa2',
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
													'default_value' => '',
													'placeholder' => '',
													'prepend' => '',
													'append' => '',
													'maxlength' => '',
												),
												array(
													'key' => 'field_6214b9a81aaab2',
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
													'tabs' => 'all',
													'toolbar' => 'full',
													'media_upload' => 1,
													'delay' => 0,
												),
											),
										),
									
									),
							),
						),
	
							'min' => '',
							'max' => '',
						),
							//CTA
							'5c812980734758' => array(
								'key' => '5c812980734758',
								'name' => 'cta-layout-article',
								'label' => 'Call to action',
								'display' => 'block',
								'sub_fields' => array(
		
									array(
										'key' => 'field_5e5431d6d62398',
										'label' => 'Section Settings',
										'name' => '',
										'type' => 'accordion',
										'instructions' => '',
										'required' => 0,
										'conditional_logic' => 0,
										'wrapper' => array(
											'width' => '',
											'class' => '',
											'id' => '',
										),
										'open' => 0,
										'multi_expand' => 0,
										'endpoint' => 0,
									),
									
		
									array(
										'key' => 'field_5c915c95b12b08',
										'label' => 'Section heading color',
										'name' => 'section_heading_color',
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
										'key' => 'field_5c8129ec819be8',
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
										'default_value' => '',
										'layout' => 'horizontal',
										'return_format' => 'label',
										'other_choice' => 0,
										'save_other_choice' => 0,
									),
									array(
										'key' => 'field_5c812c92819c28',
										'label' => 'Section background image',
										'name' => 'section_background_image',
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
										'min_width' => '',
										'min_height' => '',
										'min_size' => '',
										'max_width' => '',
										'max_height' => '',
										'max_size' => '',
										'mime_types' => '',
									),
									
									
									
								
									array(
										'key' => 'field_5e5431d6d623918',
										'label' => 'Section Content',
										'name' => '',
										'type' => 'accordion',
										'instructions' => '',
										'required' => 0,
										'conditional_logic' => 0,
										'wrapper' => array(
											'width' => '',
											'class' => '',
											'id' => '',
										),
										'open' => 0,
										'multi_expand' => 0,
										'endpoint' => 0,
									),
									array(
										'key' => 'field_5c815c95b12b08',
										'label' => 'Section heading',
										'name' => 'section_heading',
										'type' => 'text',
										'instructions' => '',
										'required' => 0,
										'conditional_logic' => 0,
										'wrapper' => array(
											'width' => '100',
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
										'key' => 'field_5c34ede232awf68',
										'label' => 'Columns',
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
										'button_label' => 'Add Column',
										'sub_fields' => array(
											
											
					
											array(
												'key' => 'field_5c812c92h819c28',
												'label' => 'Column background image',
												'name' => 'column_background_image',
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
												'key' => 'field_5c8s12c92h819c28',
												'label' => 'Column image',
												'name' => 'column_image',
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
												'key' => 'field_5c815c95b12b98',
												'label' => 'Column heading',
												'name' => 'column_heading',
												'type' => 'text',
												'instructions' => '',
												'required' => 0,
												'conditional_logic' => 0,
												'wrapper' => array(
													'width' => '100',
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
												'key' => 'field_5c815c95b12b928',
												'label' => 'Column content',
												'name' => 'column_content',
												'type' => 'wysiwyg',
												'instructions' => '',
												'required' => 0,
												'conditional_logic' => 0,
												'wrapper' => array(
													'width' => '100',
													'class' => '',
													'id' => '',
												),
												'default_value' => '',
												'placeholder' => '',
												'prepend' => '',
												'append' => '',
												'maxlength' => '',
											),
										
										),
								),
							),
		
								'min' => '',
								'max' => '',
							),
					//ACCORDION
					'layout_5c81833a1caa2' => array(
						'key' => 'layout_5c81833a1caa2',
						'name' => 'accordion',
						'label' => 'Accordion',
						'display' => 'block',
						'sub_fields' => array(
							array(
								'key' => 'field_5c38212a7a819bf1',
								'label' => 'Accordion Type',
								'name' => 'accordion_type',
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
									'faq' => 'FAQs',
									'custom' => 'Custom',
									
								),
								'default_value' => array(
									0 => 'custom',
								),
								'allow_null' => 0,
								'multiple' => 0,
								'ui' => 1,
								'ajax' => 0,
								'return_format' => 'value',
								'placeholder' => '',
							),
							array(
								'key' => 'field_5c38212a72a819bf1',
								'label' => 'Accordion Category',
								'name' => 'accordion_category',
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
									'category-one' => 'Category one',
									'category-two' => 'Category two',
									
								),
								'default_value' => array(
									0 => 'custom',
								),
								'allow_null' => 0,
								'multiple' => 0,
								'ui' => 1,
								'ajax' => 0,
								'return_format' => 'value',
								'placeholder' => '',
							),
							array(
								'key' => 'field_5d49ad43a131e1',
								'label' => 'Section heading',
								'name' => 'section_heading',
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
								'key' => 'field_5d492ad72131e2',
								'label' => 'Section heading color',
								'name' => 'section_heading_color',
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
								'key' => 'field_5d49aea91311e3',
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
								'default_value' => '',
								'layout' => 'horizontal',
								'return_format' => 'label',
								'other_choice' => 0,
								'save_other_choice' => 0,
							),
							array(
								'key' => 'field_5c4812a7a8519bf',
								'label' => 'Section padding',
								'name' => 'section_padding',
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
									'no-padding' => 'No padding',
									'small-padding' => 'Small padding',
									'large-padding' => 'Large padding',
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
								'key' => 'field_5c3812bea6819c1',
								'label' => 'Section width',
								'name' => 'section_width',
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
									'align-normal' => 'Normal width content',
									'align-full' => 'Full width content'
								),
								'default_value' => array(
									0 => 'align-normal',
								),
								'allow_null' => 0,
								'multiple' => 0,
								'ui' => 1,
								'ajax' => 0,
								'return_format' => 'value',
								'placeholder' => '',
							),

							array(
								'key' => 'field_5c34ede232af6',
								'label' => 'Accordion Content',
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
								'button_label' => '',
								'sub_fields' => array(
									array(
										'key' => 'field_5c34ee0002af7',
										'label' => 'Category',
										'name' => 'category',
										'type' => 'select',
										'instructions' => '',
										'required' => 0,
										'conditional_logic' => 0,
										'wrapper' => array(
											'width' => '33',
											'class' => '',
											'id' => '',
										),
										'choices' => array(
											'one' => 'One',
											'two' => 'Two',
											'three' => 'Three',
											'four' => 'Four',
											
										),
										'default_value' => array(),
										'allow_null' => 0,
										'multiple' => 0,
										'ui' => 0,
										'return_format' => 'label',
										'ajax' => 0,
										'placeholder' => '',
									),
									array(
										'key' => 'field_5c34ee0032af7',
										'label' => 'Header',
										'name' => 'header',
										'type' => 'text',
										'instructions' => '',
										'required' => 0,
										'conditional_logic' => 0,
										'wrapper' => array(
											'width' => '66',
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
										'key' => 'field_5c34ee0932af8',
										'label' => 'Content',
										'name' => 'content',
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
						),
						'min' => '',
						'max' => '',
					),
					//tabs
					'layout_6214b835ed65d' => array(
						'key' => 'layout_6214b835ed65d',
						'name' => 'tabs',
						'label' => 'Tabs',
						'display' => 'block',
						'sub_fields' => array(
							array(
								'key' => 'field_5dd49ad43a131e1',
								'label' => 'Section heading',
								'name' => 'section_heading',
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
								'key' => 'field_5d492ad721j31e2',
								'label' => 'Section heading color',
								'name' => 'section_heading_color',
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
								'key' => 'field_5d49aeaj91311e3',
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
								'default_value' => '',
								'layout' => 'horizontal',
								'return_format' => 'label',
								'other_choice' => 0,
								'save_other_choice' => 0,
							),
							array(
								'key' => 'field_6214ba2d1aaad',
								'label' => 'Tabs',
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
								'collapsed' => 'field_6214b8421aaa9',
								'min' => 0,
								'max' => 0,
								'layout' => 'block',
								'button_label' => 'Add Tab',
								'sub_fields' => array(
									array(
										'key' => 'field_6214b9921aaaa',
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
										'default_value' => '',
										'placeholder' => '',
										'prepend' => '',
										'append' => '',
										'maxlength' => '',
									),
									array(
										'key' => 'field_6214b9a81aaab',
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
										'tabs' => 'all',
										'toolbar' => 'full',
										'media_upload' => 1,
										'delay' => 0,
									),
								),
							),
						),
						'min' => '',
						'max' => '',
					),
			
			//Page Blocks
			'layout_5c81839a1caa22' => array(
				'key' => 'layout_5c81839a1caa22',
				'name' => 'page_blocks',
				'label' => 'Page link blocks',
				'display' => 'block',
				'sub_fields' => array(
					
					array(
						'key' => 'field_5fccc6153cfb6',
						'label' => 'page links',
						'name' => 'page_links',
						'type' => 'post_object',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '75',
							'class' => '',
							'id' => '',
						),
						'post_type' => '',
						'taxonomy' => '',
						'allow_null' => 0,
						'multiple' => 1,
						'return_format' => 'object',
						'ui' => 1,
					),
					
				),
				'min' => '',
				'max' => '',
			),
					//SHORTCODE
					'layout_5c81839a1ca3a2139' => array(
						'key' => 'layout_5c81839a1ca3a2139',
						'name' => 'shortcode_layout',
						'label' => 'Shortcode Layout',
						'display' => 'block',
						'sub_fields' => array(
							array(
								'key' => 'field_5d49ad72131e21169',
								'label' => 'Section heading color',
								'name' => 'section_heading_color',
								'type' => 'swatch',
								'instructions' => '',
								'required' => 0,
								'conditional_logic' => 0,
								'wrapper' => array(
									'width' => '50',
									'class' => '',
									'id' => '',
								),
								'choices' => $color_array,
								'allow_null' => 0,
								'default_value' => '',
								'layout' => 'horizontal',
								'return_format' => 'label',
								'other_choice' => 0,
								'save_other_choice' => 0,
							),
							array(
								'key' => 'field_5d49aea9131e31169',
								'label' => 'Section background',
								'name' => 'section_background',
								'type' => 'swatch',
								'instructions' => '',
								'required' => 0,
								'conditional_logic' => 0,
								'wrapper' => array(
									'width' => '50',
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
								'key' => 'field_52d4c64cef62457169',
								'label' => 'Header',
								'name' => 'section_heading',
								'type' => 'text',
								'instructions' => '',
								'required' => 0,
								'conditional_logic' => 0,
								'wrapper' => array(
									'width' => '50',
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
								'key' => 'field_52d4c64cef624571569',
								'label' => 'Shortcode',
								'name' => 'shortcode',
								'type' => 'text',
								'instructions' => '',
								'required' => 0,
								'conditional_logic' => 0,
								'wrapper' => array(
									'width' => '50',
									'class' => '',
									'id' => '',
								),
								'default_value' => '',
								'placeholder' => '',
								'prepend' => '',
								'append' => '',
								'maxlength' => '',
							),
						),
						'min' => '',
						'max' => '',
					),
					//MAP
					'layout_5c81839a1ca3a21391' => array(
						'key' => 'layout_5c81839a1ca3a21391',
						'name' => 'map_layout',
						'label' => 'Google Map',
						'display' => 'block',
						'sub_fields' => array(
							array(
								'key' => 'field_5d49ad72131e211679',
								'label' => 'Section heading color',
								'name' => 'section_heading_color',
								'type' => 'swatch',
								'instructions' => '',
								'required' => 0,
								'conditional_logic' => 0,
								'wrapper' => array(
									'width' => '50',
									'class' => '',
									'id' => '',
								),
								'choices' => $color_array,
								'allow_null' => 0,
								'default_value' => '',
								'layout' => 'horizontal',
								'return_format' => 'label',
								'other_choice' => 0,
								'save_other_choice' => 0,
							),
							array(
								'key' => 'field_5d49aea9131e311679',
								'label' => 'Section background',
								'name' => 'section_background',
								'type' => 'swatch',
								'instructions' => '',
								'required' => 0,
								'conditional_logic' => 0,
								'wrapper' => array(
									'width' => '50',
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
								'key' => 'field_52d4c64cef624571679',
								'label' => 'Header',
								'name' => 'section_heading',
								'type' => 'text',
								'instructions' => '',
								'required' => 0,
								'conditional_logic' => 0,
								'wrapper' => array(
									'width' => '50',
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
						'min' => '',
						'max' => '',
					),
		
						
					
				),
				'button_label' => 'Add Section',
				'min' => '',
				'max' => '',
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'page_template',
					'operator' => '==',
					'value' => 'default',
				),
			),
			array(
				array(
					'param' => 'page_template',
					'operator' => '==',
					'value' => 'page-templates/front.php',
				),
			),
			array(
				array(
					'param' => 'page_template',
					'operator' => '==',
					'value' => 'page-templates/page-full-width.php',
				),
			),
			array(
				array(
					'param' => 'page_template',
					'operator' => '==',
					'value' => 'page-templates/page-sidebar-right.php',
				),
			),
			array(
				array(
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'members_benefits',
				),
			),
			array(
				array(
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'post',
				),
			),
		),
		'menu_order' => 0,
		'position' => 'normal',
		'style' => 'seamless',
		'label_placement' => 'top',
		'instruction_placement' => 'label',
		'active' => true,
	));



	//FAQ OPTIONS PAGE
	acf_add_local_field_group(array(
		'key' => 'group_5d54589f208266',
		'title' => 'Options Page',
		'fields' => array(
			array(
				'key' => 'field_5c3j4ede232af66',
				'label' => 'Accordion',
				'name' => 'repeater_accordion',
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
				'button_label' => '',
				'sub_fields' => array(
			array(
				'key' => 'field_5d49ad43a131e16',
				'label' => 'Section heading',
				'name' => 'section_heading',
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
				'key' => 'field_5c34ede232af66',
				'label' => 'Accordion Content',
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
				'button_label' => '',
				'sub_fields' => array(
					array(
						'key' => 'field_5c34ee0032af76',
						'label' => 'Header',
						'name' => 'header',
						'type' => 'text',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '100',
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
						'key' => 'field_614b0df41e61b6',
						'label' => 'Categories',
						'name' => 'categories',
						'type' => 'taxonomy',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '50',
							'class' => '',
							'id' => '',
						),
						'taxonomy' => 'category',
						'field_type' => 'checkbox',
						'add_term' => 0,
						'save_terms' => 0,
						'load_terms' => 0,
						'return_format' => 'object',
						'multiple' => 0,
						'allow_null' => 0,
					),
					array(
						'key' => 'field_5c34ee0932af86',
						'label' => 'Content',
						'name' => 'content',
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
		),
	),
),

		'location' => array(
			array(
				array(
					'param' => 'options_page',
					'operator' => '==',
					'value' => 'faqs',
				),
			),
		),
		'menu_order' => 0,
		'position' => 'normal',
		'style' => 'default',
		'label_placement' => 'top',
		'instruction_placement' => 'label',
		'hide_on_screen' => '',
		'active' => true,
		'description' => '',
	));


endif; 

function my_acf_google_map_api( $api ){
$api['key'] = 'AIzaSyAfTQrruPAgNEuSbjIKozxNEnRMAeLczQM';
return $api;	
}
add_filter('acf/fields/google_map/api', 'my_acf_google_map_api');





add_action('acf/input/admin_head', 'my_acf_admin_head5');
if (function_exists('acf_add_options_page')) {
	acf_add_options_page(array(
		'page_title' 	=> 'FAQs',
		'menu_title'	=> 'FAQs',
		'menu_slug' 	=> 'faqs',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));
}




function my_acf_admin_head5()
{

	?>
<style type="text/css">
	.acf-editor-wrap iframe {
		min-height: 100px;
		height: 150px !important;
	}

	ul.acf-swatch-list.acf-hl>li {
		margin-right: .1rem;

	}

	ul.acf-swatch-list label {
		font-size: 0;
	}

	ul.acf-swatch-list .swatch-toggle {
		border-radius: 50%;
		border: 1px solid #aaaaaa;
	}
</style>
<?php

}
