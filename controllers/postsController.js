const { Op, Sequelize } = require("sequelize");
const { isImage } = require("../lib/utils");
const {Post}  = require('../models/index');


module.exports = {

  getAllPosts :  async(req, res, next) => {
    isImage()
    await Post.findAll({
      attributes: ['id', 'title', 'image', 'CategoryId', 'createdAt'],
      order: [['createdAt', 'DESC']],
    })
    .then(posts=>res.status(201).json(posts))
    .catch(err=>res.status(400).send(err))
  },

  getPost : async (req, res) => {
    const {id} = req.params

    await Post.findOne({
      where:{id},
    })
    .then(post=>{
      post?
        res.status(201).json(post)
      : res.status(400).send(`Record not found`)
    })
    .catch(err=>res.status(400).send(err, 'erros msj')) 
  },

  addPost : async (req, res) => {
    const { title, content, image, CategoryId } = req.body;

    await Post.create({ title, content, image, CategoryId})
    .then(()=>res.sendStatus(204))
    .catch(err=>res.status(400).send(err))
  },

  updatePost : async (req, res) => {
    const {id} = req.params
    const {  title, content, image, CategoryId } = req.body
  
    // Validate if exist Post id
    const existPost = await Post.findOne({
      where:{id},
    })
    
    if (!existPost) {
      res.status(400).send(`Record not found`)
    } else {
      
      // Updated post
      await Post.update({title, content, image, CategoryId}, {where:{id}})
      .then(()=>res.sendStatus(204))
      .catch(err=>res.status(400).send(err))
    }
  },

  removePost : async (req, res) => {
    const { id } = req.params

    await Post.destroy({ where: {id} })
    .then(response=>{
      !response && res.status(400).send(`Record not found`)
      res.sendStatus(204)
    })
    .catch(err=>res.status(400).send(err))
  },


}
