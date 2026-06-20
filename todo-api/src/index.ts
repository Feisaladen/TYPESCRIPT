import Fastify from 'fastify'
import mongoose from  'mongoose' 
 import { todoRoutes} from './routes/todo.routes'
const app = Fastify() // initiate 

app.register(todoRoutes)

const start = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/todo-api')
        console.log('Connected to Mongodb')

        await app.listen({ port: 3000}) 
        console.log('server running  on port 3000')
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}
start() 