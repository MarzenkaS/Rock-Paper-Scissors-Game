const choiceBtnRef = document.getElementsByClassName("choices-btn");
const yourChoiceBoxRef = document.getElementById("your-choice-image");
const computerChoiceBoxRef = document.getElementById("computer-choice-image");

document.addEventListener("DOMContentLoaded", function () {

    // Mapping for choice values to images
    const choiceImageMap = {
        "0": 'assets/images/rock.jpg',
        "1": 'assets/images/paper.jpg',
        "2": 'assets/images/scissors.jpg'
    };

    const determineWinner = (yourChoice, computerChoice) => {
        if (yourChoice === computerChoice) return 'The game is a tie';

        const winMap = {
            'rock': 'paper',
            'paper': 'scissors',
            'scissors': 'rock'
        };

        return (winMap[yourChoice] === computerChoice) ? 'The computer won!' : 'Congratulations you won!';
    };

    const increasePoints = (winner) => {
        const yourPointsRef = document.getElementById('your-points');
        const computerPointsRef = document.getElementById('computer-points');
        if (winner === "player") {
            yourPointsRef.innerText = parseInt(yourPointsRef.innerText) + 1;
        } else if (winner === "computer") {
            computerPointsRef.innerText = parseInt(computerPointsRef.innerText) + 1;
        }
    };

    for (let button of choiceBtnRef) {
        button.addEventListener("click", function () {
            const yourChoiceValue = this.getAttribute("data-type");
            const computerChoiceValue = Math.floor(Math.random() * 3).toString();

            yourChoiceBoxRef.src = choiceImageMap[yourChoiceValue];
            computerChoiceBoxRef.src = choiceImageMap[computerChoiceValue];

            const yourChoice = Object.keys(choiceImageMap).find(key => choiceImageMap[key] === yourChoiceBoxRef.src).split('/')[2].split('.')[0];
            const computerChoice = Object.keys(choiceImageMap).find(key => choiceImageMap[key] === computerChoiceBoxRef.src).split('/')[2].split('.')[0];

            const winnerMessage = determineWinner(yourChoice, computerChoice);
            console.log(winnerMessage);

            if (winnerMessage === 'The game is a tie') {
                // Do nothing if it's a tie.
            } else if (winnerMessage === 'Congratulations you won!') {
                increasePoints("player");
            } else {
                increasePoints("computer");
            }
        });
    }
});
