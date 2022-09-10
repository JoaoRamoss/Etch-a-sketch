const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('mouseover', hoverIn));
buttons.forEach(button => button.addEventListener('mouseout', hoverOut));
buttons.forEach(button => button.addEventListener('click', buttonPress));


function hoverIn(e) {
    e.target.setAttribute("style", "scale: 1.1");
}

function hoverOut(e) {
    e.target.setAttribute("style", "scale: 1;");
}

function buttonPress(e) {
    updateSelectedBtn(e);
}

function updateSelectedBtn(e) {
    if (e.target.id !== 'clear') {
        buttons.forEach(button => button.classList.remove('selected'));
        e.target.classList.add('selected');
    }
}
//------------------- GRID --------------------//

const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#333333';
const DEFAULT_MODE = 'color';
//-------------------

let current_size = DEFAULT_SIZE;
let current_mode = DEFAULT_MODE;
let current_color = DEFAULT_COLOR;

const grid = document.querySelector('.grid');

function createGrid(size) {
    //Defines ${size} elements per row/column. (https://developer.mozilla.org/en-US/docs/Web/CSS/repeat);
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < size*size; i++) {
        const gridElem = document.createElement('div');
        gridElem.classList.add('gridElement');
        grid.append(gridElem);
    }
}





window.onload = () => {
    createGrid(DEFAULT_SIZE);
}