const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
});

nav.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
        nav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});