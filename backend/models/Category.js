const mongoose=require("mongoose")

const CategorySchema = new mongoose.Schema({
    category: {
        type: String,
        require: true,
        unique:true
   }    
})
module.exports=new mongoose.model("Category",CategorySchema)