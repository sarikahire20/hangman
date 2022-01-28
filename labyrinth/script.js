//DOM variables
let guessedLetter = document.querySelector("#guessed-letter");
let newGame = document.querySelector("#new-game");
let currentWord = document.querySelector("#current-word");
let wordContainer = document.querySelector("#word-container");
let playerStatus = document.querySelector("#player-status");
let playerInput = document.querySelector("#player-guess")
let guessBtn = document.querySelectorAll("#player-guess-container .guess");
let badGuess = document.querySelector(".bad_guess")
let gallow = document.querySelectorAll("g .gallow")
let win = document.querySelector(".win");
let lose = document.querySelector(".lose");
let hangingGuy = document.querySelectorAll("g rect");
let categories = document.querySelectorAll(".categories button")
let allKeys = document.querySelector(".all_keys");
let changeTheme = document.querySelector(".change_theme")

const three = ["water"];
const four = ["fire"];
const two = ["air"]
const one = ["eyeswideopen"]
guessBtn.forEach(letter => { 
    letter.setAttribute("disabled", "")
});

let subject = ""
let newWord = "";
const wordSelector = (category) => {
    let random = Math.floor(Math.random() * category.length);
    newWord = category[random]
    console.log(newWord)
};

//creating letter spaces
const blankSpaces = () => {
    for (let i = 0; i < newWord.length; i++) {
        let div = document.createElement("div");
        wordContainer.appendChild(div)
        div.className = "test";
        //someVariable I can iterate through
    };
}

//Deleting letter spaces
const removeSpaces = () => {
    let currentWordArr = wordContainer.querySelectorAll(".test");
    currentWordArr.forEach(spaces => {
        spaces.remove()
    });
};

//player guess
let wrongLetters = []
let rightLetters = [];
let finalWord = []

//player guess functions
guessBtn.forEach(letter => {
    letter.addEventListener('click', () => {
        let currentWord = newWord.split("")
        let currentWordArr = wordContainer.querySelectorAll(".test");
        letter.setAttribute("disabled", "true")
        //bad guess
        if (!currentWord.includes(letter.innerText.toLowerCase())) {
            wrongLetters.push(letter.innerText);
            badGuess.innerHTML = wrongLetters.join(' ');
            //good guess
        } else {
            rightLetters.push(letter.innerText)
            for (let i = 0; i < currentWord.length; i++) {
                if (currentWord[i] === letter.innerText.toLowerCase()) {
                    currentWordArr[i].innerHTML = letter.innerText
                    finalWord.push(letter.innerText)
                }
            };


            if (finalWord.length === currentWord.length) {
                win.style.display = "block"
                guessBtn.forEach(button => {
                    button.setAttribute("disabled", "")
                });
            }
        };
//bad guess conditions for hanging the man
        if (wrongLetters.length === 1) {
            for (let i = 0; i < gallow.length; i++) {
                gallow[i].style.display = "block";
            }
        } else if (wrongLetters.length === 2) {
            document.querySelector(".head").style.display = "block";
        } else if (wrongLetters.length === 3) {
            document.querySelector(".neck").style.display = "block";
        } else if (wrongLetters.length === 4) {
            document.querySelector(".right_arm").style.display = "block";
        } else if (wrongLetters.length === 5) {
            document.querySelector(".left_arm").style.display = "block";
        } else if (wrongLetters.length === 6) {
            document.querySelector(".torso").style.display = "block";
        } else if (wrongLetters.length === 7) {
            document.querySelector(".right_leg").style.display = "block";
        } else if (wrongLetters.length === 8) {
            document.querySelector(".left_leg").style.display = "block";
            lose.style.display = "block";
            for(let i = 0; i < currentWord.length; i++){
                currentWordArr[i].innerHTML = currentWord[i].toUpperCase();
                currentWordArr[i].style.color = "white";
            };
            guessBtn.forEach(button => {
                button.setAttribute("disabled", "")
            })
        }
    })
});

//choose a category and start a new game
const categoryAll = () => {
    removeSpaces();
    currentWordSplit = newWord.split("");
    blankSpaces()
    wrongLetters = [];
    rightLetters = [];
    finalWord = [];
    badGuess.innerHTML = wrongLetters
    win.style.display = "none";
    lose.style.display = "none";
    hangingGuy.forEach(piece => {
        piece.style.display = "none";
    });
    document.querySelector(".head").style.display = "none";
    guessBtn.forEach(letter => {
      if (letter.hasAttribute("disabled", "")) {
          letter.removeAttribute("disabled", "")
      }
  })
};


//category selections
categories[0].addEventListener('click', () => {
    wordSelector(one);
    categoryAll()
    categories[0].style.cssText = "opacity: 1; border: solid #white 2px";
    categories[1].style.cssText = "opacity: 1; border: solid #white 1px";
    categories[2].style.cssText = "opacity: 1; border: solid #white 1px";
});

categories[1].addEventListener('click', () => {
  wordSelector(two);
  categoryAll();
  categories[1].style.cssText = "opacity: 1; border: solid white 2px";
  categories[0].style.cssText = "opacity: 1; border: solid white 1px";
  categories[2].style.cssText = "opacity: 1; border: solid white 1px";
});

categories[2].addEventListener('click', () => {
  wordSelector(three);
  categoryAll();
  categories[2].style.cssText = "opacity: 1; border: solid white 2px";
  categories[0].style.cssText = "opacity: 1; border: solid white 1px";
  categories[1].style.cssText = "opacity: 1; border: solid white 1px";
});


categories[3].addEventListener('click', () => {
  wordSelector(four);
  categoryAll();
  categories[2].style.cssText = "opacity: 1; border: solid white 2px";
  categories[0].style.cssText = "opacity: 1; border: solid white 1px";
  categories[1].style.cssText = "opacity: 1; border: solid white 1px";
});

document.querySelector(".q").addEventListener("keyQ", function(event) {
     if (event.keyCode === 81) {
     event.preventDefault();  
    authenticate.click();
  }        
});

//changing theme

changeTheme.addEventListener('click', () => {
  let ran = Math.random() * 360;
  let ranNum = Math.floor(ran);
  let allItems = document.querySelectorAll("#hangman");
  allItems.forEach(item => {
    item.style.filter = `hue-rotate(${ranNum}deg)`
  })
})





var coll = document.getElementsByClassName("one new_game");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


var coll = document.getElementsByClassName("two new_game");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


var coll = document.getElementsByClassName("three new_game");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


var coll = document.getElementsByClassName("four new_game");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
