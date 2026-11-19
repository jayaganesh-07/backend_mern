import mongoose from 'mongoose'


const schemas = mongoose.Schema({
    username:String,
    useremail:String,
    userpassword:String

},{timestamp:true})

const dataModels = mongoose.model("storage",schemas)

export default dataModels