
<?php if( get_row_layout() == 'repeater_row' ){ ?> 
<!-- Repeater Row -->
<?php 
   $header = get_sub_field('header');
   $footer = get_sub_field('footer');
   $background = get_sub_field('background');
   $width = get_sub_field('width');
  ?>
<section class="repeater-row-container <?php echo $background ?>">
  <div class="repeater-row">
     <?php if ($header){ ?>
	<header>
		<h2><?php echo $header; ?></h2>
	</header>
	<?php } ?>
	<div class="<?php echo $width ?>">
	<?php
 	  if( have_rows('repeater_content') ): 
 	  while ( have_rows('repeater_content') ) : the_row(); 
 	  $image = get_sub_field('image');
 	  $img_src = wp_get_attachment_image_url( $image['id'], 'fp-medium' );
    $img_srcset = wp_get_attachment_image_srcset( $image['id'], 'fp-medium' ); 
 	  $header = get_sub_field('header');
 	  $content = get_sub_field('content');
 	  $page_link = get_sub_field('page_link');
 	  $small_size = 'fp-small';
    $medium_size = 'fp-medium';
    $small = $image['sizes'][$small_size];
    $medium = $image['sizes'][$medium_size];    
   ?>
  		
	<div class="cell">
 <?php if ($page_link){ ?><a href="<?php echo $page_link;?>"><?php } ?> 
		 <?php if ($image){ ?>
  		<img src="<?php echo esc_url( $img_src ); ?>"
				srcset="<?php echo esc_attr( $img_srcset ); ?>"
				sizes="(max-width: 100vw) 480px" alt="<?php echo $image['alt']; ?> " />
	 <?php } ?>
	 
   <?php if ($header){ ?>
		<h3><?php echo $header; ?></h3>
		  <?php } ?>
		  
		 <?php if ($content){ ?>
		<?php echo $content; ?>
		 <?php } ?>
		 <?php if ($page_link){ ?></a><?php } ?>
	</div>
	<?php endwhile; ?>
	<?php endif; ?>
	</div>
	   <?php if ($footer){ ?>
  <footer>
    <p><?php echo $footer; ?></p>
  </footer>
  <?php } ?>
  </div>

</section>
<?php } ?>
