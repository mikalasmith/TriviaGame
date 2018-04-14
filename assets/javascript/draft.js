// // define variables
// var correctAnswers;
// var incorrectAnswers;
// var unanswered;  
// var presentTime;

// var questions = [{
//   question: "What is the longest river in the United States?",
//   answers: [" COLORADO RIVER ", " MISSISSIPPI RIVER ", " MISSOURI RIVER ", "RIO GRANDE RIVER"],
//   correctAnswer: 2,
//   fact: "At 2,565 miles (4,130), the Missouri River is the longest river in the United States and drains approximately one sixth of the North American continent. It serves as a tributary of the Mississippi River. The combined Missouri-Mississippi river system is the fourth longest river in the world."
// }, {
//   question: "What state is bordered by Nebraska, Kansas, Oklahoma, New Mexico, Utah, and Wyoming?",
//   answers: ["IDAHO", "MISSOURI", "TEXAS", "COLORADO"],
//   correctAnswer: 3,
//   fact: "Colorado is bordered by Nebraska, Kansas, Oklahoma, New Mexico, Utah, and Wyoming. Colorado means \"colored red\" and is known as the \"Centennial State\"."
// }, {
//   question: "Death Valley is located in what U.S. state?",
//   answers: ["NEVADA", "UTAH", "CALIFORNIA", "TEXAS"],
//   correctAnswer: 2,
//   fact: "Given its name during the 1849 gold rush by emigrants looking to cross it, Death Valley is located in the northern Mojave Desert of southern California. Famous for its brutal heat, on July 10, 1913, it became the location of the hottest temperature ever recorded in the United States (and the second hottest ever recorded in the world) with a scalding temperature of 134°F (56.6°C). The valley usually receives less than 2 inches (5 cm) of rain each year. Ironically, during the late Pleistocene period, Death Valley was submerged beneath a prehistoric lake!"
// }, {
//   question: "What U.S. state boasts the following rivers: the Guadalupe, Trinity, Rio Grande, Brazos, and Colorado?",
//   answers: ["CALIFORNIA", "OKLAHOMA", " TEXAS ", "COLORADO"],
//   correctAnswer: 2,
//   fact: "Texas boasts the Guadalupe, Trinity, Rio Grande, Brazos, and Colorado rivers. It contains many other rivers as well, including the Pecos, Red, Sabine, and San Antonio rivers. Most of these rivers eventually flow into the Gulf of Mexico."
// }, {
//   question: "Which of the following states does NOT border the Great Lakes?",
//   answers: ["LAKE HURON ", "LAKE ERIE", "LAKE SUPERIOR", "LAKE MICHIGAN"],
//   correctAnswer: 3,
//   fact: "Lake Michigan is the only one of the Great Lakes located entirely within the U.S. border. The second largest Great Lake by volume with just under 1,180 cubic miles of water, it reaches its deepest point at about 925 feet."
// },
// {
//   question: "Who was awarded the very first gold record?",
//   answers: ["ELVIS PRESLEY ", "PERRE COMO", "NAT KING COLE", "THE BEATLES"],
//   correctAnswer: 1,
//   fact: "Although there were earlier publicity stunts involving records sprayed with gold lacquer, the actual award recognized today as a Gold Record was first awarded to Perry Como in 1958 for his recording of \"Catch a Falling Star\"."
// }, {
//   question: "What is the real name of the \"Yeti\" that Rachael and Monica fogged in the basement?",
//   answers: ["David Lynn", "Michael", "Richard", "Danny"],
//   correctAnswer: 3,
//   fact: "Danny is the real name of the \"Yeti\" that Rachael and Monica fogged in the basement."
// },
// {
//   question: "In the One With All The Resolutions, what was Ross' resolution?",
//   answers: ["To take more pictures of everyone", "To try something new every day",
//     "To loose 10 pounds", "To stop gossiping"
//   ],
//   correctAnswer: 1,
//   fact: "To try something new every day was Ross' resolution."
// },
// {
//   question: "What band does Monica, Chandler and Ross go to see for Ross' birthday?",
//   answers: ["Van Halen", "Brooks & Dunn", "Hootie & The Blowfish", "Swing Kings"],
//   correctAnswer: 2,
//   fact: " Monica, Chandler and Ross WENT to see Hootie & The Blowfish Monica for Ross' birthday."
// },
// {
//   question: "After kissing Joey's girlfriend Kathy, what does Joey make Chandler do to prove his friendship to him?",
//   answers: ["Kiss his feet", "Sit in a box and think about what their friendship means",
//     "Be his slave", "Cook him breakfast every morning for 5 years"
//   ],
//   correctAnswer: 1,
//   fact: "After kissing Joey's girlfriend Kathy,  Joey make Chandler to Sit in a box and think about what their friendship means."
// }, {
//   question: "What present does Paolo send Rachel from Italy?",
//   answers: ["A pair of shoes", "A dress", "A necklace", "China"],
//   correctAnswer: 0,
//   fact: "Paolo sent a pair of shoes to Rachel from Italy."
// },{
//   question: "What was Rachel wearing when she entered the coffeehouse in the pilot episode?",
//   answers: ["Business suit", "Ski jacket", "Wedding dress", "Bathing suit"],
//   correctAnswer: 2,
//   fact: "Rachel was wearing 'Wedding dress' when she entered the coffeehouse in the pilot episode"
// },{
//   question: "What is the name of the coffeehouse?",
//   answers: ["Coffee Studio", "Starbucks", "Mocha Cafe", "Central Perk"],
//   correctAnswer: 3,
//   fact: "name of the coffeehouse is 'Central Perk'"
// },{
//   question: "Who is the holiday armadillo?",
//   answers: ["Monica", "Ross", "Joey", "Chandler"],
//   correctAnswer:1 ,
//   fact: "'Ross'is the holiday armadillo?"
// },{
//   question: "What season did Ross and Rachel break-up?",
//   answers: ["5", "6", "9", "3"],
//   correctAnswer:3 ,
//   fact: "Ross and Rachel broke-up in season '3'"
// },
// {
//   question: "Ross has 2 kids. What are their names?",
//   answers: ["Dina and Megan", "Greg and Miley", "Emma and Ben", "Julia and Isabella"],
//   correctAnswer:2 ,
//   fact: "Ross has 2 kids named 'Emma and Ben'"
// },
// {
//   question: "Rachel has 2 sisters. Which actress portrayed Jill?",
//   answers: ["Jennifer Aninston", "Christiana Applegate", "Anna Faris", "Reese Witherspoon"],
//   correctAnswer: 3,
//   fact: "'Reese Witherspoon' portrayed Jill"
// },
// {
//   question: "In The One with the Football what were they competing for?",
//   answers: ["Geller Trophy", "Green Cup", "Geller Cup", "Bing Cup"],
//   correctAnswer: 2,
//   fact: "In The One with the Football what were they competing for 'Geller Cup' "
// },
// ];

