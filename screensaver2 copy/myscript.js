//setTimeout- 1x only setInterval- over and over()
$(document).ready(function(){
    
     $(document).ready(function() {
    $('.box').fadeIn(3000);
});
                $(document).ready(function() {
    $('.hey').fadeIn(3000);
});

$(".box").ready(function(){
    var div = $(".box");
    div.animate({height: '2%',}, "slow");
    div.animate({fontSize: '3em',}, (1000));
    div.animate({marginLeft: '56%',}, (10000));
}); 
 $(".hey").ready(function(){
    var div = $(".hey");
    div.animate({fontSize: '1em',}, (1000));
    div.animate({marginLeft: '87%',}, (10500));
}); 
 $(".hey2").click(function(){
      var div2 = $(".hey2");
    div2.animate({marginLeft: '60%',}, (10500));
}); 

             $(document).ready(function() {
    $('.box').fadeOut(4000);
});
                $(document).ready(function() {
    $('.hey').fadeOut(4000);
});
    setTimeout(function() {
    $(".box2").fadeIn("hey");
    }, 17000);
});