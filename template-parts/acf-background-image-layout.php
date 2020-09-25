<?php if( get_row_layout() == 'background_image' ){ ?> 
<!-- Background Image -->
<?php 
   $background = get_sub_field('image');
   $parallax = get_sub_field('parallax');
   $small_size = 'featured-small';
   $medium_size = 'featured-medium';
   $large_size = 'featured-large';
   $xlarge_size = 'featured-xlarge';
   $small = $background['sizes'][$small_size];
   $medium = $background['sizes'][$medium_size];
   $large = $background['sizes'][$large_size];
   $xlarge = $background['sizes'][$xlarge_size];
  ?>
  <div class="parallax">
 <section class="<?php if (is_front_page() ){ ?>front<?php } else { ?>featured<?php } ?>-hero <?php echo $parallax; ?>" role="banner"  data-interchange="[<?php echo $small; ?>, small], [<?php echo $medium; ?>, medium], [<?php echo $large; ?>, large], [<?php echo $xlarge; ?>, xlarge]">
	</section>
  </div>
<?php } ?>
