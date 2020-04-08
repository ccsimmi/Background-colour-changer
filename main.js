const button = document.querySelector('input');
const body = document.querySelector('body');
const colors = ['red', 'blue', 'green', 'orange', 'yellow', 'purple'];

body.style.backgroundColor = 'violet';
button.addEventListener('click', changeBackground);


function changeBackground() {
    const index = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[index];
};

