(function($) {
  $(document).ready(function() {
    console.log("ready");
    var $menu = $(".menu");
    var $menuBox = $('.menu_box');
    $menu.click(function(){
      $menuBox.toggleClass('menu_box2');
      $menu.toggleClass('menu_box3');
  });

  $(document).ready(function(){
    $(".menu").on('click',function(){
      $(this).find(".hambergerIcon").toggleClass("open");
    });
  })
});
})(jQuery);