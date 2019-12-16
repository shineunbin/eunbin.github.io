(function($) {
  $(document).ready(function() {
  // console.log("ready");
      
  var $boxTitle_01 = $(".boxtitle_01 b");
  var $boxTitle_02 = $(".boxtitle_02 b");
  $boxTitle_01.css({'opacity':'0'});
  $boxTitle_02.css({'opacity':'0'});

    for(var a = 0; a < $boxTitle_01.length+10; a++){
      $boxTitle_01.eq(a).delay(1000*a).animate({'opacity':'1'});
      $(".boxtitle_01").delay(1000).animate({'left':'10%'});
      
      $boxTitle_02.eq(a).delay(1000*a).animate({'opacity':'1'});
      $(".boxtitle_02").delay(3500).animate({'left':'10%'});
    }



  });
})(jQuery);