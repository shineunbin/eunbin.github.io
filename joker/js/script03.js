function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
(function($) {
    $(document).ready(function() {
        //page06 스티치
        $(window).on('scroll', function() {
            var max = 34;
            var $jokervideo = $('#jokervideo');
            var posY = $(window).scrollTop();
            var startY = $(window).height()*5;
            //console.log(posY);
            
            var endY = startY +  $(window).height()*3;
            if(posY >= startY && posY < endY){
                var sPosY = posY - startY;
                var ePosY = endY - startY - $(window).height();
                var cuNum = Math.ceil(sPosY * max / ePosY);
                cuNum = pad(cuNum, 2)
                var path = './image/jokervideo/jokervidio_' + cuNum + '.jpg';
                $jokervideo.attr('src', path);
            }
        });
        //page06 예고편 클릭
        $(".page06_click p").on('click',function(){
            $(".page06_click p").toggleClass('p6move');
            $(".page06_video").toggleClass('p6move2');
        })
    });
})(jQuery);