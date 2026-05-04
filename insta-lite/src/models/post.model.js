// const mongoose = require("mongoose")
// const postSchema = new mongoose.Schema({
//     image: String,
//     caption: String,
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "users"
//     }
// })

// const postModal = mongoose.model("post", postSchema)
// module.exports = postModal

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  image: String,
  caption: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  }
});

const postModel = mongoose.model("post", postSchema); // ✅ fixed name

module.exports = postModel;