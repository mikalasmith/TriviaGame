$("#start").on("click",function(){
  game.start();
});

$(document).on('click', '#end', function(){
  game.done();
})

var questions = [
  {
    question:"How are Tommy and Angelica related to each other?",
    answers: ["They're cousins", "They're siblings", "They're step-siblings", "Tommy is Angelica's newphew"],
    correctAnswer:"They're cousins"
  }, 
  {
    question:"What show did Susie's dad create?",
    answers: ["The Gummie Bears", "The Dummie Bears", "Chocolate-tastic!", "The Rugrats"],
    correctAnswer:"The Dummie Bears"
  }, 
  {
    question:"What was the name of Cynthia's doll?",
    answers: ["Jenny", "Lisa", "Cynthia", "Christina"],
    correctAnswer:"Cynthia"
  }, 
  {
    question:"What is Tommy's last name?",
    answers: ["Pickles", "Beans", "Dollars", "Smith"],
    correctAnswer:"Pickles"
  }, 
  {
    question:"What are the names of the twins in the series?",
    answers: ["Stacy and David", "Bill and Lil", "Phil and Lil", "Sam and Pam"],
    correctAnswer:"Phil and Lil"
  }
];

var game = {
  correct: 0,
  incorrect: 0, 
  counter: 120, 
  countdown: function(){
    game.counter--;
    $('#counter').html(game.counter);
    if(game.counter == 0){
      console.log('Time is up!');
      game.done();
    }
  },
  
  start: function (){
    timer = setInterval(game.countdown,1000);
    $("#subwrapper").html('<h2> Time Remaining: <span id="counter">120</span> Seconds</h2>');
   //$("#start").on("click",function(){
      $("#start").remove();
      for (var i=0; i < questions.length; i++){
        $("#subwrapper").append("<h2>" + questions[i].question + "</h2>")
        for (var j=0; j < questions[i].answers.length; j++){
          $("#subwrapper").append("  <input type='radio' name='question-"+ i + "' value= '" + questions[i].answers[j]+"'>"+questions[i].answers[j] )
        }
      }
      $('#subwrapper').append('<br> <button id="end">DONE</button>');
    //})

  },
  done: function(){
    console.log("DONE");
    $.each($('input[name="question-0"]:checked'),function(){
      if ($(this).val()==questions[0].correctAnswer){
      
        game.correct++;
        console.log(game.correct)
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-1"]:checked'),function(){
      if ($(this).val()==questions[1].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-2"]:checked'),function(){
      if ($(this).val()==questions[2].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++
      } 
    });
    $.each($('input[name="question-3"]:checked'),function(){
      if ($(this).val()==questions[3].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-4"]:checked'),function(){
      if ($(this).val()==questions[4].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    this.result();
  },
  result: function(){
    console.log("RESULTS");
    clearInterval(timer);
    $('<h2> #subwrapper </h2>').remove();
    $('#subwrapper').html("<h2>All done!</h2>");
    $('#subwrapper').append("<h3> Correct Answers: " + this.correct+"</h3>");
    $('#subwrapper').append("<h3> Incorrect Answers: " + this.incorrect+"</h3>");
    $('#subwrapper').append("<h3> Unanswered: "+(questions.length-(this.incorrect + this.correct))+"</h3>");
  }
}