<?php if( get_row_layout() == 'style_article' ){ ?> 
<?php 
    $background = get_sub_field('background');
    $header = get_sub_field('header');
    $content = get_sub_field('content');
    $layout = get_sub_field('layout');
		  $left_top_image = get_sub_field('left_top_image');
		  $top_image_01 = get_sub_field('top_image_01');
		  $top_image_02 = get_sub_field('top_image_02');
		  $top_image_03 = get_sub_field('top_image_03');
		  $bottom_image = get_sub_field('bottom_image');
 	  $small_size = 'fp-small';
    $medium_size = 'fp-medium';
    $large_size = 'fp-small';
    if ($left_top_image) {;
    $left_top_small = $left_top_image['sizes'][$small_size];
    $left_top_medium = $left_top_image['sizes'][$medium_size]; 
    $left_top_large = $left_top_image['sizes'][$large_size];
    };
    if ($top_image_01) {;
    $top_01_small = $top_image_01['sizes'][$small_size];
    $top_01_medium = $top_image_01['sizes'][$medium_size]; 
    $top_01_large = $top_image_01['sizes'][$large_size]; 
    };
    if ($top_image_02) {;
    $top_02_small = $top_image_02['sizes'][$small_size];
    $top_02_medium = $top_image_02['sizes'][$medium_size];
    $top_02_large = $top_image_02['sizes'][$large_size];
    };
    if ($top_image_03) {;
    $top_03_small = $top_image_03['sizes'][$small_size];
    $top_03_medium = $top_image_03['sizes'][$medium_size];  
    $top_03_large = $top_image_03['sizes'][$large_size];
    };
    if ($bottom_image) {;
    $bottom_small = $bottom_image['sizes'][$small_size];
    $bottom_medium = $bottom_image['sizes'][$medium_size]; 
    $bottom_large = $bottom_image['sizes'][$large_size]; 
    };
  ?>
<section class="style-article-container <?php echo $background ?>">
  <div class="style-article">
    <div class="left-top <?php echo $layout ?>">
    <?php   if ($top_image_01) {; ?>
      <div class="left-top-image"   data-interchange="[<?php echo $top_01_small; ?>, small], [<?php echo $top_01_medium; ?>, medium], [<?php echo $top_01_large; ?>, large], [<?php echo $top_01_large; ?>, xlarge]" alt="<?php echo $top_image_01['alt'] ?>">
   
	</div>
     <?php }; ?>
    </div>
    <div class="right-top <?php echo $layout ?>">
      <?php   if ($top_image_02) {; ?>
      <div class="left-top-image"  data-interchange="[<?php echo $top_02_small; ?>, small], [<?php echo $top_02_medium; ?>, medium], [<?php echo $top_02_large; ?>, large], [<?php echo $top_02_large; ?>, xlarge]" alt="<?php echo $top_image_02['alt'] ?>">

    </div>
    	 <?php }; ?>
    </div>
    <div class="right-top <?php echo $layout ?>">
      <?php   if ($top_image_03) {; ?>
     <div class="left-top-image"  data-interchange="[<?php echo $top_03_small; ?>, small], [<?php echo $top_03_medium; ?>, medium], [<?php echo $top_03_large; ?>, large], [<?php echo $top_03_large; ?>, xlarge]" alt="<?php echo $top_image_03['alt'] ?>">
	</div>
   <?php }; ?>
    </div>
  </div>
  <div class="style-article">
    <div class="left-bottom <?php echo $layout ?>">
      <h3><?php echo $header ?></h3>
      <?php echo $content ?>
    </div>
    <div class="right-bottom <?php echo $layout ?>">
       <?php   if ($bottom_image) {; ?>
      <div class="right-bottom-image" data-interchange="[<?php echo $bottom_small; ?>, small], [<?php echo $bottom_medium; ?>, medium], [<?php echo $bottom_large; ?>, large], [<?php echo $bottom_large; ?>, xlarge]" alt="<?php echo $bottom_image['alt'] ?>">
	</div>
    <?php }; ?>
    </div>
    
  </div>
</section>
<?php } ?>
