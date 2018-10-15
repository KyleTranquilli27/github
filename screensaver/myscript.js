//setTimeout- 1x only setInterval- over and over()
$(document).ready(function(){ 
    "use strict"; 

setInterval(function() {
    $(".first").removeClass("hidden");
    setTimeout(function() {
        $(".first").addClass("hidden");
    }, 100);
    }, 3000);


setTimeout(function() {
    $(".hidden").addClass("second");
    }, 12000);

setTimeout(function() {
    $(".second").addClass("third");
    }, 28000);

setTimeout(function() {
    $(".third").addClass("fourth");
    }, 48000);

setTimeout(function() {
    $(".fourth").addClass("five");
    }, 60000);

setTimeout(function() {
    $(".five").addClass("six");
    }, 80000);

setTimeout(function() {
    $(".six").addClass("seven");
    }, 100000);

setTimeout(function() {
    $(".seven").addClass("eight");
    }, 120000);

setTimeout(function() {
    $(".eight").addClass("final");
    }, 140000);

setInterval(function() {
    $(".second").removeClass("secondhidden");
    setTimeout(function() {
        $(".second").addClass("secondhidden");
    }, 100);
    }, 3000);
    

setInterval(function() {
    $(".third").removeClass("thirdhidden");
    setTimeout(function() {
        $(".third").addClass("thirdhidden");
    }, 120);
    }, 2000);
    
 setInterval(function() {
    $(".fourth").removeClass("fourthidden");
    setTimeout(function() {
        $(".fourth").addClass("fourthidden");
    }, 120);
    }, 2000);


 setInterval(function() {
    $(".five").removeClass("fivehidden");
    setTimeout(function() {
        $(".five").addClass("fivehidden");
    }, 100);
    }, 2000);

 setInterval(function() {
    $(".six").removeClass("sixhidden");
    setTimeout(function() {
        $(".six").addClass("sixhidden");
    }, 100);
    }, 2000);

 setInterval(function() {
    $(".seven").removeClass("sevenhidden");
    setTimeout(function() {
        $(".seven").addClass("sevenhidden");
    }, 90);
    }, 2000);


 setInterval(function() {
    $(".eight").removeClass("eighthidden");
    setTimeout(function() {
        $(".eight").addClass("eighthidden");
    }, 100);
    }, 2000);

 setInterval(function() {
    $(".final").removeClass("finalhidden");
    setTimeout(function() {
        $(".final").addClass("finalhidden");
    }, 100);
    }, 2000);



});