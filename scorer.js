const p1display = document.querySelector("#P1display");
const p2display = document.querySelector("#P2display");
const p1bt = document.querySelector("#P1button");
const p2bt = document.querySelector("#P2button");
const reset = document.querySelector("#reset");
const limit = document.querySelector("#Limit");
const result = document.querySelector("#result");

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
let scoreOver = limit.value;

for (let i = 8; i <= 13; i++) {
  scoreLimit = document.createElement("option");
  scoreLimit.value = i;
  scoreLimit.innerText = i;
  limit.appendChild(scoreLimit);
}

p1bt.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score++;
    setDisplay();
    console.log(scoreOver);
    if (p1Score == scoreOver) {
      isGameOver = true;
      printResult("P1");
      p1bt.classList.toggle("notAllowed");
      p2bt.classList.toggle("notAllowed");
      p1display.classList.toggle('win');
      p2display.classList.toggle('lose');
      limit.setAttribute("disabled", "");
    }
  }
});

p2bt.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score++;
    setDisplay();
    if (p2Score == scoreOver) {
      isGameOver = true;
      printResult("P2");
      p1bt.classList.toggle("notAllowed");
      p2bt.classList.toggle("notAllowed");
      p2display.classList.toggle('win');
      p1display.classList.toggle('lose');
      limit.setAttribute("disabled","");
    }
  }
});

reset.addEventListener("click", function () {
  p1Score = 0;
  p2Score = 0;
  isGameOver = false;
  setDisplay();
  result.firstChild.remove();
  p1bt.classList.toggle("notAllowed");
  p2bt.classList.toggle("notAllowed");
  p1display.classList.remove("win");
  p2display.classList.remove("win");
  p1display.classList.remove("lose");
  p2display.classList.remove("lose");
  limit.removeAttribute("disabled");
});

limit.addEventListener("change", () => {
  scoreOver = limit.value;
});

function setDisplay() {
  p1display.innerText = p1Score;
  p2display.innerText = p2Score;
}

function printResult(player) {
  disp = document.createElement("h1");
  disp.innerText = `${player} has won. Congratulation ${player}!!!`;
  result.appendChild(disp);
}
