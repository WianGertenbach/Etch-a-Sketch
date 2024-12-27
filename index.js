const container = document.querySelector('.grid-container');

const containerSize = 400;

const userSelection = document.querySelector('.b4');

const rect = userSelection.getBoundingClientRect();

const squareDimensions = rect.width;
const squareDimensionsString = squareDimensions+"px";

let gridDimension = containerSize/squareDimensions;
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