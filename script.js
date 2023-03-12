let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
const displayMessage = function (message) {
  document.querySelector(".comment").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("⛔️ No number");
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".comment").textContent = "🎉Correct number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".highscore").textContent = score;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈Too high" : "📉Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("🔥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = 0;
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing... ");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
