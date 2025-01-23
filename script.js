// date
function displayDate() {
    const today = new Date();

    const options = {
        weekday: 'long', // Day of the week (e.g., "Monday")
        year: 'numeric', // Full year (e.g., "2025")
        month: 'short',  // Abbreviated month (e.g., "Jan")
        day: 'numeric'   // Day of the month (e.g., "25")
    };

    const dateString = today.toLocaleDateString("en-GB", options); // Format the date
    document.getElementById('current-date').textContent = dateString;
}

