exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        {
          id: 1,
          ingredient_name: "potatoes",
          ingredient_quantity: "1 cup",
          recipe_id: 1
        },
        {
          id: 2,
          ingredient_name: "eggs",
          ingredient_quantity: "6",
          recipe_id: 1
        },
        {
          id: 3,
          ingredient_name: "rice",
          ingredient_quantity: "2 cups",
          recipe_id: 2
        }
      ]);
    });
};
