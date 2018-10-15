$(document).ready(function(){ 
    "use strict"; 

     $(".comedy").mouseenter(function(){
      $(".textright").css("color", "rgba(245, 0, 0, 1)");
      $(".textleft").css("opacity", "0");
      $(".text").css("opacity", "0");
});
    $(".comedy").mouseleave(function(){
      $(".textright").css("color", "black");
      $(".textleft").css("opacity", "1");
      $(".text").css("opacity", "1");
});
        $(".news").mouseenter(function(){
      $(".textleft").css("color", "green");
      $(".textright").css("opacity", "0");
      $(".text").css("opacity", "0");
});
    $(".news").mouseleave(function(){
      $(".textleft").css("color", "black");
      $(".textright").css("opacity", "1");
      $(".text").css("opacity", "1");
});
      $(".documentary").mouseenter(function(){
      $(".text").css("color", "blue");
      $(".textright").css("opacity", "0");
      $(".textleft").css("opacity", "0");
});
    $(".documentary").mouseleave(function(){
      $(".text").css("color", "black");
      $(".textright").css("opacity", "1");
      $(".textleft").css("opacity", "1");
});
});




