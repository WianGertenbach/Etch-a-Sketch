const container = document.querySelector('.grid-container');

const containerSize = 400;

const userSelection = document.querySelectorAll('.brush');

userSelection.forEach((brush) =>{
    brush.addEventListener('click', () => {
        container.innerHTML = "";
        const rect = brush.getBoundingClientRect();
        const squareDimensions = rect.width;
        const squareDimensionsString = squareDimensions+"px";

        let gridDimension = containerSize/squareDimensions;
        const numSquares = gridDimension*gridDimension;
        
        for (let i = 0; i < numSquares; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.style.height = squareDimensionsString;
            gridItem.style.width = squareDimensionsString;
            container.appendChild(gridItem);

            gridItem.addEventListener('mouseenter', ()=>{
                gridItem.style.backgroundColor = "rgba(95, 105, 131, 1)";
            })
        };


    })
});

const reset = document.querySelector('button');
reset.addEventListener('click', ()=> {
    container.innerHTML = "";
});

