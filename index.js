const container = document.querySelector('.grid-container');

const containerSize = container.getBoundingClientRect();
const size = containerSize.width;

console.log("The container size: "+size);

function createGridItems() {
    for (let i = 0; i < 256; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        container.appendChild(gridItem);

    };
};

createGridItems();