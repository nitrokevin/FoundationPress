<?php if (get_row_layout() == 'tabs') {
$section_heading_color = get_sub_field('section_heading_color');
$section_heading = get_sub_field('section_heading');
$section_background = get_sub_field('section_background');
	?>
<section id="<?php $section_heading_remove = preg_replace("/[\s_]/", "-", $section_heading); $section_heading_processed = strtolower($section_heading_remove); echo $section_heading_processed; ?>" class="<?php echo $section_background ?>" >
	<div class="tab-container">
		<div class="tab-grid">
			<div class="tab-content">
			<ul class="tabs" data-active-collapse="true" data-match-height="true" data-responsive-accordion-tabs="tabs small-accordion medium-tabs" id="tabs">
		<?php if( have_rows('repeater') ):
		$counter=0;
			while( have_rows('repeater') ) : the_row();
				$tab_title = get_sub_field('tab_title');
				$counter++
				?>
				<li class="tabs-title <?php if( $counter ==1 ){ echo "is-active"; } ?>"><a href="#panel<?php echo $counter?>" ><?php echo $tab_title ?></a></li>
		<?php	endwhile;			
		endif; ?>
			</ul>
			<div class="tabs-content" data-tabs-content="tabs">
			<?php if( have_rows('repeater') ):
			$counter=0;
				while( have_rows('repeater') ) : the_row();
					$tab_content = get_sub_field('tab_content'); 
					$counter++?>
							<div class="tabs-panel <?php if( $counter ==1 ){ echo "is-active"; } ?>" id="panel<?php echo $counter?>">
								<?php echo $tab_content; ?>
							</div>
				<?php	endwhile;			
				endif; ?>
			</div>
		
			</div>
		</div>
	</div>
</section>
<?php } ?>