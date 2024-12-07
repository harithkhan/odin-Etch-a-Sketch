const gridContainer = document.querySelector("#gridContainer");
function createGrid () {
    
    for (let i = 0; i < 256; i++) {
        const gridBox = document.createElement("div");
        gridBox.className = "gridBox";
        gridContainer.appendChild(gridBox);
    };
};
createGrid();


