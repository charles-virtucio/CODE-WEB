var cartModal = document.getElementById('cartModal');
var closeButton = document.querySelector('.modal-close');
var cartContent = document.getElementById('cartContent');
var conShopButton = document.getElementById('conshop');
var cartModalOverlay = document.getElementById('cartModalOverlay');


function showModal() {
  cartModal.style.display = 'block';
  cartModalOverlay.style.display = 'block';
  cartContent.innerHTML = '<iframe src="cart.html" style="width: 100%; height: 400px; border: none;"></iframe>';
}


function hideModal() {
  cartModal.style.display = 'none';
  cartModalOverlay.style.display = 'none';
}


closeButton.addEventListener('click', hideModal);


conShopButton.addEventListener('click', hideModal);


var cartLink = document.querySelector('.nav-link[data-bs-target="#cartModal"]');
cartLink.addEventListener('click', showModal);