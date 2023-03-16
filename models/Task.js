const mongoose=require('mongoose')

const TaskSchema=new mongoose.Schema({
name:{
    type:String,
    required:[true,' must provide some name'],
    trim:true,
    maxlength:[20,'name must me less than 20']
}
,completed:{
    type:Boolean,
    default:false
}
     
})
module.exports=mongoose.model('Task',TaskSchema)