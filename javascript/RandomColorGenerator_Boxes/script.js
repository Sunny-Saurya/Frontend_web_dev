let boxes = document.getElementsByClassName("box") // it gives us HTMLcollection so we have to convert it into an array so that we can apply for each

function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255) // we use this formula to get random color. we make formula for RGB COLOR rgb(55, 164, 0), it has three color code 1,2,3. 
    let val2 = Math.ceil(0 + Math.random() * 255)
    let val3 = Math.ceil(0 + Math.random() * 255)
    
    return `rgb(${val1}, ${val2}, ${val3})`
}
Array.from(boxes).forEach(e =>{
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})


