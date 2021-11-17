var express = require('express');
var router = express.Router();
const { getAllPosts, getPost, updatePost, addPost, removePost } = require("../controllers/postsController")

router.route('/')
  .get( getAllPosts  )
  .post(  addPost )

router.route('/:id')
  .get(getPost)
  .patch( updatePost  )
  .delete(  removePost  )

module.exports = router;
