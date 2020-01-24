const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours();

    const secDegree = ((sec / 60) * 360) + 90;
    const minDegree = ((min / 60) * 360) + 90;
    const hourDegree = ((hour / 24) * 360) + 90;

    secHand.style.transform = 'rotate(' + secDegree + 'deg)';
    minHand.style.transform = 'rotate(' + minDegree + 'deg)';
    hourHand.style.transform = 'rotate(' + hourHand + 'deg)';

}

setInterval(setDate, 1000)