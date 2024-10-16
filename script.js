const WORD_LENGTH = 5;
const TRIES = 6;
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Replace this with your chosen word
const WORD = 'GOCHU';

let guessesRemaining = TRIES;
let currentGuess = [];
let nextLetter = 0;

function initBoard() {
    let board = document.getElementById("game-board");

    for (let i = 0; i < TRIES; i++) {
        for (let j = 0; j < WORD_LENGTH; j++) {
            let tile = document.createElement("div");
            tile.classList.add("tile");
            board.appendChild(tile);
        }
    }
}

function initKeyboard() {
    let keyboard = document.getElementById("keyboard");
    let keys = [
        'QWERTYUIOP',
        'ASDFGHJKL',
        'ZXCVBNM'
    ];

    keys.forEach(row => {
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");
        
        row.split('').forEach(letter => {
            let key = document.createElement("button");
            key.classList.add("key");
            key.textContent = letter;
            key.addEventListener("click", () => handleKeyClick(letter));
            keyboardRow.appendChild(key);
        });

        keyboard.appendChild(keyboardRow);
    });

    // Add Enter and Backspace keys
    let lastRow = keyboard.lastChild;
    let enterKey = document.createElement("button");
    enterKey.classList.add("key");
    enterKey.textContent = "Enter";
    enterKey.addEventListener("click", handleEnter);
    lastRow.insertBefore(enterKey, lastRow.firstChild);

    let backspaceKey = document.createElement("button");
    backspaceKey.classList.add("key");
    backspaceKey.textContent = "⌫";
    backspaceKey.addEventListener("click", handleBackspace);
    lastRow.appendChild(backspaceKey);
}

function handleKeyClick(letter) {
    if (nextLetter === WORD_LENGTH) return;
    
    let tile = document.getElementById("game-board").children[WORD_LENGTH * (TRIES - guessesRemaining) + nextLetter];
    tile.textContent = letter;
    tile.classList.add("filled-tile");
    currentGuess.push(letter);
    nextLetter++;
}

function handleEnter() {
    if (nextLetter === WORD_LENGTH) {
        checkGuess();
        guessesRemaining--;
        currentGuess = [];
        nextLetter = 0;

        if (guessesRemaining === 0) {
            alert("Game Over! The word was " + WORD);
        }
    }
}

function handleBackspace() {
    if (nextLetter === 0) return;
    nextLetter--;
    let tile = document.getElementById("game-board").children[WORD_LENGTH * (TRIES - guessesRemaining) + nextLetter];
    tile.textContent = "";
    tile.classList.remove("filled-tile");
    currentGuess.pop();
}

function checkGuess() {
    let row = document.getElementById("game-board").children;
    let guessString = currentGuess.join("");
    let correct = 0;

    for (let i = 0; i < WORD_LENGTH; i++) {
        let tile = row[WORD_LENGTH * (TRIES - guessesRemaining) + i];
        let letter = tile.textContent;

        if (letter === WORD[i]) {
            tile.style.backgroundColor = "#6aaa64";
            correct++;
        } else if (WORD.includes(letter)) {
            tile.style.backgroundColor = "#c9b458";
        } else {
            tile.style.backgroundColor = "#787c7e";
        }
    }

    if (correct === WORD_LENGTH) {
        setTimeout(() => {
            alert("You guessed it! Si <3 Oliver");
        }, 250); // Delay of 100 milliseconds
    }
}

initBoard();
initKeyboard();
