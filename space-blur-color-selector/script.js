const selectors = document.querySelectorAll(".selectors input");

function updateSelectors() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty('--' + this.name, this.value + suffix);

}

selectors.forEach(input => input.addEventListener('change', updateSelectors));
selectors.forEach(input => input.addEventListener('mousemove', updateSelectors));