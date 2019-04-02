
// Set a countdown timer
// Get rid of alerts and assign html divs instead

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
var correctAnswers = 0;
var incorrectAnswers = 0;
var time = 0;
var j = 0; // Variable used to loop through questionsArray

// Creating a function to display remaining time.
function timeUpdate () {
    time++;
    $("#time").html(`Time Remaining: ${time}`);
}

function displayNewQuestion () {
    time = 0;
    currentQuestion = questionsArray[j];
    $("#question").html(currentQuestion.question);
    j++;
    $("#buttons").empty();
    for (var i = 0; i < currentQuestion.options.length; i++) {
        $("#buttons").append(`<button>${currentQuestion.options[i]}</button>`);
    }
    setInterval(timeUpdate, 1000);
}

setTimeout (() => {
    alert ("Time is up!");
    alert(`The correct answer is ${randomQuestion.correctAnswer}`);
    incorrectAnswers++;
    setTimeout (displayNewQuestion, 3000)
}, 15 * 1000)

// setTimeout (() => {
//     console.log("Time is up!");
//     console.log(`The correct answer is ${currentQuestion.correctAnswer}`);
//     incorrectAnswers++;
//     setTimeout (() => {
//         displayNewQuestion ();
//     }, 3 * 1000)
// }, 15 * 1000)

while (j < questionsArray.length) {
    displayNewQuestion ();
    setTimeout ();
}

function endGame () {
    if (confirm(
        `
            Total correct answers: ${correctAnswers}
            Total incorrect answers: ${incorrectAnswers}
            Would you like to restart the game?
        `
    )) {
        displayNewQuestion ();
        correctAnswers = 0;
        incorrectAnswers = 0;
    }
}

$(document).on("click", "button", function () {
    if ($(this).text() == currentQuestion.correctAnswer) {
        console.log("That is correct! Congrats!");
        correctAnswers++;
        clearTimeout();
        setTimeout (() => {displayNewQuestion ();}, 3 * 1000)
    } 
    else {
        console.log("Incorrect");
        console.log(`The correct answer is ${currentQuestion.correctAnswer}`);
        incorrectAnswers++;
        setTimeout (() => {displayNewQuestion ();}, 3 * 1000)
    }
}); 
