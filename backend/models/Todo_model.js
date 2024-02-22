import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  inputText: String,
});

const TodoModel = mongoose.model("TodoModel", todoSchema);
export default TodoModel;
