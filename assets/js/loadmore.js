  document.addEventListener("DOMContentLoaded", function () {
    const productCards = document.querySelectorAll(".product-card");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    let visibleCount = 6; // Start with first 6
    const increment = 6;

    // Initially hide all cards beyond the first 6
    productCards.forEach((card, index) => {
      if (index >= visibleCount) {
        card.classList.add("hidden");
      }
    });

    loadMoreBtn.addEventListener("click", function () {
      let hiddenCards = Array.from(productCards).filter(card => card.classList.contains("hidden"));
      hiddenCards.slice(0, increment).forEach(card => {
        card.classList.remove("hidden");
      });

      // If no more hidden cards, hide the button
      if (document.querySelectorAll(".product-card.hidden").length === 0) {
        loadMoreBtn.style.display = "none";
      }
    });


  });