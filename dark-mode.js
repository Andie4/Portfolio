//inspiration de : https://youtu.be/_gKEUYarehE?si=SdteZGfOJ6iRP-kk
let darkmode = localStorage.getItem('darkmode');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
};

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
};


if (darkmode === 'active') {
    enableDarkmode();
}

const themeSwitch = document.getElementById('theme-switch');

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    if (darkmode !== "active") {
        enableDarkmode();
    } else {
        disableDarkmode();
    }
});
