const express=require("express")
const dbconn = require("./DbConn")
const cors =require("cors")
const dotenv=require("dotenv")
const router=require("./routes/UserRoutes")
const categoryRouter = require("./routes/categoryRoutes")
const subCategory = require("./routes/subRoute")


const app=express()

dotenv.config()
dbconn()
app.use(cors())
app.use(express.json())
app.use("/user", router)
app.use("/category", categoryRouter)
app.use("/subCategory",subCategory)
const port =process.env.PORT
app.listen(port,()=>{
    console.log(`Working on the ${port}`)
})