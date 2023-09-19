// General reference to DOM elements. Getting the button elements and points reference.
const choiceBtnRef = document.getElementsByClassName("choices-btn");
const yourChoiceBoxRef = document.getElementById("your-choice-image");
const computerChoiceBoxRef = document.getElementById("computer-choice-image");
const yourPointsRef = document.getElementById('your-points');
const computerPointsRef = document.getElementById('computer-points');

/* This function is called when the DOM is loaded. 
*  Variable choices has 3 values.
*/
document.addEventListener("DOMContentLoaded", function () {

    const choices = ["rock", "paper", "scissors"];

    /* Input player and computer choice output string. 
    *  Variable winMap shows which value beats which.
    *  Function compares two answers from player and computer and gives the answer in return.
    */
    const determineWinner = (yourChoice, computerChoice) => {
        if (yourChoice === computerChoice) return 'The game is a tie';

        const winMap = {
            'rock': 'paper',
            'paper': 'scissors',
            'scissors': 'rock'
        };
        return (winMap[yourChoice] === computerChoice) ? 'The computer won!' : 'Congratulations you won!';
    };

    // Function increases points for player if wins or otherwise for the computer.

    const increasePoints = (winner) => {
        if (winner === "player") {
            yourPointsRef.innerText = parseInt(yourPointsRef.innerText) + 1;
        } else if (winner === "computer") {
            computerPointsRef.innerText = parseInt(computerPointsRef.innerText) + 1;
        }
    };

    /* Loops going through each button. 
    *  Adds event listener.
    */
    for (let button of choiceBtnRef) {
        button.addEventListener("click", function () {

            // Accessing player choice by data-type and computer choice by random method to get random choice.
            const yourChoiceValue = this.getAttribute("data-type");
            const computerChoiceValue = Math.floor(Math.random() * 3).toString();

            // Updates image src. 
            yourChoiceBoxRef.src = `assets/images/${choices[yourChoiceValue]}.jpg`;
            computerChoiceBoxRef.src = `assets/images/${choices[computerChoiceValue]}.jpg`;

            // Stores player and computer choice as string.
            const yourChoice = choices[yourChoiceValue];
            const computerChoice = choices[computerChoiceValue];

            /* Triggers determineWinner function and stores result as string.
            *  String informs who is a winner.
            */
            const winnerMessage = determineWinner(yourChoice, computerChoice);
            console.log(winnerMessage);

            if (winnerMessage === 'The game is a tie') {
                document.getElementById("text").innerText = "No one won :)";
            } else if (winnerMessage === 'Congratulations you won!') {
                document.getElementById("text").innerText = "Congratulations you won!";
                increasePoints("player");
            } else {
                document.getElementById("text").innerText = "Sorry, computer won this time!";
                increasePoints("computer");
            }
        });
    }
});