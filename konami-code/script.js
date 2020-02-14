const keys = [];

function showUnicorn(e) {
    keys.push(e.key)

    const secretCode = "zeeser"

    let myCode = keys.join('').slice(keys.length - secretCode.length, keys.length)
    if (secretCode === myCode) {
        cornify_add();
    }
}

window.addEventListener('keyup', showUnicorn);