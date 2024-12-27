const container = document.querySelector('.grid-container');

const containerSize = 400;

const userSelection = document.querySelectorAll('.brush');

userSelection.forEach((brush) =>{
    brush.addEventListener('click', () => {
        console.log(brush);
        container.innerHTML = "";
        const rect = brush.getBoundingClientRect();
        const squareDimensions = rect.width;
        const squareDimensionsString = squareDimensions+"px";

        let gridDimension = containerSize/squareDimensions;
        const numSquares = gridDimension*gridDimension;
        createGridItems();

        function createGridItems() {
            for (let i = 0; i < numSquares; i++) {
                const gridItem = document.createElement('div');
                gridItem.classList.add('grid-item');
                gridItem.style.height = squareDimensionsString;
                gridItem.style.width = squareDimensionsString;
                container.appendChild(gridItem);
            };
        };
    })
});

const reset = document.querySelector('button');
reset.addEventListener('click', ()=> {
    container.innerHTML = "";
});

