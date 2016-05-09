$(document).ready(function(){

});

$('#menu span').click(function () {
    var target = $(this).attr('id').split('menu',2)[1];
    $('html body').animate({
       scrollTop:(parseInt(parent.$('#' + target).offset().top) - 54) + 'px'
    },1000);
});

$(window).scroll(function () {

    var scrollHeight =  parseInt($('html body').scrollTop()),
        viewportHeight = parseInt($(window).height()),
        skillPosition = Math.round(parseInt($('#skillContainer').offset().top));

     if (scrollHeight >= (viewportHeight - 54)){
         if ($('#coverPlaceholder').length == 0){
             $('#container').prepend('<div id="coverPlaceholder" style="height: 100vh"></div>');
         }
         $('#cover').css({'position':'fixed','top':-(viewportHeight-54) + 'px','z-index':'999'});
     } else {
         $('#coverPlaceholder').remove();
         $('#cover').css({'position':'relative','top':'0'});
     }

    if ((scrollHeight + viewportHeight) - skillPosition > 0) {
        $('.skill').fadeIn(500);
        if ($('.skill').css('opacity') == 0){
            $('#photoshop').ClassyLoader({
                percentage:90,
                roundedLine:true,
                lineColor:'rgba(0, 160, 204, 1)',
                fontColor:'rgba(0, 160, 204, 1)'
            }).draw()
            $('#photoshop').parent('div').css('color','rgba(0, 160, 204, 1)');

            $('#illustrator').ClassyLoader({
                percentage:75,
                roundedLine:true,
                lineColor:'rgba(204, 99, 0, 1)',
                fontColor:'rgba(204, 99, 0, 1)'
            }).draw();
            $('#illustrator').parent('div').css('color','rgba(204, 99, 0, 1)');

            $('#sketch').ClassyLoader({
                percentage:80,
                roundedLine:true,
                lineColor:'rgba(198, 159, 54, 1)',
                fontColor:'rgba(198, 159, 54, 1)'
            }).draw();
            $('#sketch').parent('div').css('color','rgba(198, 159, 54, 1)');

            $('#pixate').ClassyLoader({
                percentage:75,
                roundedLine:true,
                lineColor:'rgba(0, 129, 178, 1)',
                fontColor:'rgba(0, 129, 178, 1)'
            }).draw();
            $('#pixate').parent('div').css('color','rgba(0, 129, 178, 1)');

            $('#axure').ClassyLoader({
                percentage:75,
                roundedLine:true,
                lineColor:'rgba(185, 32, 106, 1)',
                fontColor:'rgba(185, 32, 106, 1)'
            }).draw();
            $('#axure').parent('div').css('color','rgba(185, 32, 106, 1)');

            $('#hype').ClassyLoader({
                percentage:80,
                roundedLine:true,
                lineColor:'rgba(188, 129, 60, 1)',
                fontColor:'rgba(188, 129, 60, 1)'
            }).draw();
            $('#hype').parent('div').css('color','rgba(188, 129, 60, 1)');

            $('#webstorm').ClassyLoader({
                percentage:80,
                roundedLine:true,
                lineColor:'rgba(10, 174, 182, 1)',
                fontColor:'rgba(10, 174, 182, 1)'
            }).draw();
            $('#webstorm').parent('div').css('color','rgba(10, 174, 182, 1)');

            $('#html5').ClassyLoader({
                percentage:75,
                roundedLine:true,
                lineColor:'rgba(193, 81, 33, 1)',
                fontColor:'rgba(193, 81, 33, 1)'
            }).draw();
            $('#html5').parent('div').css('color','rgba(193, 81, 33, 1)');

            $('#css3').ClassyLoader({
                percentage:80,
                roundedLine:true,
                lineColor:'rgba(33, 135, 178, 1)',
                fontColor:'rgba(33, 135, 178, 1)'
            }).draw();
            $('#css3').parent('div').css('color','rgba(33, 135, 178, 1)');

            $('#jquery').ClassyLoader({
                percentage:80,
                roundedLine:true,
                lineColor:'rgba(96, 166, 196, 1)',
                fontColor:'rgba(96, 166, 196, 1)'
            }).draw();
            $('#jquery').parent('div').css('color','rgba(96, 166, 196, 1)');

            $('#bootstrap').ClassyLoader({
                percentage:70,
                roundedLine:true,
                lineColor:'rgba(73, 52, 103, 1)',
                fontColor:'rgba(73, 52, 103, 1)'
            }).draw();
            $('#bootstrap').parent('div').css('color','rgba(73, 52, 103, 1)');

            $('#rwd').ClassyLoader({
                percentage:85,
                roundedLine:true,
                lineColor:'rgba(86, 160, 155, 1)',
                fontColor:'rgba(86, 160, 155, 1)'
            }).draw();
            $('#rwd').parent('div').css('color','rgba(86, 160, 155, 1)');

            if (parseInt($(window).width()) < 768){
                $('.skill').css({'width':'50%'});
            }
        }
    }
});
