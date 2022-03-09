<?php
/**
 * The template for displaying all single posts and attachments
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

get_header();
$deadline = get_field('booking_deadline');
$venue =  get_field('venue'); 
$location = get_field('location');?>

<header class="header-container">
	<div class="header-text-content">
		<div class="header-content">
			<h1 class="entry-title"><?php the_title(); ?></h1>
		</div>
	</div>
	<div class="header-image-content">
		<?php get_template_part( 'template-parts/featured-image' ); ?>
	</div>
</header>
<?php get_template_part( 'template-parts/share-links' ); ?>
<?php if ( !empty( get_the_content() ) ) {?> 
<div class="main-container">
	<div class="main-grid">
	
		<main class="main-content">
		<h3>Book by: <?php echo $deadline ?></h3>
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'template-parts/content', '' ); ?>
			<?php endwhile; ?>
			<h3>Venue</h3>
			<?php 
	$map = get_field('location');
	?>

            <?php if( $map ): ?>
             <p><em><?php echo esc_html( $map['address'] ); ?></em></p>
    <div class="acf-map" data-zoom="12">
        
        <div class="marker" data-lat="<?php echo esc_attr($map['lat']); ?>" data-lng="<?php echo esc_attr($map['lng']); ?>"></div>
    </div>
<?php endif; ?>
		
<style type="text/css">
.acf-map {
    width: 100%;
    height: 450px;
    margin: 20px 0;
}

// Fixes potential theme css conflict.
.acf-map img {
   max-width: inherit !important;
}
</style>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAfTQrruPAgNEuSbjIKozxNEnRMAeLczQM"></script>
<script type="text/javascript">
(function( $ ) {

/**
 * initMap
 *
 * Renders a Google Map onto the selected jQuery element
 *
 * @date    22/10/19
 * @since   5.8.6
 *
 * @param   jQuery $el The jQuery element.
 * @return  object The map instance.
 */
function initMap( $el ) {

    // Find marker elements within map.
    var $markers = $el.find('.marker');

    // Create gerenic map.
    var mapArgs = {
        zoom        : $el.data('zoom') || 16,
        mapTypeId   : google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map( $el[0], mapArgs );

    // Add markers.
    map.markers = [];
    $markers.each(function(){
        initMarker( $(this), map );
    });

    // Center map based on markers.
    centerMap( map );

    // Return map instance.
    return map;
}

/**
 * initMarker
 *
 * Creates a marker for the given jQuery element and map.
 *
 * @date    22/10/19
 * @since   5.8.6
 *
 * @param   jQuery $el The jQuery element.
 * @param   object The map instance.
 * @return  object The marker instance.
 */
function initMarker( $marker, map ) {

    // Get position from marker.
    var lat = $marker.data('lat');
    var lng = $marker.data('lng');
    var latLng = {
        lat: parseFloat( lat ),
        lng: parseFloat( lng )
    };

    // Create marker instance.
    var marker = new google.maps.Marker({
        position : latLng,
        map: map
    });

    // Append to reference for later use.
    map.markers.push( marker );

    // If marker contains HTML, add it to an infoWindow.
    if( $marker.html() ){

        // Create info window.
        var infowindow = new google.maps.InfoWindow({
            content: $marker.html()
        });

        // Show info window when marker is clicked.
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open( map, marker );
        });
    }
}

/**
 * centerMap
 *
 * Centers the map showing all markers in view.
 *
 * @date    22/10/19
 * @since   5.8.6
 *
 * @param   object The map instance.
 * @return  void
 */
function centerMap( map ) {

    // Create map boundaries from all map markers.
    var bounds = new google.maps.LatLngBounds();
    map.markers.forEach(function( marker ){
        bounds.extend({
            lat: marker.position.lat(),
            lng: marker.position.lng()
        });
    });

    // Case: Single marker.
    if( map.markers.length == 1 ){
        map.setCenter( bounds.getCenter() );

    // Case: Multiple markers.
    } else{
        map.fitBounds( bounds );
    }
}

// Render maps on page load.
$(document).ready(function(){
    $('.acf-map').each(function(){
        var map = initMap( $(this) );
    });
});

})(jQuery);
</script>

		</main>
		<aside class="sidebar" >
<h3>When and where</h3>
<p>Book by: <?php echo $deadline ?></p>
<p><?php echo $venue ?><br />
<?php if( $location ) {
$address = '';
foreach( array('street_number', 'street_name', 'city', 'state', 'post_code', 'country') as $i => $k ) {
	if( isset( $location[ $k ] ) ) {
		$address .= sprintf( '<span class="segment-%s">%s</span>, ', $k, $location[ $k ] );
	}
}
$address = trim( $address, ', ' );

echo '' . $address . '.</p>';
} ?>
	<?php dynamic_sidebar( 'events-sidebar-widgets' ); ?>
	</div>
	
		
		</aside>
		
		
	</div>
</div>
<?php } ?>
<?php
if (have_rows('sections')) :
	while (have_rows('sections')) : the_row();
		get_template_part('template-parts/flexible-layout-article');
		get_template_part('template-parts/acf-cta');
        get_template_part('template-parts/acf-tabs');
	endwhile;
endif;
?>
<?php get_footer();
