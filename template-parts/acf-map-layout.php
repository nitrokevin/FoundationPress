<?php if( get_row_layout() == 'map' ){ ?> 
<?php $location = get_sub_field('map'); ?>
<div class="acf-map">
  <div class="marker" data-lat="<?php echo $location['lat']; ?>" data-lng="<?php echo $location['lng']; ?>"></div>
</div>
<?php } ?>