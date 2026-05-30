const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    room: String,
    sender: String,
    text: String,
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Message ||
  mongoose.model("Message", messageSchema);