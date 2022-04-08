<?php

/**
 * Accordion Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'accordion-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'block-accordion';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}


?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>  <?php echo $section_background; ?> " >
    <div class="block-accordion-container "> 
		<div class="block-accordion-grid" >
	
		<ul class="accordion" data-accordion data-allow-all-closed="true">
			<?php
            if (have_rows('repeater_content')) {
              $counter = 0; 
			 
              while (have_rows('repeater_content')) { the_row(); 
			
				$content_type = get_sub_field('content_type');
				$accordion_title = get_sub_field('accordion_title');
				$accordion_content = get_sub_field('accordion_content');
				$accordion_color = get_sub_field('accordion_color');
				
				$counter++;
				?>

				<li  class="accordion-item <?php echo $accordion_color ?>" data-accordion-item>
                 
                  <a href="#" class="accordion-title">
					  <div class="main-container">
					  <div class="main-content">
						  <?php echo $accordion_title ?>
					  </div>
					</div>
				</a>
                  <div class="accordion-content" data-tab-content>
				  <div class="accordion-content-inner">
					  <?php if($content_type == 'content'){ 
                    		 echo $accordion_content;
					   } ?>
					    <?php if($content_type == 'people-carousel'){ ?>
						<section class="<?php echo $section_background; ?>">
						<div class="people-carousel carousel-container">
						<div class="carousel-grid">
							<div class="glide people-carousel">
				<div class="glide__track" data-glide-el="track">
					<ul class="glide__slides">
						<?php if (have_rows('people_repeater','option')) { 
							while (have_rows('people_repeater','option')) { the_row();
								$group = get_sub_field('group');
								$name = get_sub_field('name');
								$job = get_sub_field('job');
								$email = get_sub_field('email');
								$phone = get_sub_field('phone');
								$biography = get_sub_field('biography');
								$linkedin = get_sub_field('linkedin');
								$image = get_sub_field('image');
								$small = $image['sizes']['fp-small'];
								$medium = $image['sizes']['fp-medium'];
								$large = $image['sizes']['fp-large'];

								?>
						<li class="glide__slide">
					
							<div class="image" data-interchange="[<?php echo $small; ?>, small], [<?php echo $medium; ?>, medium], [<?php echo $large; ?>, large]"></div>
						<div class="info">
							<h3><?php echo $name; ?></h3>
							<h4 class="theme-color-1"><?php echo $job; ?></h4>
							<p><?php echo $biography; ?></p>
						</div>
						</li>
						<?php } ?>
						<?php } ?>
					</ul>
				</div>
				<div class="glide__arrows" data-glide-el="controls">
  				  <button class="glide__arrow glide__arrow--left" data-glide-dir="&lt;"><i class="fa-solid fa-chevron-left"></i></button>
   				  <button class="glide__arrow glide__arrow--right" data-glide-dir="&gt;"><i class="fa-solid fa-chevron-right"></i></button>
 				 </div>
			</div>
						</div>
						</div>
						</section>
					<?php	} ?>
					</div>
                  </div>
                </li>
			
			
			<?php } ?>
		</ul>
	
			<?php } ?>	
		</div>
	</div>
</section>
