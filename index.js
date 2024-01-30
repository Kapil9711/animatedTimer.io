const circle = document.querySelector("circle");

if (screen.availWidth > 500) {
  circle.setAttribute("r", "200");
  circle.setAttribute("cx", "150");
  circle.setAttribute("cy", "250");
  circle.setAttribute("transform", "rotate(-90 200 200)");
}
let circlePerimeter = 2 * Math.PI * parseInt(circle.getAttribute("r"));
circle.setAttribute("stroke-dasharray", circlePerimeter);
const startButton = document.querySelector("#startBtn");
const pauseButton = document.querySelector("#pauseBtn");
const timerInput = document.querySelector("#timerInput");
let totalTime;
const myTimer = new Timer(timerInput, startButton, pauseButton, {
  onStart(totalDuration) {
    totalTime = totalDuration;
  },
  onTick(remainingTime) {
    circle.setAttribute(
      "stroke-dashoffset",
      circlePerimeter * (remainingTime / totalTime) - circlePerimeter
    );
  },
  onPause() {
    setTimeout(() => {
      circle.setAttribute("stroke-dashoffset", 0);
    }, 1000);
  },
});
