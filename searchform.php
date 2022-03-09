<?php
/**
 * The template for displaying search form
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

?>
<form role="search" method="get" id="searchform" class="expanding-search " action="<?php echo esc_url(home_url('/')); ?>">

<input class="sr-only" id="siteSearchOpen" type="checkbox" />
<label class="search__label" for="siteSearchOpen" tabindex="1">
<i class="fas fa-search"></i>
  </label>
	  <input id="siteSearch" type="search"  class="search__input" value="" name="s" id="s" aria-label="Search" placeholder="<?php esc_attr_e('Search', 'foundationpress'); ?>">
  
		  <input type="submit" id="siteSearchGo" class="search__go"  ></input>
	<label class="search__label__go" for="siteSearchGo" tabindex="1">
<i class="fas fa-arrow-right"></i>
  </label>


</form>