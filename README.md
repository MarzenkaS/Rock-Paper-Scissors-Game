# Rock, Paper, Scissors Game

This game is one of the most popular game in the world for everyone regardless of age that requires nothing but hands. However, my goal was to create a version of this game for people using different devices like laptops or mobiles. Game has simply rules and shows the scores at the end of page. User play with computer.

![Showing that my game is responsive on different devices](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/responsive.png?raw=true)

## Features

### Existing Features

1. _Main section_

- Main section contains header and instruction.
- At the top of the page, header shows the name of the game with logo.
- Below the name, I posted visible instruction how to start to play and rules of the game.

![Header, instruction and rules](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/instruction.png?raw=true)

2. _Game area_

- Consists of three buttons which are images with click function. Those images are choice options.
  
![Choices](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/choices.buttons.png?raw=true)

1. _Answer area_

- Below choices, are located two images as a placeholder for player and computer choice.

![Placeholders](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/placeholders.for.choices.png?raw=true)
![Choices and placeholders](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/buttons.and.placeholders.png?raw=true)

- When a player clicks an option, he will see his selection accordingly at the bottom left.
- Computer choice is a random selection and the image choice will appear at the bottom right.

![Choices and results](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/buttons.and.results.png?raw=true)

- The winner is announced by the message displayed below. There are three messages:
  
   1- Congratulations you won!
  
   2- Sorry, computer won this time!
   
   3- No one won :)

![Computer won](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/first.messa.png?raw=true)
![Player won](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/second.messa.png?raw=true)
![No one won](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/third.messa.png?raw=true)

1. _Score area_

- I put the scores at the bottom of the page. 
- Scores are updated depending on who won.

![Scores](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/who.won.and.points.png?raw=true)

## Testing

### Validator testing

1. _HTML W3C validator_

- I had a few bugs I will show and describe them in Bugs section below. After I fixed them my HTML code passed the validator.

![HTML validator](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/html.validator.png?raw=true)

1. _CSS W3C validator_

- No errors were found.

![CSS validator](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/css.validation.png?raw=true)

1. _JSHint JavaScript Validator_

- I had problems which I will show and describe in Bugs section below. After fixing my JavaScript code passed the validator:

1- There are 4 functions in JavaScript file.

2- Function with the largest signature take 2 arguments, while the median is 0.5.

3- Largest function has 14 statements in it, while the median is 4.

4- The most complex function has a cyclomatic complexity value of 3 while the median is 3.

![JavaScript validator](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/js.jshint.png?raw=true)

### Lighthouse

- At beginning I had a problem with score performance to get it above 90. It was less then 80. To change that I had to add width and height for all images and compress the size of background image. That fixed a problem.
- But with accessibility was no issue to get high score with 100 out of 100.

- Lighthouse for desktop:

![Desktop](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/lighthouse.desktop.png?raw=true)

- Lighthouse for mobile:

![Mobile](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/lighthouse.mobile.png?raw=true)

### Different browsers

I tested my game in Google Chrome, Microsoft Edge and Mozilla Firefox. Works perfectly in all of those browsers.

### Different screen sizes

- Screen from laptop we can see below.

![Desktop screen](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/main.look.png?raw=true)

- Screen from mobile of course is a different. I decided to put two placeholders inline so when a user plays a game doesn't have to scroll down after clicking an image choice to check result. Player can see at the same time choices, result, message and score.

![Main screen from mobile](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/mobile1.png?raw=true) ![Choices images and result on mobile](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/mobile2.png?raw=true) ![Choices images, result and score on mobile](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/mobile3.png?raw=true)

### Bugs

1- HTML code

- On first image one of my link element didn't have an attribute. So to fix it I added rel attribute.
- I used bold element as a child of span element which is not allowed. So I just deleted bold element.

![problem with link and bold element](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/html.error1.png?raw=true)

- I had unclosed div element. I just went to that div and at the end I added closing tag. By fixing that error also error about body element got fixed.

![Problem with unclosed div element](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/html.error3.png?raw=true)

- I had many trailing slashes on void elements. It was being added by the emmet template in the workspace tools provided by CI and returning everytime. I fixed it by deleting the template and writing it manually.

![Problem with trailing slashes](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/html.error2.png?raw=true)

2- JavaScript code

- I couldn't make function 'computer choice' to work. And that caused other problems. I stuck in my code for a while and I needed some help. And thanks to tutor assistance and my mentor's guidances I was able to fix and finish my code to make my project works.
  
![Problem with computer choice showed in browser](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/js.error1.png?raw=true)

![Problem with computer choice showed in JSHint validator](https://github.com/MarzenkaS/Rock-Paper-Scissors-Game/blob/main/docs/js.error1.jshint.png?raw=true)
  
## Deployment

- The site was deployed to GitHub. 
- In the GitHub repository I went to Settings.
- From settings I went to pages section. 
- From the source section drop-down menu, selected Deploy from a branch. Below I set up Main for branch and I saved it. 
- After that the page was automatically refreshed.

Here you can see live link [Comfy House](https://marzenkas.github.io/Comfy-House-New/)

## Credits

Sources I was using in that project to find solution for problems or to understand the JavaScript topic better are:

1- [Code Institute](https://learn.codeinstitute.net/dashboard) 

2- [W3Schools](https://www.w3schools.com/)

3- [Mozilla Developer](https://developer.mozilla.org/en-US/) 

4- [JSHint.com](https://jshint.com/)

5- Chrome DevTools in Google Chrome browser

6- [Pythontutor.com](https://pythontutor.com/)

6- [Stackoverflow.com](https://stackoverflow.com/)

6- [Codecademy.com](https://www.codecademy.com)

7- [YouTube.com](https://youtube.com)

### Content

1. The idea for the appearance of the game is my own.
2. I used font from [Google Fonts](https://fonts.google.com/)

### Media

1. Background image for home page i took from [freepik.com](https://freepik.com)
2. Images for choices and for placeholder were taken from two websites [istockphoto.com](https://www.istockphoto.com) and [pixabay.com](https://pixabay.com)
3. Logo next to the name of the game is taken from webiste [fontawesome.com](https://fontawesome.com)
4. I needed to compress my background image and for that I used [compress2go.com](https://compress2go.com)