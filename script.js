const form = document.querySelector('#order-form');
const message = document.querySelector('.form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = "Thanks! Hesha will be in touch soon ♡";
  form.reset();
});
