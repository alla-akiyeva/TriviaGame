const qtnsArr = [
    {
        question: "Who lived at 221B, Baker Street, London?",
        options: ["Gordon Ramsey", "Sherlock Holmes", "Harry Potter", "Margaret Thatcher"],
        correctAnswer: "Sherlock Holmes",
        image: "assets/images/sherlock-2640292_1280.jpg", // Most, if not all images were downloaded from pixabay.com 
        note: "221B Baker Street is the London address of the fictional detective Sherlock Holmes in Sir Arthur Conan Doyle's novels"
    },
    {
        question: "Who painted The Birth of Venus?",
        options: ["Sandro Botticelli", "Michelangelo Buonarroti", "Leonardo da Vinci", "Salvador Dali"],
        correctAnswer: "Sandro Botticelli",
        image: "assets/images/painting-63186_1280.jpg",
        note: "\"The Birth of Venus\" is one of the most recognized Renaissance paintings. Along with Botticelli's other famous work, \"Primavera\", \"The Birth of Venus\" is displayed in the Uffizi gallery in Florence, Italy."
    },
    {
        question: "Which German city is famous for the perfume it produces?",
        options: ["Munich", "Berlin", "Rudersberg", "Cologne"],
        correctAnswer: "Cologne",
        image: "assets/images/dom-1726457_1920.jpg",
        note: "Cologne is an ancient city established by the Romans in the 1st century AD. \"Eau de Cologne\" means \"water from Cologne\" in French. "
    }, 
    {
        question: "Which architectural masterpiece has the largest brick dome ever built?",
        options: ["Florence Cathedral", "Hagia Sophia", "Pantheon", "Trump Tower"],
        correctAnswer: "Florence Cathedral",
        image: "assets/images/italy-4256016_1280.jpg",
        note: "Florence Cathedral is also known as Duomo di Firenze or Cattedrale di Santa Maria del Fiore. An example of architectural brilliance, it took over a hundred years to build. A special herringbone brick laying technique was used to support the massive weight of its brick dome, designed by Filippo Brunelleschi."
    },
    {
        question: "Which church is located in the Vatican?",
        options: ["St Basil's Cathedral", "Westminster Abbey", "St Peter's Basilica", "La Sagrada Familia"],
        correctAnswer: "St Peter's Basilica",
        image: "assets/images/god-2058084_1920.jpg",
        note: "St Peter's Basilica is located in the Vatican City west of the River Tiber in Rome. The church is so large, the Statue of Liberty could fit inside it."
    },
    {
        question: "Which Michelangelo's painting is part of the Sistine Chapel's ceiling?",
        options: ["Mona Lisa", "The Kiss", "The Creation of Adam", "Liberty Leading the People"],
        correctAnswer: "The Creation of Adam",
        image: "assets/images/creation-of-man-1159966_1920.jpg",
        note: "\"The Creation of Adam\" is one of the most famous and replicated religious paintings of all time. An avid student of anatomy, Michelangelo may or may not have intended the outline of God's shroud to resemble the shape of a brain."
    },
    {
        question: "\"Cowards die many times before their deaths; the valiant never taste of death but once.\", \"All the world ‘s a stage, and all the men and women merely players.\" - these are quotes by which great writer?",
        options: ["Fyodor Dostoevsky", "William Shakespeare", "Charles Dickens", "Oscar Wilde"],
        correctAnswer: "William Shakespeare",
        image: "assets/images/william-shakespeare-62936_1280.jpg",
        note: "Widely known as a prolific poet, writer, playwright, Shakespeare was also an actor who performed in many of his own plays."
    },
    {
        question: "Who was the longest-reigning British monarch, second after Elizabeth II?",
        options: ["George V", "Edward VIII", "George VI", "Queen Victoria"],
        correctAnswer: "Queen Victoria",
        image: "assets/images/franz-winterhalter-92248_1920.jpg",
        note: "Victoria became a queen at age 18 and, until recently, was the longest-reigning British monarch. The Victorian era is known by the Industrial Revolution and a great expansion and power of the British Empire."
    },
    {
        question: "Which painting, according to critics, symbolizes the fertility and fruitfulness of the world?",
        options: ["Girl with a Pearl Earing", "The Last Supper", "Primavera (Spring)", "Vitruvian Man"],
        correctAnswer: "Primavera (Spring)",
        image: "assets/images/dim-7-C3BdCCGlbMU-unsplash.jpg",
        note: "It has been proposed that the model for both \"The Birth of Venus\" and \"Primavera\" was Florentine beauty Simonetta Vespucci, who also happened to be Amerigo Vespucci's cousin-in-law."
    },
    {
        question: "Known as the Virgin Queen, which British Monarch defeated the Spanish Armada?",
        options: ["Mary, Queen of Scots", "Queen Elizabeth I", "Queen Elizabeth II", "Queen Victoria"],
        correctAnswer: "Queen Elizabeth I",
        image: "assets/images/queen-62969_1280.jpg",
        note: "Elizabeth also established Protestantism in England, was a deadly rival of Mary Queen of Scots and the last of the monarchs of the House of Tudor."
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
    $("#question").html(`<strong>Time is up! The answer is ${qtnsArr[index].correctAnswer}</strong>`);
    $("#buttons").empty();
    $("#time").empty();
    $("#question").append(`<p>${qtnsArr[index].note}</p>`);
    $("#question").append(`<img src="${qtnsArr[index].image}"></img>`);
    index++;
    noanswer++;
    setTimeout(displayQtn, 12 * 1000);
}

function onClick (text) {
    let answer = qtnsArr[index].correctAnswer;
    if (text === answer) {
        $("#question").html(`<strong>Correct! The answer is ${answer}</strong>`);
        wins++;
    } else {
        $("#question").html(`<strong>Wrong! The answer is ${answer}<strong>`);
        losses++;
    }
    $("#buttons").empty();
    $("#question").append(`<p>${qtnsArr[index].note}</p>`);
    $("#question").append(`<img src="${qtnsArr[index].image}"></img>`);
    index++;
    setTimeout(displayQtn, 12 * 1000);
}

function gameOver () {
    let score = wins / index * 100;
    $("#question").html(`Your Score <br> <h3>${score}%</h3> Correct answers: ${wins} <br> Wrong answers: ${losses} <br> Unanswered questions: ${noanswer}`);
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
