// Creating a random number
// Math.floor rounds up the created number
let rndNumber = Math.floor(Math.random()* 100);
console.log(rndNumber)

// Assigning variables
const guessNumber = document.querySelector('.guessNumber');
const guessBtn = document.querySelector('.guessBtn');
const attempts= document.querySelector('.attempts');
const result = document.querySelector('.result');
const moreOrLess = document.querySelector('.moreOrLess');

// Button to create a new game
// This will apply later
let newGameBtn;
let attemptCount = 1;

// Click the button and run the function
guessBtn.addEventListener('click', checkNumber);

// Run fuction
function checkNumber() {

  // From this moment, the whole input values will be created into a numbers
  // By Number()
  const inputNumber = Number(guessNumber.value);

  // In case the first attempt
  if (attemptCount === 1) {
    attempts.textContent = 'Previous tries: ';
  }
  // All number will be written down, one by one
  attempts.textContent += inputNumber + ' ';

  // In case the victory
  if (inputNumber === rndNumber) {
    result.textContent = `Here's the winner! Congratulations!`;
    result.style.color = 'white';
    result.style.backgroundColor = 'purple';
    result.style.fontSize = '35px';
    setGameOver();
    // In case you waste all attempts
  } else if (attemptCount === 10) {
    result.textContent = `!!! It's over! Shall you play again? !!!`;
    result.style.color = 'tomato';
    result.style.backgroundColor = 'black';
    result.style.fontSize = '25px';
    setGameOver();
    // In case if you made a mistake, and still have other attempts
  } else {
    result.textContent = `It was WRONG! You have the next attempt.`;
    result.style.color = 'white';
    result.style.backgroundColor = 'orange';
    result.style.fontSize = '20px';
    if (inputNumber < rndNumber) {
      moreOrLess.textContent = 'You had better attempt a higher number.'
    } else if (inputNumber > rndNumber) {
      moreOrLess.textContent = 'You had better attempt a lower number.'
    }
  }

  // Input value should stay empty and focused
  guessNumber.value = '';
  guessNumber.focus();
  // Attempts will be summing one by one
  attemptCount++;
}

// Setting conditions in case the won or the loss
function setGameOver() {
  guessNumber.disabled = true;
  guessBtn.disabled = true;
  moreOrLess.textContent = '';

  // The button to create a new game
  // Created into JS
  newGameBtn = document.createElement('button');
  newGameBtn.textContent = 'Start new game';
  newGameBtn.style.cursor = 'pointer';
  document.body.appendChild(newGameBtn);

  // Running the next function and self-destruction
  newGameBtn.addEventListener('click', () => {
  setNewGame();
  newGameBtn.parentNode.removeChild(newGameBtn);
  })
}

// Setting conditions to create a new game
function setNewGame() {

  // Returning access to the fields
  guessNumber.disabled = false;
  guessBtn.disabled = false;

  // Data reset
  guessNumber.value = '';
  guessNumber.focus();
  attemptCount = 1;

  // Cleaning all fields
  let resultBox = document.querySelectorAll('.resultBox p');
  for (let para of resultBox) {
    para.textContent = '';
  }

  // Recreating a new random number
  rndNumber = Math.floor(Math.random()* 100)+ 1;
}