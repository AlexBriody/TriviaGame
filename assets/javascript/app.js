$(document).ready(function () {

    var number = 30;
    var i = -1;
    var intervalId;
    var gameStarted = false;
    var questionBank = [
        {
            question: "What was the name of the dog character in the original 'Poltergeist' film?",
            choices: ["Jaxon", "Buzzbie", "EBuzz", "Buddy"],
            answer: "EBuzz"
        },

        {
            question: "What was the name of the dog character in the TV series 'Frasier'?",
            choices: ["Jesse", "Eddie", "Lucky", "Milo"],
            answer: "Eddie"
        },

        {
            question: "What was the name of the dog character in the movie 'A Dog's Way Home'?",
            choices: ["Bella", "Sadie", "Chloe", "Lola"],
            answer: "Bella"
        },
    ]

    $("#startButton").on("click", function () {

        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
            gameStarted = true;
        }

        function decrement() {
            number--;

            $("#timeRemaining").text("Time Remaining: " + number + " seconds");

            if (number === 0) {
                stop();
            }
        }

        function stop() {
            clearInterval(intervalId);
            gameStarted = false;
        }

        function displayQuestion(i) {
            $("#row1").text(questionBank[i].question);
            $("#row2").text(questionBank[i].choices[0]);
            $("#row3").text(questionBank[i].choices[1]);
            $("#row4").text(questionBank[i].choices[2]);
            $("#row5").text(questionBank[i].choices[3]);
        }//function displayQuestion bracket

        run();

        if (gameStarted === true && number > 0) {
            i++;
            displayQuestion(i);
        }

    });//closing for on.click function for start button

    $("#row2,#row3,#row4,#row5").on("click", function () {
        
        function displayWinnerMessage() {
            $("#row3,#row4,#row5").text("");
            $("#row2").text("Correct Answer!");
        }

        function displayLoserMessage() {
            $("#row3,#row4,#row5").text("");
            $("#row2").text("Incorrect Answer!");
            $("#row3").append("The correct answer is " + questionBank[i].answer + ".");
        }

        if($(this).text() === questionBank[i].answer) {
            displayWinnerMessage ();
        }else {displayLoserMessage ()};


    });//closing for on.click function for #row2,#row3,#row4,#row5











})//document.ready ending bracket and parenthesis