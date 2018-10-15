
$(document).ready(function(){
    
    $(document).ready(function() {
    $('.box').fadeIn(3000);
});
      $(document).ready(function() {
    $('.paragraph1').fadeIn(6000);
});
 
        $(document).ready(function() {
    $('.bold').fadeIn(6000);
});
          $(document).ready(function() {
    $('.paragraph2').fadeIn(6000);
});
    
    $(".bold").hover(function(){
    $('html').css('background-color', 'rgba(245, 0, 0, 1)');
    $('.paragraph2').css('color', 'rgba(245, 0, 0, 1)');
    $('.paragraph1').css('color', 'rgba(245, 0, 0, 1)');
        
},function(){
    $('.flyout').addClass('hidden');
});
    $('.bold').mouseover(function(){
    $('.paragraph3').fadeIn(1000);
    $('.surround').fadeIn(4600);
})
     $('.surround').mouseover(function(){
    $('.paragraph4').fadeIn(1000);
})
      $('.surround').mouseover(function(){
    $('.attack').fadeIn(1000);
})
        $('.attack').mouseover(function(){
    $('.paragraph5').fadeIn(1000);
})
         $('.attack').mouseover(function(){
    $('.chaos').fadeIn(1000);
})
            $('.chaos').mouseover(function(){
    $('.paragraph6').fadeIn(1000);
})
    $('.chaos').mouseover(function(){
    $('.defend').fadeIn(4500);
})
      $('.castle').mouseover(function(){
    $('.unicorn').fadeIn(4500);
    $('.desc').fadeIn(4500);
})
      $('.defend').mouseover(function(){
    $('.paragraph7').fadeIn(4500);
    $('.castle').fadeIn(4500);
    
    
})
    $(".bold").mouseover(function(){
    $(".paragraph3").animate({left: '37%'}, 1500);
}); 
     $(".chaos").mouseover(function(){
    $(".paragraph6").animate({marginTop: '25%'}, 1500);
}); 
    $(".surround").hover(function(){
      $('.paragraph3').css('color', 'rgba(245, 0, 0, 1)');
    },function(){
    $('.flyout').addClass('hidden');
});
       $(".castle").hover(function(){
      $('.paragraph7').css('color', 'rgba(245, 0, 0, 1)');
    },function(){
    $('.flyout').addClass('hidden');
});
    
    $(".defend").hover(function(){
      $('.paragraph6').css('color', 'rgba(245, 0, 0, 1)');
    },function(){
    $('.flyout').addClass('hidden');
});
      $(".chaos").hover(function(){
      $('.paragraph5').css('color', 'rgba(245, 0, 0, 1)');
    },function(){
    $('.flyout').addClass('hidden');
});
   $(".attack").hover(function(){
      $('.paragraph4').css('color', 'rgba(245, 0, 0, 1)');
    },function(){
    $('.flyout').addClass('hidden');
});
});