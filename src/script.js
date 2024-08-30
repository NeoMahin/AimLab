let circles = document.querySelectorAll('.circle');
let point = document.querySelector('.point');
let start = document.querySelector('.start');
let overlay = document.querySelector('.overlay');
let body = document.querySelector('body');
let main = document.querySelector('.main');
let timer = document.querySelector('.timer');


let sec = 30;



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
    
    if (sec >= 0) {
        const interval = setInterval(() => {
            if (sec > 0) {
                sec--;
                timer.textContent = sec;
            } else {
                clearInterval(interval);
                timer.textContent = 'Time up!';
            }
        }, 1000);
    }

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

    circle.style.left = `${Math.min(randomX, maxWidth)}px`;
    circle.style.top = `${Math.min(randomY, maxHeight)}px`;
}

let count = 1;
circles.forEach(circle => {
    circle.addEventListener('click', () => {
        spawnCircle(circle);
        point.textContent = count++;
    });
});

circles.forEach(circle => spawnCircle(circle));