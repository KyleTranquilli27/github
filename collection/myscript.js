$(document).ready(function(){ 
    "use strict"; 
var toggleBush=false; 
var toggleClinton=false; 
var toggleOJ=false; 
var toggleBushsr=false;
var toggleAll=false;

     $(".Bush").click(function(){
         toggleBush=!toggleBush;
         if (toggleBush==true){
              $(".Bush1").css("color", "red");
             $(".Bush1").css("opacity", "1");
         }
         
         else{
             $(".Bush1").css("opacity", "0");
         }
          
});     
     $(".Clinton").click(function(){
         toggleClinton=!toggleClinton;
         if (toggleClinton==true){
               $(".Clinton1").css("color", "seagreen");
             $(".Clinton1").css("opacity", "1");
              
         }
          else{
              $(".Clinton1").css("opacity", "0");

         }

});

 $(".OJ").click(function(){
         toggleClinton=!toggleClinton;
         if (toggleClinton==true){
               $(".OJ1").css("color", "slateblue");
             $(".OJ1").css("opacity", "1");
              
         }
     else{
              $(".OJ1").css("opacity", "0");
        

         }

});
     $(".Bushsr").click(function(){
         toggleClinton=!toggleClinton;
         if (toggleClinton==true){
               $(".Bushsr1").css("color", "saddlebrown");
             $(".Bushsr1").css("opacity", "1");
              
         }
     else{
              $(".Bushsr1").css("opacity", "0");
        

         }

});
         $(".Obama").click(function(){
         toggleClinton=!toggleClinton;
         if (toggleClinton==true){
               $(".Obama1").css("color", "sandybrown");
             $(".Obama1").css("opacity", "1");
              
         }
     else{
              $(".Obama1").css("opacity", "0");
        

         }

});
       $(".nine").click(function(){
         toggleClinton=!toggleClinton;
         if (toggleClinton==true){
               $(".nine1").css("color", "blue");
             $(".nine1").css("opacity", "1");
              
         }
     else{
              $(".nine1").css("opacity", "0");
        

         }

});
         $(".All").click(function(){
         toggleClinton=!toggleClinton;
         if (toggleClinton==true){
               $(".nine1").css("color", "blue");
             $(".nine1").css("opacity", "1");
             $(".Obama1").css("color", "sandybrown");
             $(".Obama1").css("opacity", "1");
             $(".Bushsr1").css("color", "saddlebrown");
             $(".Bushsr1").css("opacity", "1");
              $(".OJ1").css("color", "slateblue");
             $(".OJ1").css("opacity", "1");
              $(".Clinton1").css("color", "seagreen");
             $(".Clinton1").css("opacity", "1");
              $(".Bush1").css("color", "red");
             $(".Bush1").css("opacity", "1");
         }
     else{
              $(".nine1").css("opacity", "0");
              $(".Obama1").css("opacity", "0");
              $(".Bushsr1").css("opacity", "0");
              $(".OJ1").css("opacity", "0");
              $(".Clinton1").css("opacity", "0");
              $(".Bush1").css("opacity", "0");
        

         }

});
    });





