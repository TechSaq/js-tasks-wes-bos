const drawingBoard = document.querySelector(".drawingBoard");

const ctx = drawingBoard.getContext('2d');
drawingBoard.width = window.innerWidth;
drawingBoard.height = window.innerHeight;
ctx.strokeStyle = "#bada55";
ctx.lineCap = "round";
ctx.lineJoin = "round";

let lastX = 0;
let lastY = 0;
let isDrawing = false;
let hue = 0;
let direction = true;
let lineWidth = 1;

function draw(e) {

    if (!isDrawing) return;

    ctx.strokeStyle = `hsl(${hue},90%,50%)`;
    ctx.lineWidth = lineWidth;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    [lastX, lastY] = [e.offsetX, e.offsetY]
    ctx.stroke();
    hue++;

    if (lineWidth >= 100 || lineWidth <= 1) {
        direction = !direction;
    }

    if (direction) {
        lineWidth--;
    } else {
        lineWidth++;
    }
}

drawingBoard.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]
});
drawingBoard.addEventListener('mousemove', draw);
drawingBoard.addEventListener('mouseup', () => isDrawing = false)
drawingBoard.addEventListener('mouseout', () => isDrawing = false)