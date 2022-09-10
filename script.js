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
    buttons.forEach(button => button.classList.remove('selected'));
    e.target.classList.add('selected');
    if (e.target.id == 'clear') {
        e.target.classList.remove('selected');
    }
}