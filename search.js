function handleSearch() {
  var searchInput = document.querySelector('.search-input');
  var searchTerm = searchInput.value.toLowerCase();
  var productTitles = document.querySelectorAll('.product-title');

  // Clear previous search highlights
  productTitles.forEach(function(title) {
    title.style.backgroundColor = '';
  });

  
  for (var i = 0; i < productTitles.length; i++) {
    var productTitle = productTitles[i].textContent.toLowerCase();

    if (productTitle.includes(searchTerm)) {
      // Found a match, highlight the matched product title
      productTitles[i].style.backgroundColor = 'yellow';

      // Scroll to the matched product title
      productTitles[i].scrollIntoView({ behavior: 'smooth' });

      // Clear the search input
      searchInput.value = '';
      return; 
    }
  }

  // If no matches were found, display a message
  alert('NO PRODUCTS FOUND!');

  // Clear the search input
  searchInput.value = '';
}

var searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', handleSearch);
