const gridContainer = document.querySelector("#gridContainer");
const gridButton = document.querySelector("#gridButton");

function createGrid (gridNumber) {

    gridContainer.innerHTML = "";
    const gridBoxSize = 320 / gridNumber;

    for (let i = 0; i < (gridNumber * gridNumber); i++) {
        const gridBox = document.createElement("div");
        gridBox.className = "gridBox";
        gridBox.style.width = `${gridBoxSize}px`;
        gridBox.style.height = `${gridBoxSize}px`;
        gridContainer.appendChild(gridBox);
        gridBox.addEventListener("mouseenter", toColorBox);
    };
};

function toColorBox (event) {
    event.target.style.backgroundColor = "black";
};

gridButton.addEventListener("click", () => {
    let gridNumber = prompt("Please enter the number of grid boxes per side (between 1 and 100)", 10);
    if (!isNaN(gridNumber) && gridNumber > 0 && gridNumber <= 100) {
        createGrid(gridNumber);
    } else {alert("Please enter a valid number between 1 and 100")};
});

createGrid(16);



