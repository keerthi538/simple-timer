function init() {
  const hourInput = document.querySelector(".timer__inputs-hour");
  const minuteInput = document.querySelector(".timer__inputs-min");
  const secondInput = document.querySelector(".timer__inputs-sec");

  const startBtn = document.querySelector(".control-btns-start");
  const pauseBtn = document.querySelector(".control-btns-pause");
  const resetBtn = document.querySelector(".control-btns-reset");

  let intervalId = null;

  function clearValues() {
    clearInterval(intervalId);
    minuteInput.value = "";
    secondInput.value = "";
    hourInput.value = "";
    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
  }

  function timer() {
    const seconds = secondInput.value || 0;
    const minutes = minuteInput.value || 0;
    const hours = hourInput.value || 0;

    if (seconds == 0 && minutes == 0 && hours == 0) {
      clearValues();
    }

    if (seconds > 0) {
      secondInput.value = seconds == 1 ? "" : seconds - 1;
    } else if (minutes > 0) {
      minuteInput.value = minutes == 1 ? "" : minutes - 1;
      secondInput.value = 59;
    } else if (hours > 0) {
      hourInput.value = hours == 1 ? "" : hours - 1;
      minuteInput.value = 59;
      secondInput.value = 59;
    }
  }

  function startTimer() {
    intervalId = setInterval(timer, 1000);
    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
  }

  function pauseTimer() {
    clearInterval(intervalId);
    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
  }

  function resetTimer() {
    clearValues();
  }

  pauseBtn.style.display = "none";

  startBtn.addEventListener("click", startTimer);
  pauseBtn.addEventListener("click", pauseTimer);
  resetBtn.addEventListener("click", resetTimer);
}

init();
