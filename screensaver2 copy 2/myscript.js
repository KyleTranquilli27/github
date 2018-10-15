
$(document).ready(function(){
    
    $(document).ready(function() {
    $('.box').fadeIn(3000);
});
      $(document).ready(function() {
    $('.hey').fadeIn(6000);
});
 
        $(document).ready(function() {
    $('.bold').fadeIn(6000);
});
          $(document).ready(function() {
    $('.hey2').fadeIn(6000);
});
    
    $(".bold").hover(function(){
    $('html').css('background-color', 'rgba(245, 0, 0, 1)');
    $('.hey2').css('color', 'rgba(245, 0, 0, 1)');
    $('.hey').css('color', 'rgba(245, 0, 0, 1)');
        
},function(){
    $('.flyout').addClass('hidden');
});
    $('.bold').mouseover(function(){
    $('.hey3').fadeIn(1000);
    $('.surround').fadeIn(4600);
})
     $('.surround').mouseover(function(){
    $('.hey4').fadeIn(1000);
})
      $('.surround').mouseover(function(){
    $('.attack').fadeIn(1000);
})
    $(".bold").mouseover(function(){
    $(".hey3").animate({left: '37%'}, 1500);
}); 
    $(".surround").hover(function(){
      $('.hey3').css('color', 'rgba(245, 0, 0, 1)');
    },function(){
    $('.flyout').addClass('hidden');
});
       $(".attack").hover(function(){
      $('.hey4').css('color', 'rgba(245, 0, 0, 1)');
    },function(){
    $('.flyout').addClass('hidden');
});
    
});