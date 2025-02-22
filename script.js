// Get the popup and close button
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");

// Close the popup when the close button is clicked
closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
});
