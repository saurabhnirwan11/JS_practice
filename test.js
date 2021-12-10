console.log("Hello world")
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment()
{
    count += 1
    countEl.textContent = count 
    // textContent is better than innertext
}

function save()
{
    let countStr = count + " - "
    saveEl.textContent +=  countStr
    count = 0
    countEl.textContent = count
}
const person