// Wait for the DOM to finish loading before running the game
// Get the button elements

document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("button");
    let yourChoice = document.getElemetnById("your-choice");
    let computerChoice = document.getElementByIde("computer-choice");
    button.addEventListener("click", function () {
        yourChoice = this.getAttribute("data-type");
    });
    if (this.getAttribute("data-type") === "click") {
        runGame(yourChoice);
    }

    // Add event listeners to the buttons
    let rockBtnRef = document.getElementById('rock');
    let paperBtnRef = document.getElementById('paper');
    let scissorsBtnRef = document.getElementById('scissors');
    rockBtnRef.addEventListener('click', ("rock")); {
        console.log('Rock button clicked');
        yourChoice('rock');
    }
    paperBtnRef.addEventListener('click', ("paper")); {
        console.log('Paper button clicked');
        yourChoice('paper');
    }
    scissorsBtnRef.addEventListener('click', ("scissors")); {
        console.log('Scissors button clicked');
        yourChoice('scissors');
    }

    //Your choice image references
    yourChoiceImageRef = document.getElementById('your-choice').getAttribute("src");
    yourChoice = () => {
        let yourChoiceImage = document.createElement("img");
        if (yourChoiceImage === 'rock' || yourChoiceImage === 'paper' || yourChoiceImage === 'scissors') {
            return yourChoiceImage;
        }
        yourChoiceImageRef.appendChild(yourChoiceImage);
    };

    //Computer choice image references
    computerChoiceImageRef = document.getElementById('computer-choice').getAttribute("src");
    computerChoice = () => {
        computerChoiceImage = (computerChoiceImage === 'rock' || computerChoiceImage === 'paper' || computerChoiceImage === 'scissors');
        const randomNumber = Math.floor(Math.random() * 3); // random number between 0 and 2
        switch (randomNumber) {
            case 0:
                return 'rock';
            case 1:
                return 'paper';
            case 2:
                return 'scissors';
        }
    };
    // Add function which determines the winner

    determineWinner = (yourChoice, computerChoice) => {
        if (yourChoice === computerChoice) {
            return 'The game is a tie';
        }
        if (yourChoice === 'rock') {
            if (computerChoice === 'paper') {
                return 'The computer won!';
            } else {
                return 'Congratulation, you won!';
            }
        }
        if (yourChoice === 'paper') {
            if (computerChoice === 'scissors') {
                return 'The computer won!';
            } else {
                return 'Congratulations you won!';
            }
        }
        if (yourChoice === 'scissors') {
            if (computerChoice === 'rock') {
                return 'The computer won!';
            } else {
                return 'Congratulations you won!';
            }
        }
    };

    //Add function which adds points to score area
    addYourPoints = document.getElementById('your-points');
    addComputerPoints = document.getElementById('computer-points');
    addPoints = () => {
        if (youWon) {
            return yourPoints;
        } else {
            return computerPoints;
        }
    };

    console.log(yourChoice);
    console.log(computerChoice);
    console.log(determinewinner(yourChoice, computerChoice));
    runGame();
});