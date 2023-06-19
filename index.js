// HTML elements
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const timeDisplay = document.getElementById("time");

// Stopwatch variables
let startTime;
let elapsedTime = 0;
let timerInterval;

// Event listeners
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

// Start the timer
function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 10);
}

// Pause the timer
function pauseTimer() {
  clearInterval(timerInterval);
}

// Reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
}

// Update the timer display
function updateTimer() {
  elapsedTime = Date.now() - startTime;
  updateDisplay();
}

// Update the time display
function updateDisplay() {
  let minutes = Math.floor(elapsedTime / 60000);
  let seconds = Math.floor((elapsedTime % 60000) / 1000);
  let milliseconds = elapsedTime % 1000;
  timeDisplay.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
}