$(document).ready(function() {
    var wordcounter = 0;
    var quotecounter = 0;
    //it takes whatever is in the zero box of words. This is the first word in the list. Computers start at 0.
    
    setInterval(function() {
    $("#word-target").html(words[wordcounter]);
   
    $("#quote-target").html( quotes[quotecounter]["quote"]);
    // this is json inside of an array. you call the json and then the array.
    $("#source-target").html( quotes[quotecounter]["source"]);
    $("#year-target").html( quotes[quotecounter]["year"]);
      
      
            wordcounter++;
            quotecounter++;
        if (wordcounter === words.length) {
            wordcounter = 0;
        }
        if (quotecounter === quotes.length) {
            quotecounter = 0;
        }

//this is to count the values of words to make it bump up by one.
    }, 1000);

$("#quote-target").html(singleQuote["quote"]);
$("#source-target").html(singleQuote["source"]);
$("#year-target").html(singleQuote["year"]);

});