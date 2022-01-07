
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,25,4,5,635,54,53,24,23,434,43,45,56,22,14,46,643]

const numberOfData = data.length
const numberPerPage = 5
let currentPage = 1
const numberOfPages = Math.ceil(numberOfData / numberPerPage)

buildpage(currentPage)

function buildpage(currentPage) {
    let trimstart = (currentPage - 1) * numberPerPage
    let trimend = trimstart + numberPerPage
    const newData = data.slice(trimstart, trimend)
    console.log(newData)
    let text = "<ul>";
    for (let i = 0; i < newData.length; i++) {
        text += "<li>" + newData[i] + "</li>";
    }
    text += "</ul>";

    document.getElementById("data").innerHTML = text;
}


for (let i = 0; i < numberOfPages; i++) {
    document.querySelector('.paginator').insertAdjacentHTML("beforeend", `<button class="btn btn-primary"
    value="${i + 1}" onclick="buildpage(${i + 1})">${i + 1}</button>`)
}
