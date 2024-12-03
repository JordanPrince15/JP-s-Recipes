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