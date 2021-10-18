import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../constants/data.js";
import Post from "../models/post-model.js";

const postRouter = express.Router();

postRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const posts = await Post.find({});
    res.send(posts);
  })
);

postRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (post) {
      res.send(post);
    } else {
      res.status(404).send({ message: "Post not found" });
    }
  })
);

postRouter.post(
  "/create",
  expressAsyncHandler(async (req, res) => {
    const post = await Post({
      title: req.body.title,
      image: req.body.image,
      category: req.body.category,
      content: req.body.content,
      hashTags: req.body.hashTags,
      active: req.body.active,
      likes: req.body.likes,
    });

    const craetedPost = await post.save();

    res.send({
      _id: craetedPost._id,
      title: craetedPost.title,
      image: craetedPost.image,
      category: craetedPost.categort,
      content: craetedPost.content,
      hashTags: craetedPost.hashTags,
      active: craetedPost.active,
      likes: craetedPost.likes,
    });
  })
);

export default postRouter;
