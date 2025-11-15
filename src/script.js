document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    // Seleciona o ícone DENTRO do botão de tema
    const themeIcon = themeToggle.querySelector('i'); // <-- NOVO

    const savedTheme = localStorage.getItem('theme');

    // 1. LÓGICA DE INICIALIZAÇÃO
    // -------------------------
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        body.classList.add('dark-theme');
        themeIcon.classList.add('fa-sun');     // Mostra o Sol (para indicar que pode voltar para o Claro)
        themeIcon.classList.remove('fa-moon'); // Remove a Lua
    } else {
        themeIcon.classList.add('fa-moon');    // Mostra a Lua (para indicar que pode ir para o Escuro)
        themeIcon.classList.remove('fa-sun');  // Remove o Sol
    }


    // 2. LÓGICA DE CLIQUE
    // -------------------
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.add('fa-sun');
            themeIcon.classList.remove('fa-moon');
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.add('fa-moon');
            themeIcon.classList.remove('fa-sun');
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