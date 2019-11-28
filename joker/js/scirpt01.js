(function($) {
  $(document).ready(function() {
    console.log("ready");

    //MainPage title css 변경
    var back = ["#ff0","#ff0000","#fff"];
    var rand = back[Math.floor(Math.random() * back.length)];
    $(function(){
      $('.page01_title_joker').css({'color': rand, 'letter-spacing':'25px', 'opacity':'1'});
      $('.page01_title_sub').css({'letter-spacing':'31px','opacity':'1'});
    });

    var $page01 = $('#page02').scrollTop(); 

    console.log($page01);

    //console.log(rand);
    var box01 = $('.stroy_box_story01').position().top; 
    var box02 = $('.stroy_box_story02').position().top; 
    var box03 = $('.stroy_box_story03').position().top; 
    var box04 = $('.stroy_box_story04').position().top; 
     $(".story_box").scroll(function(e) {
        // console.log(box04); 
        if($(this).scrollTop() > box01){$(".page03imgbox .page03_img01").css({'filter':'blur(0px)' , 'opacity':'1'})}
        if($(this).scrollTop() > box02-100){$(".page03imgbox .page03_img01").css({'filter':'blur(3px)' , 'opacity':'0.5'})}
        {$(".page03imgbox .page03_img02").css({'filter':'blur(3px)' , 'opacity':'0'})}
        if($(this).scrollTop() > box03-150){$(".page03imgbox .page03_img01").css({'filter':'blur(5px)' , 'opacity':'0'})}
        if($(this).scrollTop() > box03-150){$(".page03imgbox .page03_img02").css({'filter':'blur(3px)' , 'opacity':'0.5'})}
        if($(this).scrollTop() > box04-200){$(".page03imgbox .page03_img02").css({'filter':'blur(0px)' , 'opacity':'1'})}
    }); 


    var $win = $(window);
    var $gn = $('#global-nav');
    var $gnEl = $gn.find('a');

    //var _exPosY = $win.scrollTop();
    var _exPosY;

    //Event Bind.
    function addEvent() {
        $win.on('scroll', onScroll).trigger('scroll');
        $gnEl.on('click', onClickGN);
    }

    //Event Handler
    function onScroll(e) {
        var posY = $win.scrollTop();
        if(_exPosY != undefined && posY >= 0) {
            if(_exPosY < posY){
                if(!$gn.hasClass('hide')) $gn.addClass('hide');
            }else{
                if($gn.hasClass('hide')) $gn.removeClass('hide');
            }
        }

        // $.each($section, function(idx, el) {
        //     var $el = $(el),
        //         startY, endY;
        //     if(idx === 0){
        //         startY = 0;
        //     }else{
        //         startY = $el.offset().top - _gnH;
        //         // 현재 요소의 y 스크롤 좌표 시작점 - 헤더의 높이
        //     }
        //     endY = startY + $el.outerHeight(true);
        //     if(posY >= startY && posY < endY){
        //         if(!$gnEl.eq(idx).hasClass('active')){
        //             $gnEl.removeClass('active');
        //             $gnEl.eq(idx).addClass('active');
        //         }
        //     }
        // });
        
        //**** 이전 스크롤 좌표를 갱신. 스크롤이 끝나는 지점에서 체크.
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

    //Init.
    function init(){
        addEvent();
    }

    //Run initialize.
    init();

    


  });
})(jQuery);

// const imgContainer = document.querySelector(".page01");
// const move = function(e) {
//   let x = e.pageX - this.offsetLeft - this.offsetWidth / 2;
//   let y = e.pageY - this.offsetTop - this.offsetHeight / 2;
//   let xPourcent = x * 300 / this.offsetWidth / 10;
//   let yPourcent = y * 300 / this.offsetHeight / 10;

//   this.style.transform = "rotateX("+ -yPourcent +"deg) rotateY("+ xPourcent +"deg)";
// };

// const reinit = function() {
//   setTimeout(() => {
//     this.style.transform = "";
//   }, 500);
// };
// imgContainer.addEventListener("mousemove", move);
// imgContainer.addEventListener("mouseleave", reinit);