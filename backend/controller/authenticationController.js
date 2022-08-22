const User = require("../models/UserSchema");
const bcrypt = require("bcrypt");

/////verify user email and password
async function verifyUser(req, res) {
  let { email, password } = req.body;
  try {
    let result = await User.findOne({
      email,
    });
    if (!result) {
      res.status(400).send("User not found");
    } else {
      let compare = await bcrypt.compare(password, result.password);
      if (!compare) {
        res.status(400).send("Invalid password");
      } else {
        res
          .status(200)
          .send({ status: 1234, message: "Login succcesfull", result });
      }
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}
module.exports = { verifyUser };
