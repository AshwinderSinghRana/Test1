
const SubCategorys=require("../models/SubCategory")

async function createSub(req, res) {
    try {
        let result = await SubCategorys.create(req.body)
        res.status(200).send({success:"created",result})
    } catch (error) {
        res.status(400).send(error.message)
    }
}
async function getSub(req, res) {
    try {
        let total = await SubCategorys.find().count();
        let result = await SubCategorys.find().populate("categoryFK")
        res.status(201).send({total,result})
    } catch (error) {
        
    }
}
module.exports={createSub,getSub}