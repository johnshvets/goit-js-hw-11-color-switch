const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

let timerId = null;

refs.startBtn.addEventListener('click', onStartBtnClick);

refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  toggleDisabledBtn(true);
  timerId = setInterval(() => changeBackgroundColor(colors), 1000);
}

function onStopBtnClick() {
  toggleDisabledBtn(false);
  clearInterval(timerId);
}

function toggleDisabledBtn(value) {
  refs.startBtn.disabled = value;
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeBackgroundColor(colors) {
  const colorsLength = colors.length - 1;
  const color = randomIntegerFromInterval(0, colorsLength);

  refs.body.style.backgroundColor = colors[color];
}
