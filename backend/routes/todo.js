const express = require("express");
const {
  getTodo,
  getTodos,
  createTodo,
} = require("../controller/todoController");

const router = express.Router();

router.get("/todo", getTodos);
router.get("/todo/:id", getTodo);
router.post("/todo/create", createTodo);

module.exports = router;
