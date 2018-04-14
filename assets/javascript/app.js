//define variables
var correct;
var incorrect;
var unanswered;
var timer;

//define functions
//check to see if each question has been answered or unanswerd  
function checkStatus(){
  if ($( "input" ).on( "click", function()){
    $( "type=radio" ).html( $( "input:checked" ).val() + " is checked!" );
}