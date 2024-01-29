class Timer {
  constructor(durationInput, startButton, pauseButton, callBacks) {
    this.durationInput = durationInput;
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
    this.startButton.disabled = true;
    this.pauseButton.disabled = false;
    if (this.onStart) this.onStart(this.timeRemaining);
    this.tick();
    this.interval = setInterval(this.tick, 10);
  };

  tick = () => {
    if (this.timeRemaining <= 0 || !this.timeRemaining) {
      if (this.onPause) this.onPause();
      this.pause();
    } else {
      this.timeRemaining = this.timeRemaining - 0.01;
      if (this.onTick) this.onTick(this.timeRemaining);
    }
  };

  pause = () => {
    this.pauseButton.disabled = true;
    this.startButton.disabled = false;
    clearInterval(this.interval);
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
