const bcrypt = require("bcrypt");
const user = require("../models/UserSchema");

async function createUser(req, res) {
  //////bcrypt password
  let { name, email, mobile, password } = req.body;
  let hash = await bcrypt.hash(password, 10);

  try {
    let result = await user.create({
      name,
      email,
      mobile,
      password: hash,
    });
    res.status(201).send({ success: true, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getUser(req, res) {
  try {
    let result = await user.findById(req.params.id);
    res.status(200).send({ success: true, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getAllUser(req, res) {
  try {
    let result = await user.find();
    res.status(201).send({ success: true, result });
  } catch (error) {
    res.status(400).send(error.messag400e);
  }
}

async function updateUser(req, res) {
  let { name, email, mobile, password } = req.body;
  let hash = await bcrypt.hash(password, 10);

  try {
    let result = await user.findByIdAndUpdate(
      { _id: req.params.id },
      { name, email, mobile, password: hash }
    );
    res.status(201).send({ success: true, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function deleteUser(req, res) {
  try {
    let result = await user.deleteOne({ _id: req.params.id });
    res.status(201).send({ success: true, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = { createUser, getAllUser, getUser, updateUser, deleteUser };
