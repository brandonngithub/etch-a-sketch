const container = document.querySelector('#container');
var cell;
var target; 

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

//change color when mouseover 
function changeColor(target) {
    target.style.backgroundColor = 'black';
}

container.addEventListener("mouseover", function (e) {
    target = e.target;
    if (target.matches("div.cell")) {
        changeColor(target);
    }
});

makeGrid(16);