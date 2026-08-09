(() => {
  const navLinks = [...document.querySelectorAll('[data-nav]')];
  const sections = navLinks.map(link => document.getElementById(link.dataset.nav)).filter(Boolean);
  if (sections.length && 'IntersectionObserver' in window) {
    const sync = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => link.removeAttribute('aria-current'));
      document.querySelector(`[data-nav="${entry.target.id}"]`)?.setAttribute('aria-current', 'page');
    }), { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
    sections.forEach(section => sync.observe(section));
  }
  document.querySelectorAll('a[download]').forEach(link => link.addEventListener('click', () => {
    const language = document.documentElement.lang === 'fa';
    let feedback = link.parentElement.querySelector('.download-feedback');
    if (!feedback) { feedback = document.createElement('p'); feedback.className = 'download-feedback'; link.insertAdjacentElement('afterend', feedback); }
    feedback.textContent = language ? 'دانلود شروع شد؛ اگر انجام نشد، اجازهٔ دانلود مرورگر را بررسی کن.' : 'Download started. If it did not start, check your browser download permission.';
  }));
})();
