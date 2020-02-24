const slider = document.querySelector(".slider")

let isDown = false
let startX;
let scrollLeft;


slider.addEventListener('mousedown', (e) => {
    isDown = true
    slider.classList.add("make-drag")
    startX = e.x
    scrollLeft = slider.scrollLeft
})

slider.addEventListener('mouseup', (e) => {
    isDown = false
    slider.classList.remove("make-drag")
})

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.x
    const move = (x - startX) * 3
    slider.scrollLeft = scrollLeft - move
})

slider.addEventListener('mouseleave', (e) => {
    isDown = false;
    slider.classList.remove("make-drag");
})