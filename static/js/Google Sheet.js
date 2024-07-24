const scriptURL = "https://script.google.com/macros/s/AKfycbx5lxgg-p2AuF3PuI8iXLranMQw_R2fnyunkIQ2tcFM6vGQWHjKWnkOEupktqgv5rcdwA/exec";
const form = document.forms['contact-form'];
const loadingIndicator = document.getElementById('loading');

form.addEventListener('submit', e => {
    e.preventDefault();
    loadingIndicator.style.display = 'block'; // Show loading indicator

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            loadingIndicator.style.display = 'none'; // Hide loading indicator
            return response.text(); // Change response handling if needed
        })
        .then(() => {
            alert("Thank you! Your form is submitted successfully.");
            form.reset(); // Reset the form after submission
        })
        .catch(error => {
            loadingIndicator.style.display = 'none'; // Hide loading indicator on error
            console.error('Error!', error.message);
        });
});
