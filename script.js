const runner = document.querySelector('.runner');

const jump = () => {
  runner.classList.add('jump');

  setTimeout(() => {
    runner.classList.remove('jump');
  }, 500);
}

document.addEventListener('keydown', jump);