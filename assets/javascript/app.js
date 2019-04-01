var question1 = {
    question: "Who lived at 221B, Baker Street, London?",
    options: ["Gordon Ramsey", "Sherlock Holmes", "Harry Potter", "Margaret Thatcher"],
    correctAnswer: "Sherlock Holmes"
};

var question2 = {
    question: "Who painted The Birth of Venus?",
    options: ["Sandro Botticelli", "Michelangelo Buonarroti", "Leonardo da Vinci", "Salvador Dali"],
    correctAnswer: "Sandro Botticelli"
}

var question3 = {
    question: "Which German city is famous for the perfume it produces?",
    options: ["Munich", "Berlin", "Rudersberg", "Cologne"],
    correctAnswer: "Cologne"
}

var questionsArray = [question1, question2, question3];

function displayNewQuestion () {
    randomQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];
    console.log(`Correct answer: ${randomQuestion.correctAnswer}`);
    $("#question").html(randomQuestion.question);
    $("#buttons").empty();
    for (var i = 0; i < randomQuestion.options.length; i++) {
        $("#buttons").append(`<button>${randomQuestion.options[i]}</button>`);
    }
}

displayNewQuestion ();

$("button").on("click", function () {
    if ($(this).text() == randomQuestion.correctAnswer) {
        alert("Congrats!");
    //  wait a few seconds;
        displayNewQuestion ();
    } 
    else {
        alert("Incorrect");
    //  display correct answer;
    //  wait a few seconds;
        displayNewQuestion ();
    }
});

//timeout function { --> after 20 seconds
//  alert (time is up!);
//  display correct answer
//  wait a few seconds
//  displayNewQuestion ();
//}

//  endGame function
// Final screen: show number of correct answers, incorrect answers, option to restart the game (do not reload the page).