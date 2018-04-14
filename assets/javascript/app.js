//define variables
var correct = correct;
var incorrect = incorrect;
var unanswered = unanswered;
var timer = timer;

//define functions
//check to see if each question has been answered or unanswered
function checkStatus(){
  if ($( "input" ).on( "click", function(){
    $( "type=radio" ).html( $( "input:checked" ).val() + " is checked!" );
}