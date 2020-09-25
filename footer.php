<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the "off-canvas-wrap" div and all content after.
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */
?>

<div class="footer-container">
	<footer class="footer">
		<?php dynamic_sidebar( 'footer-widgets' ); ?>
	</footer>
  <footer class="sub-footer">
		<section class="footer-left">
  		<h5><?php echo get_theme_mod( 'footer_contact_header' ); ?></h5>
  		 <ul class="contact-details">
  		<?php if ( get_theme_mod( 'footer_address_1' ) ): ?>
        <li><a><span><?php echo get_theme_mod( 'footer_address_1' ); ?>
        <?php if ( get_theme_mod( 'footer_address_2' ) ): ?> <br /><?php echo get_theme_mod( 'footer_address_2' ); ?><?php endif; ?>
        <?php if ( get_theme_mod( 'footer_address_3' ) ): ?> <br /><?php echo get_theme_mod( 'footer_address_3' ); ?><?php endif; ?>
        <?php if ( get_theme_mod( 'footer_address_4' ) ): ?> <br /><?php echo get_theme_mod( 'footer_address_4' ); ?><?php endif; ?>
        <?php if ( get_theme_mod( 'footer_address_5' ) ): ?> <br /><?php echo get_theme_mod( 'footer_address_5' ); ?><?php endif; ?>
        <?php if ( get_theme_mod( 'footer_address_6' ) ): ?> <br /><?php echo get_theme_mod( 'footer_address_6' ); ?><?php endif; ?></span></a></li>
        <?php endif; ?>
								<?php if ( get_theme_mod( 'footer_phone_number' ) ): ?>
        <li><a href="tel:<?php echo get_theme_mod( 'footer_phone_number' ); ?>">T - <span><?php echo get_theme_mod( 'footer_phone_number' ); ?></span></a></li>
        <?php endif; ?>
								<?php if ( get_theme_mod( 'footer_mobile_phone_number' ) ): ?>
				  		<li><a href="tel:<?php echo get_theme_mod( 'footer_mobile_phone_number' ); ?>">M -  <span><?php echo get_theme_mod( 'footer_mobile_phone_number' ); ?></span></a></li>
				  		<?php endif; ?>
								<?php if ( get_theme_mod( 'footer_email' ) ): ?>
	       <li><a  href="mailto:<?php echo get_theme_mod( 'footer_email' ); ?>">E -  <span><?php echo get_theme_mod( 'footer_email' ); ?></span></a></li>
        <?php endif; ?>
  		 </ul>
    </section>
    <section class="footer-center">
     <h2>Keep in touch</h2>
       <ul class="menu align-center">
  			<?php if ( get_theme_mod( 'social-facebook' ) ): ?>
  			<li><a href="<?php echo esc_url(get_theme_mod( 'social-facebook-url' ) ); ?> " aria-label="Facebook">
    			<span class="fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
          </span>
          </a></li>
  			<?php endif; ?> 
  				<?php if ( get_theme_mod( 'social-twitter' ) ): ?>
  			<li><a href="<?php echo esc_url(get_theme_mod( 'social-twitter-url' ) ); ?>" aria-label="Twitter">	<span class="fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
          </span></a></li>
  			<?php endif; ?>
  			<?php if ( get_theme_mod( 'social-instagram' ) ): ?>
  			<li><a href="<?php echo esc_url(get_theme_mod( 'social-instagram-url' ) ); ?>" aria-label="Instagram">	<span class="fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-instagram fa-stack-1x fa-inverse"></i>
          </span> </a></li>
  			<?php endif; ?>
  			<?php if ( get_theme_mod( 'social-linkedin' ) ): ?>
  			<li><a href="<?php echo esc_url(get_theme_mod( 'social-linkedin-url' ) ); ?>" aria-label="LinkedIn">	<span class="fa-stack fa-lg">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
          </span></a></li>
  			<?php endif; ?>
      </ul>
      <p><a href="//avidd.design">Website by AVIDD</a></p>
    </section>
    <section class="footer-right">
				<?php foundationpress_footer_nav(); ?>
				      <p>© The Stamford Kitchen Company - Stamford Companies Ltd 11158449</p>
    </section>
	</footer>
	
	
</div>

<?php if ( get_theme_mod( 'wpt_mobile_menu_layout' ) === 'offcanvas' ) : ?>
	</div><!-- Close off-canvas content -->
<?php endif; ?>

<?php wp_footer(); ?>
</body>
</html>
