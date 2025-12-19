const loginBtn = document.querySelector('.login-btn');

loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    alert('Logged in successfully!');
});

const loginInputs = document.querySelectorAll('.login-card input');

loginInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.borderColor = '#1f4b4b'; 
        input.style.boxShadow = '0 0 5px rgba(31,75,75,0.5)';
    });

    input.addEventListener('blur', () => {
        input.style.borderColor = '#ccc';
        input.style.boxShadow = 'none';
    });
});
