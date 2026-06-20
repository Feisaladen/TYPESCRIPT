import type { FastifyInstance } from 'fastify'
import {
    getAllTodos,
    createTodo,
    getTodoById,
    deleteTodo,
    updateTodo
} from '../controllers/todo.controller'

export const todoRoutes = async (app: FastifyInstance) => {
    app.get('/todos', getAllTodos)
    app.post('/todos', createTodo)
    app.get('/todos/:id', getTodoById)
    app.put('/todos/:id', updateTodo)
    app.delete('/todos/:id', deleteTodo)
}
