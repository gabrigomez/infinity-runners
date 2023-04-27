const runner = document.querySelector('.runner');
const barrier = document.querySelector('.barrier');

const jump = () => {
  runner.classList.add('jump');

  setTimeout(() => {
    runner.classList.remove('jump');
  }, 500);
};

const loop = setInterval(() => {

  const barrierPosition = barrier.offsetLeft;
  const runnerPosition = +window.getComputedStyle(runner).bottom.replace('px', '');

  
  if(barrierPosition <= 140 && barrierPosition > 0 && runnerPosition <= 170 ) {

    barrier.style.animation = 'none'
    barrier.style.left = `${barrierPosition}px`
  }
}, 10)

document.addEventListener('keydown', jump);