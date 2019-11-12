(function($) {
  $(document).ready(function() {
    console.log("ready");
    var $menu = $(".menu_button");
    var $menuBox = $('.menu_box');
    $menu.click(function(){
      $menuBox.toggleClass('menu_box2');
      $menu.toggleClass('menu_box3');
  });

});
})(jQuery);