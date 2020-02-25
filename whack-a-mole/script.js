const holes = document.querySelectorAll(".hole")
const moles = document.querySelectorAll(".mole")
const scoreBoard = document.querySelector(".score")
const start = document.querySelector("button")

let lastHole;
let isTimeUp = false
let score = 0
let resetGame

function randomTime(min, max) {
    const time = Math.round(Math.random() * (max - min) + min)

    return time
}

function randomHole(holes) {
    const index = Math.floor(Math.random() * holes.length)

    const hole = holes[index]

    if (hole === lastHole) {
        return randomHole(holes)
    }

    lastHole = hole
    return hole
}

function showRandonMole() {

    const time = randomTime(200, 1000)
    const hole = randomHole(holes)

    hole.classList.add("up")

    setTimeout(() => {
        hole.classList.remove("up")
        if (!isTimeUp) showRandonMole();
    }, time)
}

function startGame() {
    score = 0
    scoreBoard.textContent = score
    start.disabled = true
    clearTimeout(resetGame)
    isTimeUp = false
    showRandonMole()
    resetGame = setTimeout(() => {
        isTimeUp = true
        start.disabled = false
    }, 10000)
}

function hitMole(e) {
    if (!e.isTrusted) return

    score++
    this.parentNode.classList.remove("up")
    scoreBoard.textContent = score

}

moles.forEach(mole => mole.addEventListener('click', hitMole))