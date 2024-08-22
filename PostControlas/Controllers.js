const { post } = require("../Routes/posts");

let posts = [
  { id: 1, name: "teklu" },
  { id: 2, name: "martha" },
  { id: 3, name: "besu" },
  { id: 4, name: "hana" },
];
// Route to get all posts with optional limit
// // limitation http://localhost:3000/api/posts?limit=1
const getPosts = (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
};
// fintering  to get sepcfic api
const getPost = (req, res) => {
  const postID = parseInt(req.params.id);
  // res.status(200).json(posts.filter((posts) => posts.id == postID));
  const post = posts.find((post) => post.id === postID);
  if (!post) {
    res.status(404).json({ msg: `Post with ID ${postID} not found` });
  } else {
    res.status(200).json(post);
  }
};
// creating new post
const createPost = (req, res) => {
  const newpost = {
    id: posts.length + 1,
    title: req.body.title,
  };
  // console.log(req.body);
  if (!newpost.title) {
    // 400 means client err
    res.status(400).json({ msg: "Please enter a title" });
  } else {
    posts.push(newpost);
    // 201 means the post meathod was succesfuly created
    res.status(201).json(posts);
  }
};

// updating the post
const updatePost = (req, res) => {
  let updateID = parseInt(req.params.id);
  const post = posts.find((pos) => pos.id === updateID);
  if (!post) {
    res
      .status(404)
      .json({ msg: `NO files was changed with the id of ${updateID}` });
  } else {
    posts.name = req.body.name;
    res.status(200).json(post);
  }
};
// deleting the post
const deletePost = (req, res) => {
  let deleteID = parseInt(req.params.id);
  let finded = posts.find((post) => post.id == deleteID);
  if (!finded) {
    res.status(404).json({
      msg: `the deleting work was not work with the id of ${deleteID}`,
    });
  } else {
    posts = posts.filter((post) => post.id !== deleteID);
    res.status(200).json(finded);
  }
};
module.exports = {
  createPost,
  deletePost,
  updatePost,
  getPost,
  getPosts,
};
//////////////////////////////////////////////////////
