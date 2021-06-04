const container = document.getElementById('container');
const changeSizeBtn = document.getElementById('change-size');

window.addEventListener('load', defaultSize)
changeSizeBtn.addEventListener('click', changeGridSize);

function defaultSize() {
    makeGrid(16, 16)
}

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let i = 0; i < (rows * cols); i++) {
        let pixel = document.createElement('div');
        pixel.addEventListener('mouseover', changeColor)
        container.appendChild(pixel).className = 'grid-item';
    }
}

function randomNum(num) {
    return Math.floor(Math.random() * (num + 1));
}

function changeColor(e) {
    e.target.style.backgroundColor = `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`;
}


function changeGridSize() {
    const newSize = prompt('Enter a number between 1 and 100.');
    if(newSize < 1 || newSize > 100) {
        alert('The number must be between 1-100.');
        changeGridSize();
    }
    clearGrid();
    setGridSize(newSize);
}

function setGridSize(num) {
    makeGrid(num, num);
}

function clearGrid() {
    // const pixel = container.querySelectorAll('div');
    // pixel.forEach(pixel => pixel.style.backgroundColor = '#ffffff');
    const gridArr = Array.from(container.childNodes);
    gridArr.forEach((element) => {
        container.removeChild(element);
    });
  }