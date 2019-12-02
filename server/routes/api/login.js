const express = require("express");
const router = express.Router();
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
router.use(cors());
const app = express();
const tokenSecret = "cbdhcbbdchbueycbiureicl";

const loginData = `${__dirname}` + "/model/loginSchema.js";
let User = require(loginData);

app.use(express.urlencoded({ extended: true }));

// Validation

const joi = require("@hapi/joi");

const loginValidation = data => {
  const loginSchema = joi.object({
    email: joi
      .string()
      .min(6)
      .required()
      .email(),
    password: joi
      .string()
      .allow("")
      .min(6)
      .required()
  });
  return loginSchema.validate(data);
};

router.post("/", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error);

  //checking if email exists
  const emailExists = await User.find({
    email: req.body.email
  });

  if (!emailExists) return res.status(400).send("Email doesn't exist");

  //checking is password is correct
  const validPassword = await bcrypt.compare(req.body.password, User.password);
  if (!validPassword) return res.status(400).send(" Password doesn't exist");

  // create jwt token and assign it

  const token = jwt.sign({ _id: User._id }, tokenSecret);
  res.header("auth-token", token).send(token);
});

module.exports = router;
