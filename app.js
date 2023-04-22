const keyboardDiv = document.createElement("div");
const keyboardTitle = document.createElement("h1");
const keyboardArea = document.createElement("textarea");
const keyboardBody = document.createElement("div")
const keyboardLine = document.createElement("div")
const keyboardKeys = [
    { type: 'character', label: '~', value: '~' },
    { type: 'letter', label: '1', value: '1' },
    { type: 'letter', label: '2', value: '2' },
    { type: 'letter', label: '3', value: '3' },
    { type: 'letter', label: '4', value: '4' },
    { type: 'letter', label: '5', value: '5' },
    { type: 'letter', label: '6', value: '6' },
    { type: 'letter', label: '7', value: '7' },
    { type: 'letter', label: '8', value: '8' },
    { type: 'letter', label: '9', value: '9' },
    { type: 'letter', label: '0', value: '0' },
    { type: 'character', label: '-', value: '-' },
    { type: 'character', label: '=', value: '=' },
    { type: 'special', label: 'Backspace', value: 'Backspace' },

    { type: 'special', label: 'Tab', value: 'Tab' },
    { type: 'letter', label: 'Q', value: 'q' },
    { type: 'letter', label: 'W', value: 'w' },
    { type: 'letter', label: 'E', value: 'e' },
    { type: 'letter', label: 'R', value: 'r' },
    { type: 'letter', label: 'T', value: 't' },
    { type: 'letter', label: 'Y', value: 'y' },
    { type: 'letter', label: 'U', value: 'u' },
    { type: 'letter', label: 'I', value: 'i' },
    { type: 'letter', label: 'O', value: 'o' },
    { type: 'letter', label: 'P', value: 'p' },
    { type: 'character', label: '[', value: '[' },
    { type: 'character', label: ']', value: ']' },
    { type: 'special', label: 'Enter', value: 'Enter' },

    { type: 'special', label: 'Caps Lock', value: 'Caps Lock' },
    { type: 'letter', label: 'A', value: 'a' },
    { type: 'letter', label: 'S', value: 's' },
    { type: 'letter', label: 'D', value: 'd' },
    { type: 'letter', label: 'F', value: 'f' },
    { type: 'letter', label: 'G', value: 'g' },
    { type: 'letter', label: 'H', value: 'h' },
    { type: 'letter', label: 'J', value: 'j' },
    { type: 'letter', label: 'K', value: 'k' },
    { type: 'letter', label: 'L', value: 'l' },
    { type: 'letter', label: ';', value: 'p' },
    { type: 'character', label: "'", value: "'" },
    { type: 'character', label: '\\', value: '\\' },

    { type: 'special', label: 'Shift', value: 'Shift' },
    { type: 'character', label: '\\', value: '\\' },
    { type: 'letter', label: 'Z', value: 'Z' },
    { type: 'letter', label: 'X', value: 'X' },
    { type: 'letter', label: 'C', value: 'C' },
    { type: 'letter', label: 'V', value: 'V' },
    { type: 'letter', label: 'B', value: 'B' },
    { type: 'letter', label: 'N', value: 'N' },
    { type: 'letter', label: 'M', value: 'M' },
    { type: 'character', label: ',', value: ',' },
    { type: 'character', label: '.', value: '.' },
    { type: 'character', label: '/', value: "/" },
    { type: 'special', label: 'Shift', value: 'Shift' },
];


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
    keyboardKey.className = "keyboard_key key";

    if (keyboardKeys[i].label === 'Backspace') {
        keyboardKey.classList.add('backspace');
    } else if (keyboardKeys[i].label === 'Tab') {
        keyboardKey.classList.add('tab');
    } else if (keyboardKeys[i].label === 'Enter') {
        keyboardKey.classList.add('enter');
    } else if (keyboardKeys[i].label === 'Caps Lock') {
        keyboardKey.classList.add('caps');
    } else if (keyboardKeys[i].label === 'Shift') {
        keyboardKey.classList.add('shift');
    }

    const keyboardLabel = document.createElement("span");
    keyboardLabel.className = "keyboard_label label";
    keyboardLabel.innerHTML = keyboardKeys[i].value;

    keyboardKey.appendChild(keyboardLabel);

    keyboardKey.addEventListener("click", () => {
        console.log("клавиша нажата", keyboardKeys[i].value)
    });
    keyboardLine.appendChild(keyboardKey);
}