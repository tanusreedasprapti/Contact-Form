document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for validation
    let valid = true;

    // Name validation
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name';
        nameError.style.display = 'block';
        valid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Email validation
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        emailError.textContent = 'Please enter a valid email';
        emailError.style.display = 'block';
        valid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Message validation
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Please enter a message';
        messageError.style.display = 'block';
        valid = false;
    } else {
        messageError.style.display = 'none';
    }

    // Submit form if all fields are valid
    if (valid) {
        alert('Form submitted successfully!');
        // Optionally, you can proceed with form submission using Ajax or some backend logic here
    }
});
