(function($) {
  $(document).ready(function() {
    console.log("ready");    
  
  var $mainTitle_B = $(".maintitle b");
  $mainTitle_B.css({'opacity':'0'});
  for (var i = 0; i < $mainTitle_B.length + 1; i++) { 
    $mainTitle_B.eq(i).delay(i*500).animate({'opacity':'1','margin-left':'0px'});
    }



  //var $binHover = $('.maintitle .bin').mouseover();
  var $main01 = $('.main01');
  var $main02 = $('.main02');
  var $main03 = $('.main03');
  // $('.maintitle .bin').mouseover().
  //$main.css({'opacity':'0.5'});
  
  $('.bin').mouseover(function(){
    $main01.css({'opacity':'0.2'});
  });
  $('.bin').mouseout(function(){
    $main01.css({'opacity':'0'});
  });
  $('.work').mouseover(function(){
    $main02.css({'opacity':'0.2'});
  });
  $('.work').mouseout(function(){
    $main02.css({'opacity':'0'});
  });
  $('.contact').mouseover(function(){
    $main03.css({'opacity':'0.2'});
  });
  $('.contact').mouseout(function(){
    $main03.css({'opacity':'0'});
  });


});
})(jQuery);