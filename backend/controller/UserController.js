const user =require("../models/UserSchema")

async function createUser(req,res){
    try {
        let result=await user.create(req.body)
        res.status(201).send({success:true,result})
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function getUser(req,res){
    try {
        let result=await user.findById(req.params.id)
        res.status(200).send({success:true,result})
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function getAllUser(req,res){
    try {
        let result = await user.find()
        res.status(201).send({success:true,result})
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function updateUser(req,res){
    try {
        let result=await user.findByIdAndUpdate({_id:req.params.id},req.body)
        res.status(201).send({success:true,result})
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function deleteUser(req,res){
    try {
        let result=await user.deleteOne({_id:req.params.id})
        res.status(201).send({success:true,result})
    } catch (error) {
        res.status(400).send(error.message)
    }
}


 
 

module.exports={createUser,getAllUser,getUser,updateUser,deleteUser}