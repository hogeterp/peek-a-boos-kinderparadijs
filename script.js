const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#main-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

function openMail(subject, body) {
  const destination = 'VUL-HIER-HET-EMAILADRES-IN';
  if (destination.includes('VUL-HIER')) {
    alert('Vul eerst het e-mailadres in script.js in. De inhoud wordt nu gekopieerd zodat je die kunt bewaren.');
    navigator.clipboard?.writeText(body).catch(() => {});
    return;
  }
  window.location.href = `mailto:${destination}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(contactForm);
    openMail(
      "Kennismaking via de website",
      `Naam: ${data.get('naam')}\nE-mail: ${data.get('email')}\nTelefoon: ${data.get('telefoon') || '-'}\n\nBericht:\n${data.get('bericht')}`
    );
  });
}

const reviewForm = document.querySelector('#review-form');
if (reviewForm) {
  reviewForm.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(reviewForm);
    openMail(
      "Nieuwe review voor Peek-a-Boo's Kinderparadijs",
      `Weergavenaam: ${data.get('naam')}\nBeoordeling: ${data.get('sterren')} sterren\n\nReview:\n${data.get('review')}\n\nToestemming voor publicatie is aangevinkt.`
    );
  });
}
