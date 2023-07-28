// Get references to HTML elements
const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");

// Initialize count from local storage or 0 if not present
let count = parseInt(localStorage.getItem("count")) || 0;

// Update the count display on page load
updateCountDisplay();

// Function to increment the count
function increment() {
  count += 1;
  updateCountDisplay(); // Update count display
}

// Function to save the count and add it to "Previous entries"
function save() {
  let countDash = count + " - "; // Include a space after the dash
  saveEl.textContent += countDash;
  localStorage.setItem("count", count);
  count = 0; // Recalibrate the count back to 0
  updateCountDisplay(); // Update count display
}

// Function to update the count display
function updateCountDisplay() {
  countEl.innerText = count;
}

window.addEventListener("load", function () {
  count = 0; // Reset the count to 0 every time the page is loaded
  updateCountDisplay();
});
