<?php if (get_row_layout() == 'flexible-layout-article') {
	$section_padding = get_sub_field('section_padding');
	$section_heading = get_sub_field('section_heading');
	$section_heading_color = get_sub_field('section_heading_color');
	$section_background = get_sub_field('section_background');

	$section_background_image = get_sub_field('section_background_image');
	$small = $section_background_image['sizes']['fp-small'];
	$medium = $section_background_image['sizes']['fp-medium'];
	$large = $section_background_image['sizes']['fp-large'];
	
	?>
<section <?php if ($section_heading) { ?> id="<?php $section_heading_remove = preg_replace("/[\s_]/", "-", $section_heading); $section_heading_processed = strtolower($section_heading_remove); echo $section_heading_processed; ?>" <?php } ?> class="flexible-layout-article-outer-container  <?php echo $section_trigger; ?> <?php echo $section_background; ?> <?php if ($section_background_image) { ?> cell-background-image<?php } ?>" <?php if ($section_background_image) { ?>src="<?php echo $small; ?>" data-interchange="[<?php echo $small; ?>, small], [<?php echo $medium; ?>, medium], [<?php echo $large; ?>, large]" <?php } ?>>
	<div class="flexible-layout-article-container">
		<div class="flexible-layout-article-grid" >

			<?php if ($section_heading) { ?>
				<header class="section-header">
					<h1 class="<?php echo $section_heading_color; ?>"><?php echo $section_heading; ?></h1>
				</header>
			<?php } ?>

			<?php
            if (have_rows('repeater_content')) {
              $counter = 0; 
			 
              while (have_rows('repeater_content')) { the_row(); 
				$content_type = get_sub_field('content_type');
				$article_icon = get_sub_field('article_icon');
				$small_header_image = $article_icon['sizes']['featured-small'];
				$medium_header_image = $article_icon['sizes']['featured-medium'];
				$square = $article_icon['sizes']['thumbnail'];
				$article_width = get_sub_field('article_width');
				$article_heading = get_sub_field('article_heading');
				$article_content = get_sub_field('article_content');
				$article_background = get_sub_field('article_background');
				$article_background_video = get_sub_field('article_background_video');
				$article_background_image = get_sub_field('article_background_image');
				$small = $article_background_image['sizes']['fp-small'];
				$medium = $article_background_image['sizes']['fp-medium'];
				$large = $article_background_image['sizes']['fp-large'];
				$counter++;
				?>
			
			<article class="<?php echo $article_background; ?> <?php if($article_width == 'full-width'){?>full-width<?php }?>" <?php if ($article_background_image) { ?> data-interchange="[<?php echo $small; ?>, small], [<?php echo $medium; ?>, medium], [<?php echo $large; ?>, large]" <?php } ?>>	
			<?php if (($article_icon)) { ?>
			<div class="header-image" data-interchange="[<?php echo $small_header_image; ?>, small], [<?php echo $medium_header_image; ?>, medium]"></div>
			<?php } ?>
			<div class="article-padding ">
				<div class="article-grid ">
				<?php if($content_type == 'article' || 'image') :?>
				<?php if (($article_heading)) { ?>
					<header>
					<?php if ($article_heading){ ?><h3><?php echo $article_heading; ?></h3><?php } ?>
					</header>
				<?php } ?>	
				<?php if ($article_content){ ?>
				<div class="entry-content">
					<?php echo $article_content; ?>
				
				</div>
				<?php } ?>	
				<?php endif; ?>
				<?php if($content_type == 'tabs'){?>
					<ul class="tabs" data-active-collapse="true" data-match-height="true" data-responsive-accordion-tabs="tabs small-accordion medium-tabs" id="tabs">
		<?php if( have_rows('tabsrepeater') ):
		$counter=0;
			while( have_rows('tabsrepeater') ) : the_row();
				$tab_title = get_sub_field('tab_title');
				$counter++
				?>
				<li class="tabs-title <?php if( $counter ==1 ){ echo "is-active"; } ?>"><a href="#subpanel<?php echo $counter?>" ><?php echo $tab_title ?></a></li>
		<?php	endwhile;			
		endif; ?>
			</ul>
			<div class="tabs-content" data-tabs-content="tabs">
			<?php if( have_rows('tabsrepeater') ):
			$counter=0;
				while( have_rows('tabsrepeater') ) : the_row();
					$tab_content = get_sub_field('tab_content'); 
					$counter++?>
							<div class="tabs-panel <?php if( $counter ==1 ){ echo "is-active"; } ?>" id="subpanel<?php echo $counter?>">
								<?php echo $tab_content; ?>
							</div>
				<?php	endwhile;			
				endif; ?>
			</div>
				<?php } ?>
				</div>
				</div>
			
			
			</article>
			<?php } ?>
			<?php } ?>	
		</div>
	</section>
<?php } ?>
