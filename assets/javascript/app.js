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

$(document).on("click", "button", function () {
    if ($(this).text() == randomQuestion.correctAnswer) {
        alert("That is correct! Congrats!");
        correctAnswers++;
        setTimeout (() => {displayNewQuestion ();}, 3 * 1000)
    } 
    else {
        alert("Incorrect");
        alert(`The correct answer is ${randomQuestion.correctAnswer}`);
        incorrectAnswers++;
        setTimeout (() => {displayNewQuestion ();}, 3 * 1000)
    }
});

setTimeout (() => {
    alert ("Time is up!");
    alert(`The correct answer is ${randomQuestion.correctAnswer}`);
    incorrectAnswers++;
    setTimeout (() => {displayNewQuestion ();}, 3 * 1000)
}, 15 * 1000)

//  endGame function
// Condition here: after a certain number of questions have been displayed:
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
