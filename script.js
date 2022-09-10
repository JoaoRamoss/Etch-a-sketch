const buttons = document.querySelectorAll('.modeSel');
buttons.forEach(button => button.addEventListener('mouseover', hoverIn));
buttons.forEach(button => button.addEventListener('mouseout', hoverOut));
buttons.forEach(button => button.addEventListener('click', buttonPress));

const dimensions = document.querySelectorAll('.dim');
dimensions.forEach(dim => dim.addEventListener('click', dimPress));

function hoverIn(e) {
    e.target.setAttribute("style", "scale: 1.1");
}

function hoverOut(e) {
    e.target.setAttribute("style", "scale: 1;");
}

function buttonPress(e) {
    updateSelectedBtn(e);
    if (e.target.id === 'clear') {
        grid.innerHTML = '';
        createGrid(current_size);
    }
    else if (e.target.className !== 'dim'){
        current_mode = e.target.id;
    }
}


function dimPress(e) {
    updateDimButton(e);
    switch(e.target.id) {
        case 'small':
            current_size = 16;
            break;
        case 'medium': 
            current_size = 32;
            break;
        case 'large':
            current_size = 64;
            break;
        case 'xLarge':
            current_size = 128;
            break;
    }
    grid.innerHTML = '';
    createGrid(current_size);
}

function updateSelectedBtn(e) {
    if (e.target.id !== 'clear' && e.target.className !== 'dim') {
        buttons.forEach(button => button.classList.remove('selected'));
        e.target.classList.add('selected');
    }
}

function updateDimButton(e) {
    dimensions.forEach(dim => dim.classList.remove('selected'));
    e.target.classList.add('selected')
}

function changeColor(e) {
    console.log("change color");
    if (e.type === 'mouseover' && !isMouseDown) return;
    if (current_mode === 'colorMode') {
        console.log(e.target);
        e.target.style.backgroundColor = current_color;
        console.log(e.target);
    }
    else if (current_mode === 'rainbowMode') {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
    }
}
//------------------- GRID --------------------//

const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#333333';
const DEFAULT_MODE = 'colorMode';
//-------------------

let current_size = DEFAULT_SIZE;
let current_mode = DEFAULT_MODE;
let current_color = DEFAULT_COLOR;

//Need to listen to when mouse is down and to when mouse is down so that it only draws when mouse is pressed. 
//It's important to listen to when mouse is up so that we can keep drawing for as long as the mouse is down.
//If we don't do this, it will only draw one square per mouse click, which is not the desired behaviour.
let isMouseDown = false;
document.body.onmousedown = () => {isMouseDown = true};
document.body.onmouseup = () => {isMouseDown = false};


const grid = document.querySelector('.grid');

function createGrid(size) {
    //Defines ${size} elements per row/column. (https://developer.mozilla.org/en-US/docs/Web/CSS/repeat);
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < size*size; i++) {
        const gridElem = document.createElement('div');
        gridElem.classList.add('gridElement');
        gridElem.addEventListener('mouseover', changeColor);
        gridElem.addEventListener('mousedown', changeColor);
        grid.append(gridElem);
    }
}




//Calls the initial functions when the window loads
window.onload = () => {
    createGrid(DEFAULT_SIZE);
}