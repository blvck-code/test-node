const Todo = require("../models/todoModel");
const mongoose = require("mongoose");

const getTodos = async (req, res) => {
  const todos = await Todo.find({}).sort({ createdAt: -1 });
  res.status(200).json(todos);
};

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

const createTodo = async (req, res) => {
  const { title, description, isComplete } = req.body;

  try {
    const todo = await Todo.create({ title, description, isComplete });
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ error: "New todo could not be added" });
  }
};

module.exports = {
  getTodo,
  getTodos,
  createTodo,
};
