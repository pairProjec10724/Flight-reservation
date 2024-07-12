document.addEventListener("DOMContentLoaded", function () {
  var planeImage = document.querySelector(".cloud1");
  planeImage.style.display = "none";

  document
    .getElementById("search-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var from = document.getElementById("from").value;
      var to = document.getElementById("to").value;
      var date = document.getElementById("date").value;
      var adults = document.getElementById("adults").value;
      var children = document.getElementById("children").value;
      var infants = document.getElementById("infants").value;

      console.log(`Searching for flights from ${from} to ${to} on ${date}`);

      planeImage.style.display = "block";
      planeImage.querySelector("img").style.animation = "fly 1s forwards";

      setTimeout(() => {
        search();
        var resultsContain = document.getElementById("results");
        var flightInfo = document.createElement("div");
        flightInfo.classList.add("flight-info");
        flightInfo.innerHTML = `
          <div class="ticket-card">
            <h3>Ready to take off</h3>
            <p><strong>From:</strong> ${from}</p>
            <p><strong>To:</strong> ${to}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Adults:</strong> ${adults}</p>
            <p><strong>Children:</strong> ${children}</p>
            <p><strong>Infants:</strong> ${infants}</p>
            <p>Thank you for your trust!</p>
          </div>
        `;
        resultsContain.appendChild(flightInfo);
      }, 17000);
    });

  function search() {
    var resultsContain = document.getElementById("results");
    resultsContain.innerHTML = "";
  }
});

function ticketflight() {
  window.location.href = "";
}
