function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
(function($) {
  $(document).ready(function() {
    console.log("ready");
    
    var $mainImg = $('.mainimage'),$mainImgH = $mainImg.height(),$mainImgW=$mainImg.width(),$binboxEl= $('.binbox').children();
    // console.log($mainImg,$mainImgH,$binboxEl)
    var $binboxElH= $mainImgH/$binboxEl.length; //갯수대로 나누기 높이를 div로 
    // console.log($binboxEl.length);//19
    for (var i = 0; i < $binboxEl.length; i++) { 
      $binboxEl.eq(i).height($binboxElH).width($mainImgW);
    }

    $.each($binboxEl, function(i){
      $(this).delay((i++)*100).animate({opacity:0},1000)
    })

  var $mainTitle_B = $(".maintitle b");
  $mainTitle_B.css({'opacity':'0'});
   
  for (var i = 0; i < $mainTitle_B.length + 1; i++) {   
    $mainTitle_B.eq(i).delay(i*1500).animate({'opacity':'1','margin-left':'0px'});
  }

  $(window).on('scroll', function() {
    var max = 60;
    var $video = $('#video');
    var posY = $(window).scrollTop();
    var startY = $(window).height()*1;
    //console.log(posY);
    
    var endY = startY +  $(window).height()*2;
    //var limitY = $(window).height(); 
    // #wrap 높이가 200vh 이기 때문에 스크롤의 최대값은 브라우저의 높이.
    if(posY >= startY && posY < endY){
        //console.log(startY);
        var sPosY = posY - startY;
        var ePosY = endY - startY;
        //x : max = sPosY : ePosY;
        var cuNum = Math.ceil(sPosY * max / ePosY);
        cuNum = pad(cuNum, 2)
        var path = './image/coding/coding' + cuNum + '.jpg';
        $video.attr('src', path);
    }
  });

  // // console.log($page02_Div); = 8
  // $(window).scroll(function(){  
  //   if($(this).scrollTop() > $('#page02').position().top){
  //     $page02_Div.eq(0).addClass('active');
  //   }
  // });

  var $page02_B = $(".page02_2 b");
  $page02_B.css({'opacity':'0'});

  $(window).scroll(function(){  
    if($(this).scrollTop() > $('#page02').position().top){
      for (var j = 0; j < $page02_B.length; j++) { 
        $page02_B.eq(j).delay(j*1000).animate({'opacity':'1','margin-left':"0px"});
        }
    }
})


  });
})(jQuery);