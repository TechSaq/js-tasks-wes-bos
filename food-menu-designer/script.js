const items = JSON.parse(localStorage.getItem('items')) || [];

const dishes = document.querySelector(".dishes")
const submit = document.querySelector(".submit")


function addItem(e) {
    const name = (this.querySelector("[name='item']")).value;
    item = {
        name,
        isChecked: false
    };

    items.push(item);

    localStorage.setItem('items', JSON.stringify(items));

    console.table(items)
    displayItem(items, dishes)
    this.reset();
}

function displayItem(items = [], dishes) {


    dishes.innerHTML = items.map((dish, i) => {
        return `
            <li>
                <input type="checkbox" data-index="${i}" id="item${i}" ${dish.done?'checked':''}>
                <label for="item${i}">${dish.name}</label>
            </li>`
    }).join('');
}

function toggleDone(e) {
    if (!e.target.matches('input')) {
        return
    }

    const checkbox = e.target;
    const index = checkbox.dataset.index;
    items[index].done = !items[index].done
    localStorage.setItem('items', JSON.stringify(items))
    displayItem(items, dishes)

}

submit.addEventListener("submit", addItem)
dishes.addEventListener('click', toggleDone)


displayItem(items, dishes)