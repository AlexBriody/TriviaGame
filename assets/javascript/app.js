$(document).ready(function () {

    var number = 60;
    var i = -1;
    var intervalId;
    var winner = 0;
    var loser = 0;
    var clicked = false;
    var questionsLeft;
    var questionBank = [
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

    questionsLeft = questionBank.length;

    function threeSeconds() {
        startGame();
    }

    // function sevenSeconds() {
    //         $("#row3,#row4,#row5").text("");
    //         $("#row2").text("You failed to give an answer in time.");
    //         setTimeout(threeSeconds, 3000);
       
    // }

    function startGame() {
        clicked = false;
        // if (clicked === false && number !== 0) 
        // {
        // setTimeout(sevenSeconds, 7000);
        // };
        if (number > 0) {
            i++;
            displayQuestion(i);
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
        $("#row1").text("Game Over!");
        $("#row2").text("Number of correct answers: " + winner);
        $("#row3").text("Number of incorrect answers: " + loser);
        $("#row4").text("Number of unanswered questions: " + questionsLeft);
        $("#row5").text("");
        number = 60;
        winner = 0;
        loser = 0;
        noAnswer = 0;
        i = -1;
        clicked = false;
        questionsLeft = questionBank.length;
    }

    $("#startButton").on("click", function () {

        function runTimer() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }

        function decrement() {
            number--;

            $("#timeRemaining").text("Time Remaining: " + number + " seconds");

            if (number === 0) {
                stop();
                endGame();
            }
        }

        function stop() {
            clearInterval(intervalId);
        }


        runTimer();
        startGame();


    });//closing for on.click function for start button



    $("#row2,#row3,#row4,#row5").on("click", function () {

        function displayWinnerMessage() {
            $("#row3,#row4,#row5").text("");
            $("#row2").text("Correct Answer!");
            winner++;
        }

        function displayLoserMessage() {
            $("#row3,#row4,#row5").text("");
            $("#row2").text("Incorrect Answer!");
            $("#row3").append("The correct answer is " + questionBank[i].answer + ".");
            loser++;
        }

        
        if ($(this).text() === questionBank[i].answer) {
            displayWinnerMessage();
            setTimeout(threeSeconds, 3000);
            clicked = true;
            questionsLeft--;
        } else {
            displayLoserMessage();
            setTimeout(threeSeconds, 3000);
            clicked = true;
            questionsLeft--;
        };


    });//closing for on.click function for #row2,#row3,#row4,#row5











})//document.ready ending bracket and parenthesis