const {User} = require('../models/Models');
const express = require('express');

const userController = {};

userController.createUser = async (req, res, next) => {
  const { username, password, firstname, lastname } = req.body;
  try {
    if (!username || !password) {
      return next({
        err: 'Error in userController.createUser',
        status: 400,
        message: { err: 'Please fill out all fields: information missing' },
      });
    }
    const newUser = await User.create({
      firstName: firstname,
      lastName: lastname,
      userName: username,
      password: password,
    });
    res.locals.id = newUser._id;
    return next();
  } catch (err) {
    return next({
      err: 'Error in userController.createUser',
      status: 404,
      message: { err: 'Username and password fields must be populated' },
    });
  }
};

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  console.log(username)
  if (username && password) {
    User.findOne({ userName: username }).then((data) => {
      console.log(data); 
      //if no user exists, redirect to signup page
      if (!data) {
        console.log('no data')
        res.redirect('/signup');
        return next();
      }
      //otherwise, check to see if given pasword matches hashed password
      data.comparePassword(password, function (err, matched) {
        //comparePassword returns true or false, if true, go to next middleware with id of user saved to res.locals
        if (matched) {
          res.locals.id = data._id;
          console.log(res.locals.id); 
          return next();
        }
        //if false, redirect to the login-page
        else {
          res.redirect('/');
          next();
          return;
        }
      });
    });
  }
};

module.exports = userController;
