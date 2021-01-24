const mongoose = require("mongoose");
const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.home = async (req, res) => {
  try {
    console.log("Hello")
    res.render("index");
  } catch(error) {
    console.log("error")
  }

}

exports.register = async (req, res) => {
  try {
    console.log(req.body);

    res.status(200).json({
      message: "OK"
    })
  } catch (error) {
    console.log(error)
  }
}