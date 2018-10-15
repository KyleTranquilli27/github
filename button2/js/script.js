$(document).ready(function() {
    
    var popCount;
    popCount = 0;
    var numOfBalloons = 1000;
    
    for (var i=0; i<numOfBalloons; i++){
        //i is just the name for the var. It can be anything.the <200 loops until 200. i=i+1 is telling it how much to go up by
     $("#balloon-container").append("<div class='balloon'></div>");
     if (i % 50 ==6){
         $(".balloon").last().addClass("big");
         //take the last one we made and make it big. 
         //i ++ is the same as saying i plus 1. i=0 is just to set a value for the variable when you set it.
     }
    }
   
    $(".big").on("click", function(){
      $(this).addClass("popped");
      popCount = popCount + 1;
      $("#bar").html("Yellow Found: " + popCount);
        
        

    //did it pop all the balloons?
     if (popCount === 20) {
         $("#bar").html("You Did It!");
         $(".yay").addClass("on");
         
         
     }
   
});
 //VAR numOfBalloons is the variable for the number of balloons. Below you make the popcount equal to the numofballoons
    
});