const eventLog = document.getElementById('eventLog');
const form = document.getElementById('eventForm');

function logEvent(eventType, details) {
    const eventElement = document.createElement('div');
    eventElement.className = 'event';
    eventElement.textContent = `${new Date().toLocaleTimeString()} - ${eventType}: ${details}`;
    if (eventLog.textContent === "No events yet...") eventLog.textContent = ""; // Clear initial message
    eventLog.prepend(eventElement);
}

// Log when user types in any input field
form.addEventListener('input', (e) => {
    logEvent('Input', `Field: ${e.target.name}, Value: ${e.target.value}`);
});

// Log form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    logEvent('Form Submitted', `Name: ${form.name.value}, Email: ${form.email.value}`);
    form.reset(); // Clear form after submission
});

// Log button click
form.querySelector('button').addEventListener('click', () => {
    logEvent('Button Click', 'Submit button clicked');
});