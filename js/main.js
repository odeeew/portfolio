jQuery.noConflict();

jQuery(document).ready(function(){

    let titleCount = jQuery('#titleContainer p').length - 1;
    function titleScroll(){
        for (let i=0;i<titleCount;i++){
            jQuery('#titleContainer p').animate({'top':'-=22px'},2000)[i];
        }
    }
    window.setTimeout(titleScroll,1000);

    jQuery('#menu span').click(function () {
        let target = jQuery(this).attr('id').split('menu',2)[1];
        // console.log(jQuery('#Experiences').offset().top);
        jQuery('body,html').animate({
            scrollTop:(parseInt(parent.jQuery('#' + target).offset().top) - 44) + 'px'
        },1000);
    });

    if (parseInt(jQuery(window).width()) < 767) {
        let skillH = jQuery('#skillContainer').width() * 0.5;
        for (i=0;i<12;i++) {
            jQuery('#skillContainer').prepend('<div class="skillPlaceholder"></div>')[i];
        }
        jQuery('.skillPlaceholder').css({'width':skillH,'height':skillH});
    } else {
        for (i=0;i<12;i++) {
            jQuery('#skillContainer').prepend('<div class="skillPlaceholder"></div>')[i];
        }
    }

    jQuery('#photoshop').parent('div').css('color','rgba(0, 160, 204, 1)');
    jQuery('#illustrator').parent('div').css('color','rgba(204, 99, 0, 1)');
    jQuery('#sketch').parent('div').css('color','rgba(198, 159, 54, 1)');
    jQuery('#pixate').parent('div').css('color','rgba(0, 129, 178, 1)');
    jQuery('#axure').parent('div').css('color','rgba(185, 32, 106, 1)');
    jQuery('#hype').parent('div').css('color','rgba(188, 129, 60, 1)');
    jQuery('#webstorm').parent('div').css('color','rgba(10, 174, 182, 1)');
    jQuery('#html5').parent('div').css('color','rgba(193, 81, 33, 1)');
    jQuery('#css3').parent('div').css('color','rgba(33, 135, 178, 1)');
    jQuery('#jquery').parent('div').css('color','rgba(96, 166, 196, 1)');
    jQuery('#bootstrap').parent('div').css('color','rgba(73, 52, 103, 1)');
    jQuery('#rwd').parent('div').css('color','rgba(86, 160, 155, 1)');
    jQuery('#vue').parent('div').css('color','rgba(71, 183, 132, 1)');
    jQuery('#sql').parent('div').css('color', 'rgba(155, 21, 26, 1)');
});

jQuery('.card__image').on('click', function () {
    jQuery('.pattern').fadeIn(500).css({
        'background': 'rgba(255,255,255,0.8)',
        'display': 'block',
        'opacity': '1',
        'z-index': '1'
    });
    jQuery('.card').css('z-index','auto');
    jQuery('.card__container--closed').css('border-bottom','solid 3px rgba(0,0,0,0)');
    jQuery('body').css('overflow-y','hidden');
    jQuery(this).closest('.card__container').find('.card__btn-close').delay(2000).animate({'opacity':'1'},500);
});
jQuery('.card__btn-close').on('click', function () {
    jQuery(this).animate({'opacity':'0'}, 500);
    jQuery('body').css('overflow-y','auto');
    function hidePattern() {
        jQuery('.pattern').fadeTo('slow',0);
    }
    setTimeout(hidePattern,2000);

    setTimeout(function(){
        jQuery('.card').css('z-index','1');
    }, 2000);

    jQuery('.card__container--closed').css('border-bottom','solid 3px #b3b3b3');
});

