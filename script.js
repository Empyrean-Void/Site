document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('site-menu');
  const menu = document.querySelector('.header-nav');
  const themeToggle = document.getElementById('theme-toggle');

  // Toggle the hamburger menu
  const toggleMenu = () => {
    menu.classList.toggle('is-active');
    menuButton.textContent = menu.classList.contains('is-active') ? 'close' : 'menu';
  };

  menuButton.addEventListener('click', toggleMenu);

  // Reverse the theme logic
  const updateTheme = () => {
    const isLightTheme = document.body.classList.toggle('light-theme');
    themeToggle.textContent = isLightTheme ? 'dark_mode' : 'sunny';
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
  };

  themeToggle.addEventListener('click', updateTheme);

  // Initialize the theme based on local storage or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeToggle.textContent = 'dark_mode';
  } else {
    themeToggle.textContent = 'sunny';
  }
});
