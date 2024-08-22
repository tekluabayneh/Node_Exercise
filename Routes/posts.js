const express = require("express");
const route = express.Router();
const {
  createPost,
  deletePost,
  updatePost,
  getPost,
  getPosts,
} = require("../PostControlas/Controllers");

// this is the middelware also

route.get("/", getPosts);

// Route to get a post by ID
route.get("/:id", getPost);
/// CRUD methos
route.post("/", createPost);

// updating the post
route.put("/:id", updatePost);

// deleting post
route.delete("/:id", deletePost);

module.exports = route;
