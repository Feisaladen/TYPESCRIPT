import mongoose from 'mongoose'
import { Todo } from '../types/todo.types' 

const todoSchema = new mongoose.Schema <Todo> ({
    title : { type : String, required : true },
    description : { type : String, required : true },
    iscompleted : { type : Boolean, default : false },
})

export const TodoModel = mongoose.model<Todo>( 'Todo' , todoSchema)