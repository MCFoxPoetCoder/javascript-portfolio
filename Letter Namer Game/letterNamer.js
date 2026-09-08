const nextBtn = document.getElementById("next");
const letterDisplay = document.getElementById("letter");
const docBody = document.querySelector("body");
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function pickRandomLetter () {
  let random = Math.floor(Math.random() * 26);
  return alphabet[random];
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

nextBtn.addEventListener("click", () => {
  const randLetter = pickRandomLetter ();
  letterDisplay.innerText = randLetter;
  changeLetterColor ();
})

docBody.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    const randLetter = pickRandomLetter ();
    letterDisplay.innerText = randLetter;
    changeLetterColor ();
  }
})