// for (var i=0; i < questions.length; i++ ) {
//   $("#questions").append("<h2>"+ questions[i].question + "</h2>");
//   for (var j=0; j < questions[i].answers.length; j++) {
//     $("#questions").append("<input type='radio' name='question-" + i +
//     "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
   

//   }
// }
// var currentQ;
// var correctA;
// function checkAnswer() {
//   if ($("input[name=option]:checked").val() == questions[currentQ].correctAnswers) {
//     correctA++;
//   }
// }


// document.getElementById('timer').innerHTML =
//   03 + ":" + 00;
// startTimer();

// function startTimer() {
//   var presentTime = document.getElementById('timer').innerHTML;
//   var timeArray = presentTime.split(/[:]+/);
//   var m = timeArray[0];
//   var s = checkSecond((timeArray[1] - 1));
//   if(s==59){m=m-1}
//   //if(m<0){alert('timer completed')}
  
//   document.getElementById('timer').innerHTML =
//     m + ":" + s;
//   setTimeout(startTimer, 1000);
// }

// function checkSecond(sec) {
//   if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
//   if (sec < 0) {sec = "59"};
//   return sec;
// }

// //functions
// // function checkStatus(){
// //   console.log("hi");
// //   $("#question").on("change",function (){
// //     if ($( 'input[type="radio"]:checked' ).is(":checked")){
// //       var selValue = $('input[type="radio"]:checked').val();
// //       console.log(selValue);
      
      
// //     }
// //   })

//   // })  $("#question").on("change",function (){
//   //   if ($( 'input[type="radio"]:checked' ).is(":checked")){
//   //     var selValue = $('input[type="radio"]:checked').val();
//   //     console.log(selValue);
      
//   //   }

//   // })

//   $.each($('input[type="radio"]:checked' ), function() {
//     console.log("hi");
//     console.log($(this).val() === questions[0].correctAnswer);
//     if ($(this).val() === questions[0].correctAnswer) {
//       game.correct++;
//     }
//     else {
//       game.incorrect++;
//     }

//   });




// // variables
// var correct;
// var incorrect;
// var unanswered;
// var timer;

// //functions
// //make a function that creates the questions
// //check if questions has been answered

// //all quiz questions are put into seperate objects within an array


// //we need to display the questions and their answers on the html page with a forloop.
// for (var i=0; i < questions.length; i++ ) {
//     $("#questions").append("<h2>"+ questions[i].question + "</h2>");
//     for (var j=0; j < questions[i].answers.length; j++) {
//       $("#questions").append("<input type='radio' name='question-" + i +
//       "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]); 
//     }
//   }

//   //check if all of the answers have been selected, answered, and sort them in one 
//   for (var i=0; i < questions.length; i++) {
//    //if ($("questions[i]:checked").is(":checked")) {
//    // console.log("someone has selected an answer");
//     //console.log(questions[i]);
//     var selected = $("input:checked").val();
//     console.log(selected);

//     $( "input" ).on( "click", function() {
//         $( "#log" ).html( $( "input:checked" ).val() + " is checked!" );
//     });
// //    } else {
// //        console.log("no answer selected");
// //        console.log(questions[i]);
// //    }
   

//   }


//   // variables
// var correct;
// var incorrect;
// var unanswered;
// var timer;

// //functions
// //make a function that creates the questions
// //check if questions has been answered

// //all quiz questions are put into seperate objects within an array


// //we need to display the questions and their answers on the html page with a forloop.
// for (var i=0; i < questions.length; i++ ) {
//     $("#questions").append("<h2>"+ questions[i].question + "</h2>");
//     for (var j=0; j < questions[i].answers.length; j++) {
//       $("#questions").append("<input type='radio' name='question-" + i +
//       "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]); 
//     }
//   }

//   //check if all of the answers have been selected, answered, and sort them in one 
//   for (var i=0; i < questions.length; i++) {
//    //if ($("questions[i]:checked").is(":checked")) {
//    // console.log("someone has selected an answer");
//     //console.log(questions[i]);
//     var selected = $("input:checked").val();
//     console.log(selected);

//     $( "input" ).on( "click", function() {
//         $( "#log" ).html( $( "input:checked" ).val() + " is checked!" );
//     });
// //    } else {
// //        console.log("no answer selected");
// //        console.log(questions[i]);
// //    }
   

//   }

