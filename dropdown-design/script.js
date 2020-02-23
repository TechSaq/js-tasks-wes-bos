const navItems = document.querySelectorAll(".menu>li")
const dropdownBg = document.querySelector(".dropdown-bg")
const nav = document.querySelector(".menu")

function handleEnter(e) {

}

function handleLeave(e) {}

navItems.forEach(item => item.addEventListener('mouseenter', handleEnter))
navItems.forEach(item => item.addEventListener('mouseleave', handleLeave))