$(document).ready(function(){ 
    "use strict"; 
var toggleBush=false; 
var toggleClinton=false; 
var toggleOJ=false; 
var toggleBushsr=false;

     $(".Bush").click(function(){
         toggleBush=!toggleBush;
         if (toggleBush==true){
              $(".Bush1").css("color", "blue");
             $(".Bush1").css("opacity", "1");
         }
         
         else{
             $(".Bush1").css("opacity", "0");
         }
          
});     
     $(".Clinton").click(function(){
         toggleClinton=!toggleClinton;
         if (toggleClinton==true){
               $(".Clinton1").css("color", "red");
             $(".Clinton1").css("opacity", "1");
              
         }
          else{
              $(".Clinton1").css("opacity", "0");

         }

});

 $(".OJ").click(function(){
         toggleClinton=!toggleClinton;
         if (toggleClinton==true){
               $(".OJ1").css("color", "green");
             $(".OJ1").css("opacity", "1");
              
         }
     else{
              $(".OJ1").css("opacity", "0");

         }

});
    });

//    $(".Bushsr").click(function(){
//      $(".Bushsr1").css("color", "hotpink");
//      $(".Clinton1").css("opacity", "0");
//      $(".Bush1").css("opacity", "0");
//       $(".OJ1").css("opacity", "0");
//       $(".Obama1").css("opacity", "0");
//      $(".nine1").css("opacity", "0");   
//});
//
//        $(".nine").click(function(){
//      $(".nine1").css("color", "orange");
//      $(".Clinton1").css("opacity", "0");
//      $(".Bush1").css("opacity", "0");
//       $(".OJ1").css("opacity", "0");
//       $(".Obama1").css("opacity", "0");
//      $(".Bushsr1").css("opacity", "0");   
//});
//
//      $(".Obama").click(function(){
//      $(".Obama1").css("color", "purple");
//      $(".Clinton1").css("opacity", "0");
//      $(".Bush1").css("opacity", "0");
//       $(".OJ1").css("opacity", "0");
//       $(".nine1").css("opacity", "0");
//      $(".Bushsr1").css("opacity", "0");   
//});
//
//
//});
//    




