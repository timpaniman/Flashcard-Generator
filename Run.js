// require external files and packages
var Cards = require("./BasicCard.js");
var inquirer = require("inquirer");

// Initialize global variables
var correctCount = 0;
var incorrectCount = 0;

var questionCounter = 0;
var maxCards = Cards.BasicCardQuestions.front.length;

// front array has questions, back array has answers
// questionCounter runs up to maxCards
var cardQuestion = new Cards.BasicCard(
    Cards.BasicCardQuestions.front[questionCounter], Cards.BasicCardQuestions.back[questionCounter]);

// ======================== Main Rountine =========================

console.log("==========  WELCOME TO FLASHCARD GAME =========");
console.log(" Type  answer to each question below.  ");

start();

// ======================== End of Rountine =========================


// Main execution function
function start() {
    inquirer
        .prompt({
            name: "item",
            type: "input",
            message: cardQuestion.front
        })
        .then(function(answer) {
            // based on their answer, either call correct or incorrect functions
            if (answer.item === cardQuestion.back) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
        });
}

// handle correct answer function
function correctAnswer() {
    correctCount++;
    questionCounter++;

    console.log("==== CORRECT ====");
    console.log('Total Correct Answer Count =' + correctCount);
    console.log('Total In-Correct Answer Count =' + incorrectCount);

    // quit if ran out of cards to ask
    if (questionCounter === maxCards) {
        console.log("============ Ran out of cards.  Bye  ==============");
        process.exit();
    }

    // prepare the next question
    cardQuestion = new Cards.BasicCard(
        Cards.BasicCardQuestions.front[questionCounter], Cards.BasicCardQuestions.back[questionCounter]);

    inquirer
        .prompt({
            name: "continue",
            type: "input",
            message: "Enter 1 to continue, or any other key to stop"
        })
        .then(function(answer) {
            if (answer.continue === '1') {
                start(); // we execute the main function again
            } else {
                console.log("============== Bye ===============");
                process.exit();
            }
        });

}

// handle in correct answer function
function incorrectAnswer() {
    incorrectCount++;
    questionCounter++;
    console.log("==== IN CORRECT ====");
    console.log("The answer is = " + cardQuestion.back);
    console.log('Total Correct Answer Count =' + correctCount);
    console.log('Total In-Correct Answer Count =' + incorrectCount);

    // quit if ran out of cards to ask
    if (questionCounter === maxCards) {
        console.log("============ Ran out of cards.  Bye  ==============");
        process.exit();
    }

    // prepare the next question
    cardQuestion = new Cards.BasicCard(
        Cards.BasicCardQuestions.front[questionCounter], Cards.BasicCardQuestions.back[questionCounter]);

    inquirer
        .prompt({
            name: "continue",
            type: "input",
            message: "Enter 1 to continue, or any other key to stop"
        })
        .then(function(answer) {
            if (answer.continue === '1') {
                start(); // we execute the main function again
            } else {
                console.log("============== Bye ===============");
                process.exit();
            }
        });

}