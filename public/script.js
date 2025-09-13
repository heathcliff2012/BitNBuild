document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.form-input');

    inputs.forEach(input => {
        // Add a class when an input is focused for styling
        input.addEventListener('focus', () => {
            input.classList.add('is-focused');
        });

        // Remove the class when focus is lost
        input.addEventListener('blur', () => {
            input.classList.remove('is-focused');
        });
    });
});

function button() {
    
    
}
