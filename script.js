const container = document.querySelector('#container');
var cell;
var target;
var holdingMouseButton = false;
var pencilColor = "black";

//makes holdingMouseButton true if so
document.body.onmousedown = function() {
    holdingMouseButton = true;
}

document.body.onmouseup = function() {
    holdingMouseButton = false;
}

//makes columns
function makeCell(num) {
    for (var i=0; i<num; i++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

//ex. makeGrid(16) will loop 16 times making 16 columns per row
function makeGrid(num) {
    container.style.setProperty('--numRows', num); 
    container.style.setProperty('--numCols', num); 
    for (var i=0; i<num; i++) {
        makeCell(num);
    }
}

//color when click and drag
function color(target) {
    target.style.backgroundColor = pencilColor;
}

container.addEventListener("mouseover", function(e) {
    target = e.target;
    if (target.matches("div.cell") && holdingMouseButton==true) {
        color(target);
    }
});

//change pencil color
document.getElementById('brown').addEventListener("click", function(e) {
    pencilColor = "brown";
});
document.getElementById('purple').addEventListener("click", function(e) {
    pencilColor = "purple";
});
document.getElementById('red').addEventListener("click", function(e) {
    pencilColor = "red";
});
document.getElementById('orange').addEventListener("click", function(e) {
    pencilColor = "orange";
});
document.getElementById('yellow').addEventListener("click", function(e) {
    pencilColor = "yellow";
});
document.getElementById('green').addEventListener("click", function(e) {
    pencilColor = "green";
});
document.getElementById('blue').addEventListener("click", function(e) {
    pencilColor = "blue";
});
document.getElementById('black').addEventListener("click", function(e) {
    pencilColor = "black";
});
document.getElementById('pink').addEventListener("click", function(e) {
    pencilColor = "pink";
});
document.getElementById('grey').addEventListener("click", function(e) {
    pencilColor = "grey";
});


makeGrid(16);