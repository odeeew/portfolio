jQuery.noConflict();

jQuery(document).ready(function() {

	let vw = jQuery(window).width();

	if (vw < 414 || vw === 414 ){
		jQuery('iframe').attr('height','500');
		jQuery('.video1 video').attr('controls','');
	}
});