document.addEventListener('DOMContentLoaded', () => {
    const getInTouch = document.getElementById('getInTouch');
    const contactDetailsHeading = document.getElementById('contactDetailsHeading');
    const contactDetails = document.getElementById('contactDetails');
    const contactFormSection = document.getElementById('contactFormSection');

    getInTouch.addEventListener('click', () => {
        if (!contactDetails.classList.contains('hidden')) {
            contactDetails.classList.add('slide-out-right');
            contactDetails.addEventListener('animationend', () => {
                contactDetails.classList.add('hidden');
                contactDetails.classList.remove('slide-out-right');
                contactFormSection.classList.remove('hidden');
                contactFormSection.classList.add('slide-in-left');
            }, { once: true });
        }
    });

    contactDetailsHeading.addEventListener('click', () => {
        if (!contactFormSection.classList.contains('hidden')) {
            contactFormSection.classList.add('slide-out-left');
            contactFormSection.addEventListener('animationend', () => {
                contactFormSection.classList.add('hidden');
                contactFormSection.classList.remove('slide-out-left');
                contactDetails.classList.remove('hidden');
                contactDetails.classList.add('slide-in-right');
            }, { once: true });
        }
    });

    const faqButtons = document.querySelectorAll('.faq-question');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const faq = button.parentElement;
            faq.classList.toggle('active');
        });
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        alert('Your message has been sent. Thank you for contacting us!');
        contactForm.reset();
    });
});
