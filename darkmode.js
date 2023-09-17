const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

const currentMode = localStorage.getItem('mode');

// default mode set by users browser preference
if (currentMode === 'dark' || (currentMode === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    enableDarkMode();
} else {
    enableLightMode();
}

// eventlistener for button click
toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {
    body.classList.add('dark-mode');
    localStorage.setItem('mode', 'dark');
}

function enableLightMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('mode', 'light');
}
