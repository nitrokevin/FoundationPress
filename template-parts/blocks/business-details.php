<?php

/**
 * Business details Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */
$section_background_color = get_field('section_background');
$map= get_field('map');
// Create id attribute allowing for custom "anchor" value.
$id = 'business-details-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'business-details-section';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}


?>

<section id="<?php echo esc_attr($id); ?>"  class="<?php echo esc_attr($className); ?>  <?php echo $section_background_color; ?>">
	<?php $contact_phone_number = get_theme_mod('contact_phone_number');
     $contact_mobile_number = get_theme_mod('contact_mobile_number');
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
	<div class="business-details-container">
		<div class="business-details-grid">
		<div class="business-details">
			<h4>Address</h4>
			<ul class="business-details-address">
                <?php if ($contact_address_1){?><li><?php echo $contact_address_1 ?></li><?php } ?>
				<?php if ($contact_address_2){?><li><?php echo $contact_address_2 ?></li><?php } ?>
				<?php if ($contact_address_3){?><li><?php echo $contact_address_3 ?></li><?php } ?>
				<?php if ($contact_address_4){?><li><?php echo $contact_address_4 ?></li><?php } ?>
				<?php if ($contact_address_5){?><li><?php echo $contact_address_5 ?></li><?php } ?>
                <?php if ($contact_address_6){?><li><?php echo $contact_address_6 ?></li><?php } ?>
			</ul>
		</div>
		<div class="business-details">
	<?php $opening_times = get_theme_mod( 'opening_times' );
		 if($opening_times) {?>
		 <h4>Opening Hours</h4>
		<table class="opening-hours">
			<?php 
				foreach ( $opening_times as $opening_time ) : ?>
			
					<tr><td><?php echo $opening_time['day'] ?></td> <td><?php echo $opening_time['hours'] ?></td></tr>
				
				
			<?php endforeach; ?>
		</table>
		<?php } ?>
		</div>
		<div class="business-details">
		<h4>Contact</h4>
		<ul class="footer-contact">
				<?php if($contact_phone_number) { ?><li>Phone: <?php echo $contact_phone_number ?></li> <?php } ?>
                <?php if($contact_mobile_number) { ?><li>Mobile: <?php echo $contact_mobile_number ?></li><?php } ?>
                <?php if($contact_email) { ?><li><?php echo $contact_email ?> </li><?php } ?>
			</ul>

		</div>
		</div>
	</div>
</section>

<section class="business-details-section alignfull light-gray"">
           
    <div class="acf-map" data-zoom="17">
        
        <div class="marker" data-lat="<?php echo esc_attr($map['lat']); ?>" data-lng="<?php echo esc_attr($map['lng']); ?>"></div>
    </div>

</section>
<style type="text/css">
.acf-map {
    width: 100%;
    height: 400px;
    border: #ccc solid 0px;
}

.acf-map img {
   max-width: inherit !important;
}
</style>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCf4nsA8K3CiVJXfztkpl2pmAfD5Dpq06E"></script>
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
        zoom        : $el.data('zoom') || 21,
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