const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    discussionId: String,
    text: String,
    user: String,
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Comment ||
  mongoose.model("Comment", commentSchema);