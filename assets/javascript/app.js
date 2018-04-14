$( document ).ready(function(){
  
//define variables
var correct;
var incorrect;
var unanswered;
var timer;

//define functions

//make a function to see if all questions have been answered or not; 
function checkStatus(){
  $( "input" ).on( "click", function() {
   var checkQ1 = $("input[name='1']:checked").val();
   console.log(checkQ1);
})
$( "input" ).on( "click", function() {
 var checkQ2 = $("input[name='2']:checked").val();
 console.log(checkQ2);
})
$( "input" ).on( "click", function() {
  var checkQ3 = $("input[name='3']:checked").val();
  console.log(checkQ3);
 })
 $( "input" ).on( "click", function() {
  var checkQ4 = $("input[name='4']:checked").val();
  console.log(checkQ4);
 })
 $( "input" ).on( "click", function() {
  var checkQ5 = $("input[name='5']:checked").val();
  console.log(checkQ5);
 })
 
}
checkStatus();

//check to see if answer is correct or not
  //if correct correct++;
  //else incorrect++;

//









});