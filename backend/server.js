const express = require("express");
const dbconn = require("./DbConn");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes/UserRoutes");
const categoryRouter = require("./routes/categoryRoutes");
const subCategory = require("./routes/subRoute");
const authRouter = require("./routes/authenticationRoute");

const app = express();

dotenv.config();
dbconn();
app.use(cors());
app.use(express.json());
app.use("/user", router);
app.use("/category", categoryRouter);
app.use("/subCategory", subCategory);
app.use("/auth", authRouter);

app.use("/config/secretkey", (req, res) => res.send(process.env.SITE_KEY));
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Working on the ${port}`);
});
