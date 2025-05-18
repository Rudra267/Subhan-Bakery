const loadMoreBtn = document.getElementById('loadMoreBtn');
  const hiddenProducts = document.querySelectorAll('.product-card.hidden');

  loadMoreBtn.addEventListener('click', () => {
    hiddenProducts.forEach(card => card.classList.remove('hidden'));
    loadMoreBtn.style.display = 'none';
  });

