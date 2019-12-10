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

    //page03 부분 story box 스크롤에 따른 이미지 변경
    var box01 = $('.stroy_box_story01').position().top; 
    var box02 = $('.stroy_box_story02').position().top; 
    var box03 = $('.stroy_box_story03').position().top; 
    var box04 = $('.stroy_box_story04').position().top; 


    $(".story_box").scroll(function() {

        if($(this).scrollTop() > box01)
        {$(".page03bigimgbox .page03_bigimg01").css({'filter':'blur(0px)' , 'opacity':'1'})}
        {$(".page03_best_01").delay(500).animate({'opacity':'1',"left":"30px"})}
        {$(".page03_best_02").delay(1300).animate({'opacity':'1',"left":"-50px"})}
        
        if($(this).scrollTop() > box01)
        {$(".page03bigimgbox .page03_bigimg02").css({'filter':'blur(0px)' , 'opacity':'0'})}
        
        if($(this).scrollTop() > box02-50)
        {$(".page03bigimgbox .page03_bigimg01").css({'filter':'blur(3px)' , 'opacity':'0.5'})}
        {$(".page03bigimgbox .page03_bigimg02").css({'filter':'blur(3px)' , 'opacity':'0'})}

        if($(this).scrollTop() > box03-150)
        {$(".page03bigimgbox .page03_bigimg02").css({'filter':'blur(3px)' , 'opacity':'0.5'})}


        if($(this).scrollTop() > box04-200)
        {$(".page03bigimgbox .page03_bigimg02").css({'filter':'blur(0px)' , 'opacity':'1'})}
    }); 
    

    //page04 actor 부분 
    //타이틀,이미지 클릭시 변경 + 움직임
    var $p4Title = $('.page04_work b');
    var $p4Image = $('.page04_imgbox img');
    var $p4Text = $('.imgclickbox div');

    $p4Title.on('click', function(e){
      var $el = $(e.currentTarget);
      var id = $p4Title.index($el);

      $p4Title.removeClass('clickcolor');
      $el.addClass('clickcolor');
      $p4Image.removeClass("active");
      $p4Image.eq(id).addClass("active");
      $p4Text.removeClass("on");
      $p4Text.eq(id).addClass("on");
    });

    $p4Image.on('click',function(){
      $p4Image.toggleClass("imgmove");
      $p4Text.toggleClass("textmove");
    });

    


    });
})(jQuery);