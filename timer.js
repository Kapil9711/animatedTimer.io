class Timer {
  constructor(timerInput, startButton, pauseButton, callBacks) {
    this.timerInput = timerInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    if (callBacks) {
      this.onStart = callBacks.onStart;
      this.onPause = callBacks.onPause;
      this.onTick = callBacks.onTick;
    }
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    this.timeRemaining = parseFloat(this.timerInput.value);
    this.btnToggleOn();
    this.onStart(this.timeRemaining);
    this.tick();
    this.interval = setInterval(this.tick, 10);
  };
  tick = () => {
    if (this.timeRemaining >= 0.01) {
      this.timerInput.value = Math.abs((this.timeRemaining -= 0.01)).toFixed(2);
      this.onTick(this.timeRemaining);
    } else this.pause();
  };

  pause = () => {
    this.btnToggleOf();
    this.onPause();
    clearInterval(this.interval);
  };

  btnToggleOn = () => {
    this.startButton.disabled = true;
    this.startButton.classList.add("disabled");
    this.pauseButton.disabled = false;
    this.pauseButton.classList.remove("disabled");
  };
  btnToggleOf = () => {
    this.startButton.disabled = false;
    this.startButton.classList.remove("disabled");
    this.pauseButton.disabled = true;
    this.pauseButton.classList.add("disabled");
  };
}
