exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("truncate").insert([
        {
          id: 1,
          step_number: 1,
          instructions: "Crack eggs into bowl.",
          recipe_id: 1
        },
        {
          id: 2,
          step_number: 2,
          instructions: "Mix and put into pan.",
          recipe_id: 1
        },
        {
          id: 3,
          step_number: 3,
          instructions: "Bake for 20min at 350F.",
          recipe_id: 1
        },
        { id: 4, step_number: 1, instructions: "Flatten rice.", recipe_id: 2 },
        {
          id: 5,
          step_number: 2,
          instructions: "Add fillings, roll and cut.",
          recipe_id: 2
        },
        { id: 6, step_number: 1, instructions: "Make filling.", recipe_id: 3 },
        {
          id: 7,
          step_number: 2,
          instructions: "Add to pastry, seal and fry.",
          recipe_id: 3
        }
      ]);
    });
};
