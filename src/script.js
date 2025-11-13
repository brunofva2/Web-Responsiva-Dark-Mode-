
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark'){
        body.classList.add('dark-theme');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')){
            localStorage.setItem('theme', 'dark');

        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    const menuToggle = document.querySelector('.menu-toggle');

    const mobileNav = document.querySelector('.mobile-nav');

    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');

        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');

    });

    const navLinks = mobileNav.querySelectorAll('a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');

            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
});