import fastify from 'fastify' 
 
const app = fastify()

app.get('/', async (request, reply) => {
    return { message : 'todo API is running!'}
})
const start = async () => {
    try {
        await app.listen({port : 3000})
        console.log('server is running')
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
} 
start ()