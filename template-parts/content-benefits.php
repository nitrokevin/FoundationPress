<?php
/**
 * The default template for displaying content
 *
 * Used for both single and index/archive/search.
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<header>
	<?php
		if ( is_single() ) {
			the_title( '<h1 class="entry-title">', '</h1>' );
		} else { ?>
			<div  class="grid-image"  data-interchange="[<?php the_post_thumbnail_url( 'fp-small' ); ?>, small]">
			<?php $terms =  get_the_terms( get_the_ID(), 'member_benefit_categories' );
			if ($terms){
			foreach ( $terms as $term ) { 
				$benefit_terms .=  $term->name . ', ';
				
    			}
				$benefit_terms = rtrim( $benefit_terms, ', ' );
				echo '<span class="category-labels">' . $benefit_terms . '</span>';
			 } ?>
			</div>
		<?php	the_title( '<h4 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h4>' );
		}
	?>
	
	</header>
	<div class="entry-content">
	<?php if ( is_single() ) { 
			the_content();
			} else { the_excerpt();
			} ?>
		
	</div>
	<footer>
		<?php
			wp_link_pages(
				array(
					'before' => '<nav id="page-nav"><p>' . __( 'Pages:', 'foundationpress' ),
					'after'  => '</p></nav>',
				)
			);
		?>
	</footer>
</article>
