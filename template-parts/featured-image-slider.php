<?php
// If a featured image is set, insert into layout and use Interchange
// to select the optimal image size per named media query.
 ?>
	<header class="front-hero-slider">	
    <div class="orbit clean-hero-slider" role="region" aria-label="Kitchens" data-orbit data-timer-delay="10000" data-pause-on-hover="false">
      <div class="orbit-wrapper">
        <ul class="orbit-container">

  	<?php // REPEATER NAME
  	  if( have_rows('featured_slider') ):
  		// REPEATER ROW NAME
  		while ( have_rows('featured_slider') ) : the_row(); 
  	     // SUB FIELD NAME
  	
  	     $images = get_sub_field('image');
         $count = 0;   
									foreach( $images as $image ): 
									$small_size = 'featured-small';
         $medium_size = 'featured-medium';
         $large_size = 'featured-large';
         $xlarge_size = 'featured-xlarge';
if ($image) {;
									$small = $image['sizes'][$small_size];
         $medium = $image['sizes'][$medium_size];
         $large = $image['sizes'][$large_size];
         $xlarge = $image['sizes'][$xlarge_size];
};
  	       ?>

  	<!-- REPEATED CONTENT -->
  	     
      <li class="orbit-slide">

       
          <section class="front-slider-image" data-interchange="[<?php echo $small; ?>, small], [<?php echo $medium; ?>, medium], [<?php echo $large; ?>, large], [<?php echo $xlarge; ?>, xlarge]" >           
           </section>
       
      </li>
        <?php endforeach; ?>
  		<?php endwhile;
  	endif; ?>
  	 </ul> 	 
  </div>
 </div>
</header>
