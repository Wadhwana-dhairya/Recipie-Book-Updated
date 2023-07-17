const API_KEY="939c7e8fc72b48809d4d1338e4266abc";
const recipeListEl=document.getElementById("recipe-list");

function displayRecipes(recipes){
    recipeListEl.innerHTML="";
    recipes.forEach((recipe)=>{
        const recipeItemEl=document.createElement("li");
        recipeItemEl.classList.add("recipe-item");
        recipeImageEl=document.createElement("img");
        recipeImageEl.src=recipe.image;
        recipeImageEl.alt="recipe image";
        recipeTitleEl=document.createElement("h2");
        recipeTitleEl.innerText=recipe.title;
        recipeIngredientsEl=document.createElement("p");
        recipeIngredientsEl.innerHTML=`
            <strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient)=>ingredient.original).join(", ")}`;
        
        recipeLinkEl=document.createElement("a");
        recipeLinkEl.href=recipe.sourceUrl;
        recipeLinkEl.innerText="View Recipe";
        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeItemEl.appendChild(recipeLinkEl);
        recipeListEl.appendChild(recipeItemEl);
    });
} 
async function getRecipes() {
    const response=await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
    const data=await response.json();
    return data.recipes;
}


async function init() {
    const recipes=await getRecipes();
    // console.log(recipes);
    displayRecipes(recipes);
}


init()