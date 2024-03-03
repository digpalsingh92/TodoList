import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import todosModel from "./models/Todo_model.js";

const app = express();

app.use(express.json());
app.use(cors());

// Get all todos
app.get("/todo", (req, res) => {
  todosModel
    .find()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

// Add a new todo
app.post("/add", async (req, res) => {
  const { inputText } = req.body;
  try {
    const newTodo = new todosModel({ inputText });
    await newTodo.save();
    res.status(201).send("Todo added successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error adding todo");
  }
});

// Delete a todo
app.delete("/todo/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await todosModel.findByIdAndDelete(id);
    res.status(200).send("Todo deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error deleting todo");
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
