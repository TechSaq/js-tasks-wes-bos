const header = document.querySelector(".mover")
const h = document.querySelector("h1")

function mover(e) {
    const width = header.offsetWidth;
    const height = header.offsetHeight;
    const walk = 150;
    let x = e.offsetX;
    let y = e.offsetY;

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / width * walk) - (walk / 2));



    console.log(xWalk, yWalk)

    h.style.textShadow = `
    ${xWalk}px ${yWalk}px rgba(255,0,0,0.6), 
    ${xWalk*-1}px ${yWalk}px rgba(0,255,0,0.6),
    ${yWalk}px ${xWalk*-1}px rgba(0,0,255,0.6),
    ${yWalk*-1}px ${xWalk}px rgba(255,255,0,0.6)
    `;
}
header.addEventListener('mousemove', mover)