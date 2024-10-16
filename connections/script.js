const GROUPS = [
    {category: "OLIVER _____", words: ["PEOPLES", "QUICK", "TWIST", "KISH"], color: "#a0c35a"},
    {category: "SPECIAL PLACES", words: ["MILLBROOK", "MANHATTAN", "VENICE", "NEW ORLEANS"], color: "#b0c4ef"},
    {category: "FUTURE MEMORIES", words: ["SEOUL", "IDAHO", "COPENHAGEN", "PARIS"], color: "#9a59b5"},
    {category: "BURGER SEARCH", words: ["L'EXPRESS", "FAIRFAX", "AMERICA", "BARBARO"], color: "#f9df6d"}
];

let selectedTiles = [];
let remainingGroups = [...GROUPS];

function initBoard() {
    let board = document.getElementById("game-board");
    board.innerHTML = '';
    let allWords = remainingGroups.flatMap(group => group.words);
    allWords = shuffleArray(allWords);

    allWords.forEach(word => {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.textContent = word;
        tile.addEventListener("click", () => toggleTile(tile));
        board.appendChild(tile);
    });
}

function toggleTile(tile) {
    if (selectedTiles.includes(tile)) {
        tile.classList.remove("selected");
        selectedTiles = selectedTiles.filter(t => t !== tile);
    } else if (selectedTiles.length < 4) {
        tile.classList.add("selected");
        selectedTiles.push(tile);
    }
}

function checkSelection() {
    if (selectedTiles.length !== 4) {
        alert("Please select exactly 4 tiles.");
        return;
    }

    let selectedWords = selectedTiles.map(tile => tile.textContent);
    let matchingGroup = remainingGroups.find(group => 
        group.words.every(word => selectedWords.includes(word))
    );

    if (matchingGroup) {
        groupTiles(selectedTiles, matchingGroup); // Group the tiles instead of alerting
        remainingGroups = remainingGroups.filter(group => group !== matchingGroup);
        selectedTiles.forEach(tile => tile.classList.remove("selected"));
        selectedTiles = [];
        if (remainingGroups.length === 0) {
            setTimeout(() => {
                alert("So many connections we've made so far!");
            }, 1500); // Delay of 100 milliseconds        
        }
    } else {
        let isOneAway = remainingGroups.some(group => {
            let correctCount = group.words.filter(word => selectedWords.includes(word)).length;
            return correctCount === 3;
        });
        
        if (isOneAway) {
            showMessage("One away...", selectedTiles);
        } else {
            alert("Incorrect. Try again!");
            selectedTiles.forEach(tile => tile.classList.remove("selected"));
            selectedTiles = [];
        }
    }
}

function showMessage(message, tiles) {
    let banner = document.getElementById("message-banner");
    banner.textContent = message;
    banner.style.display = "block";
    setTimeout(() => {
        banner.style.display = "none";
        tiles.forEach(tile => tile.classList.remove("selected"));
        selectedTiles = [];
    }, 5000);
}

function groupTiles(tiles, group) {
    // Shake animation
    tiles.forEach(tile => {
        tile.classList.add("shake");
    });

    setTimeout(() => {
        tiles.forEach(tile => {
            tile.classList.remove("selected");
            tile.classList.remove("shake");
            tile.style.transition = "transform 0.5s"; // Add transition for moving
            tile.style.transform = "translateY(-100px)"; // Move tiles up
        });
        
        // Group the tiles in the solved groups section
        addSolvedGroup(group);
        removeSolvedTiles(tiles.map(tile => tile.textContent));
    }, 500); // Wait for the shake animation to complete
}

function addSolvedGroup(group) {
    let solvedGroups = document.getElementById("solved-groups");
    let solvedGroup = document.createElement("div");
    solvedGroup.classList.add("solved-group");
    solvedGroup.style.backgroundColor = group.color;
    solvedGroup.innerHTML = `<strong>${group.category}</strong><br>${group.words.join(", ")}`;
    solvedGroups.appendChild(solvedGroup);
}

function removeSolvedTiles(words) {
    let tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {
        if (words.includes(tile.textContent)) {
            tile.remove();
        }
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function shuffleTiles() {
    let board = document.getElementById("game-board");
    let tiles = Array.from(board.children);
    tiles = shuffleArray(tiles);
    board.innerHTML = '';
    tiles.forEach(tile => board.appendChild(tile));
}

initBoard();
document.getElementById("submit").addEventListener("click", checkSelection);
document.getElementById("shuffle").addEventListener("click", shuffleTiles);
