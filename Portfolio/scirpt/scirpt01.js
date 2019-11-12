(function($) {
  $(document).ready(function() {
    console.log("ready");
    var $menu = $(".menu_button");
    var $menuBox = $('.menu_box');
    $menu.click(function(){
      $menuBox.toggleClass('menu_box2');
      $menu.toggleClass('menu_box3');
  });

  //var $binHover = $('.maintitle .bin').mouseover();
  var $main = $('.main');
  // $('.maintitle .bin').mouseover().
  //$main.css({'opacity':'0.5'});
  
  $('.maintitle .bin').mouseover(function(){
    $main.css({'opacity':'0.2'});
  });
  $('.maintitle .bin').mouseout(function(){
    $main.css({'opacity':'0'});
  });


});
})(jQuery);