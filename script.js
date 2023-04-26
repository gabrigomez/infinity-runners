const runner = document.querySelector('.runner');
console.log(runner)

const jump = () => {
  runner.classList.add('jump');

  setTimeout(() => {
    runner.classList.remove('jump');
  }, 500);
}

document.addEventListener('keydown', jump);