// 'use strict';

// // const x= function(){
// //     console.log(23);
// // }

// // document.querySelector('.check').addEventListener('click',
// // function(){
// //     console.log(document.querySelector('.guess').value);
// // });
// // document.querySelector('.check').
// // addEventListener('mouseout',function(){
// //     console.log(document.querySelector('.guess').value);
// //    document.querySelector('.message').textContent='correct answer'
// // });

// const secrtNumber = Math.trunc(Math.random()*20);
// let score= 20;
// document.querySelector('.check').
// addEventListener('click',function(){
//     const guess =Number(document.querySelector('.guess').value);
   
//     if(!guess){
//    document.querySelector('.message').textContent = 'Write number'
//     }else if(guess === secrtNumber){
//         document.querySelector('.message').textContent = 'Correct Answer'
//         score++;
//         document.querySelector('.score').textContent = `${score}`
//         document.querySelector('.number').textContent = secrtNumber;
//         document.querySelector('body').style.backgroundColor = '#60b347';
//     }else if(guess > secrtNumber){
//         document.querySelector('.message').textContent = 'Your number is too  high',
//         score--;
//         document.querySelector('.score').textContent = `${score}`
//     }else if(guess < secrtNumber){
//         document.querySelector('.message').textContent = 'Your number is too  low'
//         score--;
//         document.querySelector('.score').textContent = `${score}`
//     }
// });

// // document.querySelector()


// document.querySelector('.again').addEventListener('click', function () {
//     score = 20;
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
  
//     // document.querySelector('.message').textContent = 'Start guessing...';
//     displayMessage('Start guessing...');
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.guess').value = '';
  
//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').style.width = '15rem';
//   });









'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔️ No number!');

  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});