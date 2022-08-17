const express=require("express")
const {createSub,getSub}=require("../controller/SubCategoryController")

const subCategory = express.Router()

subCategory.post("/", createSub)
subCategory.get("/",getSub)

module.exports=subCategory