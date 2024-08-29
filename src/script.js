let circles = document.querySelectorAll('.circle');
let point = document.querySelector('.point');
let start = document.querySelector('.start');
let overlay = document.querySelector('.overlay');
let body = document.querySelector('body');

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});
start.addEventListener('click', () => {
    overlay.classList.add('hidden');
    circles.forEach(circle => {
    circle.classList.remove('hidden');
    })
    body.classList.add('cursor-crosshair');
});

if(overlay.classList.contains('block')) {
    circles.forEach(circle => {
        circle.classList.add('hidden');
    })
    body.classList.remove('cursor-crosshair');

}
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function spawnCircle(circle) {
    let circleRadius = circle.offsetWidth / 2;
    let maxWidth = window.innerWidth - circle.offsetWidth;
    let maxHeight = window.innerHeight - circle.offsetHeight;
    let randomX = getRandomNumber(0, maxWidth);
    let randomY = getRandomNumber(0, maxHeight);

    circle.style.left = `${randomX}px`;
    circle.style.top = `${randomY}px`;
}

let count = 1;
circles.forEach(circle => {
    circle.addEventListener('click', () => {
        spawnCircle(circle);
        point.textContent = count++;
    });
});

circles.forEach(circle => spawnCircle(circle));
