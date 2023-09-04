import mongoose from "mongoose";

const tiktokSchema = new mongoose.Schema({
  channel: String,
  description: String,
  song: String,
  url: String,
  likes: Number,
  shares: Number,
  messages: Number,
});

// Collection inside the database
export default mongoose.model("tiktokvideos", tiktokSchema);
