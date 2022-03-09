<?php if (get_row_layout() == 'page_blocks') {
    $page_links = get_sub_field('page_links');
    $page_block_type = get_sub_field('page_block_type');

  ?>

<section id="<?php $section_heading_remove = preg_replace("/[\s_]/", "-", $section_heading);
						$section_heading_processed = strtolower($section_heading_remove);
						echo $section_heading_processed;
                        $counter=0; ?>" class=""> 
                      

                <?php foreach( $page_links as $post ): 

                    setup_postdata($post); 
                    $counter++;
                    $page_title = get_the_title($post->ID);
                    $page_excerpt = get_the_excerpt($post->ID);
                    $background_image_small = get_the_post_thumbnail_url($post->ID,'fp-small');
                    ?>
                   
                        <div class="background-panel <?php echo $color ?>">
                             <div data-interchange="[<?php echo $background_image_small; ?>, small], [<?php echo $background_image_small; ?>, large]"></div>
                            <h3><?php echo $page_title ?></h3>
                            <p ><?php echo $page_excerpt ?></p>
                            <a href="<?php the_permalink($post->ID) ?>"><h4>Learn More</h4></a>
                         </div>
                 
                <?php endforeach; ?>
        </section>
        <?php 
    wp_reset_postdata(); ?>
    <?php } ?>