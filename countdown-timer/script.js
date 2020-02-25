const countdown = document.querySelector(".countdown")
const endTime = document.querySelector(".end-time")
let interval;

const timeButtons = document.querySelectorAll("[data-time]")
const timeForm = document.querySelector(".time-form")


function timer(seconds) {
    const now = Date.now()
    const then = now + seconds * 1000

    clearInterval(interval)

    displayTimer(seconds)
    displayEndTime(then)

    interval = setInterval(function() {
        seconds--;
        if (seconds < 0) {
            clearInterval(interval)
            return
        }
        displayTimer(seconds)
    }, 1000)
}

function displayTimer(seconds) {
    const min = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;

    display = `${min}:${secondsLeft<10 ? '0' : ''}${secondsLeft}`

    document.title = display
    countdown.textContent = display
}

function displayEndTime(timestamp) {

    const end = new Date(timestamp)
    const hour = end.getHours()
    const min = end.getMinutes()

    const amORpm = hour >= 12 ? 'PM' : 'AM'
    const endDisplay = `Be Back at ${hour}:${min<10?'0':''}${min} ${amORpm}`

    endTime.textContent = endDisplay
}

function setTimer() {
    const seconds = parseInt(this.dataset.time)
    timer(seconds)
}

timeButtons.forEach(button => button.addEventListener('click', setTimer))

timeForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const seconds = timeForm.input.value * 60;
    timer(seconds)

})