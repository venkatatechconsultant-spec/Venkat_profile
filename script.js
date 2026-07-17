const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const copyEmailButton = document.querySelector('[data-copy-email]');
const copyPhoneButton = document.querySelector('[data-copy-phone]');
const copyStatus = document.querySelector('[data-copy-status]');
const email = 'venkata.techconsultant@gmail.com';
const phone = '+91 7901646465';


const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || savedTheme === 'light') {
  root.dataset.theme = savedTheme;
}

function updateThemeIcon() {
  if (!themeToggle) return;
  const icon = themeToggle.querySelector('span');
  if (icon) {
    icon.textContent = root.dataset.theme === 'dark' ? '?' : '?';
  }
}

updateThemeIcon();

themeToggle?.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
  updateThemeIcon();
});

copyEmailButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(email);
    if (copyStatus) {
      copyStatus.innerHTML = `Email copied: ${email}<br>Phone: ${phone}<br>Location: Hyderabad, India`;
    }
  } catch {
    if (copyStatus) {
      copyStatus.innerHTML = `Email: ${email}<br>Phone: ${phone}<br>Location: Hyderabad, India`;
    }
  }
});

copyPhoneButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(phone);
    if (copyStatus) {
      copyStatus.innerHTML = `Phone copied: ${phone}<br>Email: ${email}<br>Location: Hyderabad, India`;
    }
  } catch {
    if (copyStatus) {
      copyStatus.innerHTML = `Phone: ${phone}<br>Email: ${email}<br>Location: Hyderabad, India`;
    }
  }
});


const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => revealObserver.observe(item));
