<?php if( get_row_layout() == 'block_grid' ){ ?> 
<!-- BLOCK GRID -->
<?php 
   $header = get_sub_field('header');
   $footer = get_sub_field('footer');
   $background = get_sub_field('background');
   $width = get_sub_field('width');
   $xup = get_sub_field('xup');
   $vertical_alignment = get_sub_field('vertical_alignment');
   $image_padding = get_sub_field('image_padding');
  ?>
<section class="<?php echo $background ?>">
	<div class="block-grid-container">
		<div class="block-grid">
  <?php if ($header){ ?>
  	<header>
  		<h2><?php echo $header; ?></h2>
  	</header>
    <?php } ?>
					<div class="<?php echo $width ?>">
      <?php
    // REPEATER NAME
 	  if( have_rows('repeater_grid') ): ?>
 	   	<div class="block-grid-<?php echo $xup ?>-content">
						<?php
							while ( have_rows('repeater_grid') ) : the_row();  ?>
       <?php 
        $grid_image = get_sub_field('image'); 
        $img_src = wp_get_attachment_image_url( $grid_image['id'], 'medium' );
        $img_srcset = wp_get_attachment_image_srcset( $grid_image['id'], 'medium' ); 	
        $header = get_sub_field('header'); 
        $content = get_sub_field('content');
								$internal_link = get_sub_field('internal_link');
        $small_size = 'medium';
        $medium_size = 'medium';
        if ($grid_image) {;
        $small = $grid_image['sizes'][$small_size];
        $medium = $grid_image['sizes'][$medium_size];
        };
          ?>
          <div class="block-grid-item <?php echo $vertical_alignment ?>">
            <?php if ($internal_link){ ?>
            <a href="<?php echo $internal_link; ?>" >
            <?php } ?>
            	<?php if ($header){ ?>
            	<h5><?php echo $header; ?></h5> 
													<?php } ?>
													<img class="<?php echo $image_padding ?>" src="<?php echo esc_url( $img_src ); ?>" srcset="<?php echo esc_attr( $img_srcset ); ?>"
													sizes="(max-width: 100vw) 480px" alt="<?php echo $grid_image['alt']; ?> " />
													 <?php if ($content){ ?>
														<?php echo $content; ?>
														<?php } ?>
    	       <?php if ($internal_link){ ?>    	     
												</a> 
    	      <?php } ?>   
          </div>   
       <?php     
         endwhile; ?>
       </div>
        <?php endif;   ?> 
		</div>
			   <?php if ($footer){ ?>
  <footer>
    <p><?php echo $footer; ?></p>
  </footer>
  <?php } ?>
		</div>
	</div>
</section>
<?php } ?>
