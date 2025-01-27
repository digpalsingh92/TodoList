const express = require("express");
const { createTodo } = require("./types");
const { ParseStatus } = require("zod");
const { todo } = require("./db");

const app = express();

app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedpayload = createTodo.safeParse(createPayload);
  if (!parsedpayload.success) {
    res.status(411).json({
      msg: "You sended wrong inputs",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  })

  res.json({
    msg: "TODO created"
  })
});
app.get("/todos", async (req, res) => {
     const Todos = await todo.find({});
        res.json({
            Todos
        })
});
app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
  const parsedpayload = createTodo.safeParse(updatePayload);
    if(!parsedpayload.success) {
        res.status(411).json({
            msg: "You sended The wrong inputs"
        })
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "TODO marked as compeleted"
    })

});


app.listen(3000, (req,res) => {
    console.log("Server is running on PORT 3000");
})
