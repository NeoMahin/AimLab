let circles = document.querySelectorAll('.circle');
let point = document.querySelector('.point');
let start = document.querySelector('.start');
let overlay = document.querySelector('.overlay');

start.addEventListener('click', () => {
    overlay.classList.add('hidden');
    circles.forEach(circle => {
    circle.classList.remove('hidden');
    })
});

if(overlay.classList.contains('block')) {
    circles.forEach(circle => {
        circle.classList.add('hidden');
    })

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
