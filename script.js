const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('mouseover', hoverIn));
buttons.forEach(button => button.addEventListener('mouseout', hoverOut));

function hoverIn(e) {
    e.target.setAttribute("style", "scale: 1.1");
}

function hoverOut(e) {
    e.target.setAttribute("style", "scale: 1;");
}