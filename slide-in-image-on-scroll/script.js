const images = document.querySelectorAll(".slide-in");

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function activeSlide() {

    images.forEach(image => {
        const slideAt = scrollY + innerHeight - image.height / 2;

        const imageBottom = image.offsetTop + image.height;

        const isSlide = slideAt > image.offsetTop;
        const isVisible = scrollY < imageBottom;

        if (isSlide && isVisible) {
            image.classList.add("active")
            image.classList.remove("slide-in")
        } else {
            image.classList.add("slide-in")
            image.classList.remove("active")
        }
    })
}

window.addEventListener("scroll", debounce(activeSlide));