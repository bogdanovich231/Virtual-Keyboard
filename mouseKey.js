keyboardLine.querySelectorAll('.keyboard_key').forEach(function (key) {
    key.addEventListener('mousedown', function () {
        key.classList.add('active');
        keyboardArea.value += key.textContent;
    });

    key.addEventListener('mouseup', function () {
        key.classList.remove('active');
    });
});