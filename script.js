document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('site-menu');
    const menu = document.querySelector('.header-nav');
    const themeToggle = document.getElementById('theme-toggle');

    // Toggle the hamburger menu
    const toggleMenu = () => {
        menu.classList.toggle('is-active');
    };

    menuButton.addEventListener('click', toggleMenu);

    // Update the theme and save to local storage
    const updateTheme = () => {
        const isDarkTheme = document.body.classList.toggle('dark-theme');
        themeToggle.textContent = isDarkTheme ? 'sunny' : 'dark_mode';
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    };

    if (themeToggle) {
        themeToggle.addEventListener('click', updateTheme);
    }

    // Set the initial theme state from local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.toggle('dark-theme', savedTheme === 'dark');
        themeToggle.textContent = savedTheme === 'dark' ? 'sunny' : 'dark_mode';
    }
});
