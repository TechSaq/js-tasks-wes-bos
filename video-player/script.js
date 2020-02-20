player = document.querySelector(".player");
video = player.querySelector("video");
controlsWrapper = player.querySelector(".controls-wrapper");
progress = controlsWrapper.querySelector(".progress");
progressFilled = controlsWrapper.querySelector(".progress-filled");
playerButton = controlsWrapper.querySelector(".player-button");
skipButtons = controlsWrapper.querySelectorAll("[data-skip]");
range = controlsWrapper.querySelectorAll("[type='range']");


function togglePlay(e) {
    const updatePlay = video.paused ? video.play() : video.pause()
}

function updatePlayButton() {
    const icon = video.paused ? '&#9655' : '| |'
    playerButton.innerHTML = icon
}

function handleSkip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function updateProgress() {
    const fillPercentage = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${fillPercentage}%`
    console.log(video.currentTime)
}




video.addEventListener("click", togglePlay)
video.addEventListener("play", updatePlayButton)
video.addEventListener("pause", updatePlayButton)
video.addEventListener('timeupdate', updateProgress)

playerButton.addEventListener("click", togglePlay)

skipButtons.forEach(skip => skip.addEventListener('click', handleSkip));