const nextBtn = document.getElementById("next");
const letterDisplay = document.getElementById("letter");
const docBody = document.querySelector("body");
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const alphaQueue = new Array(10).fill(null);

function pickRandomLetterIndex () {
  return Math.floor(Math.random() * alphabet.length);
}

function changeLetterColor () {
  if ("AGMSY".includes(letterDisplay.innerText)) {
    letterDisplay.style.color = "red";
  } else if ("BHNTZ".includes(letterDisplay.innerText)) {
    letterDisplay.style.color = "orange";
  } else if ("CIOU".includes(letterDisplay.innerText)) {
    letterDisplay.style.color = "gold";
  } else if ("DJPV".includes(letterDisplay.innerText)) {
    letterDisplay.style.color = "green";
  } else if ("EKQW".includes(letterDisplay.innerText)) {
    letterDisplay.style.color = "blue";
  } else if ("FLRX".includes(letterDisplay.innerText)) {
    letterDisplay.style.color = "violet";
  }
}

function updateLetter () {
  const randLetterIndex = pickRandomLetterIndex ();
  const randLetter = alphabet[randLetterIndex];
  letterDisplay.innerText = randLetter;
  changeLetterColor ();
  if (alphaQueue[0] === null) {
    alphabet.splice(randLetterIndex, 1);
    alphaQueue.shift()
    alphaQueue.push(randLetter);
  } else {
    alphabet.splice(randLetterIndex, 1, alphaQueue[0]);
    alphaQueue.shift()
    alphaQueue.push(randLetter);
  }
}

nextBtn.addEventListener("click", () => updateLetter());

docBody.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    updateLetter();
  }
})
