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
        };
        paperBtnRef.addEventListener('click', ("paper")); {
            console.log('Paper button clicked');
            yourChoice(paper);
        };
        scissorsBtnRef.addEventListener('click', ("scissors")); {
            console.log('Scissors button clicked');
            yourChoice(scissors);
        };

        