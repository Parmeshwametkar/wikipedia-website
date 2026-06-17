// your code goes here
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Handle Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevents page reload
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        // Simple customized confirmation message
        alert(`Thank you, ${name}! Your request has been received. Our team will contact you at ${email} shortly.`);
        
        // Clear the form fields
        contactForm.reset();
    });

    // 2. Dynamic 'Book Test Ride' buttons
    const testRideButtons = document.querySelectorAll('.buy-btn');
    
    testRideButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const bikeName = e.target.parentElement.querySelector('h3').innerText;
            alert(`You are booking a test ride for the "${bikeName}". Please fill out the contact form below to finalize your booking!`);
            
            // Automatically scroll to contact form
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    });
});
