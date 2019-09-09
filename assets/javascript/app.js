$(document).ready(function () {

    var number = 10;//60 seconds to play the entire game
    var i = -1;//because the starGame function has i++, which brings us to 0, referencing the first array position
    var intervalId;//holds the setInterval so that it can be cleared
    var winner = 0;//keeps count of the number of correct answers
    var loser = 0;//keeps count of the number of incorrect answers
    var questionsLeft;//keeps count of unanswered questions
    var noAnswer;//holds the setTimeout function for seven seconds
    var nextQuestion;//holds the setTimeout function for three seconds
    var questionBank = [//an array of objects (questions with choices and answer)
        {
            question: "What was the name of the dog character in the TV series 'Frasier'?",
            choices: ["Jesse", "Eddie", "Lucky", "Milo"],
            answer: "Eddie"
        },

        {
            question: "What was the name of the dog character in the original 'Poltergeist' film?",
            choices: ["Jaxon", "Buzzbie", "EBuzz", "Buddy"],
            answer: "EBuzz"
        },

        {
            question: "What was the name of the dog character in the movie 'A Dog's Way Home'?",
            choices: ["Bella", "Sadie", "Chloe", "Lola"],
            answer: "Bella"
        },

        {
            question: "What was the name of Doc's dog in 'Back to the Future'?",
            choices: ["Einstein", "Marty", "Tobey", "Beethoven"],
            answer: "Einstein"
        },

        {
            question: "What was the name of Border Collie character in 'Babe'?",
            choices: ["Martha", "Fernanda", "Valda", "Fly"],
            answer: "Fly"
        },

        {
            question: "What was the name of dog character in the 'Little Rascals'?",
            choices: ["Dicky", "Ralph", "Petey", "Porky"],
            answer: "Petey"
        },

        {
            question: "What was the name of male dog character in the '101 Dalmatians'?",
            choices: ["Dingo", "Pongo", "Jimmy", "Slingo"],
            answer: "Pongo"
        },

        {
            question: "What was the name of the dog toy in 'Toy Story'?",
            choices: ["Lenny", "Slinky", "Rex", "Hamm"],
            answer: "Slinky"
        },

        {
            question: "What was the name of the dog character in 'Annie'?",
            choices: ["Pepper", "Punjab", "Sandy", "Duffy"],
            answer: "Sandy"
        },

    ]

    questionsLeft = questionBank.length;//the length of the array of objects (number of questions)

    function threeSeconds() {
        startGame();
    }

    function sevenSeconds() {
            $("#row2").html("&nbsp");
            $("#row3,#row4,#row5").text("");
            $("#row3").text("You failed to give an answer in time.");
            nextQuestion = setTimeout(threeSeconds, 3000);//holds the setTimeout function so it can be cleared; and allows the failure message to be seen for 3 seconds
    }

    function startGame() {
        if (number > 0) {
            i++;
            displayQuestion(i);
            noAnswer = setTimeout (sevenSeconds, 7000);
        }
    }

    function displayQuestion(i) {
        $("#row1").text(questionBank[i].question);
        $("#row2").text(questionBank[i].choices[0]);
        $("#row3").text(questionBank[i].choices[1]);
        $("#row4").text(questionBank[i].choices[2]);
        $("#row5").text(questionBank[i].choices[3]);
    }

    function endGame () {
        clearTimeout(noAnswer);//clears 7 second timer
        clearTimeout(nextQuestion);//clears 3 second timer
        $("#row1").text("Game Over!");
        $("#row2").text("# of correct answers: " + winner);
        $("#row3").text("# of incorrect answers: " + loser);
        $("#row4").text("# of questions unanswered: " + questionsLeft);
        $("#row5").text("Click 'Start Game' to replay");
        number = 60;//sets up for next game
        winner = 0;//sets up for next game
        loser = 0;//sets up for next game
        noAnswer = 0;//sets up for next game
        i = -1;//sets up for next game
        questionsLeft = questionBank.length;//sets up for next game
    }

    $("#startButton").on("click", function () {

        function runTimer() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);//holds the setInterval so that it can be cleared
        }

        function decrement() {
            number--;
            $("#timeRemaining").text("Time Remaining: " + number + " seconds");
            if (number === 0) {
                stop();//clears the interval for the timer
                endGame();//stops the current game and sets up for the next game
            }
        }

        function stop() {
            clearInterval(intervalId);
        }

        runTimer();//starts the timer
        startGame();//starts the game

    });//closing for on.click function for start button

    $("#row2,#row3,#row4,#row5").on("click", function () {

        function displayWinnerMessage() {
            $("#row2").html("&nbsp");//to skip a line
            $("#row3,#row4,#row5").text("");//to clear text
            $("#row3").text("Correct Answer!");
            winner++;
        }

        function displayLoserMessage() {
            $("#row2").html("&nbsp");//to skip a line
            $("#row3,#row4,#row5").text("");//to clear text
            $("#row3").text("Incorrect Answer!");
            $("#row4").append("The correct answer is " + questionBank[i].answer + ".");
            loser++;
        }
        
        //compares the clicked answer to the question's answer and display correct or incorrect message
        if ($(this).text() === questionBank[i].answer) {
            clearTimeout(noAnswer);//stops the 7 seconds countdown to display no response message
            displayWinnerMessage();
            nextQuestion = setTimeout(threeSeconds, 3000);//holds the setTimeout function so it can be cleared
            questionsLeft--;
        } else {
            clearTimeout(noAnswer);//stops the 7 seconds countdown to display no response message
            displayLoserMessage();
            nextQuestion = setTimeout(threeSeconds, 3000);//holds the setTimeout function so it can be cleared
            questionsLeft--;
        };

    });//closing for on.click function for #row2,#row3,#row4,#row5

})//document.ready ending bracket and parenthesis