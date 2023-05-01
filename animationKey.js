let ctrlKey = false;

keyboardArea.addEventListener('keydown', function (e) {
    if (e.key === 'Control') {
        ctrlKey = true;
        keyboardLine.querySelector('[data-letter="ctrl"]').classList.add('active');
    } else if (e.key === 'Enter') {
        keyboardLine.querySelector('[data-letter="enter"]').classList.add('active');
    } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        keyboardLine.querySelectorAll('.shiftLeft, .shiftRight').forEach(function (key) {
            key.classList.add('active');
        });
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
    } else if (e.key === 'Enter') {
        keyboardLine.querySelector('[data-letter="enter"]').classList.remove('active');
    } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        keyboardLine.querySelectorAll('.shiftLeft, .shiftRight').forEach(function (key) {
            key.classList.remove('active');
        });
    } else {
        keyboardLine.querySelectorAll('.keyboard_key').forEach(function (key) {
            if (e.key == key.getAttribute('data-letter').toLowerCase() ||
                e.code == key.getAttribute('data-code')) {
                key.classList.remove('active');
            } else if (e.key == key.getAttribute('data-letter').toUpperCase() && key.getAttribute('data-letter').length === 1) {
                key.classList.remove('active');
            }
        });
    }
});


