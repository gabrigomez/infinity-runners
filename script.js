const runner = document.querySelector('.runner');
const barrier = document.querySelector('.barrier');
const city = document.querySelector('.city');
const gameOver = document.querySelector('.game-over');

const jump = () => {
  runner.classList.add('jump');

  setTimeout(() => {
    runner.classList.remove('jump');
  }, 500);
};

const loop = setInterval(() => {

  const barrierPosition = barrier.offsetLeft;
  const runnerPosition = +window.getComputedStyle(runner).bottom.replace('px', '');

  
  if(barrierPosition <= 120 && barrierPosition > 0 && runnerPosition <= 100 ) {
    city.style.animation = 'none';
    city.classList.remove('city');
    city.classList.add('city-over');
    gameOver.style.opacity = '1';

    
    runner.src = './assets/dead.gif';
    runner.style.marginLeft = '35px';
    runner.style.bottom = '-70px';
    runner.style.animation = 'none';

    barrier.style.animation = 'none';
    barrier.style.left = `${barrierPosition}px`;

    clearInterval(loop);
  }
}, 10);

document.addEventListener('keydown', jump);