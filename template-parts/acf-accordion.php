<?php if (get_row_layout() == 'accordion') { ?>
  <?php
  $section_heading_color = get_sub_field('section_heading_color');
  $section_background = get_sub_field('section_background');
  $header = get_sub_field('section_heading');
  $accordion_type = get_sub_field('accordion_type');
  ?>
  
  <section id="<?php $section_heading_remove = preg_replace("/[\s_]/", "-", $section_heading);
						$section_heading_processed = strtolower($section_heading_remove);
						echo $section_heading_processed; ?>" >
    <div class="accordion-container">
      <div class="accordion-grid">
        <div class="accordion-holder <?php echo $section_background ?>">
        <?php if ($header) { ?>
          <h3 class="line-title <?php echo $section_heading_color ?>"><?php echo $header ?></h3>
        <?php } ?>
          <ul class="accordion" data-accordion data-deep-link="true" data-deep-link-smudge-offset="-200" data-update-history="true" data-deep-link-smudge="true" data-deep-link-smudge-delay="500" data-allow-all-closed="true">
          <?php if( get_sub_field('accordion_type') == 'faq' ){ ?>
            <?php
            if (have_rows('repeater_content','option')) :
              $counter = 0; 
              while (have_rows('repeater_content','option')) : the_row();
                $header = get_sub_field('header');
                $content = get_sub_field('content');
                $faqsectors = get_sub_field('faqsectors');
                $faqranges = get_sub_field('faqranges');
                $counter++;
                ?>
                
                <li class="accordion-item <?php foreach( $faqranges as $faqrange ): ?><?php echo esc_html( $faqrange->slug ); ?> <?php endforeach; ?> <?php foreach( $faqsectors as $faqsector ): ?><?php echo esc_html( $faqsector->slug ); ?> <?php endforeach; ?> " data-accordion-item>
                  <!-- Accordion tab title -->
                  <a href="#deeplink<?php echo $counter; ?>" class="accordion-title"><?php echo $header ?></a>

                  <!-- Accordion tab content: it would start in the open state due to using the `is-active` state class. -->
                  <div class="accordion-content" data-tab-content id="deeplink<?php echo $counter; ?>">
                    <?php echo $content ?>
                  </div>
                </li>

              <?php endwhile; ?>
            <?php endif; ?>
            <?php } else { 
            if (have_rows('repeater_content')) :
              $counter = 0; 
              while (have_rows('repeater_content')) : the_row();
                $header = get_sub_field('header');
                $content = get_sub_field('content');
                $category = get_sub_field('category');
                $counter++;
                ?>
                
                <li class="accordion-item category-<?php echo $category ?> " data-accordion-item>
                  <!-- Accordion tab title -->
                  <a href="#deeplink<?php echo $counter; ?>"  class="accordion-title"><?php echo $header ?></a>

                  <!-- Accordion tab content: it would start in the open state due to using the `is-active` state class. -->
                  <div class="accordion-content" data-tab-content id="deeplink<?php echo $counter; ?>">
                    <?php echo $content ?>
                  </div>
                </li>

              <?php endwhile; ?>
            <?php endif; ?>
            <?php } ?>
          </ul>
        </div>
      </div>
    </div>
  </section>
<?php } ?>