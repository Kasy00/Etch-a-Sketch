const container = document.querySelector('.container');

let gridSize = 16; // default grid size
let squareSize = 38; //default squares size
let currentSquare = null;
let isPressed = false;


container.addEventListener('mousedown', () => {
    isPressed = true;
    currentSquare.style.backgroundColor = "red";
});

container.addEventListener('mouseup', () => {
    isPressed = false;
});

function drawGrid(gSize, sSize){
    container.style.gridTemplateColumns = `repeat(${gSize}, ${sSize}px)`;
    container.style.gridTemplateRows = `repeat(${gSize}, ${sSize}px)`;

    for(let i = 0; i < gSize*gSize; i++){
        let square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);

        square.addEventListener('mousemove', () => {
            currentSquare = square;
        });
    }
}

drawGrid(gridSize, squareSize);


container.addEventListener("mousemove", () =>{
    if(isPressed){
        currentSquare.style.backgroundColor = "red";
    }
});
