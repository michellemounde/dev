function activateLightTheme() {
  const html = document.querySelector('html');
  const buttons = document.querySelectorAll('a.button');
  const themeToggler = document.getElementById('theme-toggle-button');
  const lightTheme = themeToggler.querySelector('div.light-theme');

  lightTheme.addEventListener('click', () => {
    if (html.classList.contains('dark-theme')) {
      html.classList.remove('dark-theme');
    }
    html.classList.add('light-theme');

    buttons.forEach((button) => {
      button.classList.add('primary');
    });

    themeToggler.ariaLabel = 'Change to dark mode';
    themeToggler.title = 'Change to dark mode';
  });
}

function activateDarkTheme() {
  const html = document.querySelector('html');
  const buttons = document.querySelectorAll('a.button');
  const themeToggler = document.getElementById('theme-toggle-button');
  const darkTheme = themeToggler.querySelector('div.dark-theme');

  darkTheme.addEventListener('click', () => {
    if (html.classList.contains('light-theme')) {
      html.classList.remove('light-theme');
    }
    html.classList.add('dark-theme');

    buttons.forEach((button) => {
      button.classList.remove('primary');
    });

    themeToggler.ariaLabel = 'Change to light mode';
    themeToggler.title = 'Change to light mode';
  });
}

export {
  activateDarkTheme,
  activateLightTheme,
};
