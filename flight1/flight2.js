// ! adult section
document
  .getElementById("adult-increase")
  .addEventListener("click", function () {
    var count = parseInt(document.getElementById("adults").value);
    document.getElementById("adults").value = count + 1;
  });

document
  .getElementById("adult-decrease")
  .addEventListener("click", function () {
    var count = parseInt(document.getElementById("adults").value);
    if (count > 1) {
      document.getElementById("adults").value = count - 1;
    }
  });

// ! children section
document
  .getElementById("children-increase")
  .addEventListener("click", function () {
    var count = parseInt(document.getElementById("children").value);
    document.getElementById("children").value = count + 1;
  });

document
  .getElementById("children-decrease")
  .addEventListener("click", function () {
    var count = parseInt(document.getElementById("children").value);
    if (count > 0) {
      document.getElementById("children").value = count - 1;
    }
  });

// ! infant section
document
  .getElementById("infant-increase")
  .addEventListener("click", function () {
    var count = parseInt(document.getElementById("infants").value);
    document.getElementById("infants").value = count + 1;
  });

document
  .getElementById("infant-decrease")
  .addEventListener("click", function () {
    var count = parseInt(document.getElementById("infants").value);
    if (count > 0) {
      document.getElementById("infants").value = count - 1;
    }
  });
