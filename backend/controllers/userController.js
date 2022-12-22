const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

/* USER SIGNUP */
const userSignup = async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;
  console.log(req.body);
  try {
    bcrypt.hash(password, 7, async function (err, hash) {
      if (err) {
        res.send({ err: "Error" });
      } else {
        const savedUser = User.create({
          firstName,
          lastName,
          email,
          phone,
          password: hash,
        });
        res.status(201).json({
          message: "Signup successful",
        });
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

/* USER LOGIN */
const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (err) {
          res.status(401).json("Password doesn't match !");
        }
        if (result) {
          const accessToken = jwt.sign(
            {
              id: user._id,
              isAdmin: user.isAdmin,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "3d",
            }
          );
          res.send({ msg: "Login Successfully", token: accessToken });
        }

        
      });
    } else {
      res.status(401).json("Password doesn't match !");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

/* GET ALL USERS */

const getUserCount = async (req, res) => {
  console.log("cc");
  try {
    const users = await User.count();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getUsers = async (req, res) => {
  const page = req.params.Page;
  const skip = +page * 5 - 5;

  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

/* GET USER BY ID */
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

/* DELETE USERS */

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json("User has been deleted...!");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  userSignup,
  userLogin,
  getUsers,
  getUserById,
  deleteUser,
  getUserCount,
};
