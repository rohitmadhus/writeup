import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: Array, required: true },
    content: { type: String, required: true },
    hashTags: { type: Array, required: false },
    active: { type: Boolean, required: true },
    likes: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
