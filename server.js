import express from "express";
import mongoose from "mongoose";
import TiktokModel from "./dbModel.js";

// app config
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
// app.use((req, res, next) => {
//   res.setHeader("Allow-Control-Allow-Origin", "*");
//   res.setHeader("Allow-Control-Allow-Headers", "*");
//   next();
// });

// DB config
const connection_url =
  "mongodb+srv://admin:LJPkVoZ1yf4AzxEI@cluster0.hubntdu.mongodb.net/Tiktok?retryWrites=true&w=majority";
mongoose.connect(connection_url).then(() => console.log("Mongodb Connected!"));

// api endpoints
app.get("/hello-world", (req, res) => res.status(200).send("Hell World"));
app.get("/posts", (req, res) => {
  TiktokModel.find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
app.post("/posts", (req, res) => {
  const data = req.body;
  TiktokModel.create(data)
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// listen
app.listen(port, () => console.log(`listening on localhost: ${port}`));
