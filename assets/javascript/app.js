var question1 = {
    question: "Who lived at 221B, Baker Street, London?",
    options: ["Gordon Ramsey", "Sherlock Holmes", "Harry Potter", "Susan Boyle"],
    correctAnswer: "Sherlock Holmes"
};

var question2 = {
    question: "Who painted The Birth of Venus?",
    options: ["Sandro Botticelli, Michelangelo Buonarroti, Leonardo da Vinci, Salvador Dali"],
    correctAnswer: "Sandro Botticelli"
}

var question3 = {
    question: "Which German city is famous for the perfume it produces?",
    options: ["Munich", "Berlin", "Rudersberg", "Cologne"],
    correctAnswer: "Cologne"
}

var questionsArray = [question1, question2, question3];
var randomQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];

$("#question").html(randomQuestion.question);
$("button").html(randomQuestion.options); //loop through options //add string manipulation
for (var i = 0; i < randomQuestion.options.length; i++) {
    $("#buttons").append(`<button>${randomQuestion.options[i]}</button>`);
}

// on click event listener function {
//   if button with the attribute correctAnswer is pressed {
//      alert (congrats!)
//      wait a few seconds
//      display next question
// } else {
//     alert (time is up!);
//     display correct answer
//     wait a few seconds
//     display next question
//   }
//}

//timeout function { --> after 20 seconds
//  alert (time is up!);
//  display correct answer
//  wait a few seconds
//  display next question
//}

//  endGame function
// Final screen: show number of correct answers, incorrect answers, option to restart the game (do not reload the page).