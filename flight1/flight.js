document.addEventListener("DOMContentLoaded", function () {
  const planeImage = document.querySelector(".cloud1");
  planeImage.style.display = "none";

  document
    .getElementById("search-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const from = document.getElementById("from").value;
      const to = document.getElementById("to").value;
      const date = document.getElementById("date").value;

      console.log(`Searching for flights from ${from} to ${to} on ${date}`);

      planeImage.style.display = "block";
      planeImage.querySelector("img").style.animation = "fly 3s forwards";

      clearSearch();
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

  function clearSearch() {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
  }
});
