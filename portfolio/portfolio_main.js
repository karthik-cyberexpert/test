// script.js

// Add event listener to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add event listener to contact form
document.querySelector('#contact form').addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
    // Send form data to server or API
});