<?php
/*
Template Name: Members Area
*/
get_header(); ?>

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
<div class="main-container">
	<div class="main-grid">
		<main class="main-content-full-width">
			<div id="ew-wrapper"></div>
		 </main>
	</div>
</div>
   
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            var ew = new elliswhittam({
                endpoints: [
                {
                    apiKey: "MC5YcDYtY0JJQUFDSUFfV2N5.77-9J--_ve-_vQXvv71H77-9GE5h77-977-977-977-9Wl1M77-9On3vv714A24YNe-_ve-_ve-_vRjvv70",
                    apiEndpoint: "https://ewzeus-geniac-freemium.cdn.prismic.io/api/v2"
                }],
                selector: "ew-wrapper",
                intitialBreadcrumbText: "Employment Law",
                pageTitleAppend: "| Employment Law",
                preBreadcrumbs: [{
                    url: "https://elliswhittam.com",
                    displayText: "Home"
                },
                {
                    url: "https://elliswhittam.com/members-area",
                    displayText: "Members Area"
                }],
                contentLoaded: function(callback) {
                	//yourCustomTracker.Track(window.location.href)
                },
                beginSearch: function(Callback){
                	console.log("User has searched.")
                },
                
            });
        });

    </script>     
<?php get_footer();
