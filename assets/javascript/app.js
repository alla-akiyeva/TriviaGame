

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
let noanswer = 0;
let time = 15;
let index = 0;

function timeUpdate () {
    if (time > 0) {
        time--;
    }
    $("#time").html(`Time Remaining: ${time}`);
}

function displayQtn () {
    time = 15;
    var timeout;
    var interval = setInterval(timeUpdate, 1 * 1000);
    if (index < qtnsArr.length) {
        $("#question").html(qtnsArr[index].question);
        $("#buttons").empty();

        for (var i = 0; i < qtnsArr[index].options.length; i++) {
            let button = qtnsArr[index].options[i];
            $("#buttons").append(`<button class="answers">${button}</button>`);
        };
        console.log("displayQtn", qtnsArr[index].question);
        console.log("displayQtn", qtnsArr[index].correctAnswer);

        timeout = setTimeout(function () {
            clearInterval(interval);
            timeOut();
        }, 15 * 1000);
    } else {
        clearInterval(interval);
        gameOver();
    }
    $("#buttons").off().on("click", ".answers", function () {
        clearTimeout(timeout);
        clearInterval(interval);
        onClick($(this).text());
    });
}

function timeOut () {
    $("#question").html("Time is up!");
    $("#buttons").html(`The answer is ${qtnsArr[index].correctAnswer}`);
    index++;
    noanswer++;
    setTimeout(displayQtn, 4 * 1000);
}

function onClick (text) {
    let answer = qtnsArr[index].correctAnswer;
    if (text === answer) {
        $("#question").html(`Correct! The answer is ${answer}`);
        $("#buttons").empty();
        wins++;
    } else {
        $("#question").html(`Wrong! The answer is ${answer}`);
        $("#buttons").empty();
        losses++;
    }
    index++;
    setTimeout(displayQtn, 4 * 1000);
}

function gameOver () {
    $("#question").html(`Game Over <br> Correct answers: ${wins} <br> Wrong answers: ${losses} <br> Unanswered questions: ${noanswer}`);
    $("#buttons").empty();
    $("#buttons").append(`<button class="myClass">Restart the game</button>`);
    $("#question-div").on("click", ".myClass", function () {
        gameRestart();
    });
};

function gameRestart () {
    wins = 0;
    losses = 0;
    index = 0;
    displayQtn ();
};

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