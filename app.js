const colors = ['red', 'green', 'rgb(18,14,67)', 'rgb(70,178,230)'];
// console.log(colors[1]);
// Selected btn and color element from document object
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

// Event listener handle on btn here
btn.addEventListener('click', function () {
    const randomColor = getRandomColors();
    color.textContent = colors[randomColor];
    document.body.style.backgroundColor = colors[randomColor];

});

// Get random function 

function getRandomColors() {
    return Math.floor(Math.random() * colors.length);
}