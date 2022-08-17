const Category=require("../models/Category")

async function createCategory(req, res) {
    try {
        let result = await Category.create(req.body)
        res.status(201).send({success:"created",result})
    } catch (error) {
res.status(400).send(error.message)
    }
}

async function getCategory(req, res) {
    try {
        let total = await Category.find().count();
        let result = await Category.find()
        res.status(200).send({total,result})
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports={createCategory,getCategory}