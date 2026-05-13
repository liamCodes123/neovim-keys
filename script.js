const challenges = [
  "dd",
  "yy",
  "p",
  ":w",
  ":q",
  "space ff",
  "space e"
];

let currentChallenge = challenges[Math.floor(Math.random() * challenges.length)];

document.addEventListener("DOMContentLoaded", () => {
  const challenge = document.getElementById("challenge");
  if (challenge) {
    challenge.innerText = "Type: " + currentChallenge;
  }
});

function checkPractice() {
  const input = document.getElementById("practice-input").value;
  const result = document.getElementById("practice-result");

  if (input.trim() === currentChallenge) {
    result.innerText = "Correct!";

    currentChallenge = challenges[Math.floor(Math.random() * challenges.length)];

    document.getElementById("challenge").innerText =
      "Type: " + currentChallenge;

    document.getElementById("practice-input").value = "";
  } else {
    result.innerText = "Try again.";
  }
}
