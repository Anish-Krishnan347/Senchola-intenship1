document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value
    var cpassword = document.getElementById('cpassword').value

    // Reset error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passError').textContent = '';
    document.getElementById('cpassError').textContent = '';

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

    if (password === '') {
        document.getElementById('passError').textContent = 'password is required';
        return;
    }
    else if (password.length < 8) {
        document.getElementById('passError').textContent = 'password must be atlest 8 characters';
        return;
    }

    if (cpassword === '') {
        document.getElementById('cpassError').textContent = 'confirm password required';
        return;
    }

    else if (cpassword !== password) {
        document.getElementById('cpassError').textContent = 'password not match';
        return;
    }



    // Form is valid, you can submit the data to the server here
    alert('Form submitted successfully');
});
