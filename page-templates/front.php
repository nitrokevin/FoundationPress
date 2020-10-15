<?php
/*
Template Name: Front
*/
get_header(); ?>

<?php get_template_part( 'template-parts/featured-image' ); ?>

<?php do_action( 'foundationpress_before_content' ); ?>
<?php while ( have_posts() ) : the_post(); ?>
<div class="intro grid-x grid-padding-x " data-equalizer="foo">
  <div class="cell small-4 flex-container flex-dir-column flex-stretch">
    <div class="left-upper   flex-container flex-dir-row " data-equalizer-watch="foo">
    <div class="align-self-bottom" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
    </div>
    <div class="left-lower  flex-container flex-dir-row" data-equalizer-watch="foo">
    <div class="align-self-bottom">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
    </div>
  </div>
  <div class="cell small-8  align-self-top align-stretch"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non harum laborum cum voluptate vel, eius adipisci similique dignissimos nobis at excepturi incidunt fugit molestiae quaerat, consequuntur porro temporibus. Nisi, ex?Align top. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non harum laborum cum voluptate vel, eius adipisci similique dignissimos nobis at excepturi incidunt fugit molestiae quaerat, consequuntur porro temporibus. Nisi, ex?Align top. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non harum laborum cum voluptate vel, eius adipisci similique dignissimos nobis at excepturi incidunt fugit molestiae quaerat, consequuntur porro temporibus. Nisi, ex?</div>
</div>

<?php endwhile; ?>
<?php do_action( 'foundationpress_after_content' ); ?>
<?php
if (have_rows('sections')) :
	while (have_rows('sections')) : the_row();
		get_template_part('template-parts/acf-flexible-layout-article');
	endwhile;
endif;
?>

<?php get_footer();
