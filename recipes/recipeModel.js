const db = require("../data/dbConfig.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("recipes")
    .join("ingredients", "recipes.id", "ingredients.recipe_id")
    .where("recipes.id", id)
    .select("ingredients.ingredient_name", "ingredients.ingredient_quantity")
    .then(ingredients => {
      return ingredients;
    });
}

function getInstructions(id) {
  return db("recipes")
    .join("steps", "recipes.id", "steps.recipe_id")
    .where("recipes.id", id)
    .select("steps.step_number", "steps.instructions")
    .then(instructions => {
      return instructions;
    });
}
