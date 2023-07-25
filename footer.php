<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the "off-canvas-wrap" div and all content after.
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

$contact_phone_number = get_theme_mod('contact_phone_number');
$contact_email = get_theme_mod('contact_email');
$footer_company_number = get_theme_mod('footer_company_number');
$footer_copyright = get_theme_mod('footer_copyright');
$contact_address_1 = get_theme_mod('contact_address_1');
$contact_address_2 = get_theme_mod('contact_address_2');
$contact_address_3 = get_theme_mod('contact_address_3');
$contact_address_4 = get_theme_mod('contact_address_4');
$contact_address_5 = get_theme_mod('contact_address_5');
$contact_address_6 = get_theme_mod('contact_address_6');
?>

<section class="newsletter-footer">
	<div class="newsletter-footer-container">
	<div class="newsletter-footer-grid">
	<h3>Keep up to date</h3>
	</div>
	<div class="newsletter-footer-grid">
	<?php echo do_shortcode(' [newsletter_form class="newsletter-footer-form"]
	[newsletter_field name="name" label="" placeholder="Name"]
[newsletter_field name="email" label="" placeholder="Email"]
[/newsletter_form]' ) ?>
	</div>
	</div>
</section>

<footer class="footer">
<div class="footer-container">
	<div class="footer-grid">
		<section>
			
			<h4><?php bloginfo( 'name' ); ?></h4>
			<ul class="footer-address">
				<?php if ($contact_address_1){?><li><?php echo $contact_address_1 ?>, </li><?php } ?>
				<?php if ($contact_address_2){?><li><?php echo $contact_address_2 ?>, </li><?php } ?>
				<?php if ($contact_address_3){?><li><?php echo $contact_address_3 ?>, </li><?php } ?>
				<?php if ($contact_address_4){?><li><?php echo $contact_address_4 ?>, </li><?php } ?>
				<?php if ($contact_address_5){?><li><?php echo $contact_address_5 ?></li><?php } ?>
				<?php if ($contact_address_6){?><li><?php echo $contact_address_6 ?></li><?php } ?>
			</ul>
			<ul class="footer-contact">
				<?php if ($contact_phone_number){?><li><?php echo $contact_phone_number ?></li><?php } ?>
				<?php if ($contact_email){?><li><?php echo $contact_email ?> </li><?php } ?>
			</ul>
			<?php foundationpress_footer_nav_l(); ?>
		</section>
		
		<section>
		
		<?php $footer_links = get_theme_mod( 'footer_links' );
					 if($footer_links) {?>
					 	 <h4>Review us</h4>
					<div class="footer-links">
						<?php foreach ( $footer_links as $footer_link ) : ?>
							<a href="<?php echo $footer_link['link_url']; ?>" target="_blank">
								<?php echo wp_get_attachment_image($footer_link['footer_image'], 'square','false',["class" => "footer-icon"] ); ?>
							</a>
						<?php endforeach; ?>
					</div>
					<?php } ?>
		<?php echo '&copy; ' . esc_attr(get_bloginfo('name', 'display')) .' ' . mysql2date('Y', get_user_option('user_registered', 1)) .  '-' .  date('Y') . "." ;?>
		
		</section>

		<section>
		<?php foundationpress_footer_nav_r(); ?>

	
		<h4 class="social-links-header">Follow us</h4>
		<ul class="social-links menu  footer-menu">
				<?php if (get_theme_mod('social-facebook')) : ?>
					<li><a href="<?php echo esc_url(get_theme_mod('social-facebook-url')); ?> " rel="noreferrer"  target="_blank" aria-label="Facebook">
							<i class="fab fa-facebook-f fa-fw"></i>
						</a></li>
				<?php endif; ?>
				<?php if (get_theme_mod('social-twitter')) : ?>
					<li><a href="<?php echo esc_url(get_theme_mod('social-twitter-url')); ?>" rel="noreferrer" target="_blank" aria-label="Twitter">
							<i class="fab fa-twitter fa-fw"></i>
						</a></li>
				<?php endif; ?>
				<?php if (get_theme_mod('social-instagram')) : ?>
					<li><a href="<?php echo esc_url(get_theme_mod('social-instagram-url')); ?>" rel="noreferrer" target="_blank" aria-label="Instagram">

							<i class="fab fa-instagram fa-fw"></i>
						</a></li>
				<?php endif; ?>
				<?php if (get_theme_mod('social-linkedin')) : ?>
					<li><a href="<?php echo esc_url(get_theme_mod('social-linkedin-url')); ?>" rel="noreferrer" target="_blank" aria-label="LinkedIn">

							<i class="fab fa-linkedin-in fa-fw"></i>
						</a></li>
				<?php endif; ?>
				<?php if (get_theme_mod('social-pinterest')) : ?>
					<li><a href="<?php echo esc_url(get_theme_mod('social-pinterest-url')); ?>" rel="noreferrer" target="_blank" aria-label="Pinterest">
							<i class="fab fa-pinterest fa-fw"></i>
						</a></li>
				<?php endif; ?>
			</ul>
		</section>
	</div>
</div>
</footer>

<?php if ( get_theme_mod( 'wpt_mobile_menu_layout' ) === 'offcanvas' ) : ?>
	</div><!-- Close off-canvas content -->
<?php endif; ?>

<?php wp_footer(); ?>
</body>
</html>
