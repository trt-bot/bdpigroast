// Minimal, modern interactions for bdpigroast.com

document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header scroll state
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Subtle reveal on scroll for sections
  const revealEls = document.querySelectorAll(
    '.tradition-grid, .gallery-item, .day-card, .details-grid > *'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)';
    observer.observe(el);
  });

  // Stagger gallery items slightly
  document.querySelectorAll('.gallery-item').forEach((item, i) => {
    item.style.transitionDelay = `${i * 0.06}s`;
  });

  // Form: build mailto with name, email, headcount
  const form = document.querySelector('.rsvp-form');
  if (form) {
    form.addEventListener('submit', () => {
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const people = form.people.value.trim() || '1';
      const subject = encodeURIComponent(`Epic Pig Roast RSVP — ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nNumber of people: ${people}`
      );
      form.action = `mailto:tom@blackdiamond.farm?subject=${subject}&body=${body}`;
    });
  }
});
