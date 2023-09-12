// Wait for the DOM to finish loading before running the game
// Get the button elements

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementById("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
        });

        // Add event listeners to the buttons
        rockBtnRef.addEventListener('click', ("rock")); {
            console.log('Rock button clicked');
            yourChoice(rock);
        }
        paperBtnRef.addEventListener('click', ("paper")); {
            console.log('Paper button clicked');
            yourChoice(paper);
        }
        scissorsBtnRef.addEventListener('click', ("scissors")); {
            console.log('Scissors button clicked');
            yourChoice(scissors);
        }

        // Button references
        const rockBtnRef = document.getElementById('rock');
        const paperBtnRef = document.getElementById('paper');
        const scissorsBtnRef = document.getElementById('scissors');

        //Your choice image references
        let yourChoiceImageRef = document.getElementById('your-choice');
        yourChoice = () => {
            let yourChoiceImage = document.createElement("img");
            if (yourChoiceImage === 'rock' || yourChoiceImage === 'paper' || yourChoiceImage === 'scissors') {
                return yourChoiceImage;
            };
            yourChoiceImageRef.appendChild(yourChoiceImage);
        };

        //Computer choice image references
        computerChoiceImageRef = document.getElementById('computer-choice');
        computerChoice = () => {
            const choice = document.getElementById("button");
            choice === ('rock' || 'paper' || 'scissors');
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
        // Determine the winner

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
            if (userChoice === 'scissors') {
                if (computerChoice === 'rock') {
                    return 'The computer won!';
                } else {
                    return 'Congratulations you won!';
                }
            }
        };