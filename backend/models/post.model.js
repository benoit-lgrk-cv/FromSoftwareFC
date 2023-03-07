const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      trim: true,
    },
    author: {
      type: String,
      required: true,
    },
    likers: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("post", postSchema);
