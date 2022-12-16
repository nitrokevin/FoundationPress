<?php if( get_row_layout() == 'featured_slider' ){ ?> 
<!-- SLIDER -->
<?php 
   $background = get_sub_field('background');
  ?>
  <div class="main-container">
  <div class="main-grid">
  
	<?php  //add me in
//Fields
//slider_portfolio = Gallery Field
$images = get_sub_field('image');
if( $images ): ?>

   <div class="slider-nav gallery gallery-columns-4">
        
            <?php foreach( $images as $image ): ?>
                <div class="gallery-item">
                  <a href="<?php echo $image['sizes']['fp-large']; ?>" class="lightbox ari-fancybox"> <img src="<?php echo $image['sizes']['featured-small-square']; ?>" alt="<?php echo $image['alt']; ?>" /></a>
                    
                </div>
            <?php endforeach; ?>
    </div>
<?php endif; 	?>
		
</div>
</div>
<?php } ?>