jQuery(window).scroll(function () {

    let scrollHeight =  parseInt(jQuery(window).scrollTop()),
        viewportHeight = parseInt(jQuery(window).height()),
        skillPosition = Math.round(parseInt(jQuery('#skillContainer').offset().top)),
        coverHeight = jQuery('#cover').height();

     if (scrollHeight >= (viewportHeight - 44)){
         if (jQuery('#coverPlaceholder').length === 0){
             jQuery('#container').prepend('<div id="coverPlaceholder" style="height: 100vh"></div>');
         }
         jQuery('#cover').css({
             'position': 'fixed',
             'top': -(coverHeight + 30 - 54) + 'px',
             'z-index': '999',
             'background': 'rgba(54, 81, 74, .8)',
             'backdrop-filter':'blur(4px)'
         });
     } else {
         jQuery('#coverPlaceholder').remove();
         jQuery('#cover').css({
             'position': 'relative',
             'top': '0',
             'opacity': '1',
             'background':'url("/portfolio/img/cover.png") center center/cover no-repeat'
         });
     }

    function menuActive(activeId){
        jQuery('#menu span').css({'border':'0','opacity':'0.6'});
        jQuery(activeId).css({'border-bottom':'2px solid #fff','opacity':'1'});
    }

    if (scrollHeight < ((jQuery('#About').offset().top) - 54)){
        jQuery('#menu span').css({'border':'0','opacity':'1'});
    }
    if (scrollHeight >= ((jQuery('#About').offset().top) - 54)){
        menuActive(menuAbout);
    }
    if (scrollHeight >= ((jQuery('#Skills').offset().top) - 54)){
        menuActive(menuSkills);
    }
    if (scrollHeight >= ((jQuery('#Experiences').offset().top) - 54)){
        menuActive(menuExperiences);
    }
    if (scrollHeight >= ((jQuery('#Works').offset().top) - 54)){
        menuActive(menuWorks);
    }
    if (scrollHeight >= ((jQuery('#Contact').offset().top) - 54)){
        menuActive(menuContact);
    }

    if ((scrollHeight + viewportHeight) - skillPosition > 0 && jQuery('.skill').css('display') === 'none') {
        jQuery('.skill').fadeIn();
        jQuery('.skillPlaceholder').remove();
        jQuery('#photoshop').ClassyLoader({
            percentage:90,
            showText:false,
            roundedLine:true,
            lineColor:'rgba(0, 160, 204, 1)',
            fontColor:'rgba(0, 160, 204, 1)'
        }).draw();

	    jQuery('#vue').ClassyLoader({
		    percentage:60,
		    showText:false,
		    roundedLine:true,
		    lineColor:'rgba(71, 183, 132, 1)',
		    fontColor:'rgba(71, 183, 132, 1)'
	    }).draw();

        jQuery('#illustrator').ClassyLoader({
            percentage:80,
            showText:false,
            roundedLine:true,
            lineColor:'rgba(204, 99, 0, 1)',
            fontColor:'rgba(204, 99, 0, 1)'
        }).draw();

        jQuery('#sketch').ClassyLoader({
            percentage:80,
            showText:false,
            roundedLine:true,
            lineColor:'rgba(198, 159, 54, 1)',
            fontColor:'rgba(198, 159, 54, 1)'
        }).draw();

        jQuery('#pixate').ClassyLoader({
            percentage:75,
            showText:false,
            roundedLine:true,
            lineColor:'rgba(0, 129, 178, 1)',
            fontColor:'rgba(0, 129, 178, 1)'
        }).draw();

        jQuery('#axure').ClassyLoader({
            percentage:75,
            showText:false,
            roundedLine:true,
            lineColor:'rgba(185, 32, 106, 1)',
            fontColor:'rgba(185, 32, 106, 1)'
        }).draw();

            // jQuery('#hype').ClassyLoader({
            //     percentage:75,
            //     showText:false,
            //     roundedLine:true,
            //     lineColor:'rgba(188, 129, 60, 1)',
            //     fontColor:'rgba(188, 129, 60, 1)'
            // }).draw();

        jQuery('#figma').ClassyLoader({
            percentage:75,
            showText:false,
            roundedLine:true,
            lineColor:'rgba(0, 0, 0, 1)',
            fontColor:'rgba(0, 0, 0, 1)'
        }).draw();

        jQuery('#webstorm').ClassyLoader({
            percentage:75,
            showText:false,
            roundedLine:true,
            lineColor:'rgba(10, 174, 182, 1)',
            fontColor:'rgba(10, 174, 182, 1)'
        }).draw();

        jQuery('#html5').ClassyLoader({
            percentage:85,
            showText:false,
            roundedLine:true,
            lineColor:'rgba(193, 81, 33, 1)',
            fontColor:'rgba(193, 81, 33, 1)'
        }).draw();

        jQuery('#css3').ClassyLoader({
            percentage:85,
            showText:false,
            roundedLine:true,
            lineColor:'rgba(33, 135, 178, 1)',
            fontColor:'rgba(33, 135, 178, 1)'
        }).draw();

        jQuery('#jquery').ClassyLoader({
            percentage:80,
            showText:false,
            roundedLine:true,
            lineColor:'rgba(96, 166, 196, 1)',
            fontColor:'rgba(96, 166, 196, 1)'
        }).draw();

        jQuery('#bootstrap').ClassyLoader({
            percentage:80,
            showText:false,
            roundedLine:true,
            lineColor:'rgba(73, 52, 103, 1)',
            fontColor:'rgba(73, 52, 103, 1)'
        }).draw();

        jQuery('#rwd').ClassyLoader({
            percentage:85,
            showText:false,
            roundedLine:true,
            lineColor:'rgba(86, 160, 155, 1)',
            fontColor:'rgba(86, 160, 155, 1)'
        }).draw();

	jQuery('#sql').ClassyLoader({
            percentage:50,
            showText:false,
            roundedLine:true,
            lineColor:'rgba(155, 21, 26, 1)',
            fontColor:'rgba(86, 160, 155, 1)'
        }).draw();

        if (parseInt(jQuery(window).width()) < 767) {
            let skillH = jQuery('#skillContainer').width() * 0.5;
            jQuery('.skill').css({'width':'50%','height':skillH});
        }
    }
});