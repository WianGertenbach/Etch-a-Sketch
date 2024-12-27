const container = document.querySelector('.grid-container');

const containerSize = 400;

let userInput = prompt("Enter the size of the grid: ");
let gridDimension = Number(userInput);

const squareDimensions = containerSize/gridDimension;
const squareDimensionsString = squareDimensions+"px"
const numSquares = gridDimension*gridDimension;

function createGridItems() {
    for (let i = 0; i < numSquares; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.height = squareDimensionsString;
        gridItem.style.width = squareDimensionsString;
        container.appendChild(gridItem);
    };
};

createGridItems();