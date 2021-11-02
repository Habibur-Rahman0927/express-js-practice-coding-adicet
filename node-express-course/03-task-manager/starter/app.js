const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const port = 5000

const tasks = require('./routes/task');
app.use(express.json());

app.use('/api/v1/tasks', tasks)


const start = async () => {
    try {
        await connectDB()
        app.listen(port, console.log(`server is runing on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()








