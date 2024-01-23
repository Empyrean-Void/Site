document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-menu');
    const menu = document.getElementById('menu');
    const links = document.querySelectorAll('.header-nav ul li a');
    const themeToggle = document.getElementById('theme-toggle');

    // Toggle the hamburger menu
    const toggleMenu = () => {
        menu.parentElement.classList.toggle('transition');
        menu.parentElement.style.display = menu.parentElement.style.display === 'block' ? 'none' : 'block';
    };

    hamburger.addEventListener('click', toggleMenu);
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 600) {
                toggleMenu();
            }
        });
    });

    // Update the theme and save to local storage
    const updateTheme = () => {
        const isDarkTheme = document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    };

    if (themeToggle) {
        themeToggle.addEventListener('change', updateTheme);
    }

    // Set the initial theme state from local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.toggle('dark-theme', savedTheme === 'dark');
        if (themeToggle) {
            themeToggle.checked = savedTheme === 'dark';
        }
    }
});
