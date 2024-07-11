document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("search-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const from = document.getElementById("from").value;
      const to = document.getElementById("to").value;
      const date = document.getElementById("date").value;

      console.log(`Searching for flights from ${from} to ${to} on ${date}`);
      clearSearchResults();
      const resultsContainer = document.getElementById("results");
      const flightInfo = document.createElement("div");
      flightInfo.classList.add("flight-info");
      flightInfo.innerHTML = `
        <h3>Search Results:</h3>
        <p>From: ${from}</p>
        <p>To: ${to}</p>
        <p>Date: ${date}</p>
        <p>Sample flight details...</p>
      `;
      resultsContainer.appendChild(flightInfo);
    });
  function clearSearchResults() {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
  }
});
