<?php if( get_row_layout() == 'featured_slider' ){ ?> 
<!-- SLIDER -->
<?php 
   $background = get_sub_field('background');
  ?>
	<?php  //add me in
//Fields
//slider_portfolio = Gallery Field
$images = get_sub_field('image');
if( $images ): ?>
   <div class="slider-for">
        
            <?php foreach( $images as $image ): 
	            $small_size = 'featured-small';
													$medium_size = 'carousel-medium';
													$large_size = 'carousel-large';

													$small = $image['sizes'][$small_size];
													$medium = $image['sizes'][$medium_size];
													$large = $image['sizes'][$large_size];
            ?>
                <div class="slick-container">
	                <img class="featured-slider-image" data-interchange="[<?php echo $small; ?>, small], [<?php echo $medium; ?>, medium], [<?php echo $large; ?>, large]" alt="<?php echo $image['alt']; ?>" /> 
                   
                    
                </div>
            <?php endforeach; ?>
    </div>
    <ul class="specs">
	 <?php echo get_the_term_list( $post->ID, 'price', '<li class="finish">Guide Price: ', ', ', '</li>' ) ?>
  <?php echo get_the_term_list( $post->ID, 'door_description', '<li class="finish">Door description: ', ', ', '</li>' ) ?>
  <?php echo get_the_term_list( $post->ID, 'thickness', '<li class="finish">Door Thickness: ', ', ', '</li>' ) ?>
		<?php echo get_the_term_list( $post->ID, 'colour', '<li class="finish">Colours: ', ', ', '</li>' ) ?>
		  <?php echo get_the_term_list( $post->ID, 'wood_grain', '<li class="finish">Wood Grain: ', ', ', '</li>' ) ?>
		    <?php echo get_the_term_list( $post->ID, 'hinges', '<li class="finish">Hinges: ', ', ', '</li>' ) ?>
		   <?php echo get_the_term_list( $post->ID, 'drawer_options', '<li class="finish">Drawer Options: ', ', ', '</li>' ) ?>
		
  </ul>
   <div class="slider-nav">
        
            <?php foreach( $images as $image ): ?>
                <div>
                   <img src="<?php echo $image['sizes']['featured-small-square']; ?>" alt="<?php echo $image['alt']; ?>" />
                    
                </div>
            <?php endforeach; ?>
    </div>
<?php endif; 	?>
		

<?php } ?>