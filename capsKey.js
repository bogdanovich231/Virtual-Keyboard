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