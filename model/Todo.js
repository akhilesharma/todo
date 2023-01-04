const mongoose=require("mongoose")

const todoSchema = new mongoose.Schema({
    title:{
        type: String
    },
    desc: {
        type:String
    }
})

const todo=new mongoose.model("todo",todoSchema)

module.exports =todo