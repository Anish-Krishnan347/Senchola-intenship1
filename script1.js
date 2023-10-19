document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Reset error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';

    // Validation
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        return;
        
    }

    // Regular expression for email validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        return;
    }

    



    // Form is valid, you can submit the data to the server here
    alert('your were login');
});
