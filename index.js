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
                let rgb1 = Math.ceil(Math.random()*256);
                let rgb2 = Math.ceil(Math.random()*256);
                let rgb3 = Math.ceil(Math.random()*256);

                const bgColor = "rgb("+rgb1+","+rgb2+","+rgb3+")";

                gridItem.style.backgroundColor = bgColor;
            })
        };


    })
});

const reset = document.querySelector('button');
reset.addEventListener('click', ()=> {
    container.innerHTML = "";
});

