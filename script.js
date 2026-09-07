(() => {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelectorAll('.nav-links a');

  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  links.forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('nav-open');
    toggle?.setAttribute('aria-expanded', 'false');
  }));

  // scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // active nav link on scroll
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = Array.from(navLinks)
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = '#' + entry.target.id;
      const link = document.querySelector(`.nav-links a[href="${id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('is-active'));
        link.classList.add('is-active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  sections.forEach(section => sectionObserver.observe(section));

  // work case accordion
  document.querySelectorAll('.work-head').forEach(head => {
    const panel = head.nextElementSibling;
    head.addEventListener('click', () => {
      const isOpen = head.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.work-head').forEach(otherHead => {
        if (otherHead !== head) {
          otherHead.setAttribute('aria-expanded', 'false');
          otherHead.nextElementSibling.style.height = '0px';
        }
      });
      if (isOpen) {
        head.setAttribute('aria-expanded', 'false');
        panel.style.height = '0px';
      } else {
        head.setAttribute('aria-expanded', 'true');
        panel.style.height = panel.scrollHeight + 'px';
      }
    });
  });
  window.addEventListener('resize', () => {
    document.querySelectorAll('.work-head[aria-expanded="true"]').forEach(head => {
      head.nextElementSibling.style.height = head.nextElementSibling.scrollHeight + 'px';
    });
  });

  // toolkit tabs
  const tabs = document.querySelectorAll('.tool-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('is-active'); t.setAttribute('aria-selected', 'false'); });
      document.querySelectorAll('.tool-panel').forEach(p => p.classList.remove('is-active'));
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');
      document.getElementById(tab.dataset.target)?.classList.add('is-active');
    });
  });

  const email = 'zakiabdelrahman06@gmail.com';
  const copyButton = document.getElementById('copyEmail');
  copyButton?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      const original = copyButton.textContent;
      copyButton.textContent = 'Email copied ✓';
      setTimeout(() => { copyButton.textContent = original; }, 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });

  const form = document.getElementById('conversationForm');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const senderEmail = document.getElementById('email').value.trim();
    const topic = document.getElementById('topic').value;
    const message = document.getElementById('message').value.trim();
    if (!name || !message) return;

    const text = [
      `Hello Abdelrahman, my name is ${name}.`,
      senderEmail ? `Email: ${senderEmail}` : '',
      `Topic: ${topic}`,
      `Message: ${message}`
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/201123625329?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  });
})();
