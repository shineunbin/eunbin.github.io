console.log("load")


$(document).ready(function() {
    $(window).scroll( function(){
        $('.brandimg5').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-left':'660px'},1600);
            }
        }); 
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('.brandimg4').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-left':'440px'},1400);
            }
        }); 
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('.brandimg3').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-left':'220px'},1200);
            }
        }); 
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('.brandimg2').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-left':'0px'},1000);
            }
        }); 
    });
});


$(document).ready(function() {
    $(window).scroll( function(){
        $('.brandimg1').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-left':'500px'},1200);
            }
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.coca').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-left':'500px'},1500);
            }
        }); 
    });
});

/* 사라지고 나타나고 안쓸랜당
window.addEventListener('scroll', function() {
    var el = document.querySelector('.next');
    
    if(window.scrollY >= 2000) el.classList.add('shown');
    else el.classList.remove('shown');
  });

  */