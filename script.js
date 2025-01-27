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

// search engine
function toggleEngine() {
    var gSearch = document.getElementById("google-search");
    var dSearch = document.getElementById("ddg-search");
    var logo = document.getElementById("engine-logo").src;

    if (logo.indexOf("duck.svg") != -1) {
        document.getElementById("engine-logo").src = "imgs/google.svg";
        gSearch.style.display = "block";
        dSearch.style.display = "none";
    } else {
        document.getElementById("engine-logo").src = "imgs/duck.svg";
        dSearch.style.display = "block";
        gSearch.style.display = "none";
    }

    document.getElementsByClassName("input-box").reset();
}
