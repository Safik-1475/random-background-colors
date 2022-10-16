const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'F'];

// Selected Element
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// handle Event Listener

btn.addEventListener('click', function () {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        // console.log(colors[i]);
        hexColor += hex[getRandomHexColor()];
    };
    console.log(hexColor);
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

// Get Random Number 
function getRandomHexColor() {
    return Math.floor(Math.random() * hex.length);
}