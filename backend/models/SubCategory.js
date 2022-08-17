const mongoose=require("mongoose")

const SubCategory = mongoose.Schema({
    subCategory: {
        type: String,
        unique: true,
        required:true
    },
    categoryFK: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category"
    }
})

module.exports=new mongoose.model("SubCategorys",SubCategory)