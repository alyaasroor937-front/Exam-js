/**
 * NutriPlan - Main Entry Point
 * 
 * This is the main entry point for the application.
 * Import your modules and initialize the app here.
 */
async function getMales() {
    const response = await fetch("https://nutriplan-api.vercel.app/api/meals/random?count=25");
    const data = await response.json();
    console.log(data);
}
getMales();

