const choiceBtnRef = document.getElementsByClassName("choices-btn");
const yourChoiceBoxRef = document.getElementById("your-choice-image");
const computerChoiceBoxRef = document.getElementById("computer-choice-image");

// Wait for the DOM to finish loading before running the game
// Get the button elements

document.addEventListener("DOMContentLoaded", function () {
    console.log('choiceBtnRef', choiceBtnRef);
    let yourChoice = document.getElementById("your-choice");
    let computerChoice = document.getElementById("computer-choice");
    for (let button of choiceBtnRef) {
        button.addEventListener("click", function () {
            console.log('button', button);
            yourChoice = this.getAttribute("data-type");
            if (yourChoice === "0") {
                console.log('yourChoiceBoxRef', yourChoiceBoxRef.src);
                yourChoiceBoxRef.src = 'assets/images/rock.jpg';
            } else if (yourChoice === "1") {
                console.log('yourChoiceBoxRef', yourChoiceBoxRef.src);
                yourChoiceBoxRef.src = 'assets/images/paper.jpg';
            } else if (yourChoice === "2") {
                console.log('yourChoiceBoxRef', yourChoiceBoxRef.src);
                yourChoiceBoxRef.src = 'assets/images/scissors.jpg';
            }
            /*
            switch (yourChoice) {
                case 0:
                    yourChoiceBoxRef.setAttribute.src('assets/images/rock.jpg');
                    break;
                case 1:
                    yourChoiceBoxRef.setAttribute.src('assets/images/paper.jpg');
                    break;
                case 2:
                    yourChoiceBoxRef.setAttribute.src('assets/images/scissors.jpg');
                    break;
            }
             */
        });
    }

    //Your choice image references
    //yourChoiceBoxRef = document.getElementById('your-choice-image').getAttribute("src");
    yourChoice = () => {
        let yourChoiceImage = document.createElement("img");
        if (yourChoiceImage === 'rock' || yourChoiceImage === 'paper' || yourChoiceImage === 'scissors') {
            return yourChoiceImage;
        }
    };

    //Computer choice image references
    //computerChoiceBoxRef = document.getElementById('computer-choice-image').getAttribute("src");
    computerChoice = () => {
        computerChoiceImage = Math.floor(Math.random() * 3);
        let randomNumber = ["0", "1", "2"];
        switch (randomNumber) {
            case 0:
                console.log(computerChoice);
                break;
            case 1:
                console.log(computerChoice);
                break;
            case 2:
                console.log(computerChoice);
                break;
        }
        if (computerChoice === "0") {
            console.log('computerChoiceBoxRef', computerChoiceBoxRef.src);
            computerChoiceBoxRef.src = 'assets/images/rock.jpg';
        } else if (computerChoice === "1") {
            console.log('computerChoiceBoxRef', computerChoiceBoxRef.src);
            computerChoiceBoxRef.src = 'assets/images/paper.jpg';
        } else if (computerChoice === "2") {
            console.log('computerChoiceBoxRef', computerChoiceBoxRef.src);
            computerChoiceBoxRef.src = 'assets/images/scissors.jpg';
        }
    
    console.log(computerChoice);
    console.log("Work!!!");

    // Add function which determines the winner
    const determineWinner = (yourChoice, computerChoice) => {
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
    console.log(determineWinner);
    console.log("Super works!!!");
    
    //Add function which increase points to score area

    addYourPoints = parseInt(document.getElementById('your-points').innerText);
    addComputerPoints = parseInt(document.getElementById('computer-points').innerText);
    increasePoints = () => {
        if (yourChoice != computerChoice) {
        increment(yourPoints);
        } else {
        increment(computerPoints);
        }
    };
};
});

    //Run game function

    const runGame = (yourChoice) => {
        if (yourChoice === 'rock' || yourChoice === 'paper' || yourChoice === 'scissors') {
            console.log(runGame);
        }
        console.log(yourChoice);
        console.log(computerChoice);
        console.log(determineWinner(yourChoice, computerChoice));
    };