/*

Mouse Events

    click: Fires when the user clicks an element.
    dblclick: Fires when the user double-clicks an element.
    mousedown: Fires when the user presses a mouse button over an element.
    mouseup: Fires when the user releases a mouse button over an element.
    mouseover: Fires when the user moves the mouse pointer over an element.
    mouseout: Fires when the user moves the mouse pointer away from an element.
    mousemove: Fires when the user moves the mouse pointer over an element.

Keyboard Events

    keydown: Fires when the user presses a key on the keyboard.
    keypress: Fires when the user presses a key on the keyboard (similar to keydown, but only for printable characters).
    keyup: Fires when the user releases a key on the keyboard.

Form Events

    submit: Fires when a form is submitted (e.g., when the user clicks a submit button).
    reset: Fires when a form is reset (e.g., when the user clicks a reset button).
    change: Fires when the value of a form element changes (e.g., when the user selects a new option in a dropdown).
    input: Fires when the value of a form element changes (e.g., when the user types something in a text input).
    focus: Fires when a form element receives focus (e.g., when the user clicks or tabs into a text input).
    blur: Fires when a form element loses focus (e.g., when the user clicks or tabs away from a text input).


*/

let darkMode = document.querySelector(".fa-solid ")

darkMode.addEventListener("click", () =>{
    document.querySelector("body").style.backgroundColor = "#212121";
    document.querySelector(".container").style.color = "#fff"
    document.getElementById("contact").style.backgroundColor = "#212121"
    document.getElementById("contact").style.color = "#fff"
    document.getElementById("contact").style.border = "3px solid green"
})



