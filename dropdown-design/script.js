const navItems = document.querySelectorAll(".menu>li")
const dropdownBg = document.querySelector(".dropdown-bg")
const nav = document.querySelector("nav")

function handleEnter(e) {

    this.classList.add("dropdown-enter")
    dropdownBg.classList.add("open")

    setTimeout(() => this.classList.contains("dropdown-enter") && this.classList.add("dropdown-active"), 150);

    const dropdown = this.querySelector(".dropdown")
    const dropdownCoords = dropdown.getBoundingClientRect()

    const coords = {
        width: dropdownCoords.width,
        height: dropdownCoords.height,
        top: dropdownCoords.top,
        left: dropdownCoords.left
    }

    dropdownBg.style.setProperty('width', `${coords.width}px`)
    dropdownBg.style.setProperty('height', `${coords.height}px`)
    dropdownBg.style.setProperty('transform', `translate(${coords.left}px,${coords.top}px)`)
}

function handleLeave(e) {
    this.classList.remove("dropdown-enter", "dropdown-active")
    dropdownBg.classList.remove("open")
}

navItems.forEach(item => item.addEventListener('mouseenter', handleEnter))
navItems.forEach(item => item.addEventListener('mouseleave', handleLeave))