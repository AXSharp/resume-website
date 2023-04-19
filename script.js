// Add class to header on scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 0);
});

window.addEventListener('scroll', function() {
  const h2 = document.querySelector('h2');
  h2.classList.toggle('scrolled', window.scrollY > 0);
});

window.addEventListener('scroll', function() {
  const p = document.querySelector('p');
  p.classList.toggle('scrolled', window.scrollY > 0);
});