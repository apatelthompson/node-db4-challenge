exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "Frittatas" },
        { recipe_name: "Sushi" },
        { recipe_name: "Samosas" }
      ]);
    });
};
