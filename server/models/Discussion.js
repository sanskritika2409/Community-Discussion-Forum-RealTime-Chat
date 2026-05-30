
const mongoose = require("mongoose");

const discussionSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    createdBy: String,
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Discussion ||
  mongoose.model("Discussion", discussionSchema);