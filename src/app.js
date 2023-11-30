const express = require("express");
const movieControllers = require("./controllers/movieControllers");
const userControllers = require("./controllers/userControllers");
const app = express();
app.use(express.json());

const validateMovie = require("./middlewares/validateMovie");
const validateUser = require("./middlewares/validateUser");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUsersById);
app.post("/api/movies", validateMovie, movieControllers.postMovie);
app.post("/api/users", validateUser, userControllers.postUsers);

app.put("/api/movies/:id", validateMovie, movieControllers.updateMovie);
app.put("/api/users/:id", validateUser, userControllers.updateUsers);

module.exports = app;
