'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Guess'
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let number = Math.trunc(Math.random()*10*2)+1;


let count = 20;

let highscore = 0;

let audio = new Audio("success-fanfare-trumpets-6185.mp3");



document.querySelector('.check').addEventListener('click', function () {

  const guess = Number(document.querySelector('.guess').value);

  //When there is no number
  if (!guess) console.log('⛔ No data found');
   
  //When the guess is right  
  else if (guess === number) {

    if (count > highscore) {
      highscore = count;

      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('.message').textContent = '🎉 Correct Guess';

    document.querySelector('.number').textContent = number;

    // count = 20;
    // document.querySelector('.score').textContent = count;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    audio.play();

    document.querySelector("#my-canvas").style.visibility = 'visible';

    document.querySelector('body').addEventListener('mouseup', function () {
      document.querySelector("#my-canvas").style.visibility = 'hidden';
    })
  }
    
  //When the guess is too low  
  else if (guess < number) {
    document.querySelector('.message').textContent = '📉Too low';
    count--;
    if (count < 1) {
      document.querySelector('.message').textContent = 'You loss the game ⏰'
      document.querySelector('.score').textContent = 0;
    }
    else document.querySelector('.score').textContent = count;
  }
    
  //When the guess is too high  
  else if (guess > number) {
    document.querySelector('.message').textContent = '📈Too high';
    count--;
    if (count < 1) {
      document.querySelector('.message').textContent = 'You loss the game ⏰'
      document.querySelector('.score').textContent = 0;
    }
    else document.querySelector('.score').textContent = count;
  }
})

  document.querySelector('.again').addEventListener('click', function () {
    
    number = Math.trunc(Math.random() * 10 * 2) + 1;
    
    count = 20;

    document.querySelector('.message').textContent = 'Start guessing...'

    document.querySelector('.score').textContent = 20;

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.guess').value = null;

    document.querySelector('.number').textContent = '?'
    
  })