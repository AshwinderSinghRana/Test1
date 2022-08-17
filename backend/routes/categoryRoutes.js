const express=require("express")
const{createCategory,getCategory}=require("../controller/CategoryController")

const categoryRouter = express.Router()

categoryRouter.post("/", createCategory)
categoryRouter.get("/", getCategory)

module.exports=categoryRouter