const express = require("express");

const RecipeRouter = require("./recipes/recipeRouter.js");

const server = express();

server.use(express.json());

server.use("/recipes", RecipeRouter);

server.get("/", (req, res) => {
  res.status(200).send(`<h2>It's Working!</h2>`);
});

module.exports = server;
