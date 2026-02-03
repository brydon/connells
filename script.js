// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Animate hamburger icon
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// ============================================
// EmailJS Configuration
// ============================================
// TODO: Replace these with your actual EmailJS credentials
// Get them from: https://dashboard.emailjs.com/
const EMAILJS_PUBLIC_KEY = '9Ga7vLye3Tm-UpXOW';
const EMAILJS_SERVICE_ID = 'service_oogdrab';
const EMAILJS_TEMPLATE_ID = 'template_ix5pp3e';

// Initialize EmailJS
(function() {
    if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
})();

// Contact Form Handler with EmailJS
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Check if EmailJS is configured
        if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE') {
            alert('EmailJS is not configured yet. Please follow the setup instructions in EMAILJS_SETUP.md');
            return;
        }

        // Get the submit button
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;

        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        // Send email using EmailJS
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm)
            .then(function(response) {
                // Success
                console.log('Email sent successfully:', response);
                alert('Thank you for your message! We will get back to you shortly.');
                contactForm.reset();
            }, function(error) {
                // Error
                console.error('Failed to send email:', error);
                alert('Sorry, there was an error sending your message. Please try again or call us at 705-927-1323.');
            })
            .finally(function() {
                // Re-enable button
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            });
    });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to nav on scroll (optional enhancement)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
});
