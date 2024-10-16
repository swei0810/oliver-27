const grid = [
    ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', 'B', 'O', 'O', 'K', '!', '!'],
    ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', 'A', '!', '!', '!', '!', '!'],
    ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', 'P', 'I', 'L', 'A', 'T', 'E', 'S', '!'],
    ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', 'T', '!', '!', '!', '!', '!'],
    ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', 'R', '!', '!', 'H', '!', '!', '!', 'D', '!'],
    ['!', '!', '!', '!', '!', '!', 'E', 'C', 'L', 'I', 'P', 'S', 'E', '!', 'S', 'A', 'I', 'S', 'H', 'I', 'N'],
    ['!', '!', '!', '!', '!', 'M', '!', '!', '!', '!', '!', '!', 'C', '!', '!', 'Z', '!', '!', '!', 'N', '!'],
    ['!', '!', '!', '!', '!', 'O', '!', 'B', 'U', 'B', 'B', 'L', 'E', 'T', 'E', 'A', '!', '!', '!', 'E', '!'],
    ['!', '!', '!', '!', '!', 'L', '!', 'E', '!', '!', '!', '!', 'P', '!', '!', 'R', '!', '!', '!', 'R', '!'],
    ['!', '!', '!', '!', '!', 'L', '!', 'R', '!', '!', 'K', '!', 'T', '!', '!', '!', '!', '!', '!', '!', '!'],
    ['!', 'T', '!', '!', 'H', 'Y', 'R', 'O', 'X', '!', 'A', '!', 'I', '!', '!', 'W', '!', '!', '!', '!', '!'],
    ['!', 'A', '!', '!', '!', '!', '!', 'N', '!', '!', 'T', 'O', 'O', 'T', 'S', 'I', 'E', '!', '!', '!', '!'],
    ['!', 'T', '!', '!', '!', '!', '!', 'B', '!', '!', 'J', '!', 'N', '!', '!', 'N', '!', '!', '!', '!', '!'],
    ['P', 'I', 'Z', 'Z', 'A', 'P', 'I', 'E', '!', '!', 'E', '!', '!', '!', '!', 'G', 'O', 'L', 'F', '!', '!'],
    ['!', 'N', '!', '!', '!', '!', '!', 'R', '!', '!', 'S', '!', '!', '!', '!', 'S', '!', '!', '!', '!', '!'],
    ['!', '!', '!', '!', '!', '!', '!', 'O', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!'],
    ['!', 'F', 'R', 'I', 'Z', 'Z', 'A', 'N', 'T', 'E', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!'],
    ['!', '!', '!', 'K', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!'],
    ['!', '!', '!', 'E', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!'],
    ['!', '!', '!', 'A', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!']
];

const clueNumber = [
    ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '1', '!', '!', '!', '!', '!'],
    ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!'],
    ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '2', '!', '!', '!', '!', '!', '!', '!'],
    ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!'],
    ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '3', '!', '!', '!', '!', '!', '!', '4', '!'],
    ['!', '!', '!', '!', '!', '!', '5', '!', '!', '!', '!', '!', '!', '!', '6', '!', '!', '!', '!', '!', '!'],
    ['!', '!', '!', '!', '!', '7', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!'],
    ['!', '!', '!', '!', '!', '!', '!', '8', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!'],
    ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!'],
    ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '9', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!'],
    ['!', '10', '!', '!', '11', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '12', '!', '!', '!', '!', '!'],
    ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '13', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!'],
    ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!'],
    ['14', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '15', '!', '!', '!', '!', '!'],
    ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!'],
    ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!'],
    ['!', '16', '!', '17', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!'],
    ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!'],
    ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!'],
    ['!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!', '!']
];

let timeElapsed = 0;
let timerInterval;

// Function to start the timer
function startTimer() {
    timerInterval = setInterval(() => {
        timeElapsed++;
        document.getElementById('time').textContent = timeElapsed;
    }, 1000);
}

const inputCells = []; // 2D array to store input cells

// Create the crossword grid without showing answers
for (let i = 0; i < grid.length; i++) {
    inputCells[i] = []; // Initialize the row
    for (let j = 0; j < grid[i].length; j++) {
        const cellDiv = document.createElement('div');
        cellDiv.className = 'cell';

        if (grid[i][j] === '!') {
            cellDiv.classList.add('black-cell');
        } else {
            // Create editable cell
            const inputDiv = document.createElement('div');
            inputDiv.className = 'input-cell';
            inputDiv.contentEditable = true;
            inputDiv.addEventListener('keypress', (event) => {
                if (event.key.length === 1 && /^[A-Z]$/.test(event.key.toUpperCase())) {
                    event.preventDefault();
                    inputDiv.textContent = event.key.toUpperCase();
                    inputDiv.classList.add('letter');
                    moveToNextCell(inputDiv);
                }
            });

            // Add event listener for clicking on wrong answers
            inputDiv.addEventListener('click', () => {
                if (inputDiv.classList.contains('wrong')) {
                    inputDiv.textContent = ''; // Clear the letter
                    inputDiv.classList.remove('wrong'); // Remove wrong styling
                    inputDiv.contentEditable = true; // Make it editable again
                    inputDiv.focus(); // Focus on the input for immediate typing
                }
            });

            cellDiv.appendChild(inputDiv);
            inputCells[i][j] = inputDiv; // Store the input cell

            // Check if there is a clue number and create it
            if (clueNumber[i][j] !== '!') {
                const numberDiv = document.createElement('div');
                numberDiv.className = 'number';
                numberDiv.textContent = clueNumber[i][j];
                cellDiv.appendChild(numberDiv);
            }
        }

        document.querySelector('.crossword').appendChild(cellDiv);
    }
}

function moveToNextCell(currentCell) {
    const cells = Array.from(document.querySelectorAll('.input-cell'));
    const currentIndex = cells.indexOf(currentCell);
    for (let i = currentIndex + 1; i < cells.length; i++) {
        if (!cells[i].parentElement.classList.contains('black-cell')) {
            cells[i].focus();
            break;
        }
    }
}

// Check answers function
document.getElementById('checkButton').addEventListener('click', checkAnswers);

function checkAnswers() {
    let allCorrect = true;

    // Loop through the grid structure
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            const correctAnswer = grid[row][col];

            // Proceed only if the cell is not a black cell
            if (correctAnswer !== '!') {
                const userAnswer = inputCells[row][col].textContent.trim().toUpperCase();

                console.log(`Row: ${row}, Col: ${col}, Correct Answer: ${correctAnswer}, User Answer: ${userAnswer}`);

                // Clear previous styles
                inputCells[row][col].classList.remove('wrong', 'correct');

                if (userAnswer === correctAnswer) {
                    inputCells[row][col].classList.add('correct');
                    inputCells[row][col].contentEditable = 'false'; // Prevent further editing
                } else if (userAnswer !== '') {
                    inputCells[row][col].classList.add('wrong');
                    allCorrect = false; // Mark as incorrect if any answer is wrong
                }
            }
        }
    }

    // Display congratulations if all answers are correct
    if (allCorrect) {
        setTimeout(() => {
            alert("Congrats on finishing the puzzle! Crosswords will continue to grow!");
        }, 1500); 
    }
}
