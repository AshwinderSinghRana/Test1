const express=require("express")
const dotenv=require("dotenv")
const router=require("./routes/UserRoutes")
const dbconn = require("./DbConn")
const cors =require("cors")


const app=express()

dotenv.config()
dbconn()
app.use(cors())
app.use(express.json())
app.use("/user",router)
const port =process.env.PORT
app.listen(port,()=>{
    console.log(`Working on the ${port}`)
})