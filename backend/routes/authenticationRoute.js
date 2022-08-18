const express = require("express");
const { verifyUser } = require("../controller/authenticationController");

const authRouter = express.Router();

authRouter.post("/", verifyUser);
module.exports = authRouter;
