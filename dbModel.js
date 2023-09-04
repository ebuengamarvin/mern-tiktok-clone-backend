import mongoose from "mongoose";

const tiktokSchema = new mongoose.Schema({
  channel: String,
  description: String,
  song: String,
  url: String,
  likes: String,
  shares: String,
  messages: String,
});

// Collection inside the database
export default mongoose.model("tiktokvideos", tiktokSchema);
