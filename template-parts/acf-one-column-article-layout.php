
<?php if( get_row_layout() == 'article' ){ ?> 
<!-- SIMPLE ARTICLE -->
<?php 
   $header = get_sub_field('header');
   $content = get_sub_field('content');
   $footer = get_sub_field('footer');
   $background = get_sub_field('background');
  ?>
  <section class="<?php echo $background ?>">
    <div class="main-container">
    <div class="main-grid">
   
    <article id="post-<?php the_ID(); ?>" <?php post_class('main-content-full-width'); ?>> 
      <?php if ($header){ ?>
      <header>
        <h2 class="entry-title"><?php echo $header; ?></h2>
      </header>
      <?php } ?>
    			<?php if ($content){ ?>
    			<div class="entry-content">
    				<?php echo $content; ?>
    			</div>
    			<?php } ?>
    			<?php if ($footer){ ?>
      <footer>
    		<?php echo $footer; ?>
      </footer>
    	<?php } ?>
    </article>
 </div>
    </div>
  </section>
<?php } ?>
