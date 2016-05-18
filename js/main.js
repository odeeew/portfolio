jQuery.noConflict();
jQuery(document).ready(function(){

});

jQuery('#menu span').click(function () {
    var target = jQuery(this).attr('id').split('menu',2)[1];
    jQuery('html body').animate({
       scrollTop:(parseInt(parent.jQuery('#' + target).offset().top) - 54) + 'px'
    },1000);
});

jQuery(window).scroll(function () {

    var scrollHeight =  parseInt(jQuery('html body').scrollTop()),
        viewportHeight = parseInt(jQuery(window).height()),
        skillPosition = Math.round(parseInt(jQuery('#skillContainer').offset().top));

     if (scrollHeight >= (viewportHeight - 54)){
         if (jQuery('#coverPlaceholder').length == 0){
             jQuery('#container').prepend('<div id="coverPlaceholder" style="height: 100vh"></div>');
         }
         jQuery('#cover').css({'position':'fixed','top':-(viewportHeight-54) + 'px','z-index':'999','opacity':'0.9'});
     } else {
         jQuery('#coverPlaceholder').remove();
         jQuery('#cover').css({'position':'relative','top':'0','opacity':'1'});
     }

    if ((scrollHeight + viewportHeight) - skillPosition > 0) {
        jQuery('.skill').fadeIn(500);
        if (jQuery('.skill').css('opacity') == 0){
            jQuery('#photoshop').ClassyLoader({
                percentage:90,
                roundedLine:true,
                lineColor:'rgba(0, 160, 204, 1)',
                fontColor:'rgba(0, 160, 204, 1)'
            }).draw()
            jQuery('#photoshop').parent('div').css('color','rgba(0, 160, 204, 1)');

            jQuery('#illustrator').ClassyLoader({
                percentage:75,
                roundedLine:true,
                lineColor:'rgba(204, 99, 0, 1)',
                fontColor:'rgba(204, 99, 0, 1)'
            }).draw();
            jQuery('#illustrator').parent('div').css('color','rgba(204, 99, 0, 1)');

            jQuery('#sketch').ClassyLoader({
                percentage:80,
                roundedLine:true,
                lineColor:'rgba(198, 159, 54, 1)',
                fontColor:'rgba(198, 159, 54, 1)'
            }).draw();
            jQuery('#sketch').parent('div').css('color','rgba(198, 159, 54, 1)');

            jQuery('#pixate').ClassyLoader({
                percentage:75,
                roundedLine:true,
                lineColor:'rgba(0, 129, 178, 1)',
                fontColor:'rgba(0, 129, 178, 1)'
            }).draw();
            jQuery('#pixate').parent('div').css('color','rgba(0, 129, 178, 1)');

            jQuery('#axure').ClassyLoader({
                percentage:75,
                roundedLine:true,
                lineColor:'rgba(185, 32, 106, 1)',
                fontColor:'rgba(185, 32, 106, 1)'
            }).draw();
            jQuery('#axure').parent('div').css('color','rgba(185, 32, 106, 1)');

            jQuery('#hype').ClassyLoader({
                percentage:80,
                roundedLine:true,
                lineColor:'rgba(188, 129, 60, 1)',
                fontColor:'rgba(188, 129, 60, 1)'
            }).draw();
            jQuery('#hype').parent('div').css('color','rgba(188, 129, 60, 1)');

            jQuery('#webstorm').ClassyLoader({
                percentage:80,
                roundedLine:true,
                lineColor:'rgba(10, 174, 182, 1)',
                fontColor:'rgba(10, 174, 182, 1)'
            }).draw();
            jQuery('#webstorm').parent('div').css('color','rgba(10, 174, 182, 1)');

            jQuery('#html5').ClassyLoader({
                percentage:75,
                roundedLine:true,
                lineColor:'rgba(193, 81, 33, 1)',
                fontColor:'rgba(193, 81, 33, 1)'
            }).draw();
            jQuery('#html5').parent('div').css('color','rgba(193, 81, 33, 1)');

            jQuery('#css3').ClassyLoader({
                percentage:80,
                roundedLine:true,
                lineColor:'rgba(33, 135, 178, 1)',
                fontColor:'rgba(33, 135, 178, 1)'
            }).draw();
            jQuery('#css3').parent('div').css('color','rgba(33, 135, 178, 1)');

            jQuery('#jquery').ClassyLoader({
                percentage:80,
                roundedLine:true,
                lineColor:'rgba(96, 166, 196, 1)',
                fontColor:'rgba(96, 166, 196, 1)'
            }).draw();
            jQuery('#jquery').parent('div').css('color','rgba(96, 166, 196, 1)');

            jQuery('#bootstrap').ClassyLoader({
                percentage:70,
                roundedLine:true,
                lineColor:'rgba(73, 52, 103, 1)',
                fontColor:'rgba(73, 52, 103, 1)'
            }).draw();
            jQuery('#bootstrap').parent('div').css('color','rgba(73, 52, 103, 1)');

            jQuery('#rwd').ClassyLoader({
                percentage:85,
                roundedLine:true,
                lineColor:'rgba(86, 160, 155, 1)',
                fontColor:'rgba(86, 160, 155, 1)'
            }).draw();
            jQuery('#rwd').parent('div').css('color','rgba(86, 160, 155, 1)');

            if (parseInt(jQuery(window).width()) < 768){
                jQuery('.skill').css({'width':'50%'});
            }
        }
    }
});
