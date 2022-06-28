const theme = localStorage.getItem('theme');
const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

if (theme === null) {
  localStorage.setItem('theme', 'system');
  if (darkMediaQuery.matches) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.add('light');
  }
} else if (theme === 'dark') {
  document.body.classList.add('dark');
} else if (theme === 'light') {
  document.body.classList.add('light');
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark');
} else {
  document.body.classList.add('light');
}

darkMediaQuery.addEventListener('change', () => {
  if (theme === 'system') {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.replace('light', 'dark');
    } else {
      document.body.classList.replace('dark', 'light');
    }
  }
});
