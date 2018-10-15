$(document).ready(function() {
  var key = "f0e8e78ae02547cea53232217171503";
  var url = "https://api.apixu.com/v1/current.json?key=" + key + "&q=NYC";

    
$.getJSON(url, function(data) {
      console.log(data["current"]["temp_f"]);   
    $("#weather").html(data["current"]["temp_f"]);
    
     if (data["current"]["temp_f"]<50){
     $("#weather").html("It Cold");
 }
         if (data["current"]["temp_f"]>50){
     $("#weather").html("It Hot");
 }
     
 });

 $.getJSON(url, function(data) {
      console.log(data["current"]["temp_c"]);   
    $("#weather2").html(data["current"]["temp_c"]);
    
  
    });

 $.getJSON(url, function(data) {
      console.log(data["current"]["wind_mph"]);   
    $(".weather3").html(data["current"]["wind_mph"]);
     
    });
    
$('#weather').mouseover(function(){
    $('#weather2').show();
})
 
 

});


/*
    Get weather API key at
    https://www.apixu.com/signup.aspx
*/