const header = document.querySelector(".mover")
const h = document.querySelector("h1")

function mover(e) {
    const width = header.offsetWidth;
    const height = header.offsetHeight;
    const walk = 100;
    let x = e.offsetX;
    let y = e.offsetY;

    const xWalk = (x / width * walk) - walk / 2;
    const yWalk = (y / width * walk) - walk / 2;



    console.log(xWalk, yWalk)

    h.style.textShadow = `${xWalk}px ${yWalk}px rgba(255,0,0,0.6)`;
}

header.addEventListener('mousemove', mover)