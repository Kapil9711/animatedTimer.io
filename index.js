console.log(screen.availWidth);
const circle = document.querySelector("circle");
if (screen.availWidth < 450) {
  const svg = document.querySelector("svg");
  svg.setAttribute("width", "350");
  svg.setAttribute("height", "400");
  circle.setAttribute("r", "130");
  circle.setAttribute("cx", "150");
  circle.setAttribute("cy", "150");
  circle.setAttribute("stroke-width", "20");
}

const durationInput = document.querySelector("#durationInput");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);
let duration;
durationInput.addEventListener("click", function () {
  this.style.border = "5px solid yellow";
});

const myTimer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaning) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaning) / duration - perimeter
    );
  },
  onPause() {
    setTimeout(() => {
      circle.setAttribute("stroke-dashoffset", 0);
    }, 1000);
  },
});
