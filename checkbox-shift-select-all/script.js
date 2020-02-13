const checkboxes = document.querySelectorAll(".inbox input[type=checkbox]")

function handleStrike() {
    checkboxes.forEach(checkbox => {
        label = checkbox.nextElementSibling;
        if (checkbox.checked) {
            label.classList.add("strike")
        } else {
            label.classList.remove("strike")
        }
    })
}

function handleShiftAll(e) {
    let inBetween = false;
    checkboxes.forEach(checkbox => {
        if (e.shiftKey && checkbox.checked) {
            inBetween = !inBetween;
        }

        if (inBetween) {
            checkbox.checked = true
            handleStrike();
        }
    })
}


handleStrike();

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleStrike))
checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleShiftAll))