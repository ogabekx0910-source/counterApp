const pilus = document.querySelector(".pilus")
const del = document.querySelector(".del")
const minus = document.querySelector(".minus")
const number = document.querySelector(".p")
let count = 0
pilus.onclick = function () {
    count++ 
    number.textContent = count
}
minus.onclick = function () {
    if (count > 0) {
        count--
        number.textContent = count
    }
}
del.onclick = function () {
    count = 0
    number.textContent = count
}