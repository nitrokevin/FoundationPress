
<?php if( get_row_layout() == 'range_block_grid' ){ ?> 
<!-- BLOCK GRID -->
<?php 
   $header = get_sub_field('header');
   $footer = get_sub_field('footer');
   $background = get_sub_field('background');
   $width = get_sub_field('width');
  ?>
<section class="<?php echo $background ?>">
	<div class="range-block-grid-container">
		<div class="range-block-grid">
    <?php if ($header){ ?>
					<header>
						<h2><?php echo $header; ?></h2>
  			</header>
    <?php } ?>
			<div class="<?php echo $width ?>">

    <?php
    // REPEATER NAME
 	  if( have_rows('repeater_grid') ): 
 	  ?>
 	  <div class="block-grid-4up-content">
    <?php // REPEATER ROW NAME
    while ( have_rows('repeater_grid') ) : the_row();  ?>
       <?php 
        $grid_image = get_sub_field('image'); 
        $caption_header = get_sub_field('header'); 
        $caption_content = get_sub_field('content');
        $tax_link = get_sub_field('range_link');
        $page_link = get_sub_field('page_link');
         $small_size = 'featured-small-square';
         $medium_size = 'featured-small-square';
         if ($grid_image) {;
        $small = $grid_image['sizes'][$small_size];
        $medium = $grid_image['sizes'][$medium_size];      
         };
          ?>
           
         <div class="block-grid-item">
          <a href=" <?php if ($tax_link) {
												echo get_term_link( $tax_link );
												} else {
												echo $page_link;
												} ?> ">

           <div class="case-study-thumbnail">
            <div class="case-study "> 
	            <?php if ($grid_image) { ?>
	            <img src="<?php echo $small; ?>" data-interchange="[<?php echo $small; ?>, small]" alt="<?php echo $grid_image['alt'] ?>" />
	            <?php } ?>
            	</div><div class="entry-title-box">
             <p class="entry-title"><?php echo $caption_content; ?> </p>  
            	</div>
	           </div>
	          </a>      
	         </div>  
          
       <?php endwhile; ?>
      </div>
      <?php endif;   ?> 
					</div>
  </div>
	</div>
</section>
<?php } ?>
