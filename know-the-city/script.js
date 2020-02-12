const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';



const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data))

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function findKey(key, cities) {
    return cities.filter(place => {
        const regex = new RegExp(key, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    })
}

function resultKeys() {
    const result = findKey(this.value, cities);

    const html = result.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class = "h1">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class = "h1">${this.value}</span>`);

        return `<li>
                    <span class="name">${cityName},${stateName}</span>
                    <span class="population">${numberWithCommas(place.population)}</span>
                </li>`
    }).join('');
    ul.innerHTML = html;
}

const key = document.querySelector(".search-key");
const ul = document.querySelector(".results")

key.addEventListener('change', resultKeys);
key.addEventListener('keyup', resultKeys)