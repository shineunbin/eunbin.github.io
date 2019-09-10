$(function(){
    var ex_show = $('.ex_show');
    var ex_hide = $('.ex_hide');
    var ex_box = $('.ex_box');
    ex_show.click(function(){
      ex_box.fadeIn();
    });
    ex_hide.click(function(){
      ex_box.fadeOut();
    });
  });