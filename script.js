// script.js
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

document.querySelector('#contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const serviceID = 'kidus-yosef';
  const templateID = 'YOUR_TEMPLATE_ID';

  emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
          alert('Message sent! We will get back to you soon.');
          document.querySelector('#contact-form').reset();
      }, (err) => {
          alert(JSON.stringify(err));
      });
});