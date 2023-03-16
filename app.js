const connectDb= require('./db/connect')
const express=require('express')
const app=express()
const tasks=require('./routes/tasks')
require('dotenv').config()
app.use(express.json());
app.use(express.static('./public'))

app.get('/hello',(req,res)=>{
    res.send("taskmanager app")
    
})
app.use('/api/v1/tasks',tasks)


const port=3000;
const start=async()=>{
    try {
         
        await connectDb(process.env.MONGO_URI)
        app.listen(port,console.log(`server is lishening on ${port}`))
        
    } catch (error) {
        console.log(error);
    }
}

start()
