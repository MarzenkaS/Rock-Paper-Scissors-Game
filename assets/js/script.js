// button references
const rockBtnRef = document.getElementById('rock');
const paperBtnRef = document.getElementById('paper');
const scissorsBtnRef = document.getElementById('scissors');

//Player choice image references
const playerChoiceImageRef = document.getElementById('player-choice');


// Add event listeners to the buttons
rockBtnRef.addEventListener('click', (rock) => {
    console.log('Rock button clicked');
    PlayerChoice(rock);
});
paperBtnRef.addEventListener('click', (paper) => {
    console.log('Paper button clicked');
});
scissorsBtnRef.addEventListener('click', (scissors) => {
    console.log('Scissors button clicked');
});





function PlayerChoice(choice) {
    let playerChoiceImage = document.createElement("img");
    switch (choice) {
        case rock:
            playerChoiceImage.src = "http://www.google.com/rock.png";
            break;
        case scissors:
            playerChoiceImage.src = "http://www.google.com/scissors.png";
            break;
        case paper:
            playerChoiceImage.src = "http://www.google.com/paper.png";
            break;
        default:
        // code block
    }
    playerChoiceImageRef.appendChild(playerChoiceImage);

};

function ComputerChoice() {
    const Choices = [rock, paper, scissors];
    // random number between 0 and 2
    let random = Math.floor(Math.random() * 3);
    return Choices[random];
}