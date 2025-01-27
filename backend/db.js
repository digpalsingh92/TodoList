const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://digpalsingh18901:ASB66CyykBCmdCOU@tododb.vqbh7jd.mongodb.net/todos")
const todosSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todosSchema);
module.exports = {
    todo
}