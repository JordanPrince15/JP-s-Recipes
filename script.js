function filterRecipes() {
    const query = document.getElementById('search').value.toLowerCase();
    const recipes = document.querySelectorAll('.recipe-card');
    recipes.forEach(recipe => {
      const title = recipe.querySelector('h3').textContent.toLowerCase();
      if (title.includes(query)) {
        recipe.style.display = "block";
      } else {
        recipe.style.display = "none";
      }
    });
  }

// script.js
let currentSlide = 0;

function showNextSlide() {
  const slides = document.querySelectorAll('.slide');
  slides[currentSlide].style.transform = 'translateX(-100%)'; // Move the current slide off-screen
  currentSlide = (currentSlide + 1) % slides.length; // Update to the next slide
  slides[currentSlide].style.transform = 'translateX(0)'; // Move the next slide on-screen
}

// Change slides every 5 seconds
setInterval(showNextSlide, 5000);
