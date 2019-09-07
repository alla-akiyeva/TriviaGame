

const qtnsArr = [
    {
        question: "Who lived at 221B, Baker Street, London?",
        options: ["Gordon Ramsey", "Sherlock Holmes", "Harry Potter", "Margaret Thatcher"],
        correctAnswer: "Sherlock Holmes"
    },
    {
        question: "Who painted The Birth of Venus?",
        options: ["Sandro Botticelli", "Michelangelo Buonarroti", "Leonardo da Vinci", "Salvador Dali"],
        correctAnswer: "Sandro Botticelli"
    },
    {
        question: "Which German city is famous for the perfume it produces?",
        options: ["Munich", "Berlin", "Rudersberg", "Cologne"],
        correctAnswer: "Cologne"
    }, 
    {
        question: "Which famous novel is based in Atlanta, GA?",
        options: ["The Fault in Our Stars by John Green", "Resurrection by Leo Tolstoy", "Animal Farm by George Orwell", "Gone With The Wind by Margaret Mitchell"],
        correctAnswer: "Gone With The Wind by Margaret Mitchell"
    }
];

// You'll create a trivia game that shows only one question until the player answers it or their time runs out.
// Display first question in the array (jQuery selector)
// Ten-second timer. Once ten seconds are up, the questions will update. 
// If player did not select anything, it's considered a loss. 
// If player selected the wrong answer, it's considered a loss. 
// If player selected the right answer, it's considered a win. correctAnswers++
// Once player went through all questions, the game is over. Option to restart the quiz is displayed. 
// Wins and losses are displayed (or total percentage).
// Game restart: all variables are set to zero. 

let wins = 0;
let losses = 0;
const time = 0;
let index = 0;

// function condition () {
//     if (index < qtnsArr.length) {
//         displayQtn();
//     } else {
//         gameOver();
//     }
// }

function displayQtn () {
    if (index < qtnsArr.length) {
        $("#question").html(qtnsArr[index].question);
        $("#buttons").empty();
        for (var i = 0; i < qtnsArr[index].options.length; i++) {
            $("#buttons").append(`<button>${qtnsArr[index].options[i]}</button>`);
        };
        setTimeout(timeOut, 5 * 1000);
    } else {
        gameOver();
    }
}

function timeOut () {
    $("#question").html("Time is up!");
    $("#buttons").html(`The correct answer is ${qtnsArr[index].correctAnswer}`);
    index++;
    setTimeout(displayQtn, 3 * 1000);
}

function gameOver () {
    $("#question").html("Game Over");
    $("#buttons").empty();
};

function gameRestart () {

};

$(document).on("click", "button", function () {
    clearTimeout();
    if ($(this).text === qtnsArr[index].correctAnswer) {
        $("#questions").html(`That is correct! The right answer is ${qtnsArr[index].correctAnswer}`);
        $("#buttons").empty();
        wins++;
    } else {
        $("#questions").html(`That is correct! The right answer is ${qtnsArr[index].correctAnswer}`);
        $("#buttons").empty();
        wins++;
    }
})

$(document).ready(displayQtn);

// function timeUpdate () {
//     time++;
//     $("#time").html(`Time Remaining: ${time}`);
// }

// function displayNewQuestion () {
//     randomQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];
//     console.log(`Correct answer: ${randomQuestion.correctAnswer}`);
//     $("#question").html(randomQuestion.question);
//     $("#buttons").empty();
//     for (var i = 0; i < randomQuestion.options.length; i++) {
//         $("#buttons").append(`<button>${randomQuestion.options[i]}</button>`);
//     }
//     displayedQuestions++;
//     setInterval(timeUpdate, 1 * 1000);
    
// }

// displayNewQuestion ();

// setTimeout (() => {
//     console.log ("Time is up!");
//     console.log(`The correct answer is ${randomQuestion.correctAnswer}`);
//     incorrectAnswers++;
//     setTimeout (() => {displayNewQuestion ();}, 3 * 1000)
// }, 15 * 1000)

// $(document).on("click", "button", function () {
//   clearTimeout();
//     if ($(this).text() == randomQuestion.correctAnswer) {
//         console.log("That is correct! Congrats!");
//         wins++;
//         clearTimeout();
//         setTimeout (() => {displayNewQuestion ();}, 3 * 1000)
//     } 
//     else {
//         console.log("Incorrect");
//         console.log(`The correct answer is ${randomQuestion.correctAnswer}`);
//         losses++;
//         setTimeout (() => {displayNewQuestion ();}, 3 * 1000)
//     }
// });

//  endGame function
// while displayedQuestions < 10, run game function
// if (displayedQuestions ===10), show message box confirm {}
// if (confirm(
//     `
//         Total correct answers: ${correctAnswers}
//         Total incorrect answers: ${incorrectAnswers}
//         Would you like to restart the game?
//     `
// )) {
//     displayNewQuestion ();
//     correctAnswers = 0;
//     incorrectAnswers = 0;
// }




// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.


// The scenario is similar for wrong answers and time-outs.

// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.



// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
