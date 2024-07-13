const express= require('express');
const { createTodo, updateTodo } = require('./types');
const {todo} = require('./db')
const app = express();
app.use(express.json());

app.post("/todo",async function(req,res){
    const createpayload = req.body;
    const parsedPayload = createTodo.safeParse(createpayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you send the wrong inputs",
        })
        return;
    }
    await todo.create({
        title: createpayload.title,
        description: createpayload.description,
         completed: false
    })
    res.json({
        msg:"Todo create"
    })

})

app.get("/todos",async function(req,res){
    const todos = await todos.find({});
    res.status(200).json(todos);

})

app.put("/completed",async function(req,res){
    const updatepayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatepayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you send the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);  