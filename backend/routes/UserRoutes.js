const express=require("express")
const {createUser,getUser,getAllUser,updateUser,deleteUser}=require("../controller/UserController")

const router=express.Router()

router.post("/new",createUser)
router.get("/:id",getUser)
router.get("/",getAllUser)
router.put("/:id",updateUser)
router.delete("/:id", deleteUser)


module.exports=router