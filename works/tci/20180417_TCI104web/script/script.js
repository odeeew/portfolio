jQuery.noConflict();
jQuery(document).ready(function() {

	let vw = jQuery(window).width();
	let v1Height = vw / 1920 * 690;
	jQuery('.video1 iframe').attr('height',v1Height);

	if (vw < 414 || vw === 414 ){
		jQuery('iframe').attr('height','500');
	}
});