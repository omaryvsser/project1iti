// ------------------ Input Focus Highlight ------------------
const inputs = document.querySelectorAll('input, select');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.borderColor = 'darkseagreen';
        input.style.boxShadow = '0 0 5px rgba(44,82,82,0.7)';
    });
    input.addEventListener('blur', () => {
        input.style.borderColor = '#ccc';
        input.style.boxShadow = 'none';
    });
});
