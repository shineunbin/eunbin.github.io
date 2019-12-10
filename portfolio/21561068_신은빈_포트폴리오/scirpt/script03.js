/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);




$(document).ready(function() {
    var slideArr = [];
    var i = 1;
    function prevSlide(){
        //scroll up
        if (i > 1) { i--; }
        moveSlide = (100 / slideCount) * ( i-1 );
        slideMask.css('transform', 'translateX(-' + moveSlide + '%)');
        $('.scroll-slide, .pager-circles').removeClass('active');
        $('#scroll-slide-' + i + ',#pager-' + i).addClass('active');
    }
    
    function nextSlide(){
        //scroll down
        if (i < slideArr.length) { i++; }
        moveSlide = (100 / slideCount) * ( i-1 );
        slideMask.css('transform', 'translateX(-' + moveSlide + '%)');
        $('.scroll-slide, .pager-circles').removeClass('active');
        $('#scroll-slide-' + i + ',#pager-' + i).addClass('active');
    }
    
    $('.scroll-slide').each(function() {
        var slideId = $(this).attr('id');
        //var slideNo = slideId.slice(-1);
        slideArr.push(slideId);
        return slideArr;
    }); //each
    
    /* Important variables. Selectors, do some maths etc */
    var slideCount = slideArr.length;
    var maskWidth = slideCount * 100;
    var slideMask = $('#scroll-mask');
    var scrollSlides = $('#scroll-mask .scroll-slide');
    var moveSlide;
    slideMask.css('width', maskWidth + '%');
    scrollSlides.css('width', ( 100 / slideCount ) + '%');
    
   
    $(window).bind('mousewheel wheel', $.debounce(150, function(event) {
        if (event.originalEvent.wheelDelta >= 0) {
            prevSlide();
        } else {
            nextSlide();
        }
    })); //bind
    
    $(document).keydown( $.debounce(150, function(e){
        switch(e.which){
            case 37: //left arrow
            case 38: //up arrow
                prevSlide();
                break;
            case 39: // right arrow
            case 40: // down arrow
                nextSlide();
                break;
        }
    })); //keydown

}); //ready