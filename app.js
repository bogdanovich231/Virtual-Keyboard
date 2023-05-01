const keyboardDiv = document.createElement("div");
const keyboardTitle = document.createElement("h1");
const keyboardArea = document.createElement("textarea");
const keyboardBody = document.createElement("div")
const keyboardLine = document.createElement("div")

const keyboardKeys = [
    { type: 'character', label: '`', value: '`' },
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

    { type: 'special', label: 'shiftLeft', value: 'Shift' },
    { type: 'character', label: '\\', value: '\\' },
    { type: 'letter', label: 'Z', value: 'z' },
    { type: 'letter', label: 'X', value: 'x' },
    { type: 'letter', label: 'C', value: 'c' },
    { type: 'letter', label: 'V', value: 'v' },
    { type: 'letter', label: 'B', value: 'b' },
    { type: 'letter', label: 'N', value: 'n' },
    { type: 'letter', label: 'M', value: 'm' },
    { type: 'character', label: ',', value: ',' },
    { type: 'character', label: '.', value: '.' },
    { type: 'character', label: '/', value: "/" },
    { type: 'special', label: 'up', value: '↑' },
    { type: 'special', label: 'shiftRight', value: 'Shift' },

    { type: 'special', label: 'Control', value: 'Ctrl' },
    { type: 'special', label: 'Fn', value: 'Fn' },
    { type: 'special', label: 'Command', value: 'Cm' },
    { type: 'special', label: 'Alt', value: 'Alt' },
    { type: 'special', label: 'Space', value: '' },
    { type: 'special', label: 'Alt', value: 'Alt' },
    { type: 'special', label: 'Control', value: 'Ctrl' },
    { type: 'control', label: 'left', value: '←' },
    { type: 'control', label: 'down', value: '↓' },
    { type: 'control', label: 'right', value: '→' },

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
let ctrlKey = false;

keyboardArea.addEventListener('keydown', function (e) {
    if (e.key === 'Control') {
        ctrlKey = true;
        keyboardLine.querySelector('[data-letter="ctrl"]').classList.add('active');
    } else {
        keyboardLine.querySelectorAll('.keyboard_key').forEach(function (key) {
            if (e.key == key.getAttribute('data-letter').toLowerCase() ||
                e.code == key.getAttribute('data-code')) {
                key.classList.add('active');
            } else if (e.key == key.getAttribute('data-letter').toUpperCase() && key.getAttribute('data-letter').length === 1) {
                key.classList.add('active');
            }
        });
    }
});

keyboardArea.addEventListener('keyup', function (e) {
    if (e.key === 'Control') {
        ctrlKey = false;
        keyboardLine.querySelector('[data-letter="ctrl"]').classList.remove('active');
    } else {
        keyboardLine.querySelectorAll('.keyboard_key').forEach(function (key) {
            if (e.key == key.getAttribute('data-letter').toLowerCase() ||
                e.code == key.getAttribute('data-code')) {
                key.classList.remove('active');
                key.classList.add('remove');
            } else if (e.key == key.getAttribute('data-letter').toUpperCase() && key.getAttribute('data-letter').length === 1) {
                key.classList.remove('active');
                key.classList.add('remove');
            }
        });
    }
});


const capsLockButton = document.querySelector('[data-letter="caps lock"]');
let isCapsLockEnabled = false;

document.addEventListener('keydown', function (event) {
    if (event.key === 'CapsLock') {
        isCapsLockEnabled = !isCapsLockEnabled;
        const keys = document.querySelectorAll('.keyboard_key');

        keys.forEach(function (key) {
            const letter = key.getAttribute('data-letter');
            if (letter.length === 1 && letter.match(/[a-z]/i)) {
                key.textContent = isCapsLockEnabled ? letter.toUpperCase() : letter.toLowerCase();
            }
        });

        if (isCapsLockEnabled) {
            capsLockButton.classList.add('active');
        } else {
            capsLockButton.classList.remove('active');
        }
    }

});



