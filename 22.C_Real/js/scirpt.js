(function($) {
    $(document).ready(function() {
        //console.log("ready");
        
        $(window).scroll(function(){  
            if($(this).scrollTop() > $('.Page02_maintitle').position().top - 200){
                $(".Page02_maintitle").css({'opacity':'1','margin-left':'12%'})
                $(".Page02_subtitle").css({'opacity':'1','margin-left':'55%'})
            }
            if($(this).scrollTop() > $('.Page03_title').position().top - 200){
                $(".page03_korea").css({'transform-origin':'bottom','transform':'scaleY(3.5)'})
                $(".page03_oecd").css({'transform-origin':'bottom','transform':'scaleY(4)'})
                $(".Page03_maintitle").css({'opacity':'1','margin-left':'12%'})
                $(".Page03_subtitle").css({'opacity':'1','margin-left':'38%'})
            }
            if($(this).scrollTop() > $('.line04').position().top - 200 ){
                $(".Page4_text1").css({'opacity':'1','margin-top':'13%'})
            }
            if($(this).scrollTop() > $('.Page05_title').position().top - 200 ){
                $(".Page5_goal img").css({'opacity':'1','margin-top':'7%'})
            }
            if($(this).scrollTop() > $('.Page07_title').position().top - 200 ){
                $(".Page07_maintitle").css({'opacity':'1','margin-left':'12%'})
            }
            if($(this).scrollTop() > 7500 ){
                $(".Page08_subimg01").css({'opacity':'1','margin-top':'180px'})
            }
            if($(this).scrollTop() > 7800 ){
                $(".Page08_subimg02").css({'opacity':'1','margin-top':'650px'})
            }
            if($(this).scrollTop() > 8200 ){
                $(".Page08_subimg03").css({'opacity':'1','margin-top':'1230px'})
            }
            if($(this).scrollTop() > $('.Page09_binbox').position().top - 200 ){
                $(".Page09_maintitle").css({'opacity':'1','margin-left':'12%'})
            }
            if($(this).scrollTop() > $('.Page08_title').position().top - 200 ){
                $(".Page08_maintitle").css({'opacity':'1','margin-left':'5%'})
            }
            if($(this).scrollTop() > $('.Page09_binbox2').position().top-200 ){
                $(".Page10_maintitle").css({'opacity':'1','margin-left':'12%'})
                }
            if($(this).scrollTop() > $('.Page09_binbox2').position().top+400 ){
                $(".Page10_maintitle").css({'opacity':'1','margin-left':'12%'})
                $(".page10_box1_img02").css({'opacity':'1','transform':'translateX(-140px) rotate(-10deg)'})
                $(".page10_box1_img03").css({'opacity':'1','transform':'translateX(140px) rotate(10deg)'})
                $(".page10_box1_img04").css({'opacity':'1','transform':'translateX(-140px) rotate(-20deg)'})
                $(".page10_box1_img05").css({'opacity':'1','transform':'translateX(140px) rotate(20deg)'})
            }

            if($(this).scrollTop() > $('.Page09_binbox2').position().top +800 ){
            $(".page10_box2_img img").css({'opacity':'1','margin-left':'2%'});
            }
            if($(this).scrollTop() > $('.Page09_binbox2').position().top +1500 ){
            $(".page10_box3_img img").css({'opacity':'1','margin-left':'2%'});    
            }
            if($(this).scrollTop() > $('.Page11_title').position().top - 200 ){
                $(".Page11_maintitle").css({'opacity':'1','margin-left':'12%'})
                $(".Page11_subtitle").css({'opacity':'1','margin-left':'47.5%'})
                $(".Page11_imgbox1_11_1").css({'opacity':'1','margin-top':'-2%'})
                $(".Page11_imgbox1_11_2").css({'opacity':'1','margin-top':'-2%'})
                $(".Page11_imgbox1_11_3").css({'opacity':'1','margin-top':'-2%'})
                $(".Page11_imgbox2_1").css({'opacity':'1','margin-top':'-2%'})
                $(".Page11_imgbox2_2").css({'opacity':'1','margin-top':'-2%'})
                $(".Page11_imgbox2_3").css({'opacity':'1','margin-top':'-2%'})
            }
            if($(this).scrollTop() > $('.Page12_title').position().top -400 ){
            $(".Page12_text1").css({'opacity':'1','margin-left':'12%'});    
            $(".Page12_text2").css({'opacity':'1','margin-left':'25%'}); 
            $(".Page12_imgbox img").css({'opacity':'1'}); 
            }
            if($(this).scrollTop() > $('.Page13_title').position().top -200){
                $(".lastimg img").css({'opacity':'1','margin-left':'20%'});    
            }
            if($(this).scrollTop() > $('.page15_imgbox').position().top -200){
                $(".page15_1").css({'opacity':'1'});
                $(".page15_2").css({'opacity':'1'});
                $(".page15_3").css({'opacity':'1'});
            }
            if($(this).scrollTop() > $('.page12_binbox1').position().top -200){
                $(".Page12_mockup1").css({'opacity':'1','margin-left':'-20%'});
            }
            if($(this).scrollTop() > $('.page12_binbox1').position().top -400){
                $(".Page12_mockup2 img").css({'opacity':'1','margin-left':'0%'});
            }
            if($(this).scrollTop() > $('.Page16_title').position().top -300){
                $(".Page16img").css({'opacity':'1','margin-top':'5%'});
            }
            var page09= $('.page9_imgbox').position().top;
            //console.log(page09);
            if($(this).scrollTop() > page09 - 200){
                $(".page09_1").css({'opacity':'1'});
                $(".page09_2").css({'opacity':'1'});
                $(".page09_3").css({'opacity':'1'});
                $(".page09_4").css({'opacity':'1'});
            }
        })
        //슬라이드
        $('.carousel[data-type="multi"] .item').each(function() {
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
        
            for (var i = 0; i < 3; i++) {
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
                next.children(':first-child').clone().appendTo($(this));
            }
        });

        $(window).scroll(function () {
        var height = $(document).scrollTop();
        console.log(height);
        // var page09= $('.page9_imgbox').position().top;
        // console.log(page09);-->반응형으로 스크립트구현
        //console.log($('.Page03_title').position().top);
        }); 
    });

    


})(jQuery);
