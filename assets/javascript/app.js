const qtnsArr = [
    {
        question: "Who lived at 221B, Baker Street, London?",
        options: ["Gordon Ramsey", "Sherlock Holmes", "Harry Potter", "Margaret Thatcher"],
        correctAnswer: "Sherlock Holmes",
        image: "Baker Street", 
        note: "221B Baker Street is the London address of the fictional detective Sherlock Holmes in Sir Arthur Conan Doyle's novels"
    },
    {
        question: "Who painted The Birth of Venus?",
        options: ["Sandro Botticelli", "Michelangelo Buonarroti", "Leonardo da Vinci", "Salvador Dali"],
        correctAnswer: "Sandro Botticelli",
        image: "Birth of Venus",
        note: "The Birth of Venus is one of the most recognized Renaissance paintings. Along with Botticelli's other famous work, Primavera, The Birth of Venus is displayed in the Uffizi gallery in Florence, Italy"
    },
    {
        question: "Which German city is famous for the perfume it produces?",
        options: ["Munich", "Berlin", "Rudersberg", "Cologne"],
        correctAnswer: "Cologne",
        image: "Cologne",
        note: "Cologne is an ancient city established by the Romans in the 1st century AD. \"Eau de Cologne\" means \"water from Cologne\" in French. "
    }, 
    // {
    //     question: "Which famous novel is based in Atlanta, GA?",
    //     options: ["The Fault in Our Stars by John Green", "Resurrection by Leo Tolstoy", "Animal Farm by George Orwell", "Gone With The Wind by Margaret Mitchell"],
    //     correctAnswer: "Gone With The Wind by Margaret Mitchell"
    // },
    {
        question: "Which architectural masterpiece has the largest brick dome ever built?",
        options: ["Florence Cathedral", "Hagia Sophia", "Pantheon", "Trump Tower"],
        correctAnswer: "Florence Cathedral",
        image: "Duomo di Firenze",
        note: "Florence Cathedral is also known as Duomo di Firenze or Cattedrale di Santa Maria del Fiore. An example of architectural brilliance, it took over a hundred years to build. A special herringbone brick laying technique was used to support the massive weight of its brick dome, design by Filippo Brunelleschi."
    },
    {
        question: "Which church is located in the Vatican?",
        options: ["St Basil's Cathedral", "Westminster Abbey", "St Peter's Basilica", "La Sagrada Familia"],
        correctAnswer: "St Peter's Basilica",
        image: "St Peter's Basilica",
        note: "St Peter's Basilica is located in the Vatican City west of the River Tiber in Rome. The church is so large, the Statue of Liberty could fit inside it."
    },
    {
        question: the creation of adam
        options:
        correctAnswer:
    },
    {
        question: hamlet
        options:
        correctAnswer:
    },
    {
        question: queen Victoria
        options:
        correctAnswer:
    },
    {
        question: primavera
        options:
        correctAnswer:
    },
    {
        question: queen elizabeth i
        options:
        correctAnswer:
    }
    ]

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
