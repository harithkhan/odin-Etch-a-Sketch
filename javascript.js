const gridContainer = document.querySelector("#gridContainer");
const gridButton = document.querySelector("#gridButton");

let isDragging = false; // Flag to track whether the mouse is being dragged

// Function to generate a random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

// Function to darken the color progressively
function darkenColor(rgb, darkenFactor) {
    const match = rgb.match(/\d+/g);
    const r = Math.max(0, Math.floor(match[0] * darkenFactor));
    const g = Math.max(0, Math.floor(match[1] * darkenFactor));
    const b = Math.max(0, Math.floor(match[2] * darkenFactor));
    return `rgb(${r}, ${g}, ${b})`;
};

// Function to handle color change
function toColorBox(event) {
    const gridBox = event.target;

    if (!gridBox.style.backgroundColor) {
        // Assign random color and set initial opacity
        gridBox.style.backgroundColor = getRandomColor();
        gridBox.dataset.darkenFactor = 0.9; // Start with a 10% darkening step
    } else {
        // Darken the existing color
        const currentColor = gridBox.style.backgroundColor;
        const darkenFactor = parseFloat(gridBox.dataset.darkenFactor);
        gridBox.style.backgroundColor = darkenColor(currentColor, darkenFactor);
        gridBox.dataset.darkenFactor -= 0.1; // Reduce the darkening factor by 10%
    };
};

// Function to create the grid
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



