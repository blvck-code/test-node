const Todo = require("../models/todoModel");
const mongoose = require("mongoose");

// LIST ALL TODOS
const getTodos = async (req, res) => {
  const todos = await Todo.find({}).sort({ createdAt: -1 });
  console.log("Todo list ==>>", todos);
  res.status(200).json(todos);
};

// SINGLE TODO DETAIL
const getTodo = async (req, res) => {
  const { id } = req.params;

  // Validates if it's a Mongo ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such todo item" });
  }

  const todo = await Todo.findById(id);

  if (!todo) {
    res.status(404).json({ error: "Todo item not found" });
  }
  res.status(200).json(todo);
};

// CREATE  TODO
const createTodo = async (req, res) => {
  const { title, description, isComplete } = req.body;

  try {
    const todo = await Todo.create({ title, description, isComplete });
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ error: "New todo could not be added" });
  }
};

// DELETE TODOS
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  console.log("Delete id ==>>> ", id);

  // Validates if it's a Mongo ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such todo" });
  }

  const todo = await Todo.findByIdAndDelete({ _id: id });

  if (!todo) {
    res.status(400).json({ error: "No such todo " });
  }

  console.log("Delete todo ==>>> ", todo);

  res.status(200).json(todo);
};

module.exports = {
  getTodo,
  getTodos,
  createTodo,
  deleteTodo,
};
