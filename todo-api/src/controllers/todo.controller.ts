import type { FastifyRequest, FastifyReply } from 'fastify'
import { TodoModel } from '../models/todo.model' 
import type { createTobody, updateTodoBody } from '../types/todo.types'

const sanitize = (str: string) => str.replace(/[<>'"]/g, '')

export const getAllTodos = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const todos = await TodoModel.find()
        reply.send(todos)
    } catch (error) {
        reply.status(500).send({ message: 'something went wrong' })
    }
}

export const createTodo = async (
    request: FastifyRequest<{ Body: createTobody }>,
    reply: FastifyReply
) => {
    try {
        const { title , description } = request.body
        const todo = await TodoModel.create({ title: sanitize(title), description: sanitize(description), iscompleted: false })
        reply.status(201).send(todo)
    } catch (error) {
        reply.status(500).send({ message: 'something went wrong' })
    }
}

export const getTodoById = async (
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
) => {
    try {
        const { id } = request.params
        const todo = await TodoModel.findById(sanitize(id))
        if (!todo) {
            return reply.status(404).send({ message: 'Todo not found' })
        }
        reply.send(todo)
    } catch (error) {
        reply.status(500).send({ message: 'something went wrong' })
    }
}

export const deleteTodo = async (
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
) => {
    try {
        const { id } = request.params
        const todo = await TodoModel.findByIdAndDelete(sanitize(id))
        if (!todo) {
            return reply.status(404).send({ message: 'Todo not found' })
        }
        reply.send({ message: 'Todo deleted successfully' })
    } catch (error) {
        reply.status(500).send({ message: 'something went wrong' })
    }
}

export const updateTodo = async (
    request: FastifyRequest<{ Params: { id: string }; Body: updateTodoBody }>,
    reply: FastifyReply
) => {
    try {
        const { id } = request.params
        const updates = request.body
        const todo = await TodoModel.findByIdAndUpdate(sanitize(id), updates, { new: true })
        if (!todo) {
            return reply.status(404).send({ message: 'Todo not found' })
        }
        reply.send(todo)
    } catch (error) {
        reply.status(500).send({ message: 'something went wrong' })
    }
}
