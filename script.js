// Get the dropdown elements
var dropdownToggle = document.getElementById("myNavbarDropdown");
var dropdownMenu = document.querySelector(".my-dropdown-menu");

// Add event listener to the toggle element
dropdownToggle.addEventListener("click", function(e) {
  e.preventDefault();
  dropdownMenu.classList.toggle("active");
});
