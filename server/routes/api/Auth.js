const express = require("express");
const router = express.Router();
const cors = require("cors");
const bcrypt = require("bcryptjs");
router.use(cors());
const app = express();

const authData = `${__dirname}` + "/model/authSchema.js";
let User = require(authData);

app.use(express.urlencoded({ extended: true }));

// Validation

const joi = require("@hapi/joi");

const userValidation = data => {
  const userSchema = joi.object({
    name: joi
      .string()
      .min(6)
      .required(),
    email: joi
      .string()
      .min(6)
      .required()
      .email(),
    password: joi
      .string()
      .min(6)
      .required()
  });
  return userSchema.validate(data);
};


router.post("/", async (req, res) => {
  
  //validate data
  const { error } = userValidation(req.body);
  if (error) return res.status(400).send(error);
  const emailExists = await User.findOne({
    email: req.body.email
  });
  if (emailExists) return res.status(400).send("Email already exists");
  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });
  try {
    newUser.save().then(user => res.json({ name: newUser._id }));
  } catch (err) {
    res.status(400).send(err);
  }
});



module.exports = router;
