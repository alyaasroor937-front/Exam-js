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
function createCategoryCard(category) {
  return`
    <div class="category-card bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 border border-emerald-200 hover:border-emerald-400 hover:shadow-md cursor-pointer transition-all group" data-category="${category.name}">
      <div class="flex items-center gap-2.5">
        <div class="text-white w-9 h-9 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
          <i class="fa-solid fa-drumstick-bite"></i>
        </div>
        <div>
          <h3 class="text-sm font-bold text-gray-900">${category.name}</h3>
        </div>
      </div>
    </div>
 ` ;
}
async function getCategories() {
const response = await fetch("https://nutriplan-api.vercel.app/api/meals/categories");
const data = await response.json();
const grid = document.getElementById("categories-grid");
grid.innerHTML = "";

data.results.forEach(function(category){
        grid.innerHTML += createCategoryCard(category);

});
}
getCategories();
getMales();

