$(document).ready(function(){
    
console.log("hello there");
    
    $(".button").on("mouseenter", function() {
        $(this).addClass("focused");
    });
    $(".button").on("mouseleave", function() {
        $(this).removeClass("focused");
    });
    $('.button').click(function(){
    $('.active2').toggle();
    $('.active3').toggle();
    
})
    $(".button").on("click", function() {
       $(this).toggleClass("active"); 
       $("body").toggleClass("dark"); 
       $("h1").html("Welcome, my dudes.");
        
    });
    
     $("h1").on("click", function(){
         $(this).html("Up");
         
     });

});
