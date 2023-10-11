// hot_and_cold.js

let guessNum, triesLeft, result;
let randomNum, guess, tries, response;

function initialize() {
    guessNum = document.getElementById("guess");
    triesLeft = document.getElementById("tries");
    result = document.getElementById("winning");

    randomNum = Math.ceil(Math.random() * 99);
    guess = 50;
    tries = 5;
    response = "Your Guess:";

    display();
}

function add(num) {
    if (guess + num <= 100) {
        guess += num;
    } else if (guess + num > 100) {
        guess = 100;
    }
    display();
}

function subtract(num) {
    if (guess - num > 0) {
        guess -= num;
    } else if (guess - num <= 1) {
        guess = 1;
    }
    display();
}

function check() {
    if (tries > 0) {
        if (guess == randomNum) {
            response = "Congrats!";
        } else {
            tries -= 1;
            if (Math.abs(guess - randomNum) <= 5) {
                response = "very hot🔥";
            } else if (Math.abs(guess - randomNum) <= 8) {
                response = "hot";
            } else if (Math.abs(guess - randomNum) <= 15) {
                response = "very warm🔥";
            } else if (Math.abs(guess - randomNum) <= 20) {
                response = "warm";
            } else if (Math.abs(guess - randomNum) <= 30) {
                response = "cool";
            } else if (Math.abs(guess - randomNum) <= 40) {
                response = "very cool🥶";
            } else if (Math.abs(guess - randomNum) <= 55) {
                response = "cold";
            } else {
                response = "very cold 🥶";
            }
        }
    } else {
        response = "You Lost!! Reset to play again!"
    }
   

    display();
    pastResponse = document.createElement("p");
    pastAttempt = document.getElementById("pastAttempt");
    pastResponse.innerHTML = "Guess " + guess + " Accuracy: " + response;
    pastAttempt.appendChild(pastResponse);
    if (response === "Congrats!" || tries === 0) {
        // If the game ends (win or out of tries), reveal the correct number
        document.getElementById("correctNumber").innerText = "The correct number was: " + randomNum;
        document.getElementById("correctNumber").style.display = "block";
    }
}

function reset() {
    guess = 50;
    tries = 5;
    response = "Your Guess:";
     // Reset the displayed number and hide it
     document.getElementById("correctNumber").innerText = "";
     document.getElementById("correctNumber").style.display = "none";
    randomNum = Math.ceil(Math.random() * 99);
    //console.log("just to make sure the things match: " + randomNum);
    
    pastAttempt.innerHTML = "";
    display();
}

function display() {
    guessNum.innerHTML = guess;
    triesLeft.innerHTML = "Tries: " + tries;
    result.innerHTML = response;
}

