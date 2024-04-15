const express = require("express");
const {
  getTodo,
  getTodos,
  createTodo,
  deleteTodo,
} = require("../controller/todoController");

const router = express.Router();

router.get("/", getTodos);
router.get("/:id", getTodo);
router.delete("/:id", deleteTodo);
router.post("/create", createTodo);

module.exports = router;
