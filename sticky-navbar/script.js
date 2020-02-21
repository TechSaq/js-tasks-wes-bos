const navbar = document.querySelector(".navbar")
let navTop = navbar.offsetTop


function makeNavSticky(e) {

    if (window.scrollY >= navTop) {
        document.body.style.marginTop = navbar.offsetHeight + 'px';
        document.body.classList.add("fixed-nav")
    } else {
        document.body.style.marginTop = 0
        document.body.classList.remove("fixed-nav")
    }

    console.log(navTop, window.scrollY)
}

window.addEventListener("scroll", makeNavSticky)