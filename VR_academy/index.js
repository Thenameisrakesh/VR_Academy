
  document.querySelectorAll(".login a, .create a, .contact a, .about a").forEach(button => {
    button.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the link from navigating
      alert("Coming soon!");
    });
  });
