/*Thought I'd try and follow a tutorial on how to implement this, just for fun.
this script only partially works, and does not turn the contact form to darkmode.
Only works on the home page, and even then the CSS does not fully change the HTML
as it should when darkmode is enabled.*/

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
