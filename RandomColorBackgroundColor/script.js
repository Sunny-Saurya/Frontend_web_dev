let BodyColor = document.querySelector("body")
let boxes = document.getElementsByClassName("box")

function getRandomBg()
{
    let val1 = Math.ceil( 0 + Math.random() * 255)
    let val2 = Math.ceil( 0 + Math.random() * 255)
    let val3 = Math.ceil( 0 + Math.random() * 255)

    return `rgb(${val1}, ${val2}, ${val3})`
}

BodyColor.style.backgroundColor = getRandomBg();

Array.from(boxes).forEach( e => {
    e.style.backgroundColor = getRandomBg();
    e.style.color = getRandomBg();
    e.style.borderColor = getRandomBg();
})