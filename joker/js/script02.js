(function($) {
  $(document).ready(function() {
    // console.log("Nav-script");

    //GNB스크립트 왼쪽
    var $win = $(window);
    var $gn = $('#global-nav');
    var $gnEl = $gn.find('a');
    var _exPosY;
    function addEvent() {
        $win.on('scroll', onScroll).trigger('scroll');
        $gnEl.on('click', onClickGN);
    }
    function onScroll(e) {
        var posY = $win.scrollTop();
        if(_exPosY != undefined && posY >= 0) {
            if(_exPosY < posY){
                if(!$gn.hasClass('hide')) $gn.addClass('hide');
            }else{
                if($gn.hasClass('hide')) $gn.removeClass('hide');
            }
        }
        _exPosY = posY;
    }
    function onClickGN(e){
        e.preventDefault();
        var $el = $(e.currentTarget),
            id = $el.attr('href'),
            $section = $(id),
            posY = $section.offset().top;
        $('html, body').stop(true).animate({scrollTop: posY}, {duration:500, easing: 'easeInOutCubic'});
    }
    function init(){
        addEvent();
    }
    init();

    
    });
})(jQuery);