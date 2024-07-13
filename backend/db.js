const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://lreddipi:Hu7tPLEW47Kkv8EQ@mangodb01.hblpczg.mongodb.net/todo")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
};