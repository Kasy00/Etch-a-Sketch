const container = document.querySelector('.container');
const sizeRange = document.getElementById('sizeRange');
const output = document.getElementById('demo');
const colorPicker = document.getElementById('colorPicker');

let gridSize = 16; // default grid size
let currentSquare = null;
let isPressed = false;
let color = 'black';

container.addEventListener('mousedown', () => {
    isPressed = true;
    currentSquare.style.backgroundColor = color;
});

container.addEventListener('mouseup', () => {
    isPressed = false;
});

function drawGrid(gSize){
    container.style.gridTemplateColumns = `repeat(${gSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gSize}, 1fr)`;

    for(let i = 0; i < gSize*gSize; i++){
        let square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);

        square.addEventListener('mousemove', () => {
            currentSquare = square;
        });
    }
}

drawGrid(gridSize);


container.addEventListener("mousemove", () =>{
    if(isPressed){
        currentSquare.style.backgroundColor = color;
    }
});

colorPicker.addEventListener('change', (e) => {
    color = e.target.value;
});

sizeRange.addEventListener('input', () => {
    gridSize = sizeRange.value;
    container.innerHTML = "";
    drawGrid(gridSize);
 });

output.innerHTML = sizeRange.value;

sizeRange.oninput = function(){
    output.innerHTML = this.value;
}