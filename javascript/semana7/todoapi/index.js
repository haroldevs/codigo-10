import express from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

const tasks=[]


app.get("/", (req, res) => {
    return res.json({
        message:"hola"
    })
})
//Get: se usa para pedir datos al servidor
app.get("/tasks",(req,res)=>{
    return res.json({
        tasks:tasks
    })
})

//Post: para enviar datos al servidor
app.post("/puerta",(req,res)=>{
    const task=req.body
    tasks.push(task)
    //le voy a responder al cliente
    res.json({
        message:"ok"
    })
})

//PUT:


//DELETE:

app.listen(4000)