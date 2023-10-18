const container = document.querySelector('.container');

let size = 16;
let currentSqure = null;


function drawGrid(size){
    for(let i = 0; i < size*size; i++){
        let square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);

        square.addEventListener('mousemove', () => {
            currentSquare = square;
        });
    }
}

drawGrid(size);

document.addEventListener("mousemove", () =>{
    currentSquare.style.backgroundColor = "red";
});
