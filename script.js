/* BD Pig Roast — interactions + apply copy from content.js */

function getCopy(path) {
  const parts = path.split('.');
  let cur = window.SITE_COPY;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur;
}

function applySiteCopy() {
  if (!window.SITE_COPY) return;

  document.querySelectorAll('[data-copy]').forEach((el) => {
    const val = getCopy(el.getAttribute('data-copy'));
    if (val == null) return;
    el.textContent = val;
  });

  document.querySelectorAll('[data-copy-html]').forEach((el) => {
    const val = getCopy(el.getAttribute('data-copy-html'));
    if (val == null) return;
    el.innerHTML = val;
  });

  document.querySelectorAll('[data-copy-attr]').forEach((el) => {
    const val = getCopy(el.getAttribute('data-copy-attr'));
    if (val == null) return;
    if (el.tagName === 'META') {
      el.setAttribute('content', val);
    } else if (el.tagName === 'TITLE') {
      el.textContent = val;
    } else {
      el.setAttribute('content', val);
    }
  });

  // Title element uses data-copy
  const titleEl = document.querySelector('title[data-copy]');
  if (titleEl) {
    const val = getCopy(titleEl.getAttribute('data-copy'));
    if (val != null) titleEl.textContent = val;
  }

  document.querySelectorAll('[data-copy-placeholder]').forEach((el) => {
    const val = getCopy(el.getAttribute('data-copy-placeholder'));
    if (val == null) return;
    el.setAttribute('placeholder', val);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applySiteCopy();

  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header scroll state
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (!header) return;
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
    '.tradition-grid, .gallery-item, .day-card, .details-grid > *, .highlight-stage, .editorial-duo'
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
    el.style.transition =
      'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)';
    observer.observe(el);
  });

  document.querySelectorAll('.gallery-item').forEach((item, i) => {
    item.style.transitionDelay = `${i * 0.06}s`;
  });

  // RSVP: open mail client via mailto (no network form submit)
  const form = document.querySelector('.rsvp-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const people = form.people.value.trim() || '1';
      if (!name || !email) return;

      const rsvp = (window.SITE_COPY && window.SITE_COPY.rsvp) || {};
      const to = rsvp.mailtoTo || 'tom@blackdiamond.farm';
      const subjectTpl = rsvp.mailtoSubject || 'Epic Pig Roast RSVP — {name}';
      const bodyTpl =
        rsvp.mailtoBody ||
        'Name: {name}\nEmail: {email}\nNumber of people: {people}';

      const subject = encodeURIComponent(
        subjectTpl.replace('{name}', name)
      );
      const body = encodeURIComponent(
        bodyTpl
          .replace('{name}', name)
          .replace('{email}', email)
          .replace('{people}', people)
      );
      const mailto = `mailto:${to}?subject=${subject}&body=${body}`;

      const a = document.createElement('a');
      a.href = mailto;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      a.remove();

      const status = document.getElementById('rsvp-status');
      if (status) {
        status.hidden = false;
        status.textContent =
          rsvp.fallbackStatus ||
          `If your email app did not open, write ${to} with your name, email, and headcount.`;
      }
    });
  }
});
