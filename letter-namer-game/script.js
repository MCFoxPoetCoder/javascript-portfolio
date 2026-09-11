const nextBtn = document.getElementById("next");
const letterDisplay = document.getElementById("letter");
const docBody = document.querySelector("body");
const gameOptions = document.querySelectorAll("#game-options input[type='checkbox']")

const sets = [
  {
    value: "uppercase-letters",
    setArr: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    setRegex: "[A-Z]"
  },
  {
    value: "lowercase-letters",
    setArr: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split(""),
    setRegex: "[a-z]"
  },
  {
    value: "numbers",
    setArr:  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    setRegex: "\\d"
  },
]

const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const alphabetLower = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split("");
const numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
let alphaQueue = [];
let practiceSet = [];
practiceSet.push(...sets[0].setArr)

console.log(`Starting practiceSet: ${practiceSet}`);

function pickRandomLetterIndex () {
  return Math.floor(Math.random() * practiceSet.length);
}

function changeLetterColor () {
  if ("AGMSY17".includes(letterDisplay.innerText.toUpperCase())) {
    letterDisplay.style.color = "red";
  } else if ("BHNTZ28".includes(letterDisplay.innerText.toUpperCase())) {
    letterDisplay.style.color = "orange";
  } else if ("CIOU39".includes(letterDisplay.innerText.toUpperCase())) {
    letterDisplay.style.color = "gold";
  } else if ("DJPV40".includes(letterDisplay.innerText.toUpperCase())) {
    letterDisplay.style.color = "green";
  } else if ("EKQW5".includes(letterDisplay.innerText.toUpperCase())) {
    letterDisplay.style.color = "blue";
  } else if ("FLRX6".includes(letterDisplay.innerText.toUpperCase())) {
    letterDisplay.style.color = "violet";
  }
}

function updateLetter () {
  const randLetterIndex = pickRandomLetterIndex ();
  const randLetter = practiceSet[randLetterIndex];
  letterDisplay.innerText = randLetter;
  changeLetterColor ();
  practiceSet.splice(randLetterIndex, 1);
  alphaQueue.push(randLetter);
  if (alphaQueue.length >= practiceSet.length/2) {
    practiceSet.push(alphaQueue[0])
    alphaQueue.shift()
  }
  console.log("practiceSet: ", practiceSet);
  console.log("alphaQueue: ", alphaQueue);
}

/* Old addPracticeSet function:
if (value === "uppercase-letters") {
    practiceSet.push(...alphabetUpper);
  } else if (value === "lowercase-letters") {
    practiceSet.push(...alphabetLower);
  } else {
    practiceSet.push(...numbersArr);
  }
*/

function addPracticeSet (value) {
  const setObj = sets.find(set => set.value === value);
  console.log(setObj.setArr);
  practiceSet.push(...setObj.setArr);
  console.log(`practiceSet: ${practiceSet}`)
}

function removePracticeSet (value) {
  const setObj = sets.find(set => set.value === value);
  const regex = new RegExp(setObj.setRegex);
  practiceSet = practiceSet.filter(item => !regex.test(item))
  alphaQueue = alphaQueue.filter(item => !regex.test(item))
  console.log(`practiceSet: ${practiceSet}`)
  console.log(`alphaQueue: ${alphaQueue}`)
}

gameOptions.forEach((input) =>
  input.addEventListener("change", (event) => {
    if (event.target.checked) {
      addPracticeSet(input.value)
    } else {
      removePracticeSet(input.value); 
    }
  })
 );

nextBtn.addEventListener("click", () => updateLetter());

docBody.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    updateLetter();
  }
})
