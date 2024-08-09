const todoController = require('../controllers/todoController');
const express = require('express');

const router = express.Router();

router.post('/todos', todoController.myTodos);
router.get('/getTodo',todoController.getTodo)
router.post('/updateTodo/:id',todoController.updateTodo)
router.post('/deleteTodo/:id',todoController.deleteTodo)

module.exports = router;