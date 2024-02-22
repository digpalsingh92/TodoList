import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import todosModel from "./models/Todo_model.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/todo", (req, res) => {
  todosModel
    .find()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.post("/add", async (req, res) => {
  const { inputText } = req.body;
  try {
    const newTodo = new todosModel({ inputText });
    await newTodo.save();
  } catch (error) {
    console.log(error);
  }
});

mongoose
  .connect("mongodb://localhost:27017/todoDB")
  .then(() => {
    console.log("Mongo DB connected successfully.");
    app.listen(5000, () => {
      console.log(`Server is running on Port 5000.`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
