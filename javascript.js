const gridContainer = document.querySelector("#gridContainer");
const gridButton = document.querySelector("#gridButton");

let isDragging = false;

function createGrid (gridNumber) {

    gridContainer.innerHTML = "";
    const gridBoxSize = 320 / gridNumber;

    for (let i = 0; i < (gridNumber * gridNumber); i++) {
        const gridBox = document.createElement("div");
        gridBox.className = "gridBox";
        gridBox.style.width = `${gridBoxSize}px`;
        gridBox.style.height = `${gridBoxSize}px`;
        gridContainer.appendChild(gridBox);
        gridBox.addEventListener("mousedown", toColorBox);
        gridBox.addEventListener("mouseenter", (event) => {
            if (isDragging) toColorBox(event); // Change on drag
        });
    };
    document.addEventListener("mousedown", () => isDragging = true);
    document.addEventListener("mouseup", () => isDragging = false);
};

function toColorBox (event) {
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    };
    event.target.style.backgroundColor = getRandomColor();
};

gridButton.addEventListener("click", () => {
    let gridNumber = prompt("Please enter the number of grid boxes per side (between 2 and 100)", 10);
    if (!isNaN(gridNumber) && gridNumber > 1 && gridNumber <= 100) {
        createGrid(gridNumber);
    } else {alert("Please enter a valid number between 2 and 100")};
});

createGrid(16);



