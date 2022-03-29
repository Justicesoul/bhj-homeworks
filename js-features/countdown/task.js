const timer = document.querySelector('#timer');
const date = new Date();
const hours = 0;
const minutes = 0;
const seconds = 59;

initDate = () => {
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(seconds);
  timer.innerHTML = date.toTimeString().split(' ')[0];
};

timerDecreasing = () => {
  if (
    date.getHours() === 0 &&
    date.getMinutes() === 0 &&
    date.getSeconds() === 0
  ) {
    clearInterval(timerSetting);
    alert('Вы выиграли конкурс!');
  } else {
    const time = date.getTime();
    date.setTime(time - 1000);
    timer.innerHTML = date.toTimeString().split(' ')[0];
  }
};

initDate();
const timerSetting = setInterval(timerDecreasing, 1000);
