const links = document.querySelectorAll("a")
const highlight = document.createElement("span")
highlight.classList.add("highlight")
document.body.appendChild(highlight)

function addLinkTransition() {


    let coords = this.getBoundingClientRect()

    const fixedCoords = {
        width: coords.width,
        height: coords.height,
        top: coords.top + window.scrollY,
        left: coords.left + window.scrollX
    }

    highlight.style.width = `${fixedCoords.width}px`
    highlight.style.height = `${fixedCoords.height}px`
    highlight.style.transform = `translate(${fixedCoords.left}px, ${fixedCoords.top}px)`
}


links.forEach(link => link.addEventListener('mouseenter', addLinkTransition))