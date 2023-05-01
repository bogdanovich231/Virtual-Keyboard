import keyboardKeys from "engKeyboard.js";
import "animationKey.js";
import "mouseKey.js";
import "capsKey.js";
const keyboardDiv = document.createElement("div");
const keyboardTitle = document.createElement("h1");
const keyboardArea = document.createElement("textarea");
const keyboardBody = document.createElement("div")
const keyboardLine = document.createElement("div")


keyboardDiv.className = "keyboard";
keyboardTitle.className = "keyboard_title";
keyboardTitle.innerHTML = "RSS Virtual Keyboard"
keyboardArea.className = "keyboard_textarea textarea"
keyboardBody.className = "keyboard_body"
keyboardLine.className = "keyboard_line line"

document.body.append(keyboardDiv);
keyboardDiv.prepend(keyboardTitle);
keyboardDiv.append(keyboardArea, keyboardBody);
keyboardBody.append(keyboardLine);




for (let i = 0; i < keyboardKeys.length; i++) {
    const keyboardKey = document.createElement("button");
    keyboardKey.className = "keyboard_key key data-letter data-code";
    keyboardKey.setAttribute("data-letter", keyboardKeys[i].value.toLowerCase());
    keyboardKey.setAttribute("data-code", keyboardKeys[i].code);

    if (keyboardKeys[i].label === 'Backspace') {
        keyboardKey.classList.add('backspace');
    } else if (keyboardKeys[i].label === 'Tab') {
        keyboardKey.classList.add('tab');
    } else if (keyboardKeys[i].label === 'Enter') {
        keyboardKey.classList.add('enter');
    } else if (keyboardKeys[i].label === 'Caps Lock') {
        keyboardKey.classList.add('caps');
    } else if (keyboardKeys[i].label === 'shiftLeft') {
        keyboardKey.classList.add('shiftLeft');
    } else if (keyboardKeys[i].label === 'shiftRight') {
        keyboardKey.classList.add('shiftRight');
    } else if (keyboardKeys[i].label === 'Space') {
        keyboardKey.classList.add('space');
    } else if (keyboardKeys[i].label === 'left' || keyboardKeys[i].label === 'right') {
        keyboardKey.classList.add('control');
    }

    const keyboardSpan = document.createElement("span");
    keyboardSpan.className = "keyboard_span span";
    keyboardSpan.innerHTML = keyboardKeys[i].value;

    keyboardKey.appendChild(keyboardSpan);
    keyboardLine.appendChild(keyboardKey);
};

