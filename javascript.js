const gridContainer = document.querySelector("#gridContainer");
const gridButton = document.querySelector("#gridButton");

let isDragging = false; // Flag to track whether the mouse is being dragged

// Function that generates rgb value 
function toColorBox (event) {
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    };
    event.target.style.backgroundColor = getRandomColor();
};

function createGrid (gridNumber) {
    
    gridContainer.innerHTML = ""; // Clear existing grid
    const gridBoxSize = 320 / gridNumber; // Placeholder variable to help set gridBox width and height

    for (let i = 0; i < (gridNumber * gridNumber); i++) {
        const gridBox = document.createElement("div");
        gridBox.className = "gridBox";
        gridBox.style.width = `${gridBoxSize}px`;
        gridBox.style.height = `${gridBoxSize}px`;
        gridContainer.appendChild(gridBox);

        // Add event listeners for color change
        gridBox.addEventListener("mousedown", toColorBox); // Change on click
        gridBox.addEventListener("mouseenter", (event) => {
            if (isDragging) toColorBox(event); // Change on drag
        });
    };

    // Add mouse event listeners to manage dragging state
    document.addEventListener("mousedown", () => isDragging = true);
    document.addEventListener("mouseup", () => isDragging = false);
};

// Ensure button prompts user for number of grid boxes per side
gridButton.addEventListener("click", () => {
    let gridNumber = prompt("Please enter the number of grid boxes per side (between 2 and 100)", 10);
    if (!isNaN(gridNumber) && gridNumber > 1 && gridNumber <= 100) {
        createGrid(gridNumber);
    } else {alert("Please enter a valid number between 2 and 100")};
});

// Initialize grid
createGrid(16);



