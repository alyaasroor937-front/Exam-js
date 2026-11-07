/**
 * NutriPlan - Main Entry Point
 * 
 * This is the main entry point for the application.
 * Import your modules and initialize the app here.
 */
function createMealCard(meal) {
  return `
    <div class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group" data-meal-id="${meal.id}">
      <div class="relative h-48 overflow-hidden">
        <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="${meal.thumbnail}" alt="${meal.name}" loading="lazy" />
        <div class="absolute bottom-3 left-3 flex gap-2">
          <span class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700">${meal.category}</span>
          <span class="px-2 py-1 bg-emerald-500 text-xs font-semibold rounded-full text-white">${meal.area}</span>
        </div>
      </div>
      <div class="p-4">
        <h3 class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1">${meal.name}</h3>
        <p class="text-xs text-gray-600 mb-3 line-clamp-2">Delicious recipe to try!</p>
        <div class="flex items-center justify-between text-xs">
          <span class="font-semibold text-gray-900"><i class="fa-solid fa-utensils text-emerald-600 mr-1"></i> ${meal.category}</span>
          <span class="font-semibold text-gray-500"><i class="fa-solid fa-globe text-blue-500 mr-1"></i> ${meal.area}</span>
        </div>
      </div>
    </div>
  `;
}
async function getMales() {
    const response = await fetch("https://nutriplan-api.vercel.app/api/meals/random?count=25");
    const data = await response.json();
    const grid = document.getElementById("recipes-grid");
    grid.innerHTML = "";
    data.results.forEach(function(meal){
        grid.innerHTML +=createMealCard(meal);

    });
}
getMales();

